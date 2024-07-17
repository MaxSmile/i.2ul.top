import React, { useState } from 'react';
import QRCode from 'react-weblineindia-qrcode-generator';

const HeroArea = () => {
    const [url, setUrl] = useState('');
    const [shortName, setShortName] = useState('');
    const [result, setResult] = useState('https://2ul.top');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://api.2ul.top/urls', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    originalURL: url,
                    mappingID: shortName,
                    extraDATA: '',
                }),
            });

            if (response.ok) {
                const data = await response.json();
                setResult(`https://2ul.top/${shortName}`);
            } else {
                const errorData = await response.json();
                setResult(`Error: ${errorData.error}`);
            }
        } catch (error) {
            setResult(`Error: ${error.message}`);
        }
    };

    return (
        <section className="py-24" id="clarification">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                    <div>
                        <h1 className="text-3xl sm:text-[45px] md:text-[55px] font-light">Shorten Your URLs, Simplify Your Life</h1>
                        <h2 className="text-md sm:text-lg tracking-4 mt-2 sm:mt-4 font-light">Transform long, unwieldy URLs into concise, shareable links with 2ul.top.</h2>
                        
                        <form className="flex flex-col items-center gap-4 mt-6" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                placeholder="Enter your long URL here..."
                                value={url}
                                onChange={(e) => setUrl(e.target.value)}
                                className="p-2 border border-gray-300 rounded w-full md:w-96"
                            />
                            <input
                                type="text"
                                placeholder="Enter your preferred short name"
                                value={shortName}
                                onChange={(e) => setShortName(e.target.value)}
                                className="p-2 border border-gray-300 rounded w-full md:w-96"
                            />
                            <button type="submit" className="p-2 bg-blue-600 text-white rounded hover:bg-blue-500">
                                Shorten URL and Generate QR Code
                            </button>
                            {result && (
                                <div className="mt-4 text-lg text-center text-gray-700">
                                    {result.startsWith('Error') ? result : (
                                        <>
                                            Shortened URL: <a href={result} target="_blank" rel="noopener noreferrer" className="text-blue-600">{result}</a>
                                        </>
                                    )}
                                </div>
                            )}
                        </form>
                        <p className="mt-4 text-gray-600">2UL.top is a free tool to shorten URLs and generate short links. Our URL shortener allows you to easily convert long URLs into short, manageable links that are easy to share.</p>
                    </div>
                    <div className="flex justify-center items-center">
                        <QRCode value={result} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroArea;
