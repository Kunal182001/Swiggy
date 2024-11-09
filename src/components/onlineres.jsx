import React, { useState, useEffect, useRef } from 'react'
import { BsFilterLeft } from "react-icons/bs";
import { MdStars } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";

const Onlineres = () => {

    const [categorey, setCategorey] = useState([]);

    const fetchcategorey = async () => {
        const response = await fetch("http://localhost:5000/top-restaurant-chains");
        const data = await response.json();
        setCategorey(data);
    }
    useEffect(() => {
        fetchcategorey();
    }, [])

    const data = [
        {
            filterName: "Filter",
            icons: <BsFilterLeft className='mt-1' />
        },
        {
            filterName: "Sort By",
            icons: <FaChevronDown className='mt-1 text-[10px]' />
        },
        {
            filterName: "Fast Delivery",
            icons: ""
        },
        {
            filterName: "New on Swiggy",
            icons: ""
        },
        {
            filterName: "Rating 4.0+",
            icons: ""
        },
        {
            filterName: "Pure Veg",
            icons: ""
        },
        {
            filterName: "Offers",
            icons: ""
        },
        {
            filterName: "Rs.300-Rs.600",
            icons: ""
        },
        {
            filterName: "Less than Rs.300",
            icons: ""
        }

    ]

    const elementRef = useRef(null);
    const [isAtTop, setIsAtTop] = useState(false);

    useEffect(() => {
        const handlescroll = () => {
            if (elementRef.current) {
                const rect = elementRef.current.getBoundingClientRect();
                setIsAtTop(rect.top <= 0);
            }
        }
        window.addEventListener("scroll", handlescroll);

        return () => {
            window.removeEventListener("scroll", handlescroll);
        };
    }, []);

    return (
        <div>
            {/* Outer DIV */}
            <div className='w-full h-full flex flex-col items-center mt-12 relative '>
                {/* Main Content */}
                <div className='w-[70%] flex flex-col items-start justify-center md:items-center p-4 shadow-sm'>
                    {/* Scrool part div */}
                    <div className='w-full flex justify-between items-center'>
                        <h1 className='text-2xl text-black font-bold'>Restaurants with online food delivery in Delhi</h1>
                    </div>
                    {/* Filter nav */}
                    <div ref={elementRef} className={isAtTop ? "hidden w-screen sticky top-0 z-[11] h-[80px] bg-white md:flex justify-center" : ""}>
                        <div className={isAtTop ? "w-[90%] flex justify-between items-center gap-2" : ' grid grid-cols-5 gap-6 w-full md:flex justify-start items-center mt-4 md:gap-4'}>
                            {
                                data.map(
                                    (j, id) => {
                                        return (
                                            <div key={id} className='h-[38px] rounded-xl shadow-md flex justify-center items-center gap-1 p-2 cursor-pointer'>
                                                <p className='text-[7px] md:text-[14px] font-semibold'>{j.filterName}</p>
                                                {j.icons}
                                            </div>
                                        )
                                    }
                                )
                            }
                            <div className={isAtTop ? 'hidden w-[370px] h-[56px] md:flex items-center rounded-xl bg-[#f0f0f5]' : 'hidden'}>
                                <input type='text' className='w-[100%] text-[18px] font-[400] leading-[24px] text-[#02060c] bg-[#f0f0f5] pl-4' placeholder='Search for restaurant and food' />
                                <IoSearch className='w-[18px] h-[18px] text-[#02060c] mr-8' />
                            </div>
                        </div>
                    </div>
                    {/* Food items list Div */}
                    <div className='w-full grid grid-cols-1 md:grid-cols-4 gap-4 mt-5 cursor-pointer '>
                        {
                            categorey.map(
                                (i, index) => {
                                    return (
                                        // Card
                                        <div key={index} className='w-full relative h-[285px] md:max-w-[321px] duration-500 flex flex-col items-start '>
                                            <div className='hover:scale-90 duration-200'>
                                                <img className="relative w-[244px] h-[162px] rounded-xl " src={"http://localhost:5000/images/" + i.image} />
                                                <p className='font-bold'>{i.title}</p>
                                                <div className='flex items-center gap-[4px]'>
                                                    <MdStars className='text-green-700 bg-white text-xl' />
                                                    <p className='font-semibold'>{`${i.rating} : ${i.minTime}-${i.maxTime} Mins`}</p>
                                                </div>
                                                <p className='font-semibold text-[#6E7174]'>{i.name}</p>
                                                <p className='font-semibold text-[#6E7174]'>{i.place}</p>
                                            </div>
                                        </div>
                                    )
                                }
                            )
                        }
                    </div>
                    
                </div>
                <div className='w-[70%] h-[1px] bg-slate-800'></div>
            </div>
            
            
        </div>
    )
}

export default Onlineres