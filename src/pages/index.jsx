// src/pages/index.jsx

import HeroArea from '../components/HeroArea'
import Features from '../components/Features'
import Pricing from '../components/Pricing'
import HomeAboutSection from '../components/HomeAbout'
import ClarificationSection from '../components/Clarification'
import Layout from './_layout'

const Home = () => {
    return (
        <Layout>
            <HeroArea />
            <Features />
            <HomeAboutSection />

            {/* <Pricing/> */}
            <ClarificationSection />
        </Layout>
    )
}

export default Home
