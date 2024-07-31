

import HeroArea from "../components/HeroArea";
import Features from "../components/Features";
import Pricing from "../components/Pricing";
import HomeAbout from "../components/HomeAbout";
import Clarification from "../components/Clarification";
import SocialMedia from "../components/SocialMedia";
import Layout from "./_layout";

const Home = () => {


    return (
        <Layout>
            
            <HeroArea/>
            <Features/>
            <HomeAbout/>
            
            {/* <Pricing/> */}
            <Clarification/>

        </Layout>
    );
};

export default Home;
