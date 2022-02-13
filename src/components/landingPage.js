import React,{useState, useEffect} from "react"

const LandingPage = () => {

    const [user, setUser] = useState([])

    useEffect(() => {
        // console.log(localStorage.getItem('user') || [])
        const users = JSON.parse(localStorage.getItem('user')) || []
        setUser(users)
    }, [])

    return (

        <div class="">
            <div class="ml-72 bg-white dark:bg-gray-800 max-w-xl flex mx-auto px-20   ">
                <div class="lg:flex lg:items-center lg:justify-between w-full mx-auto py-12 sm:px-6 lg:py-4 lg:px-0 ">
                    <h2 class="text-2xl font-extrabold text-black dark:text-white sm:text-2xl">
                        <span class="block">
                            React Developer
                        </span>
                    </h2>
                    <div class="inline-flex justify-items-center rounded-md shadow">
                        <button type="button" class="py-1 px-6   bg-red-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                            In-Active
                        </button>


                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                    </svg>

                </div>




            </div>

            <div class="ml-72 bg-white dark:bg-gray-800 max-w-xl flex mx-auto px-20 ">

                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd" />
                    <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                </svg>
                <span class="px-2">
                    Part-Time
                </span>


                <div class="px-4 flex">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                    </svg>
                    <span class="px-2">Bangalore, India</span>
                </div>
                

            </div>
            <div class="ml-72 py-4 justify-self-stretch bg-white dark:bg-gray-800 max-w-xl flex mx-auto px-20 ">

                    The lorem ipsum is based on De finibus bonorum et malorum, a Latin text written by Cicero in 45 BC. ... As a 
                </div>
        </div>





    )
}

export default LandingPage