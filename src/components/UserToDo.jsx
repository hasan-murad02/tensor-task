import React, { useState, useEffect } from 'react'

export default function UserToDo() {

    const [ToDos, setToDos] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/1/todos`);
            const data = await response.json();
            setToDos(data);
        }

        fetchData();
    }, [])


    return (
        <>
            <div className='w-screen'>
                <h1 className='flex justify-center text-[2rem] font-semibold mg-4'>User To Dos</h1>
            </div>
            <div class="relative font-inter antialiased">
                <main class="relative min-h-screen flex flex-col justify-center bg-slate-50 overflow-hidden">
                    <div class="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
                        <div x-data="{ isAnnual: true }">

                            <div class="max-w-sm mx-auto grid gap-6 lg:grid-cols-1 items-center lg:max-w-none">

                                <div class="dark h-full">
                                    <div class="relative align-middle justify-center flex flex-col h-full p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-900 shadow shadow-slate-950/5">
                                        <div class="text-slate-900 dark:text-slate-200 font-medium mb-3 text-center">Includes:</div>
                                        <ul class="text-slate-600 dark:text-slate-400 text-sm space-y-3 grow">
                                            {ToDos.map((todo) => {
                                                return (
                                                    <li className="flex items-center">
                                                        {todo.completed === true ? (
                                                            <svg
                                                                className="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
                                                                viewBox="0 0 12 12"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                {/* SVG path elements for completed icon */}
                                                            </svg>
                                                        ) : (
                                                            <svg
                                                                className="w-3 h-3 fill-rose-500 mr-3 shrink-0"
                                                                viewBox="0 0 12 12"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                            </svg>
                                                        )}
                                                        <span>{todo.title}</span>
                                                    </li>
                                                )
                                            }
                                            )}
                                        </ul>
                                    </div>
                                </div>



                            </div>

                        </div >

                    </div >
                </main >
            </div >
        </>
    )
}
