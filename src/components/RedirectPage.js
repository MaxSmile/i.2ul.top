import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const RedirectPage = () => {
  const { id } = useParams();

  useEffect(() => {
    // Fetch the actual URL associated with the short URL ID
    const fetchUrl = async () => {
      try {
        // Example API call to get the full URL
        const response = await fetch(`/api/urls/${id}`);
        const data = await response.json();

        if (data && data.url) {
          // Redirect to the actual URL
          window.location.href = data.url;
        } else {
          // Handle the case where the URL is not found
          alert('URL not found');
        }
      } catch (error) {
        console.error('Error fetching URL:', error);
      }
    };

    fetchUrl();
  }, [id]);

  return (
    <div>
      <p>Redirecting...</p>
    </div>
  );
};

export default RedirectPage;
