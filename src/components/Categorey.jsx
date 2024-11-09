import React, { useState,useEffect } from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const Categorey = () => {
    const [slide,setSlide]=useState(0);
    const [categorey,setCategorey]=useState([]);

    const nextSlide=()=>{
        if(slide<=12){
            setSlide(slide=>slide+2);
        }
        console.log(slide);
    }
    const prevSlide=()=>{
        if(slide>0){
            setSlide(slide=>slide-2);
        }
        
        console.log(slide);
    }

    const fetchcategorey = async ()=>{
        const response= await fetch("http://localhost:5000/categories");
        const data= await response.json();
        setCategorey(data);
    }
    useEffect(() => {
        fetchcategorey();
    }, [])
    
  return (
    <div>
        {/* Outer DIV */}
        <div className='w-full h-[256px] flex flex-col items-center mt-3 '>
            {/* Main Content */}
            <div className='w-[70%] flex flex-col  justify-center items-center p-4 shadow-sm'>
                {/* Scrool part div */}
                <div className='w-full flex flex-col md:flex-row justify-between items-center'>
                    <h1 className='text-2xl text-black font-bold'>What's on your mind?</h1>
                    <h2 className=' md:text-[0px] text-xl text-black font-medium'>Swipe Right or Left Side to see restaurants </h2>
                    <div className='hidden md:flex justify-center gap-4 cursor-pointer'>
                        <div className='h-[34px] p-2 bg-[#D9D9DA] rounded-full ' onClick={prevSlide} style={{
                            opacity:slide<=0? 0.3:0.6
                        }}><FaArrowLeft/></div>
                        <div className='h-[34px] p-2 bg-[#D9D9DA] rounded-full opacity-60 ' onClick={nextSlide} style={{
                            opacity:slide>=14? 0.3:0.6
                        }}><FaArrowRight/></div>
                    </div>
                </div>
                {/* Food items list Div */} 
                <div className='w-full flex justify-between items-center overflow-y-hidden overscroll-auto mt-1 gap-1 cursor-pointer md:mb-10'>
                    {
                        categorey.map(
                            (i,index)=>{
                                return(
                                    <div key={index} className=' h-[180px] w-[144px] shrink-0 duration-300'
                                        style={{
                                            transform:`translateX(-${slide*100}%)`
                                        }}
                                    >
                                        <img className=""src={"http://localhost:5000/images/"+i.image}/>
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

export default Categorey