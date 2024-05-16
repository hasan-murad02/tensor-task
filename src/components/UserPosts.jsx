import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import {notification} from 'antd';

export default function UserPosts() {
    const { id } = useParams();
    const [Allposts, setAllposts] = useState([]);
    const [SpliceNumber, setSpliceNumber] = useState(5);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
            const data = await response.json();
            setAllposts(data);
        }

        fetchData();
    }, [])

    const handleMore = () => {
        if (SpliceNumber < Allposts.length) {
            setSpliceNumber(SpliceNumber + 5);
        }
        else {
            notification.info({
                message: 'No More Posts',
                description: 'No more posts to show',
                placement: 'topRight'
            })
        }
    }

    const handlePrevious = () => {
        if (SpliceNumber > 5) {
            setSpliceNumber(SpliceNumber - 5);
        }
        else {
            notification.info({
                message: 'No Previous Posts',
                description: 'No previous posts to show',
                placement: 'topRight'
            })
        }
    }

    return (
        <>
            <div className='w-screen'>
                <h1 className='flex justify-center text-[2rem] font-semibold mg-4'>User Posts</h1>
            </div>
            <div class="flex flex-col">
                <div class="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
                    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div class="overflow-hidden">
                            <table class="min-w-full">
                                <thead class="bg-white border-b">
                                    <tr>
                                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Post Title
                                        </th>
                                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Post Body
                                        </th>
                                    </tr>
                                </thead>
                                <tbody class="bg-white divide-y">
                                    {Allposts.slice(0, SpliceNumber).map((post, index) => {
                                        return (
                                            <tr key={index}>
                                                <td class="px-6 py-4 whitespace-nowrap">
                                                    {post.title}
                                                </td>
                                                <td class="px-6 py-4 whitespace-nowrap">
                                                    {post.body}
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="w-screen flex justify-between">
                    <div>
                        <button onClick={handlePrevious} className='ml-10 mt-4 p-2 bg-rose-400 border rounded-2xl hover:bg-rose-500'> Load Previous </button>
                    </div>
                    <div>
                        <button onClick={handleMore} className='mr-10 mt-4 p-2 bg-rose-400 border rounded-2xl hover:bg-rose-500'> Load More </button>
                    </div>
                </div>
            </div>
        </>
    )
}
