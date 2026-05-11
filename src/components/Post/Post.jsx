import { Suspense, useState } from "react";
import PostDetails from "../PostDetails/PostDetails";

const Post = ({ post }) => {
    const { userId, title } = post

    const [commentView, setCommentView] = useState(false)

    const fetchingPost = async () => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`)
        return res.json()
    }

    const postPromise = fetchingPost()

    return (
        <div className="flex flex-col bg-white shadow-lg rounded-2xl p-6 border border-gray-200 mt-10 relative">

            <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-800">
                    Comment
                </h2>

                <span className="bg-purple-100 text-purple-600 text-sm px-3 py-1 rounded-full">
                    {userId}
                </span>
            </div>

            <div className="space-y-4 text-gray-700 mb-4">
                <div>
                    <p className="text-sm text-gray-500">Title</p>
                    <h3 className="font-semibold">
                        {title}
                    </h3>
                </div>
            </div>

            <button onClick={() => setCommentView(!commentView)} className="btn btn-sm btn-secondary mt-auto">{commentView ? <p className="text-blue-800">Hide</p> : 'Show'} Comment</button>

            {
                commentView && <Suspense fallback={<div className="absolute inset-0 flex justify-center items-center">
                    <span className="loading loading-bars loading-lg"></span>
                </div>}>
                    <PostDetails postPromise={postPromise}></PostDetails>
                </Suspense>
            }

        </div>
    );
};

export default Post;