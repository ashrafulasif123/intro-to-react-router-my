import { useLoaderData } from "react-router";

const Comments = () => {
    const comments = useLoaderData()
    console.log(comments)
    return (
        <div>

        </div>
    );
};

export default Comments;