import React from 'react'
import playstore from '../assets/playstore.png'
import appstore from '../assets/appstore.png'
import logo from '../assets/Logo.jpg'
import { MdCopyright } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

const Endpart = () => {
    return (
            <div className='w-full h-full flex flex-col items-center border relative bg-[#F0F0F5] pb-16'>
                <div className='w-[70%] flex flex-col'>
                    {/* PlayStore and App store section */}
                    <div className='w-full flex flex-col md:flex-row items-center'>
                        <h1 className='text-2xl text-[#3D4047] font-[800]'>For better experience,download the Swiggy app now</h1>
                        <img className='max-w-[250px] h-[130px] rounded-lg cursor-pointer' src={playstore} />
                        <img className='max-w-[250px] h-[64px] rounded-lg cursor-pointer' src={appstore} />
                    </div>
                    {/* Term and Condition */}
                    <div className='w-full h-full flex flex-col md:flex-row gap-5 md:gap-0 md:justify-between mt-8 '>
                        <div className='w-full flex flex-col'>
                            <div className='flex items-center gap-2'>
                                <img src={logo} className='w-[51px] h-[51px] rounded-xl'/>
                                <p className='text-3xl text-[#FE5005] font-bold'>Swiggy</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <MdCopyright className='text-[#02060c] opacity-50'/>
                                <p className='text-[16px] text-[#02060c] opacity-70'>2024 Swiggy Limited</p>
                            </div>
                        </div>
                        <ul className='w-full flex flex-col gap-2 cursor-pointer'>
                            <li className='text-xl text-[#15191F] font-[700]'>Company</li>
                            <li className='text-[#616469] text-[16px] font-[400]'>About Us</li>
                            <li className='text-[#616469] text-[16px] font-[400]'>Swiggy Corporate</li>
                            <li className='text-[#616469] text-[16px] font-[400]'>Careers</li>
                            <li className='text-[#616469] text-[16px] font-[400]'>Team</li>
                            <li className='text-[#616469] text-[16px] font-[400]'>Swiggy One</li>
                            <li className='text-[#616469] text-[16px] font-[400]'>Swiggy Instamart</li>
                            <li className='text-[#616469] text-[16px] font-[400]'>Swiggy Dineout</li>
                            <li className='text-[#616469] text-[16px] font-[400]'>Swiggy Genie</li>
                        </ul>
                        <div className='w-full flex flex-col gap-10 cursor-pointer'>
                            <ul className='w-full flex flex-col gap-2'>
                                <li className='text-xl text-[#15191F] font-[700]'>Contact</li>
                                <li className='text-[#616469] text-[16px] font-[400]'>Help & Support</li>
                                <li className='text-[#616469] text-[16px] font-[400]'>Partner with us</li>
                                <li className='text-[#616469] text-[16px] font-[400]'>Ride with us</li>
                            </ul>
                            <ul className='w-full flex flex-col gap-2'>
                                <li className='text-xl text-[#15191F] font-[700]'>Legal</li>
                                <li className='text-[#616469] text-[16px] font-[400]'>Terms & Conditions</li>
                                <li className='text-[#616469] text-[16px] font-[400]'>Cookie Policy</li>
                                <li className='text-[#616469] text-[16px] font-[400]'>Privacy Policy</li>
                                <li className='text-[#616469] text-[16px] font-[400]'>Investor Relations</li>
                            </ul>
                        </div>
                        <div className='w-full flex flex-col gap-10 cursor-pointer'>
                            <ul className='w-full flex flex-col gap-2'>
                                <li className='text-xl text-[#15191F] font-[700]'>Available in:</li>
                                <li className='text-[#616469] text-[16px] font-[400]'>Bangalore</li>
                                <li className='text-[#616469] text-[16px] font-[400]'>Gurgaon</li>
                                <li className='text-[#616469] text-[16px] font-[400]'>Hyderabad</li>
                                <li className='text-[#616469] text-[16px] font-[400]'>Delhi</li>
                                <li className='text-[#616469] text-[16px] font-[400]'>Mumbai</li>
                                <li className='text-[#616469] text-[16px] font-[400]'>Pune</li>
                            </ul>
                            <div className=' w-[90px] flex items-center text-[14px] font-[400] text-[#616469] gap-2 border border-slate-400 rounded-md p-1'>
                                <p>679 cities</p>
                                <FaChevronDown className='mt-1'/>
                            </div>
                        </div>
                        <div className='w-full flex flex-col gap-10 cursor-pointer'>
                            <ul className='w-full flex flex-col gap-2'>
                                <li className='text-xl text-[#15191F] font-[700]'>Life at Swiggy</li>
                                <li className='text-[#616469] text-[16px] font-[400]'>Explore with Swiggy</li>
                                <li className='text-[#616469] text-[16px] font-[400]'>Swiggy News</li>
                                <li className='text-[#616469] text-[16px] font-[400]'>Snackables</li>
                            </ul>
                            <div className='w-full flex flex-col items-start gap-3'>
                                <p className='text-xl text-[#15191F] font-[700]'>Social Links</p>
                                <div className='flex items-center text-[18px]  text-[#15191F] gap-4'>
                                    <FaLinkedin/>
                                    <FaInstagram/>
                                    <FaFacebookF/>
                                    <FaPinterest/>
                                    <FaXTwitter/>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Endpart