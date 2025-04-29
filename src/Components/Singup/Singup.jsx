import React, { useContext, useState } from 'react';
import { AuthContex } from '../AuthProvider/AuthProvider';
import { Link, Navigate } from 'react-router';



const Singup = () => {
    const { createuser } = useContext(AuthContex)
    const handlesingup = (e) => {

        e.preventDefault()

        const mail = e.target.email.value;
        const pass = e.target.password.value;

        // console.log(mail, pass)
        // console.log("value are comming soon")

        createuser(mail, pass)
            .then((res) => {
                console.log(res.user)

            })

            .catch((err) => console.log("err", err))



    }

    return (
        <div>
            <div class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div class="sm:mx-auto sm:w-full sm:max-w-md">
                    <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Create New Account
                    </h2>
                </div>

                <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                        <form onSubmit={handlesingup} class="space-y-6" action="#" method="POST ">
                            <div>
                                <label for="email" class="block text-sm font-medium text-gray-700">
                                    Email address
                                </label>
                                <div class="mt-1">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autocomplete="email"
                                        required
                                        class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>
                            </div>

                            <div>
                                <label for="password" class="block text-sm font-medium text-gray-700">
                                    Password
                                </label>
                                <div class="mt-1">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autocomplete="current-password"
                                        required
                                        class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>
                            </div>

                            <div class="flex items-center justify-between">
                                <div class="flex items-center">
                                    <input
                                        id="remember-me"
                                        name="remember-me"
                                        type="checkbox"
                                        class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                    />
                                    <label for="remember-me" class="ml-2 block text-sm text-gray-900">
                                        Remember me
                                    </label>
                                </div>

                                <div class="text-sm">
                                    <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
                                        Forgot your password?
                                    </a>
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Sign in
                                </button>
                            </div>

                        </form>
                        <div>
                            <h2>already have account? login <Link to='/login'><span className='text-primary'>Here</span></Link> </h2>
                        </div>

                        <div class="mt-6">
                            <div class="relative">
                                <div class="absolute inset-0 flex items-center">
                                    <div class="w-full border-t border-gray-300" />
                                </div>
                                <div class="relative flex justify-center text-sm">
                                    <span class="px-2 bg-white text-gray-500">
                                        Or continue with
                                    </span>
                                </div>
                            </div>


                            <div class="mt-6 grid grid-cols-2 gap-3">
                                <div>
                                    <a
                                        href="#"
                                        class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                                    >
                                        <span class="sr-only">Sign in with Google</span>
                                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                            <path
                                                fill-rule="evenodd"
                                                d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10c5.523 0 10-4.477 10-10S15.523 0 10 0zm4.71 10.5h-4.17v-2h4.17v2z"
                                                clip-rule="evenodd"
                                            />
                                        </svg>
                                    </a>
                                </div>

                                <div>
                                    <a
                                        href="#"
                                        class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                                    >
                                        <span class="sr-only">Sign in with GitHub</span>
                                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                            <path
                                                fill-rule="evenodd"
                                                d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10c5.523 0 10-4.477 10-10S15.523 0 10 0zm0 15.833c-3.21 0-5.833-2.623-5.833-5.833S6.79 4.167 10 4.167s5.833 2.623 5.833 5.833-2.623 5.833-5.833 5.833z"
                                                clip-rule="evenodd"
                                            />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Singup;