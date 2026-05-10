import { use } from "react";
import Post from "../Post/Post";


const Posts = ({ postsPromise }) => {
    const posts = use(postsPromise)
    

    return (
        <div>
            <h1 className="text-xl">This is Posts</h1>
            <div className="grid grid-cols-6 gap-3">
                {posts.map(post => <Post key={post.id} post={post}></Post>)}
            </div>
        </div>
    );
};

export default Posts;