import { use } from "react";

const PostDetails = ({ postPromise }) => {
    const { userId, title } = use(postPromise)
    console.log(title)

    return (
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-2xl p-6 border border-gray-200 mt-10">

            <div className="flex items-center justify-between mb-4">
                <span className="bg-purple-100 text-purple-600 text-sm px-3 py-1 rounded-full">
                    {userId}
                </span>
            </div>
            <div>
                <p className="text-sm text-gray-500">Comment Body</p>
                <p className="font-medium">
                    {title}
                </p>
            </div>
        </div>
    );
};

export default PostDetails;