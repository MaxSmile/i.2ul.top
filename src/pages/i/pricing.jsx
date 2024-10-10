import Head from 'next/head';
import Layout from '../_layout';

export default function PricingPage() {
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
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h2 className="text-2xl font-bold mb-4">Anonymous Use</h2>
                            <p className="text-gray-700">For unregistered users</p>
                            <ul className="list-disc mt-4">
                                <li>Unlimited free links</li>
                                <li>No saved link history</li>
                                <li>No custom slugs</li>
                                <li>Basic QR code generation</li>
                                <li>Basic analytics (click counter only)</li>
                            </ul>
                        </div>

                        {/* Free Forever Plan */}
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h2 className="text-2xl font-bold mb-4">Free Forever Plan</h2>
                            <p className="text-gray-700">For occasional users</p>
                            <ul className="list-disc mt-4">
                                <li>Save and manage your links</li>
                                <li>Bulk URL shortening</li>
                                <li>Custom short URLs (choose your own link ending)</li>
                                <li>Advanced QR code generation</li>
                                <li>Custom analytics integration (Google Tag Manager, Facebook Pixel)</li>
                            </ul>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                                Get Started
                            </button>
                        </div>

                        {/* Premium Plan */}
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h2 className="text-2xl font-bold mb-4">Premium Plan</h2>
                            <p className="text-gray-700">For regular users and businesses</p>
                            <p className="text-2xl font-bold text-blue-500 mb-4">$10/month</p>
                            <ul className="list-disc mt-4">
                                <li>All Free plan features</li>
                                <li>Customizable redirect delays</li>
                                <li>100% customizable redirect pages (raw HTML), allowing you to monetize with your own ads</li>
                                <li>Advanced analytics integration (Google Tag Manager, Facebook Pixel)</li>
                                <li>Edit your shortened links</li>
                                <li>Use custom domains</li>
                            </ul>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                                Upgrade Now
                            </button>
                        </div>

                    </div>
                </div>
            </section>
        </Layout>
    );
}
