// pages/[code].jsx
import { useRouter } from 'next/router';
import Layout from './_layout';
import { useEffect } from 'react';
import RedirectionView from '../components/RedirectionView';


const API_URL = process.env.API_GET_REDIRECT || 'http://localhost:3001/urls';
const REDIRECT_DELAY_TIME = process.env.REDIRECT_DELAY_TIME || 15 * 1000;

export default function CodePage() {
  const router = useRouter();
  const { code } = router.query;
 
  useEffect(() => {
    if (code) {
      console.log("query", router.query);
    }
  }, [code]);

  return (
    <Layout>
      <div className="flex flex-col justify-center items-center min-h-screen bg-white">
        {code ? <RedirectionView code={code} /> : (
          <div className="text-gray-500">Loading...</div>
        )}
      </div>
    </Layout>
  );
}
