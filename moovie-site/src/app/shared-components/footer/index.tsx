"use client";
import Image from 'next/image';
import { FaFacebookF, FaApple, FaWhatsapp, FaInstagram } from "react-icons/fa6";

function Footer(){
    return(
        <div>
            <footer className='bg-gray-950'>
                <hr className="border-t border-yellow-400 w-475 mb-10"></hr>
                <div className='flex p-5 gap-40'>
                    <div className='ml-50'>
                        <h3 className='text-lg mb-4 font-semibold text-white'>Download Our App</h3>
                        <div className='flex items-center gap-2 mb-4'>
                            <Image src="/images/popcorn.png" alt='movie' width={40} height={40} className='rounded' />
                            <p className='text-white text-xl font-bold'>M<span className='text-yellow-400'>oo</span>vie</p>
                        </div>
                        <div className='flex gap-2'>
                            <button className='flex gap-2 bg-zinc-700 p-2 rounded-4xl w-40 h-15'>
                                <FaApple className='text-white mt-2 text-xl'/>
                                <p className='text-white text-sm'>Download on the<br></br><span className='font-bold'>App Store</span></p>
                            </button>
                            <button className='flex gap-2 bg-zinc-700 p-2 rounded-4xl w-40 h-15'>
                                <Image src='/images/playstoreicon.png' alt='Google Play' width={25} height={25} className='mt-2'/> 
                                <p className='text-white text-sm'>Get it on<br></br><span className='font-bold'>Google Play</span></p>
                            </button>
                        </div>
                    </div>
                    <div>
                        <h3 className='mb-4 font-semibold text-white'>Navigation</h3>
                        <ul className='text-neutral-400'>
                            <li><a href=''>Home</a></li>
                            <li><a href=''>My List</a></li>
                            <li><a href=''>About Us</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='mb-4 font-semibold text-white'>Legal</h3>
                        <ul className='text-neutral-400'>
                            <li><a href=''></a>General Info</li>
                            <li><a href=''></a>Privacy Policy</li>
                            <li><a href=''></a>Terms of Service</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='mb-4 font-semibold text-white'>Contact Us</h3>
                        <ul className='text-neutral-400'>
                            <li>support@egymovies.com</li>
                            <li>Tel: +201045963322</li>
                            <li className='mt-2'>OR By Using:</li>
                        </ul>
                        <div className='flex gap-3 mt-2'>
                            <FaFacebookF className='cursor-pointer border border-neutral-500 p-1 text-2xl rounded-full text-white'/>
                            <FaInstagram className='cursor-pointer cursor-pointer border border-neutral-500 p-1 text-2xl rounded-full text-white'/>
                            <FaWhatsapp className='cursor-pointer cursor-pointer border border-neutral-500 p-1 text-2xl rounded-full text-white'/>
                        </div>
                    </div>
                    <div>
                            <h3 className='text-white mb-4 font-semibold'>Share Website Via</h3>
                            <ul className='grid text-neutral-400 gap-4'>
                                <li className='flex gap-4'>
                                    <FaFacebookF className='cursor-pointer cursor-pointer border border-neutral-500 p-1 text-2xl rounded-full text-white'/>
                                    <a href=''>Facebook</a>
                                </li>
                                 <li className='flex gap-4'>
                                    <FaInstagram className='cursor-pointer cursor-pointer border border-neutral-500 p-1 text-2xl rounded-full text-white'/>
                                    <a href=''>Instagram</a>
                                </li>
                            </ul>
                    </div>
                    
                </div> 
                <hr className="border-t border-neutral-400 w-250 ml-130 mt-10 mb-4"></hr>
                <div className="text-white text-sm text-center pb-5" >© {new Date().getFullYear()} Moovie. All rights reserved.</div>            
            </footer>

        </div>
    )

}
export default Footer;


