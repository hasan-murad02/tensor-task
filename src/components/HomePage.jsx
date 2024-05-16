import React, { useState, useEffect } from 'react'
import UserPosts from './UserPosts';

export default function HomePage() {
    const [OriginalUsers, setOriginalUsers] = useState([]);
    const [Users, setUsers] = useState([]);
    const [SearchedUser, setSearchedUser] = useState("");
    const [ShowOptions, setShowOptions] = useState(false);

    useEffect(() => {
        if (SearchedUser === "") {
            setUsers(OriginalUsers);
            return;
        }
        const filteredUsers = OriginalUsers.filter((user) => {
            return user.name.toLowerCase().includes(SearchedUser.toLowerCase());
        });
        setUsers(filteredUsers);
    }, [SearchedUser])

    const handleSearch = (e) => {
        setSearchedUser(e.target.value);
    }


    useEffect(() => {

        async function fetchData() {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
            data.sort((a, b) => a.name.localeCompare(b.name));
            setUsers(data);
            setOriginalUsers(data);
        }

        fetchData();

    }, [])

    const handlePost = () => {
        window.open(`Userposts/${Users[0].id}`, '_blank');
    }

    const handleToDo = () => {
        window.open(`Usertodo/${Users[0].id}`, '_blank');
    }

    return (
        <>
            <h1 className='flex justify-center text-[2rem] font-semibold mg-4'>Tensor Full-Stack Task</h1>

            <div className='w-screen'>
                <input type="text" className='w-[90%] bg-rose-200 border-rose-400 rounded-2xl ml-[5%] mr-[5%] min-h-10 p-2' placeholder='Enter UserName' onChange={handleSearch} />
            </div>

            <div class="flex flex-col">
                <div class="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
                    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div class="overflow-hidden">
                            <table class="min-w-full">
                                <thead class="bg-white border-b">
                                    <tr>
                                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            User ID
                                        </th>
                                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Name
                                        </th>
                                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Username
                                        </th>
                                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Email
                                        </th>
                                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Phone Number
                                        </th>
                                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Company Name
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Users?.length === 1 ? (
                                        Users?.map((user, index) => (
                                            <tr
                                                className="bg-red-500 border-b cursor-pointer"
                                                onClick={() => {
                                                    setUsers(OriginalUsers);
                                                    setShowOptions(false);
                                                }}
                                            >
                                                <td className="text-sm font-medium text-gray-900 px-6 py-4 whitespace-nowrap">
                                                    {index + 1}
                                                </td>
                                                <td className="text-sm font-medium text-gray-900 px-6 py-4 whitespace-nowrap">
                                                    {user.name}
                                                </td>
                                                <td className="text-sm font-medium text-gray-900 px-6 py-4 whitespace-nowrap">
                                                    {user.username}
                                                </td>
                                                <td className="text-sm font-medium text-gray-900 px-6 py-4 whitespace-nowrap">
                                                    {user.email}
                                                </td>
                                                <td className="text-sm font-medium text-gray-900 px-6 py-4 whitespace-nowrap">
                                                    {user.phone}
                                                </td>
                                                <td className="text-sm font-medium text-gray-900 px-6 py-4 whitespace-nowrap">
                                                    {user.company.name}
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        Users?.map((user, index) => (
                                            <tr
                                                className="bg-white border-b cursor-pointer"
                                                onClick={() => {
                                                    if (Users.length !== 1) {
                                                        setUsers([user]);
                                                    } else {
                                                        setUsers(OriginalUsers);
                                                    }
                                                    setShowOptions(true);
                                                }}
                                            >
                                                <td className="text-sm font-medium text-gray-900 px-6 py-4 whitespace-nowrap">
                                                    {index + 1}
                                                </td>
                                                <td className="text-sm font-medium text-gray-900 px-6 py-4 whitespace-nowrap">
                                                    {user.name}
                                                </td>
                                                <td className="text-sm font-medium text-gray-900 px-6 py-4 whitespace-nowrap">
                                                    {user.username}
                                                </td>
                                                <td className="text-sm font-medium text-gray-900 px-6 py-4 whitespace-nowrap">
                                                    {user.email}
                                                </td>
                                                <td className="text-sm font-medium text-gray-900 px-6 py-4 whitespace-nowrap">
                                                    {user.phone}
                                                </td>
                                                <td className="text-sm font-medium text-gray-900 px-6 py-4 whitespace-nowrap">
                                                    {user.company.name}
                                                </td>
                                            </tr>
                                        ))
                                    )}

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            {ShowOptions && <div className="w-screen flex justify-between">
                <div>
                    <button onClick={handlePost} className='ml-10 mt-4 p-2 bg-rose-400 border rounded-2xl hover:bg-rose-500'> User Posts </button>
                </div>
                <div>
                    <button onClick={handleToDo} className='mr-10 mt-4 p-2 bg-rose-400 border rounded-2xl hover:bg-rose-500'> User To Dos </button>
                </div>
            </div>}

        </>
    )
}
