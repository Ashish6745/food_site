import React from "react";
import Modal from './Modal';
import { useState } from "react";
import '../App.css';
const Navbar = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="flex items-center justify-between bg-blue-900  sm:px-2 sm:py-6 md:px-4 md:py-4">
        <div className="flex items-center">
         <div className="lg:w-10 sm:w-12 sm:ml-4  md:ml-6 md:w-14">
         <img  className="bg-red-300 rounded-full " src="https://www.shutterstock.com/image-vector/sardar-ji-cartoon-character-vector-260nw-1256182513.jpg" alt="/"/>
         </div>
        <h1 className="font-bold font-sans lg:text-xl sm:text-lg sm:ml-4 md:text-2xl  lg:ml-4 text-white">ADHARSH FOOD PRODUCTS</h1>
        </div>
        <div>
        <div className="lg:w-10 lg:mr-4 sm:mr-2 md:mr-4 md:w-14 sm:w-12 flex items-center justify-between ">
         <img  className="bg-red-300 rounded-full " src="https://www.shutterstock.com/image-vector/sardar-ji-cartoon-character-vector-260nw-1256182513.jpg" alt="/"/>
         <i class="fa-solid fa-caret-down text-white ml-3"  onClick={() => setOpenModal(true)}></i>
         <Modal 
         open={openModal} 
         onClose={() => setOpenModal(false)} />
         </div>
        </div>
    </div>
  )
}

export default Navbar
