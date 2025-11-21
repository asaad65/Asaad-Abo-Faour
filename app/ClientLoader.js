'use client';
import { useEffect, useState } from 'react';

export default function ClientLoader({ children }) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const handleLoad = () => setIsReady(true);

    if (document.readyState === 'complete') {
      setIsReady(true);
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => window.removeEventListener('load', handleLoad);
  }, []);

  if (!isReady) {
    return (
      <div className='flex justify-center items-center m-auto max-w-3xl h-dvh'>

        <div className="loader w-full"></div>
       
      </div>

    );
  }

  return <>{children}</>;
}


