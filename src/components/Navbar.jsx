import React, { useState, useEffect } from 'react'
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
import { GiHamburgerMenu } from "react-icons/gi";
import { StandaloneSearchBox, LoadScript } from '@react-google-maps/api'

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

    //For moblie screen
    const [isClick, setisClick] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    function sideMenuclick() {
        if (isClick) {
            setisClick(false);
        }
        else {
            setisClick(true);
        }
    }



    //For Search Box 
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [location, setLocation] = useState('others');

    const handleSearch = async (e) => {
        const searchQuery = e.target.value;
        setQuery(searchQuery);

        if (searchQuery.length > 2) {  // Start searching after 3 characters
            const response = await fetch(
                `https://nominatim.openstreetmap.org/search?format=json&countrycodes=IN&q=${searchQuery}`
            );
            const data = await response.json();
            setResults(data);
        } else {
            setResults([]);  // Clear results if query length is less than 3
        }
    };

    const handleSelectLocation = (location) => {
        const addressParts = location.display_name.split(', ');
        const formattedAddress = addressParts.slice(0, 2).join(', ');
        setLocation(formattedAddress);
        setResults([]);
        setQuery(location.display_name);
        setToggle(false);
    };

    return (
        <>
            <div className='bg-[#040720] h-full w-full opacity-50 fixed duration-200 z-10' onClick={() => { setToggle(false) }} style={{ visibility: toggle ? "visible" : 'hidden', }}></div>
            <div
                className={`w-[80vw] sm:w-[60vw] md:w-[570px] h-full bg-white absolute top-0 left-0 transform ${toggle ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"} duration-300 z-[11] pt-6 pl-6 md:pl-[160px]`}
            >
                <div className="w-full sm:w-[70%] md:w-[50%] flex flex-col items-start gap-6 font-roboto px-4 md:px-0">
                    <div>
                        <RxCross1
                            onClick={() => { setToggle(false) }}
                            className="text-xl font-bold cursor-pointer"
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            value={query}
                            onChange={handleSearch}
                            placeholder="Search for location..."
                            className="w-full h-[50px] sm:h-[60px] shadow-md p-3 sm:p-4 md:w-[380px] rounded-md no-underline"
                        />
                        {results.length > 0 && (
                            <ul className="list-none p-0 m-0 border border-gray-300 max-h-[200px] overflow-y-auto no-underline">
                                {results.map((result) => (
                                    <li
                                        key={result.place_id}
                                        onClick={() => handleSelectLocation(result)}
                                        className="p-2 cursor-pointer border-b border-gray-200 no-underline"
                                    >
                                        {result.display_name}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    <div className="w-full sm:w-[80%] md:w-[380px] border border-gray-300 p-3 flex flex-col items-start rounded-md cursor-pointer hover:shadow-md transition-shadow duration-200">
                        <div className="flex items-center gap-2">
                            <CiGps className="text-2xl" />
                            <p className="font-semibold hover:text-orange-500">Get Your Current Location</p>
                        </div>
                        <p className="text-xs text-gray-400 pl-8 md:text-[13px]">Using GPS</p>
                    </div>
                </div>
            </div>



            <div className='w-full h-[80px] p-[15px] shadow-xl flex justify-center items-center font-roboto sticky top-0 z-[10] bg-white '>
                <div className='w-[80%] flex flex-row justify-between items-center text-black'>

                    <div className='w-[50%] md:w-[20%] flex justify-start gap-5 md:gap-1 flex-row md:justify-evenly items-center no-underline ' >
                        <img src={logo} alt='Logo'
                            className='w-[51px] h-[51px] hover:w-[57px] hover:h-[57px] transition-all duration-[300ms] rounded-2xl cursor-pointer' />
                        <div className='flex flex-row justify-center items-center gap-[10px] cursor-pointer' onClick={areasearch} >
                            <p className='font-bold h-full text-[14px]  hover:text-orange-500 hover:border-orange-500 no-underline'>{location}</p>
                            <RxCaretDown className='text-2xl text-orange-500' />
                        </div>
                    </div>
                    <div className="hidden md:flex flex-row  justify-center md:justify-between items-center gap-2 lg:gap-12">
                        {link.map((l, index) => (
                            <div
                                key={index}
                                className="flex flex-row justify-center items-center gap-2 lg:gap-3 hover:text-orange-500 cursor-pointer"
                            >
                                {l.icons}
                                <p className="text-gray-700 font-medium hover:text-orange-500 text-[5px] md:text-[16px] lg:text-lg">
                                    {l.name}
                                </p>
                            </div>
                        ))}
                    </div>
                    <div onClick={sideMenuclick} className={isMobile ? "block" : "hidden"}>
                        <GiHamburgerMenu className='text-2xl hover:text-orange-500 cursor-pointer' />
                    </div>

                </div>
            </div>
            <div className={isClick ? 'w-screen h-full flex flex-col items-center gap-1 bg-slate-400 ' : "hidden"}>
                {link.map((l, index) => (
                    <div
                        key={index}
                        className="w-full h-[50px]  hover:text-orange-500 cursor-pointer flex justify-center items-center">

                        <p className="text-white font-semibold hover:text-orange-500 text-[20px]">
                            {l.name}
                        </p>
                    </div>
                ))}

            </div>
        </>
    )
}

export default Navbar