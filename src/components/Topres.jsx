import React, { useState, useEffect } from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { MdStars } from "react-icons/md";

const Topres = () => {
    const [slide, setSlide] = useState(0);
    const [categorey, setCategorey] = useState([]);

    const nextSlide = () => {
        if (slide < 8) {
            setSlide(slide + 2);
        }
        console.log(slide);
    }
    const prevSlide = () => {
        if (slide > 0) {
            setSlide(slide - 2);
        }

        console.log(slide);
    }

    const fetchcategorey = async () => {
        const response = await fetch("http://localhost:5000/top-restaurant-chains");
        const data = await response.json();
        setCategorey(data);
    }
    useEffect(() => {
        fetchcategorey();
    }, [])
    return (
        <div>
            {/* Outer DIV */}
            <div className='w-full h-[380px] flex flex-col items-center mt-12 '>
                {/* Main Content */}
                <div className='w-[70%] flex flex-col  justify-center items-center p-4 shadow-sm'>
                    {/* Scrool part div */}
                    <div className='w-full flex flex-col md:flex-row justify-between items-center'>
                        <h1 className='text-2xl text-black font-bold'>Top restaurants chains in Delhi</h1>
                        <h2 className=' md:text-[0px] text-xl text-black font-medium'>Swipe Right or Left Side to see restaurants </h2>
                        <div className='hidden md:flex justify-center gap-4 cursor-pointer'>
                            <div className='h-[34px] p-2 bg-[#D9D9DA] rounded-full ' onClick={prevSlide} style={{
                                opacity: slide <= 0 ? 0.3 : 0.6
                            }}><FaArrowLeft /></div>
                            <div className='h-[34px] p-2 bg-[#D9D9DA] rounded-full opacity-60 ' onClick={nextSlide} style={{
                                opacity: slide >= 8 ? 0.3 : 0.6
                            }}><FaArrowRight /></div>
                        </div>
                    </div>
                    {/* Food items list Div */}
                    <div className='w-full flex justify-between items-center overflow-y-hidden overscroll-auto mt-5 gap-1 cursor-pointer md:mb-10 '>
                        {
                            categorey.map(
                                (i, index) => {
                                    return (
                                        // Card
                                        <div key={index} className='w-full relative h-[285px] md:w-[321px] shrink-0 duration-500 flex flex-col items-start '
                                            style={{
                                                transform: `translateX(-${slide * 100}%)`
                                            }}>
                                            <div className=' group'>
                                                <div>
                                                <img className="relative w-[259px] h-[173px] rounded-xl group-hover:scale-90 duration-200 " src={"http://localhost:5000/images/" + i.image} />
                                                <div className=' w-[259px] fixed  bottom-[112px] left-[1px] bg-gradient-to-t from-black/100 to-transparent rounded-xl group-hover:scale-90 duration-200' >
                                                    <p className='text-[20px] text-white font-[800] pl-2 '>{i.offer}</p></div>
                                                    </div>
                                                <p className='font-bold group-hover:scale-90 duration-200'>{i.title}</p>
                                                <div className='flex items-center gap-[4px] group-hover:scale-90 duration-200'>
                                                    <MdStars className='text-green-700 bg-white text-xl' />
                                                    <p className='font-semibold'>{`${i.rating} : ${i.minTime}-${i.maxTime} Mins`}</p>
                                                </div>
                                                <p className='font-semibold text-[#6E7174] group-hover:scale-90 duration-200'>{i.name}</p>
                                                <p className='font-semibold text-[#6E7174] group-hover:scale-90 duration-200'>{i.place}</p>
                                            </div>
                                        </div>
                                    )
                                }
                            )
                        }
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Topres