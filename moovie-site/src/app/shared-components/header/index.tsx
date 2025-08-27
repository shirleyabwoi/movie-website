"use client";
import { useState } from "react";
import useFetchMovies from "@/app/hooks/useFetchMovies";
import Link from 'next/link';


function Header(){
    return(
        <div>
            <div className='flex bg-gray-950 p-10 text-white gap-20'>
                <p className='text-white text-4xl font-bold ml-50'>M<span className='text-yellow-400'>oo</span>vie</p>
                <div className="relative">
                   <input type="text" placeholder="Search" className="w-200 p-2 pl-10 border rounded-4xl" />
                   <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                   </div>
                </div>
                    <nav className="hidden md:flex items-center space-x-12">
                         <Link href="/" className=" hover:underline decoration-yellow-500 font-bold text-xl">Home</Link>
                         <Link href="/" className="text-xl font-bold hover:underline decoration-yellow-500">My List</Link>
                         <Link href="/signIn" className="bg-amber-400 text-white font-bold p-3 rounded-xl w-30 text-xl text-center">Sign In</Link>
                    </nav>
            </div>
            
        </div>
    )
}
export default Header;




