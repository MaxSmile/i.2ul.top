// src/components/RedirectionView.jsx
"use client";

import { useState, useEffect } from 'react';
import useSWR from 'swr';
import { useRouter } from 'next/router';
import { API_BASE_URL, API_READ_SHRTN_DATA, REDIRECT_DELAY_TIME } from '../data/constants';

const API_URL = API_BASE_URL + API_READ_SHRTN_DATA;

function RedirectionView({ code }) {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR(`${API_URL}${code}`, fetcher);
  const [countdown, setCountdown] = useState(REDIRECT_DELAY_TIME / 1000);
  const [showManualRedirect, setShowManualRedirect] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  // Timer logic
  useEffect(() => {
    if (data && data.originalUrl && countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [data, countdown]);

  // Redirection logic
  useEffect(() => {
    if (data && data.originalUrl && countdown === 0 && !showManualRedirect) {
      router.push(data.originalUrl).catch(() => {
        setShowManualRedirect(true);
      });
    }
  }, [data, countdown, router, showManualRedirect]);

  // Set loading state
  useEffect(() => {
    if (data !== undefined) {
      setIsLoading(false);
    }
  }, [data]);

  return (
    <div className="flex flex-col items-center min-h-screen justify-center bg-white">
      {error ? (
        <div className="text-red-500">An error occurred: {error.message}</div>
      ) : isLoading ? (
        <div className="text-gray-500">Loading {code}...</div>
      ) : data.originalUrl ? (
        <>
          <h1 className="text-3xl font-bold mb-4">
            Redirecting in {countdown} seconds
          </h1>
          <div className="w-16 h-16 border-4 border-t-4 border-t-blue-500 rounded-full animate-spin mb-4"></div>
          <div className="ads-placeholder mt-4">
            {/* Your ad content here */}
          </div>
          {showManualRedirect && (
            <p className="mt-4">
              If you are not redirected, please go to{' '}
              <a
                href={data.originalUrl}
                className="text-blue-500 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                this link
              </a>
              .
            </p>
          )}
        </>
      ) : (
        <div className="text-gray-500">Invalid code</div>
      )}
    </div>
  );
}

export default RedirectionView;
