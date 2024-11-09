import React, { useState,useEffect } from 'react'
import logo from '../assets/Logo.jpg'
import { RxCaretDown } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { AiOutlineMedicineBox } from "react-icons/ai";
import { BiSolidOffer } from "react-icons/bi";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { CiGps } from "react-icons/ci";
import { SlPeople } from "react-icons/sl";
import { CiShoppingCart } from "react-icons/ci";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    function areasearch() {
        console.log("area");
        setToggle(true);
    }
    const link = [
        {
            icons: <AiOutlineMedicineBox className='text-2xl text-gray-700 hover:text-orange-500   mt-1' />,
            name: "Swiggy Corporate"
        },
        {
            icons: <IoIosSearch className='text-2xl text-gray-700 hover:text-orange-500' />,
            name: "Search"
        },
        {
            icons: <BiSolidOffer className='text-2xl text-gray-700 hover:text-orange-500' />,
            name: "Offers"
        },
        {
            icons: <IoHelpBuoyOutline className='text-2xl text-gray-700 hover:text-orange-500' />,
            name: "Help"
        },
        {
            icons: <SlPeople className='text-2xl text-gray-700 hover:text-orange-500' />,
            name: "Sign in"
        },
        {
            icons: <CiShoppingCart className='text-2xl text-gray-700 hover:text-orange-500' />,
            name: "Cart"
        }
    ]
    useEffect(() => {
        if (toggle) {
            document.body.classList.add('no-scroll');
          } else {
            document.body.classList.remove('no-scroll');
          }
      
          // Clean up on unmount
          return () => {
            document.body.classList.remove('no-scroll');
          };
    }, [toggle])
    
    function logoclick() {

    }
    return (
        <>
            <div className='bg-[#040720] h-full w-full opacity-50 fixed duration-200 z-10' onClick={() => { setToggle(false) }} style={{ visibility: toggle ? "visible" : 'hidden', }}></div>
            <div className='w-[50vw] h-[100vh] md:w-[570px] bg-white absolute place-content-start pt-9 pl-[160px] duration-300 z-[11]' style={{ left: toggle ? "0%" : '-100%', opacity: toggle ? 1 : 0 }}>
                <div className='w-[50%] flex flex-col items-start gap-8 font-roboto '>
                    <div>
                        <RxCross1 onClick={() => { setToggle(false) }} className=' font-bold text-xl cursor-pointer' />
                    </div>
                    <div >
                        <input className='w-[85%] h-[60px] md:w-[380px] shadow-2xl p-4' type='text' placeholder='Search for area,street name..' />
                    </div>
                    <div className=' w-[70%] h-[90px] md:w-[380px] md:border border-gray-500 flex flex-col items-start p-3 border-opacity-30 cursor-pointer'>
                        <div className='flex justify-start items-center gap-1'>
                            <CiGps className='text-2xl font-medium' />
                            <p className='font-semibold hover:text-orange-500'>Get Your Current Location</p>
                        </div>
                        <p className='text-xs font-thin text-gray-400 pl-7 md:text-[13px] pt-1'>Using GPS</p>
                    </div>
                </div>
            </div>


            <div className='w-full h-[80px] p-[15px] shadow-xl flex justify-center items-center font-roboto sticky top-0 z-[10] bg-white '>
                <div className='w-[80%] flex flex-row justify-between items-center text-black'>

                    <div className='w-[50%] md:w-[20%] flex justify-start gap-4 md:gap-0 flex-row md:justify-evenly items-center ' >
                        <img onClick={logoclick} src={logo} alt='Logo'
                            className='w-[51px] h-[51px] hover:w-[57px] hover:h-[57px] transition-all duration-[300ms] rounded-2xl cursor-pointer' />
                        <div className='flex flex-row justify-center items-center gap-[10px] cursor-pointer' onClick={areasearch} >
                            <p className='font-bold  text-[14px] border-b-[3px] border-black hover:text-orange-500 hover:border-orange-500'>Other</p>
                            <RxCaretDown className='text-2xl text-orange-500' />
                        </div>
                    </div>


                    <div className='hidden md:flex flex-row justify-between items-center gap-12'>
                        {
                            link.map(
                                (l, index) => {
                                    return (
                                        <div key={index} className='flex flex-row justify-center items-center gap-[8px] hover:text-orange-500 cursor-pointer'>
                                            {l.icons}
                                            <p className='text-gray-700 font-medium hover:text-orange-500  text-[16px]'>{l.name}</p>
                                        </div>
                                    )
                                }
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar