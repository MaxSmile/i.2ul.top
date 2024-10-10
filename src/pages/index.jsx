import Head from 'next/head'
import Layout from './_layout'
import HeroSection from '../components/HeroSection'
import FeaturesSection from '../components/FeaturesSection'
import UseCasesSection from '../components/UseCasesSection'
import AdvancedAnalyticsSection from '../components/AdvancedAnalyticsSection'
import CustomRedirectionSection from '../components/CustomRedirectionSection'
import FinalCTASection from '../components/FinalCTASection'

const Home = () => {
    return (
        <Layout>
            <Head>
                <title>2ul.top - Free URL Shortener with Premium Features</title>
                <meta name="description" content="Transform long URLs into concise, shareable links with 2ul.top. Free URL shortener with premium features like custom links and QR code generation." />
                <meta name="keywords" content="URL Shortener, Free URL Shortener, QR Code Generation, Custom Short Links" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="2ul.top - Free URL Shortener with Premium Features" />
                <meta property="og:description" content="Transform long URLs into concise, shareable links with 2ul.top. Free URL shortener with premium features like custom links and QR code generation." />
                <meta property="og:image" content="https://2ul.top/imgs/og/image.webp" />
                <meta property="og:url" content="https://2ul.top" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="2ul.top - Free URL Shortener with Premium Features" />
                <meta name="twitter:description" content="Transform long URLs into concise, shareable links with 2ul.top. Free URL shortener with premium features like custom links and QR code generation." />
                <meta name="twitter:image" content="https://2ul.top/imgs/og/image.webp" />

                {/* JSON-LD Structured Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Website",
                            "name": "2ul.top",
                            "url": "https://2ul.top",
                            "description": "Transform long URLs into concise, shareable links with 2ul.top. Free URL shortener with premium features like custom links and QR code generation.",
                            "image": "https://2ul.top/imgs/og/image.webp",
                            "author": {
                                "@type": "Organization",
                                "name": "Vasilkoff Ltd"
                            }
                        })
                    }}
                />
            </Head>
            
            <HeroSection />
            <FeaturesSection /> 
            <UseCasesSection />
            <AdvancedAnalyticsSection />
            <CustomRedirectionSection />
            <FinalCTASection />

        </Layout>
    )
}

export default Home
