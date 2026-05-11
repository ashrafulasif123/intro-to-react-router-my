import { useState } from "react";
import { Link, Navigate, NavLink, useNavigate } from "react-router";

const User = ({ user }) => {
    const { id, name, company } = user

    const [visitHome, setVisitHome] = useState(false)
    const navigate = useNavigate()
    if (visitHome) {
        return <Navigate to="/" />
    }

    return (
        <div class="bg-white shadow-lg rounded-2xl p-6 border border-gray-200">

            <div class="flex items-center justify-between mb-4">
                <h2 class="text-xl font-bold text-gray-800">User Info</h2>
                <span class="bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full">
                    {id}
                </span>
            </div>

            <div class="space-y-3 text-gray-700">

                <div>
                    <p class="text-sm text-gray-500">Name</p>
                    <h3 class="font-semibold">{name}</h3>
                </div>
                <div>
                    <p class="text-sm text-gray-500">Company</p>
                    <h3 class="font-semibold">{company.name}</h3>
                </div>
            </div>

            <Link to={`/users/${id}`}>
                <button className="btn btn-info btn-sm block mx-auto mt-5">Details(Link to)</button>
            </Link>

            <button onClick={() => navigate(`/users/${id}`)} className="btn btn-primary btn-sm block mx-auto mt-5">Details(useNavigate())</button>

            <button className="btn btn-sm btn-info" onClick={() => setVisitHome(true)}>Visit Home</button>

        </div>
    );
};

export default User;