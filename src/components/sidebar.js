import React, { useState, useEffect } from 'react'
import Modal from 'react-modal'
import Jobs from '../Jobs.json'
import moto from "../image/bookmark.png"
import profile from "../image/profile.png"



// import Jobdes from '../Jobdes'

const SideBar = (props) => {
    // const{isOpen} = props
    const [modalOpen, setModalOpen] = useState(false)
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [department, setDepartment] = useState("")
    const [field, setField] = useState("")
    const [user, setUser] = useState([])

    useEffect(() => {
        // console.log(localStorage.getItem('user') || [])
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
    

    const handleNameChange = (e) => {
        e.preventDefault()
        setName(e.target.value) 
        // setData1({ name: e.target.value})
    }

    const handleDescriptionChange = (e) => {
        e.preventDefault()
        setDescription(e.target.value)
        // setData1({ description: e.target.value})
    }

    const handleDepartmentChange = (e) => {
        e.preventDefault()
        setDepartment(e.target.value)
        // setData1({ department: e.target.value})
    }

    const handleFieldChange = (e) => {
        e.preventDefault()
        setField(e.target.value)
        // setData1({ field: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            id: Number(new Date()),
            name: name,
            department: department,
            description: description,
            field: field
        }
        // console.log(formData)

        addUser(formData)
        // localStorage.setItem("data", JSON.stringify(formData))
        setModalOpen(false)
        setName('')
        setDepartment('')
        setDescription('')
        setField('')

        // const userDetail = localStorage.getItem("data")
        // const userDetail2 = JSON.parse(userDetail)
        // setData1(userDetail2)
    }

    const deleteItem =(id)=>{
        console.log(id);
        const updateItem = user.filter((elem , ind)=>{
            return ind !== id;
        })
        setUser(updateItem);
    }

    return (
        <div class="absolute left-8 pl-3 top-16 p-5">

            <div class="relative bg-red-500 dark:bg-gray-800 rounded-2xl">
                <div class="flex flex-col sm:flex-row sm:justify-around">
                    <div class="w-72 h-screen">
                        <nav class="mt-10 px-6">
                            <a class="hover:text-gray-800 text-gray-100  dark:bg-gray-600 dark:text-gray-400hover:bg-gray-100 flex items-center p-2 my-0 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200 justify-start" href="#">

                                <span class="mx-0 text-md font-bold text-lg">
                                    My Job Post (08)
                                </span>
                                <icon class="hover:text-orange-50 mx-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-red-400 " fill="white" viewBox="0 0 24 24" stroke="currentColor" onClick={() => setModalOpen(true)}>
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </icon>
                            </a>
                            <p class="text-gray-100 ml-2 w-full pb-5  mb-4 text-sm">
                                08 total job listed
                            </p>


                            <div>
                                <p class="text-gray-100 ml-2 w-full  pb-2 border-gray-100 mb-2 text-md font-normal">
                                    Department
                                </p>

                                <select class="block w-52 text-gray-100 py-1 px-2 border border-red-300 bg-red-400 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500" name="animals">
                                    <option value="">
                                        All Department
                                    </option>
                                    <option value="">
                                        Web development
                                    </option>
                                    <option value="">
                                        Python Programmer
                                    </option>
                                    <option value="">
                                        Testing
                                    </option>

                                </select>
                                <p class="text-gray-100 ml-2 w-full  pb-0 my-6 border-gray-100 mb-2 text-md font-normal">
                                    Job Type
                                </p>

                                <select class="block w-52 text-gray-100 py-1 px-2 border border-red-300 bg-red-400 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500" name="animals">
                                    <option value="">
                                        All Department
                                    </option>
                                    <option value="">
                                        Developer
                                    </option>
                                    <option value="">
                                        Designer
                                    </option>
                                    <option value="">
                                        QA Testing
                                    </option>

                                </select>

                                <div class="flex items-center gap-2 my-4 ">
                                    <label class="inline-flex items-center ">
                                        <input type="radio" name="all" class="h-5 w-5 text-red-100" />
                                        <span class="ml-2 text-gray-100">
                                            All
                                        </span>
                                    </label>
                                    <label class="inline-flex items-center">
                                        <input type="radio" name="all" class="h-5 w-5 text-red-400" />
                                        <span class="ml-2 text-gray-100">
                                            Active
                                        </span>
                                    </label>
                                    <label class="inline-flex items-center">
                                        <input type="radio" name="all" class="h-5 w-5 text-red-400" />
                                        <span class="ml-2 text-gray-100">
                                            Inactive
                                        </span>
                                    </label>



                                </div>
                                <p class="ml-0 w-full border-b-4 pb-2 border-red-400 mb-5 ">     </p>





                            </div>
                            {/* <div class="shadow-lg rounded w-auto p-4  bg-red-200 hover:bg-white  relative overflow-hidden">
                                <img alt="" src={moto} class="absolute right-1 bottom-0 h-10 w-10 mb-14" />

                                <div class="w-4/6">
                                    <p class="text-gray-800 text-lg font-medium mb-2">
                                        Developer
                                    </p>
                                    <p class="text-gray-400 text-xs">
                                        Software developer
                                    </p>
                                    <p class="text-indigo-500 text-xl font-medium">

                                    </p>
                                </div>
                            </div><br></br>

                            <div class="shadow-lg rounded w-auto p-4  bg-red-200 hover:bg-white relative overflow-hidden">
                                <img alt="" src={moto} class="absolute right-1 bottom-0 h-10 w-10 mb-14" />

                                <div class="w-4/6">
                                    <p class="text-gray-800 text-lg font-medium mb-2">
                                        Designer
                                    </p>
                                    <p class="text-gray-400 text-xs">
                                        Software developer
                                    </p>
                                </div>

                            </div> */}
                            
                            {
                                user.map((ele, ind) => {
                                    return(
                                        <div key={ind} id = {props.id} class="shadow-lg my-3 rounded w-auto p-4 px-2 bg-red-200 hover:bg-white relative overflow-hidden">
                                {/* <img alt="" src={moto} class="absolute right-1 bottom-0 h-10 w-10 mb-14" /> */}

                                <div class="w-4/6 px-2">
                                    <p class="text-gray-800 text-lg font-medium mb-2">
                                        {ele.department}
                                    </p>
                                    <p class="text-gray-400 text-xs">
                                        {ele.field}
                                    </p>
                                   <p>
                                   <svg 
                                             onClick={()=>deleteItem(ind)} 
                                            xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 absolute right-4 bottom-0 mb-1 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
</svg></p>
                                    
                                </div>
                                

                            </div>
                                    )
                                })
                            }
                            
                            

                            {/* <div class="bg-red-500">
                                <Modal class="relative bg-red-500 dark:bg-gray-800 rounded-2xl" isOpen={modalOpen}>
                                    <input type="text"
                                        placeholder='Enter Department'
                                        value={department}
                                        onChange={handleDepartmentChange}>
                                    </input><br></br>
                                    <input type="text"
                                        placeholder='Enter Job Role'
                                        value={jobRole}
                                        onChange={handleJobChange}>
                                    </input>
                                    <div>
                                        <p class="text-lg">Active</p>
                                        <input type="radio"
                                            value={radio}
                                            onChange={handleRadioChange}>

                                        </input>
                                    </div>
                                    <button class="bg-indigo-600 p-4 rounded-xl" onClick={() => setModalOpen(false)}>Close Modal</button>
                                </Modal>
                            </div> */}

                           
                            
                                <Modal className="modal translate-y-20 " class="rounded" isOpen={modalOpen}>
                                    <form class="container max-w-2xl mx-auto shadow-md md:w-3/4 rounded-2xl ">
                                        <div class="p-4 bg-red-400 border-t-2 border-red-400 rounded  ">
                                            <div class="max-w-sm mx-auto md:w-full md:mx-0">
                                                <div class="inline-flex items-center space-x-4">
                                                    <a href="#" class="block relative">
                                                        <img alt="profil" src={profile} class="mx-auto object-cover rounded-full h-16 w-16 " />
                                                    </a>
                                                    <h1 class="text-gray-600">
                                                        Profile Pic
                                                    </h1>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="space-y-4 bg-white">
                                            <div class="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                                                <h2 class="max-w-sm mx-auto md:w-1/3">
                                                    Name
                                                </h2>
                                                <div class="max-w-sm mx-auto md:w-2/3">
                                                    <div class=" relative ">
                                                        <input type="text" id="user-info-email"  placeholder='Enter Name'
                                                        value={name}
                                                        onChange={handleNameChange} class=" rounded-lg  flex-1 appearance-none border border-red-400 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent"  />
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
                                                        <select class="block w-64 text-gray-100 py-1.5 px-2 border border-red-500 focus:ring-2 focus:ring-red-500 bg-red-400 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500" name="animals" value={department} onChange={handleDepartmentChange}>
                                    <option name="department">
                                        All Department
                                    </option>
                                    <option name="developer">
                                        Developer
                                    </option>
                                    <option name="designer">
                                        Designer
                                    </option>
                                    <option name="qa">
                                        QA
                                    </option>

                                </select>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div class=" relative ">
                                                        <select class="block w-64 text-gray-100 py-1.5 px-2 border border-red-500 focus:ring-2 focus:ring-red-500  bg-red-400 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500" name="animals" value={field} onChange={handleFieldChange}>
                                    <option value="">
                                        Select Field
                                    </option>
                                    <option >
                                        Front-End
                                    </option>
                                    <option >
                                        Back-End
                                    </option>
                                    <option>
                                        Testing
                                    </option>

                                </select>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                            <hr />
                                            <div class="items-center w-full p-4 space-y-2 text-gray-500 md:inline-flex md:space-y-0">
                                                <h2 class="max-w-sm mx-auto md:w-1/3">
                                                    Description
                                                </h2>
                                                <div class="max-w-sm mx-auto md:w-2/3">
                                                    <div class=" relative ">
                                                        <textarea type="text" id=""  placeholder='Description'
                                                        value={description}
                                                        onChange={handleDescriptionChange} class=" rounded-lg  flex-1 appearance-none border border-red-400 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent"  />
                                                    </div>
                                                </div>
                                                
                                            </div>
                                            <div class="max-w-sm mx-6 md:w-2/3 ">
                                            <div class="flex gap-8  ">
                                    <label class="inline-flex items-center">
                                        <input type="radio" name="all" class="h-5 w-5 text-black" />
                                        <span class="ml-2 text-black">
                                            Active
                                        </span>
                                    </label>
                                    <label class="inline-flex items-center">
                                        <input type="radio" name="all" class="h-5 w-5 text-black" />
                                        <span class="ml-2 text-black">
                                            Inactive
                                        </span>
                                    </label>



                         
                                                </div>
                                                </div>

                                            
                                                
                                            
                                            
                              
                                            
                                            <hr />
                                            <div class="w-full px-4 pb-4 ml-auto text-gray-500 md:w-1/3">
                                                <button type="submit"
                                                disabled={name.length === 0 && description.length === 0} 
                                                onClick={handleSubmit }
                                                class="py-2 px-4  bg-red-400 hover:bg-red-500 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                                    SUBMIT
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </Modal>
                             

                           

                        </nav>

                    </div>
                </div>
            </div>


        </div>
    )
}

export default SideBar