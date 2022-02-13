import react from "react";
import moto from "../image/bookmark.png"
import React, { Component, useState, useEffect } from "react";
import { render } from "react-dom";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import profile from "../image/profile.png"

const Home = (props) => {
    const [inputName, setInputName] = useState("");
    const [email, setEmail] = useState("")
    const [user, setUser] = useState([])

    useEffect(() => {
        const users = JSON.parse(localStorage.getItem('user')) || []
        setUser(users)
    }, [])

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user))
    }, [user])

    const addUser = (use) => {
        const result = [...user, use]
        setUser(result)
    }

    // const [items, setItems] = useState([]);
    // const addItem = (e) => {
    //     e.preventDefault()
    //     if (!inputName) {

    //     }
    //     else {
    //         setItems([...items, inputName])
    //         setInputName("");


    //     }


    // }
    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            name: inputName,
            email: email
        }
        addUser(formData)

        setState({isPaneOpen:false})
    }
    const [state, setState] = useState({

        isPaneOpen: false,
        isPaneOpenLeft: false,
    });


    const drop = e => {
        e.preventDefault()
        const card_id = e.dataTransfer.getData('card_id')

        const card = document.getElementById(card_id)
        card.style.display = "block"

        e.target.appengChild(card)
    }

    const dragOver = e => {
        e.preventDefault()
    }

    const dragStart = e => {
        const target = e.target

        e.dataTransfer.setData('card_id', target.id)

        setTimeout(() => {
            target.style.display = "none"
        }, 0)
    }

    const dragOver1 = e => {
        e.stopPropagation()
    }

    return (
        <div class="ml-8 bg-grey-100">


            <div class="ml-80 relative px-2 max-w-screen-xl mx-auto rounded-2xl bg-red-50">
                <div class=" inline-flex  rounded shadow ">
                    <button onClick={() => setState({ isPaneOpen: true })} type="button" class="py-1 px-6   bg-red-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                        Add Candidate +
                    </button>


                </div>

                <SlidingPane
                    className="some-custom-class mt-16"

                    overlayClassName="some-custom-overlay-class"
                    title="Fill The Below To Add Candidate"
                    width="40rem"
                    isOpen={state.isPaneOpen}


                    onRequestClose={() => {
                        // triggered on "<" on left top click or on outside click
                        setState({ isPaneOpen: false });
                    }}
                >
                    <form class="container max-w-2xl mx-auto shadow-md md:w-4/4">
                        <div class="p-4 bg-gray-100 border-t-2 border-red-400 rounded-lg bg-opacity-5">

                        </div>
                        <div class="space-y-6 bg-white">
                            <div class="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                                <h2 class="max-w-sm mx-auto md:w-1/3">
                                    Name
                                </h2>
                                <div class="max-w-sm mx-auto md:w-2/3">
                                    <div class=" relative ">
                                        <input
                                            value={inputName}
                                            onChange={(e) => setInputName(e.target.value)}
                                            type="text" id="user-info-email" class="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Name" />
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div class="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                                <h2 class="max-w-sm mx-auto md:w-1/3">
                                    Personal info
                                </h2>
                                <div class="max-w-sm mx-auto space-y-5 md:w-2/3">
                                    <div>
                                        <div class=" relative ">
                                            <input
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                type="text" id="user-info-name" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Email" />
                                        </div>
                                    </div>
                                    <div>
                                        <div class=" relative ">
                                            <input type="text" id="user-info-phone" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Education" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div class="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                                <h2 class="max-w-sm mx-auto md:w-1/3">
                                    Address
                                </h2>
                                <div class="max-w-sm mx-auto md:w-2/3">
                                    <div class=" relative ">
                                        <textarea type="text" id="user-info-email" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Address" />
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div class="w-full px-4 pb-4 ml-auto text-gray-500 md:w-1/3">
                                <button
                                    onClick={handleSubmit}
                                   
                                    type="submit" class="py-2 px-4  bg-red-400 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                    Save
                                </button>
                            </div>
                        </div>
                    </form>



                </SlidingPane>
                <div class="py-11 px-6 flex space-x-10">
                    <div class="shadow-lg rounded-2xl w-64 space-y-2 bg-white dark:bg-gray-800 p-4" id={props.id} onDrop={drop} onDragOver={dragOver}>
                        <p class="text-gray-800 dark:text-gray-50 text-xl font-medium mb-4">
                            Screening
                        </p>
                        <hr></hr>
                        {
                            user.map((elem, ind) => {
                                return (
                                    <div key={ind} class="shadow-lg rounded w-auto p-4  bg-gray-200 relative overflow-hidden" id={props.id} draggable="true" onDragStart={dragStart} onDragOver={dragOver1}>
                                        <img alt="" src={moto} class="absolute right-1 bottom-0 h-10 w-10 mb-14" />
                                        <div class="w-4/6">
                                            <p class="text-gray-800 text-lg font-medium mb-2">
                                                {elem.name}
                                            </p>
                                            <p class="text-gray-400 text-xs">
                                                {elem.email}
                                            </p>
                                            <p class="text-indigo-500 text-xl font-medium">
                                            </p>
                                        </div>
                                    </div>
                                )
                            })
                        }



                        <div class="shadow-lg rounded w-auto p-4  bg-gray-200 relative overflow-hidden" id={props.id} draggable="true" onDragStart={dragStart} onDragOver={dragOver1}>
                            <img alt="" src={moto} class="absolute right-1 bottom-0 h-10 w-10 mb-14" />

                            <div class="w-4/6">
                                <p class="text-gray-800 text-lg font-medium mb-2">
                                    Eminem
                                </p>
                                <p class="text-gray-400 text-xs">
                                    06 Days Ago
                                </p>
                                <p class="text-indigo-500 text-xl font-medium">

                                </p>
                            </div>
                        </div>

                        <div class="shadow-lg rounded w-auto p-4  bg-gray-200 relative overflow-hidden" id={props.id} draggable="true" onDragStart={dragStart} onDragOver={dragOver1}>
                            <img alt="" src={moto} class="absolute right-1 bottom-0 h-10 w-10 mb-14" />

                            <div class="w-4/6">
                                <p class="text-gray-800 text-lg font-medium mb-2">
                                    Slim Shady
                                </p>
                                <p class="text-gray-400 text-xs">
                                    03 Days Ago
                                </p>
                                <p class="text-indigo-500 text-xl font-medium">

                                </p>
                            </div>
                        </div>

                        <div class="shadow-lg rounded w-auto p-4  bg-gray-200 relative overflow-hidden" id={props.id} draggable="true" onDragStart={dragStart} onDragOver={dragOver1}>
                            <img alt="" src={moto} class="absolute right-1 bottom-0 h-10 w-10 mb-14" />

                            <div class="w-4/6">
                                <p class="text-gray-800 text-lg font-medium mb-2">
                                    50 Cent
                                </p>
                                <p class="text-gray-400 text-xs">
                                    100 Days Ago
                                </p>
                                <p class="text-indigo-500 text-xl font-medium">

                                </p>
                            </div>
                        </div>




                    </div>
                    <div class="shadow-lg rounded-2xl w-64 space-y-2 bg-white dark:bg-gray-800 p-4" id={props.id} onDrop={drop} onDragOver={dragOver}>
                        <p class="text-gray-800 dark:text-gray-50 text-xl font-medium mb-4">
                            Qualified
                        </p>
                        <hr></hr>


                        <div class="shadow-lg rounded w-auto p-4  bg-gray-200 relative overflow-hidden" id={props.id} draggable="true" onDragStart={dragStart} onDragOver={dragOver1}>
                            <img alt="" src={moto} class="absolute right-1 bottom-0 h-10 w-10 mb-14" />

                            <div class="w-4/6">
                                <p class="text-gray-800 text-lg font-medium mb-2">
                                    Nishchal
                                </p>
                                <p class="text-gray-400 text-xs">
                                    07 Days
                                </p>
                                <p class="text-indigo-500 text-xl font-medium">

                                </p>
                            </div>
                        </div>

                        <div class="shadow-lg rounded w-auto p-4  bg-gray-200 relative overflow-hidden" id={props.id} draggable="true" onDragStart={dragStart} onDragOver={dragOver1}>
                            <img alt="" src={moto} class="absolute right-1 bottom-0 h-10 w-10 mb-14" />

                            <div class="w-4/6">
                                <p class="text-gray-800 text-lg font-medium mb-2">
                                    Eminem
                                </p>
                                <p class="text-gray-400 text-xs">
                                    06 Days Ago
                                </p>
                                <p class="text-indigo-500 text-xl font-medium">

                                </p>
                            </div>
                        </div>

                        <div class="shadow-lg rounded w-auto p-4  bg-gray-200 relative overflow-hidden" id={props.id} draggable="true" onDragStart={dragStart} onDragOver={dragOver1}>
                            <img alt="" src={moto} class="absolute right-1 bottom-0 h-10 w-10 mb-14" />

                            <div class="w-4/6">
                                <p class="text-gray-800 text-lg font-medium mb-2">
                                    Slim Shady
                                </p>
                                <p class="text-gray-400 text-xs">
                                    03 Days Ago
                                </p>
                                <p class="text-indigo-500 text-xl font-medium">

                                </p>
                            </div>
                        </div>

                        <div class="shadow-lg rounded w-auto p-4  bg-gray-200 relative overflow-hidden" id={props.id} draggable="true" onDragStart={dragStart} onDragOver={dragOver1}>
                            <img alt="" src={moto} class="absolute right-1 bottom-0 h-10 w-10 mb-14" />

                            <div class="w-4/6">
                                <p class="text-gray-800 text-lg font-medium mb-2">
                                    50 Cent
                                </p>
                                <p class="text-gray-400 text-xs">
                                    100 Days Ago
                                </p>
                                <p class="text-indigo-500 text-xl font-medium">

                                </p>
                            </div>
                        </div>




                    </div>
                    <div class="shadow-lg rounded-2xl w-64 space-y-2 bg-white dark:bg-gray-800 p-4" id={props.id} onDrop={drop} onDragOver={dragOver}>
                        <p class="text-gray-800 dark:text-gray-50 text-xl font-medium mb-4">
                            Interviews
                        </p>
                        <hr></hr>


                        <div class="shadow-lg rounded w-auto p-4  bg-gray-200 relative overflow-hidden" id={props.id} draggable="true" onDragStart={dragStart} onDragOver={dragOver1}>
                            <img alt="" src={moto} class="absolute right-1 bottom-0 h-10 w-10 mb-14" />

                            <div class="w-4/6">
                                <p class="text-gray-800 text-lg font-medium mb-2">
                                    Nishchal
                                </p>
                                <p class="text-gray-400 text-xs">
                                    07 Days Ago
                                </p>
                                <p class="text-indigo-500 text-xl font-medium">

                                </p>
                            </div>
                        </div>

                        <div class="shadow-lg rounded w-auto p-4  bg-gray-200 relative overflow-hidden" id={props.id} draggable="true" onDragStart={dragStart} onDragOver={dragOver1}>
                            <img alt="" src={moto} class="absolute right-1 bottom-0 h-10 w-10 mb-14" />

                            <div class="w-4/6">
                                <p class="text-gray-800 text-lg font-medium mb-2">
                                    Eminem
                                </p>
                                <p class="text-gray-400 text-xs">
                                    06 Days Ago
                                </p>
                                <p class="text-indigo-500 text-xl font-medium">

                                </p>
                            </div>
                        </div>

                        <div class="shadow-lg rounded w-auto p-4  bg-gray-200 relative overflow-hidden" id={props.id} draggable="true" onDragStart={dragStart} onDragOver={dragOver1}>
                            <img alt="" src={moto} class="absolute right-1 bottom-0 h-10 w-10 mb-14" />

                            <div class="w-4/6">
                                <p class="text-gray-800 text-lg font-medium mb-2">
                                    Slim Shady
                                </p>
                                <p class="text-gray-400 text-xs">
                                    21 Days Ago
                                </p>
                                <p class="text-indigo-500 text-xl font-medium">

                                </p>
                            </div>
                        </div>

                        <div class="shadow-lg rounded w-auto p-4  bg-gray-200 relative overflow-hidden" id={props.id} draggable="true" onDragStart={dragStart} onDragOver={dragOver1}>
                            <img alt="" src={moto} class="absolute right-1 bottom-0 h-10 w-10 mb-14" />

                            <div class="w-4/6">
                                <p class="text-gray-800 text-lg font-medium mb-2">
                                    50 Cent
                                </p>
                                <p class="text-gray-400 text-xs">
                                    10 Days Ago
                                </p>
                                <p class="text-indigo-500 text-xl font-medium">

                                </p>
                            </div>
                        </div>




                    </div>
                    <div class="shadow-lg rounded-2xl w-64 space-y-2 bg-white dark:bg-gray-800 p-4" id={props.id} onDrop={drop} onDragOver={dragOver}>
                        <p class="text-gray-800 dark:text-gray-50 text-xl font-medium mb-4">
                            Shortlisted
                        </p>
                        <hr></hr>


                        <div class="shadow-lg rounded w-auto p-4  bg-gray-200 relative overflow-hidden" id={props.id} draggable="true" onDragStart={dragStart} onDragOver={dragOver1}>
                            <img alt="" src={moto} class="absolute right-1 bottom-0 h-10 w-10 mb-14" />

                            <div class="w-4/6">
                                <p class="text-gray-800 text-lg font-medium mb-2">
                                    Nishchal
                                </p>
                                <p class="text-gray-400 text-xs">
                                    71 Days Ago
                                </p>
                                <p class="text-indigo-500 text-xl font-medium">

                                </p>
                            </div>
                        </div>

                        <div class="shadow-lg rounded w-auto p-4  bg-gray-200 relative overflow-hidden" id={props.id} draggable="true" onDragStart={dragStart} onDragOver={dragOver1}>
                            <img alt="" src={moto} class="absolute right-1 bottom-0 h-10 w-10 mb-14" />

                            <div class="w-4/6">
                                <p class="text-gray-800 text-lg font-medium mb-2">
                                    Eminem
                                </p>
                                <p class="text-gray-400 text-xs">
                                    10 Days Ago
                                </p>
                                <p class="text-indigo-500 text-xl font-medium">

                                </p>
                            </div>
                        </div>

                        <div class="shadow-lg rounded w-auto p-4  bg-gray-200 relative overflow-hidden" id={props.id} draggable="true" onDragStart={dragStart} onDragOver={dragOver1}>
                            <img alt="" src={moto} class="absolute right-1 bottom-0 h-10 w-10 mb-14" />

                            <div class="w-4/6">
                                <p class="text-gray-800 text-lg font-medium mb-2">
                                    Slim Shady
                                </p>
                                <p class="text-gray-400 text-xs">
                                    50 Days Ago
                                </p>
                                <p class="text-indigo-500 text-xl font-medium">

                                </p>
                            </div>
                        </div>

                        <div class="shadow-lg rounded w-auto p-4  bg-gray-200 relative overflow-hidden" id={props.id} draggable="true" onDragStart={dragStart} onDragOver={dragOver1}>
                            <img alt="" src={moto} class="absolute right-1 bottom-0 h-10 w-10 mb-14" />

                            <div class="w-4/6">
                                <p class="text-gray-800 text-lg font-medium mb-2">
                                    50 Cent
                                </p>
                                <p class="text-gray-400 text-xs">
                                    10 Days Ago
                                </p>
                                <p class="text-indigo-500 text-xl font-medium">

                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home