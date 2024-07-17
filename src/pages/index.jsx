
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroArea from "../components/HeroArea";
import Features from "../components/Features";
import Pricing from "../components/Pricing";
import HomeAbout from "../components/HomeAbout";
import Clarification from "../components/Clarification";
import SocialMedia from "../components/SocialMedia";

const Home = () => {


    return (
        <>
            <Header/>
            <HeroArea/>
            <Features/>
            <HomeAbout/>
            
            {/* <Pricing/> */}
            <Clarification/>
            
            <Footer/>
        </>
    );
};

export default Home;
