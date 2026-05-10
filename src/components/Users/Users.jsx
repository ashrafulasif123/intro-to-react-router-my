import { useLoaderData } from "react-router";

const Users = () => {
    const users = useLoaderData()
    console.log(users)
    return (
        <div>
            <h1 className="text-xl">This is Users</h1>
        </div>
    );
};

export default Users;