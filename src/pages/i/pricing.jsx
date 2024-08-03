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
                        {/* Plan 1: Free */}
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h2 className="text-2xl font-bold mb-4">Free Plan</h2>
                            <p className="text-gray-700">For occasional users</p>
                            <ul className="list-disc mt-4">
                                <li>Basic URL shortening</li>
                                <li>QR code generation</li>
                                <li>Limited analytics</li>
                            </ul>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                                Get Started
                            </button>
                        </div>

                        {/* Plan 2: Paid */}
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h2 className="text-2xl font-bold mb-4">Paid Plan</h2>
                            <p className="text-gray-700">For regular users</p>
                            <p className="text-2xl font-bold text-blue-500 mb-4">$2/month</p>
                            <ul className="list-disc mt-4">
                                <li>All Free plan features</li>
                                <li>Custom short links</li>
                                <li>Advanced analytics</li>
                                <li>Priority support</li>
                            </ul>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                                Upgrade
                            </button>
                        </div>


                    </div>
                </div>
            </section>
        </Layout>
    );
}
