import { useEffect } from 'react';
import { useRouter } from 'next/router';
import '../styles/globals.css';

const IndexPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/list/1');
  }, [router]);

  return null;
};


export default IndexPage;
