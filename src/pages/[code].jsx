// pages/[code].jsx
import { useRouter } from 'next/router';
import Layout from './_layout';
import { useEffect } from 'react';

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
        {code ? (
          <p className="text-3xl font-bold">Code: {code}</p>
        ) : (
          <p className="text-3xl font-bold">Loading...</p>
        )}
      </div>
    </Layout>
  );
}
