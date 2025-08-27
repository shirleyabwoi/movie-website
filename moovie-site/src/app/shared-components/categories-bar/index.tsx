"use client";
import { FaGreaterThan } from "react-icons/fa6";

function CategoriesFilter(){
    return(
        <div className="bg-gray-950 p-3">
            <div className="flex gap-20 mt-5 ml-40 mb-5">
                <button className=" bg-yellow-500 text-white rounded-4xl p-3 w-35">All</button>
                <button className="bg-zinc-500 text-white rounded-4xl p-3 w-35">Action</button>
                <button className="bg-zinc-500 text-white rounded-4xl p-3 w-35">Comedy</button>
                <button className="bg-zinc-500 text-white rounded-4xl p-3 w-35">Arabic</button>
                <button className="bg-zinc-500 text-white rounded-4xl p-3 w-35">Series</button>
                <button className="bg-zinc-500 text-white rounded-4xl p-3 w-35">Adventure</button>
                <button className="bg-zinc-500 text-white rounded-4xl p-3 w-35">Other</button>
                <FaGreaterThan className="text-white mt-4"/>
            </div>
        </div>
    )

}

export default CategoriesFilter;