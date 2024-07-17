import Logo from "./Logo";
import {animateScroll} from "react-scroll";
import {AiFillHeart} from "react-icons/ai";
import {IoIosArrowUp} from "react-icons/io";
import SocialMedia from "./SocialMedia";
import about from "../data/about.json";
import Navbar from "./Navbar";

const Footer = () => {
    return (
        <footer className="bg-white pt-10 md:pt-14 lg:pt-5 pb-5 relative">
            <div className="container">
                <div className="text-center lg:text-left lg:flex justify-between items-center">
                    <div className="flex justify-between items-center">
                        <Logo /><p>{about.name} - Free URL Shortener</p>
                    </div>
                    
                    <p>
                    {/* <Navbar/> */}
                    {/* <SocialMedia className="mt-10" /> */}
                    {/* Copyright */}
                &copy;2012-{new Date().getFullYear()} <a href="https://vasilkoff.com" target="_blank">Vasilkoff Ltd - Web Development and Design</a> 
                    </p>
                    
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
