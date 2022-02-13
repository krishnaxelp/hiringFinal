import "./index.css"
import React from 'react'
import './App.css';
import { useEffect, useState } from "react";
import axios from "axios";
import logo from "../src/image/logo.svg"
import Draggable from "react-draggable";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { SkeletonTheme } from 'react-loading-skeleton';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import Header from "./components/header";
import SideBar from "./components/sidebar";
import LandingPage from "./components/landingPage";
import Home from "./components/home";











 
function App() {
  // const url = "https://api2.binance.com/api/v3/ticker/24hr"
  const [data, setData] = useState([]);
  const [hide, setHide] = useState(true);
  const [darkMode, setDarkMode] = useState(false)
  // const [drawer, setDrawer] = useState(false)
 

  
 





  //for system adaption automatic dark mod

  // if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  //   document.documentElement.classList.add('dark')
  // } else {
  //   document.documentElement.classList.remove('dark')
  // }

  // // Whenever the user explicitly chooses light mode
  // localStorage.theme = 'light'

  // // Whenever the user explicitly chooses dark mode
  // localStorage.theme = 'dark'

  // // Whenever the user explicitly chooses to respect the OS preference
  // localStorage.removeItem('theme')

  useEffect(()=>{
    
    document.title="React App"
  })


  const hideNav = () => {
    const result = !hide
    setHide(result)
  }

  // useEffect(() => {
  //   axios.get(url).then(res => {
  //     const result = res.data
  //     setData(result)
  //   })
  //     .catch(err => {
  //       const result = err.message
  //       alert(result)
  //     })
  // }, [])

  // const darkMode = () => {
  //   const root = window.document.documentElement

  //   root.classList.add('dark')
  // }
  // const btn = document.querySelector("button.mobile-menu-button");
  // const menu = document.querySelector(".mobile-menu");

  // btn.addEventListener("click", () => {
  //   menu.classList.toggle("true");
  // });





  return (
   
    <div
      class={`${darkMode && "dark"
        }`}
    >
  
     <div class="bg-white">
<Header/>
<SideBar/>
<LandingPage/>
<Home/>
    </div>
    </div>
    

     


  );
}

export default App;
