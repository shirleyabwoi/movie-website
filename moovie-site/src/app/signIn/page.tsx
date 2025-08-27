"use client";
import { useState } from "react";
import Image from 'next/image';
import { FaEyeSlash } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";

function SignIn(){
const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
const[showPassword, setShowPassword]= useState(false);

return(
    <div>
         <div className="relative ">
             <Image src="/images/movies-tiles.jpg" alt="movies" width={2000} height={1000} className="brightness-40 w-screen h-screen max-w-full h-auto object-cover"/>
             <div className="absolute inset-0">
                <h1 className="text-yellow-400 text-6xl mt-15 ml-70 font-bold">MOOVIE</h1>
             <div>
            <form  className="bg-black/75 w-130 h-155 ml-175 p-10">
             <div className="">
                <h1 className="text-yellow-300 ml-40 font-bold mb-10 text-4xl">Sign In</h1>
                <div>
                 <input type="text" name="email" placeholder="Email or Phone Number" value={formData.email} onChange={handleInputChange}
                  className=" border border-neutral-400 text-white rounded-none placeholder:text-neutral-400 w-100 p-3 mb-15 ml-5"/>
                </div>
                <div className="relative ml-5 mb-15 w-100">
                   <input type={showPassword ? "text" : "password"} name="password" placeholder="Password" value={formData.password} onChange={handleInputChange}
                      className="border border-neutral-400 text-white rounded-none placeholder:text-neutral-400 w-full p-3"/>
                      <button type="button" onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-4 text-white">
                          {showPassword ? <FaEyeSlash/> : <FaEye/>}
                      </button>
                </div>
                 <button type="submit" className="w-100 h-12 ml-5 bg-yellow-400 text-black text-base font-medium rounded-sm hover:cursor-pointer">Sign In</button>
                 <p className="text-white mt-5 mb-5 ml-50 font-bold">OR</p>
                 <button type="submit" 
                  className="w-100 h-12 bg-neutral-500/50 text-white text-base font-bold ml-5 rounded-sm hover:cursor-pointer">Use a Sign In Code</button>
                </div>
                <p className="mt-3 text-yellow-400 hover:cursor-pointer underline ml-40 mt-10">Forgot password?</p>                
            </form>
          </div>
             </div>
         </div>

    </div>
)
}

export default SignIn;