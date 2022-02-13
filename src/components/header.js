import react from "react"
import avenger from "../image/icons8-avengers-80.png"
// import profile from "../image/profile1.jpg"

const Header = () => {
    return (
        <div>

            <header class="w-full bg-white dark:bg-gray-700 items-center h-16  z-40">
                <div class="relative z-20 flex flex-col justify-center h-full px-3 mx-auto flex-center">
                    <div class="relative items-center pl-1 flex w-full lg:max-w-68 sm:pr-2 sm:ml-0">


                        <div class="relative p-1 flex items-center justify-start w-1/4 ml-5 mr-4 sm:mr-0 sm:right-auto">
                            <a href="#" class="block relative">
                                <img alt="logo" src={avenger} class="mx-auto object-cover rounded-full h-10 w-10 " />
                            </a>
                            <span class="font-bold uppercase black mx-5">Hiring App</span>
                        </div>
                        <div class=" mx-4 container relative left-9 z-50 flex w-3/4 h-auto h-full">


                            <div class="relative flex items-center w-full lg:w-49 h-full group">
                                <div class="absolute z-50 flex items-center justify-center block w-auto h-10 p-3 pr-2    text-sm text-gray-500 uppercase cursor-pointer sm:hidden">
                                    <svg fill="none" class="relative w-5 h-5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
                                        <path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z">
                                        </path>
                                    </svg>
                                </div>
                                <svg class="absolute left-0 z-20 hidden w-4 h-4 ml-4 text-gray-500 pointer-events-none fill-current group-hover:text-gray-400 sm:block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z">
                                    </path>
                                </svg>
                                <input type="text" class="block w-3/4 py-1.5 pl-12 pr-4  leading-normal rounded focus:border-transparent focus:outline-none focus:ring-1 focus:ring-blue-500 ring-opacity-90 bg-gray-100 dark:bg-gray-800 text-gray-400 aa-input" placeholder="Search For Candidates" />
                                {/* <div class="absolute right-0 hidden h-auto px-2 py-1 mr-2 text-xs text-gray-400 border border-gray-300 rounded-2xl md:block">
                            +
                        </div> */}

                                <div class="relative left-1/4 p-0 flex items-center justify-end w-1/4 ml-4 mr-4 sm:mr-0 sm:right-auto">
                                    <a class="text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium" href="/#">
                                        Jobs
                                    </a>
                                    <a class="text-gray-800  dark:text-white block px-3 py-2 rounded-md text-base font-medium" href="/#">
                                        Hunt
                                    </a>
                                </div>
                            </div>



                        </div>
                        <div class="relative p-1 flex items-center justify-end w-1/4 ml-5 mr-4 sm:mr-0 sm:right-auto">
                            <a href="#" class="block relative">
                                {/* <img alt="profil" src={profile} class="mx-auto object-cover rounded-full h-10 w-10 " /> */}
                            </a>
                        </div>
                        <div class="mx-3">
                            <div class="relative inline-block w-10 mr-2 align-middle select-none">
                                <input type="checkbox" name="toggle" id="Gray" class="checked:bg-gray-500 outline-none focus:outline-none right-4 checked:right-0 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" />
                                <label for="Gray" class="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer">
                                </label>
                            </div>

                        </div>

                    </div>

                </div>
            </header>

        </div>
    )
}

export default Header