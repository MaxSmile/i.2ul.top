import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import about from "../data/about.json";
import { IoCopyOutline } from 'react-icons/io5';

const HeroArea = () => {
    const [url, setUrl] = useState('');
    const [result, setResult] = useState('');
    const [isError, setIsError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3001/urls', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    originalURL: url
                }),
            });

            if (response.ok) {
                const data = await response.json();
                setResult(data.mappingID);
                setIsError(false);
            } else {
                const errorData = await response.json();
                setResult(`Error: ${errorData.error}`);
                setIsError(true);
            }
        } catch (error) {
            setResult(`Error: ${error.message}`);
            setIsError(true);
        }
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(`https://2ul.top/${result}`).then(() => {
            alert('Copied to clipboard!');
        }).catch((err) => {
            console.error('Error copying to clipboard', err);
        });
    };

    return (
        <section className="py-24" id="clarification">
            <div className="container mx-auto p-4">
                <h2 className="text-2xl sm:text-[45px] md:text-[55px] font-light mt-16">
                    Shorten Your URLs
                </h2>
                <h1 className="tracking-4 mt-6 sm:mt-4 font-light">
                    Transform long, unwieldy URLs into concise, shareable links with {about.name} - Free URL Shortener
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                    <div>
                        <form className="flex flex-col items-center gap-4 mt-6" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                placeholder="Enter your long URL here..."
                                value={url}
                                onChange={(e) => setUrl(e.target.value)}
                                className="p-2 border border-gray-300 rounded w-full md:w-96"
                            />
                            <button type="submit" className="p-2 bg-blue-600 text-white rounded hover:bg-blue-500 mt-4">
                                Shorten URL
                            </button>
                            <a href="https://client.2ul.top?reason=custom" className="text-blue-600 mt-2">
                                Would you like to use a custom name?
                            </a>
                        </form>
                    </div>
                    <div>
                        {result && (
                            <div className="mt-4 text-lg text-center">
                                {isError ? (
                                    <span className="text-red-500">{result}</span>
                                ) : (
                                    <div className="flex items-center">
                                        <span className="p-0 rounded w-full md:w-96 mr-2 text-gray-600">
                                            2UL.top/<span className="text-blue-600">{result}</span>
                                        </span>
                                        <IoCopyOutline size={20} title='Copy' className="cursor-pointer" onClick={copyToClipboard} />
                                    </div>
                                )}
                            </div>
                        )}
                        <div className='mt-4 flex justify-center'>
                            {!isError && <QRCode value={`https://2ul.top/${result}`} size={256} />}
                        </div>
                    </div>
                </div>
                <p className="mt-4 text-gray-600 text-center">QR code contains the shortened URL</p>
                <div>
                    <h2 className="text-2xl sm:text-[45px] md:text-[55px] font-light mt-16">
                        Simplify Your Life
                    </h2>
                    <p className="mt-4 text-gray-600">
                        2UL.top is a free tool to shorten URLs and generate short links. Our URL shortener allows you to easily convert long URLs into short, manageable links that are easy to share.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default HeroArea;
