import { useLoaderData, useNavigate } from "react-router";

const UserDetailsPage = () => {
    const { id, name, address, company, email } = useLoaderData()

    /** useParams() hook */
    // const params = useParams()
    // console.log(params)

    const navigate = useNavigate()

    return (
        <div class="max-w-sm mx-auto bg-white shadow-lg rounded-2xl p-6 border border-gray-200 mt-10">

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
                    <p class="text-sm text-gray-500">Email</p>
                    <h3 class="font-semibold">{email}</h3>
                </div>

                <div>
                    <p class="text-sm text-gray-500">City</p>
                    <h3 class="font-semibold">{address.city}</h3>
                </div>

                <div>
                    <p class="text-sm text-gray-500">Street</p>
                    <h3 class="font-semibold">{address.street}</h3>
                </div>

                <div>
                    <p class="text-sm text-gray-500">Company</p>
                    <h3 class="font-semibold">{company.name}</h3>
                </div>

            </div>

            <button onClick={() => navigate(-1)} className="btn btn-accent btn-sm block mx-auto mt-5">Go Back(useNavigate() )</button>
        </div>
    );
};

export default UserDetailsPage;