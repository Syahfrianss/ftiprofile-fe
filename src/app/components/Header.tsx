import React from "react";

const links = ["Bahasa", "facebook", "Instagram", "Youtube"];
export default function Header() {
    return (
        <nav className="bg-black flex h-12 p-3">

            <svg></svg>

            <a className="text-white ml-3 mr-3 font-semibold">(0341) 566462</a>
            <a className="text-gray-500 mr-3">|</a>
            <a className="text-white font-semibold mr-auto">fti@unmer.ac.id</a>
           
           <ul className="justify-right flex mr-10 gap-6 list-none text-white">
                {links.map((link) => (
                    <li key={link}>
                        <a href="#">{link}</a>
                    </li>
                ))}
           </ul>
        </nav>
    ) 
}