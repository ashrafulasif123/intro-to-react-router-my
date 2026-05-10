import { use } from "react";


const Posts = ({ postsPromise }) => {
    const posts = use(postsPromise)
    console.log(posts)

    return (
        <div>
            <h1 className="text-xl">This is Posts</h1>
        </div>
    );
};

export default Posts;