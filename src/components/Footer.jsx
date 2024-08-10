import Logo from "./Logo";
import {animateScroll} from "react-scroll";
import {AiFillHeart} from "react-icons/ai";
import {IoIosArrowUp} from "react-icons/io";
import SocialMedia from "./SocialMedia";
import about from "../data/about.json";
import version from "../version.js";
import { FaGithub } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-white pt-10 md:pt-14 lg:pt-5 pb-5 relative">
            <div className="container">
                <div className="text-center lg:text-left lg:flex justify-between items-center">
                    <div className="flex justify-between items-center">
                        <Logo chain={false} className={'pr-6'}/><p>{about.name} - Free URL Shortener
                        <a href="https://github.com/MaxSmile/2ul.top" target="_blank"><FaGithub className="inline ml-2" /> <span className="text-xs text-gray-500 hover:underline">v.{version} </span> </a>
                        </p>
                        
                    </div>
                    
                    <p>
                    {/* <Navbar/> */}
                    {/*  */}
                    {/* Copyright */}
                &copy;2012-{new Date().getFullYear()} <a href="https://vasilkoff.com" target="_blank" className="hover:underline">Vasilkoff Ltd - Web Development and Design</a> 
                
                    </p>
                    {/* <SocialMedia className="mt-10" /> */}
                </div>
                
                
            </div>

            {/* Scroll to top button */}
            <button
                onClick={() => animateScroll.scrollToTop()}
                className="absolute left-1/2 -top-[35px] -translate-x-1/2 bg-white w-14 md:w-[70px] h-14 md:h-[70px] rounded-full text-center shadow-scroll-top"
            >
                <IoIosArrowUp className="inline text-2xl"/>
            </button>
        </footer>
    );
};

export default Footer;
