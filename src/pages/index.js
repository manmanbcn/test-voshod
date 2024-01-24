import { useEffect } from 'react';
import { useRouter } from 'next/router';
import '../styles/globals.css';

const IndexPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/list/1');
  }, [router]);

  return null; // или компонент загрузки
};


export default IndexPage;