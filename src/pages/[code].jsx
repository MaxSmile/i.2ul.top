// pages/[code].jsx
import { useRouter } from 'next/router';
import Layout from './_layout';


export default function CodePage() {
    const router = useRouter();
  const { code } = router.query;
    return (
        <Layout>
        <div className="flex flex-col justify-center items-center min-h-screen bg-white">
            <p className="text-3xl font-bold">{code}</p>
        </div>
        </Layout>
    );
}