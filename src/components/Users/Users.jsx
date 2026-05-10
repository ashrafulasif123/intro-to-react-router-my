import { useLoaderData } from "react-router";
import User from "../User/User";

const Users = () => {
    const users = useLoaderData()
   
    return (
        <div>
            <h1 className="text-xl">Total Users: {users.length}</h1>
            <div className="grid grid-cols-5 gap-3">
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;