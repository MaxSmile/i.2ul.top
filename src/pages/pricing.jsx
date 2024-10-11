// pages/pricing.jsx
import Head from 'next/head';
import Layout from './_layout';
import { BASE_URL, CLIENT_URL, CUSTOMER_URL } from '../data/constants';
import PricingCard from '../components/PricingCard';

export default function PricingPage() {
    const anonymousFeatures = [
        { icon: "check", text: "Unlimited free links" },
        { icon: "times", text: "No saved link history" },
        { icon: "times", text: "No custom slugs" },
        { icon: "check", text: "Basic QR code generation" },
        { icon: "check", text: "Basic analytics (click counter only)" }
    ];

    const freePlanFeatures = [
        { icon: "check", text: "Save and manage your links" },
        { icon: "check", text: "Bulk URL shortening" },
        { icon: "check", text: "Custom short URLs (choose your own link ending)" },
        { icon: "check", text: "Advanced QR code generation" },
        { icon: "check", text: "Custom analytics integration (Google Tag Manager, Facebook Pixel)" }
    ];

    const premiumPlanFeatures = [
        { icon: "check", text: "All Free plan features" },
        { icon: "check", text: "Customizable redirect delays" },
        { icon: "check", text: "100% customizable redirect pages (raw HTML), allowing you to monetize with your own ads" },
        { icon: "check", text: "Advanced analytics integration (Google Tag Manager, Facebook Pixel)" },
        { icon: "check", text: "Edit your shortened links" },
        { icon: "check", text: "Use custom domains" }
    ];

    return (
        <Layout>
            <Head>
                <title>Pricing | 2ul.top</title>
                <meta name="description" content="Check out our pricing plans for 2ul.top" />
            </Head>
            <section className="py-24" id="pricing">
                <div className="container mx-auto max-w-4xl p-4">
                    <h1 className="mb-5 text-3xl font-bold text-secondary">Pricing</h1>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Anonymous Use */}
                        <PricingCard 
                            plan="Anonymous Use" 
                            price="Free" 
                            features={anonymousFeatures} 
                            link={BASE_URL} 
                            buttonText="Start Now" 
                        />

                        {/* Free Forever Plan */}
                        <PricingCard 
                            plan="Free Forever Plan" 
                            price="$0/month" 
                            features={freePlanFeatures} 
                            link={CLIENT_URL} 
                            buttonText="Register" 
                        />

                        {/* Premium Plan */}
                        <PricingCard 
                            plan="Premium Plan" 
                            price="$10/month" 
                            features={premiumPlanFeatures} 
                            link={CUSTOMER_URL} 
                            buttonText="Upgrade Now" 
                        />
                    </div>
                </div>
            </section>
        </Layout>
    );
}
