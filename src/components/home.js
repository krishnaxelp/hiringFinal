import react, { useEffect } from "react";
import moto from "../image/bookmark.png"
import React, { Component, useState } from "react";
import { render } from "react-dom";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import profile from "../image/profile.png"





const Home = (props) => {

       // local storage se data uthake array me pass krne ke liye
   const getLocalData = (e) => {
    
    const data = localStorage.getItem('form');
    if (data) {
        return JSON.parse(data);

    }
    else {
        return []
    }
}
 


    //array of object
    const [form, setForm] = useState(getLocalData());
    console.log("form")


    //input field ke liye
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [education, setEducation] = useState("");
    const [add, setAdd] = useState("");
    const [toggle , setToggle] = useState(false)

    //form submit ke liye

    const handleSubmit = (e) => {
        e.preventDefault()
        //object banake array me push karne ke liye
        let items = {
            name,
            email,
            education,
            add
        }

        setForm([...form, items]);
        setName("");
        setEmail("");
        setEducation("");
        setAdd("");
        setState({isPaneOpen:false})
        setState({isPaneEdit:false})

    }

    //delete ke liye
    // const deleteForm=(ind)=>{
    //     console.log(ind);
    //     const filter=form.filter((element,ind)=>{
    //         return element.ind !== ind
    //     })
    //     setForm(filter);
    // } 

    const deleteItem =(id)=>{
        console.log(id);
        const updateItem = form.filter((elem , ind)=>{
            return ind !== id;
        })
        setForm(updateItem);
    }

    const formOpen = (id)=>{
        console.log(id);
        const updateItem = form.filter((elem , ind)=>{
            return ind == id;
        })
        setForm(updateItem)
    }

    const editItem = (task)=>{
        const result = form.map((elem)=>{
            if(elem.id === task.id){
                return{...elem,...task}
            }else{
                return{...elem}
            }
        })
        setForm(result)
    }




    //savind data to local storage me hahahahaha using useeffect
    useEffect(() => {
        localStorage.setItem('form', JSON.stringify(form));

    },[form])










    const [state, setState] = useState({

        isPaneOpen: false,
        isPaneOpenSecond: false,
        isPaneEdit:false,
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
                    <button onClick={() => setState({ isPaneOpen: true })} type="button" class="py-1 px-4 justify-center  bg-red-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
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
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            type="text" id="user-info-email" class="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Name" required />
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div class="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                                <h2 class="max-w-sm mx-auto md:w-1/3 ">
                                    Personal info
                                </h2>
                                <div class="max-w-sm mx-auto space-y-5 md:w-2/3">
                                    <div>
                                        <div class=" relative ">
                                            <input
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                type="email" id="user-info-name" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Email" required/>
                                        </div>
                                    </div>
                                    <div>
                                        <div class=" relative ">
                                            <input
                                                value={education}
                                                onChange={(e) => setEducation(e.target.value)}
                                                type="text" id="user-info-phone" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Education" required/>
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
                                        <textarea
                                            value={add}
                                            onChange={(e) => setAdd(e.target.value)}
                                            type="text" id="user-info-email" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Address" required/>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div class="w-full px-4 pb-4 ml-auto text-gray-500 md:w-1/3">
                                <button
                                    onClick={handleSubmit}
                                    disabled = {name.lenght===0 && add.length === 0 && email.length === 0 && education.length === 0}
                                    // onClick={() => setState({ isPaneOpen: false })}

                                    type="submit" class="py-2 px-4  bg-red-400 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                    Save
                                </button>
                            </div>
                        </div>
                    </form>



                </SlidingPane>

            {/* for plane detail only */}

                <SlidingPane
                    className="some-custom-class mt-16"

                    overlayClassName="some-custom-overlay-class"
                    title="Candidate Detail"
                    width="40rem"
                    isOpen={state.isPaneSecond}


                    onRequestClose={() => {
                        // triggered on "<" on left top click or on outside click
                        setState({ isPaneSecond: false });
                    }}
                >

                {
                    form.map((elem,ind)=>{
                        return(
                            <form key={ind} class="container max-w-2xl mx-auto shadow-md md:w-4/4">
                        <div class="p-4 bg-gray-100 border-t-2 border-red-400 rounded-lg bg-opacity-5">

                        </div>
                        <div class="space-y-6 bg-white">
                            <div class="items-center w-full p-4 space-y-4 text-gray-900 md:inline-flex md:space-y-0">
                                <h2 class="max-w-sm mx-auto md:w-1/3">
                                    Name
                                </h2>
                                <div class="max-w-sm mx-auto md:w-2/3">
                                    
                                      <h1 class="uppercase text-xl">{elem.name}</h1> 
                                    
                                </div>
                            </div>
                            <hr />
                            <div class="items-center w-full p-4 space-y-4 text-gray-900 md:inline-flex md:space-y-0">
                                <h2 class="max-w-sm mx-auto md:w-1/3">
                                    Email
                                </h2>
                                <div class="max-w-sm mx-auto md:w-2/3">
                                    
                                      <h1 class=" text-xl">{elem.email}</h1> 
                                    
                                </div>
                            </div>
                            <div class="items-center w-full p-4 space-y-4 text-gray-900 md:inline-flex md:space-y-0">
                                <h2 class="max-w-sm mx-auto md:w-1/3">
                                    Education
                                </h2>
                                <div class="max-w-sm mx-auto md:w-2/3">
                                    
                                      <h1 class=" text-xl">{elem.education}</h1> 
                                    
                                </div>
                            </div>
                            <hr />
                            <div class="items-center w-full p-4 space-y-4 text-gray-900 md:inline-flex md:space-y-0">
                                <h2 class="max-w-sm mx-auto md:w-1/3">
                                    Address
                                </h2>
                                <div class="max-w-sm mx-auto md:w-2/3">
                                    <div class=" relative ">
                                    <h1 class=" text-xl">{elem.add}</h1> 
                                    </div>
                                </div>
                            </div>
                            <hr />
                            {/* <div class="w-full px-4 pb-4 ml-auto text-gray-500 md:w-1/3">
                                <button
                                    onClick={handleSubmit}
                                    // onClick={() => setState({ isPaneOpen: false })}

                                    type="submit" class="py-2 px-4  bg-red-400 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                    Save
                                </button>
                            </div> */}
                        </div>
                    </form>

                        )
                    })
                }
                <br></br>
                <br></br>
                <br></br>
                <br></br>




                    



                </SlidingPane>






                <div class="py-11 px-6 flex space-x-10 ">





                    <div class="shadow-lg rounded-2xl w-64 space-y-2 bg-white dark:bg-gray-800 p-4" id={props.id} onDrop={drop} onDragOver={dragOver}>
                        <p class="text-gray-800 dark:text-gray-50 text-xl font-medium mb-4">
                            Screening
                        </p>
                        <hr></hr>

                        {
                            form.map((elem , ind) => {
                                return (
                                    <div
                                     key={ind} class="shadow-lg rounded w-auto p-4  bg-gray-200 relative overflow-hidden" id={props.id} draggable="true" onDragStart={dragStart} onDragOver={dragOver1}>
                                        <img 
                                        
                                        alt="" src={moto} class="absolute right-1 bottom-0 h-10 w-10 mb-14" />
                                        <div class="w-4/6">
                                        
                                            <p 
                                            onClick={() => setState({ isPaneSecond: true })}
                                            class="text-gray-800 text-lg font-medium mb-2 cursor-pointer">
                                                {elem.name}
                                            </p>
                                            <p class="text-gray-400 text-xs">
                                                {elem.email}
                                            </p>
                                            <svg 
                                             onClick={()=>deleteItem(ind)} 
                                            xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 absolute right-4 bottom-0 mb-1 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                                            </svg>

{/* <svg
onClick={()=>formOpen(ind)}
onClick={()=>setState({isPaneEdit:true})}
 xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 absolute right-10 bottom-0 mb-1 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
</svg> */}                            
                                        </div>
                                    </div>
                                )

                            })
                        }



                        {/* <div class="shadow-lg rounded w-auto p-4  bg-gray-200 relative overflow-hidden" id={props.id} draggable="true" onDragStart={dragStart} onDragOver={dragOver1}>
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
                                    Hopsin
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
                                    DARSHAN
                                </p>
                                <p class="text-gray-400 text-xs">
                                    100 Days Ago
                                </p>
                                <p class="text-indigo-500 text-xl font-medium">

                                </p>
                            </div>
                        </div> */}




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
                                    Juice Wrld
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
                                    xxxtentacion
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
                                    Hopsin
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
                                    DARSHAN
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
                                    Juice Wrld
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
                                    xxxtentacion
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
                                    Hopsin
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
                                    DARSHAN
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
                                    Juice Wrld
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
                                    xxxtentacion
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
                                    Hopsin
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
                                    DARSHAN
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