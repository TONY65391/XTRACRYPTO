import { Link } from "./Link";
import Logo from "../assets/images/logo.png";
import bg_top from "../assets/images/bg-top.png"
import { useState } from "react";

export function Header(){
    const [isOpen, setIsOpen] = useState(false);

    return(
        <header className="flex items-center justify-between p-5 relative">
            <div className="w-2/5 md:w-1/6">
                <img className="" src={Logo} alt="" />
            </div>

            <ul className="flex items-center justify-between gap-10 text-white hidden lg:flex">
                <li><a href="#" className="ACTIVE_LINK">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Pages</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>

            <div className="hidden lg:flex">
                <Link text="GET STARTED"/>
            </div>

            <nav className="lg:hidden flex flex-col group cursor-pointer gap-1 items-center justify-center w-fit " onClick={() => {setIsOpen(!isOpen)}}>
                <div className={`w-[25px] h-[4px] ml-auto group-hover:bg-white rounded-md ${ isOpen ? `bg-white` : `bg-orange-500` }`}></div>
                <div className={`w-[20px] h-[4px] ml-auto group-hover:bg-white rounded-md ${ isOpen ? `bg-white` : `bg-orange-500` } `}></div>
                <div className={`w-[15px] h-[4px] ml-auto group-hover:bg-white rounded-md ${ isOpen ? `bg-white` : `bg-orange-500` }`}></div>
            </nav>

            <div className={`absolute top-0 right-0 z-2 lg:hidden SUBMENU overflow-hidden py-5 text-white h-screen w-3/5 ${ isOpen ? `VISIBLE` : `HIDDEN` }`}>
                <div className="text-center flex items-center justify-between px-3"><h3>SubMenu</h3> <i class="fa-solid fa-xmark cursor-pointer hover:text-orange-500" onClick={() => {setIsOpen(!isOpen)}}></i></div>
                <ul className="mt-15 px-2">
                    <li><a href="#" className={`border-2 border-orange-500 hover:px-4 hover:bg-white hover:text-orange-500 rounded-md block mt-2 py-1 px-2`}>Home</a></li>
                    <li><a href="#" className={`border-2 border-orange-500 hover:px-4 hover:bg-white hover:text-orange-500 rounded-md block mt-2 py-1 px-2`}>About Us</a></li>
                    <li><a href="#" className={`border-2 border-orange-500 hover:px-4 hover:bg-white hover:text-orange-500 rounded-md block mt-2 py-1 px-2`}>Services</a></li>
                    <li><a href="#" className={`border-2 border-orange-500 hover:px-4 hover:bg-white hover:text-orange-500 rounded-md block mt-2 py-1 px-2`}>Pages</a></li>
                    <li><a href="#" className={`border-2 border-orange-500 hover:px-4 hover:bg-white hover:text-orange-500 rounded-md block mt-2 py-1 px-2`}>Blog</a></li>
                    <li><a href="#" className={`border-2 border-orange-500 hover:px-4 hover:bg-white hover:text-orange-500 rounded-md block mt-2 py-1 px-2`}>Contact Us</a></li>
                </ul>

                <div className="mt-10">
                    <div className="flex items-center justify-center px-5 gap-5">
                        <i className="text-2xl  fa-brands fa-facebook"></i>
                        <i className="text-2xl  fa-brands fa-whatsapp"></i>
                        <i className="text-2xl  fa-brands fa-tiktok"></i>
                        <i className="text-2xl  fa-brands fa-instagram"></i>
                        <i className="text-2xl  fa-brands fa-twitter"></i>
                    </div>
                </div>

                <img className="absolute bottom-0 rotate-180" src={bg_top} alt="" />
            </div>
        </header>
    )
}