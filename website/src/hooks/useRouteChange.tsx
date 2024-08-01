// hooks/useRouteLoading.ts
"use client";
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const useRouteChange = () => {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    
    const handleComplete = () => setLoading(false);

    // Simulate a delay to show the loading indicator
    const timer = setTimeout(handleComplete, 1000);

    return () => clearTimeout(timer);
  }, [pathname]);

  return loading;
};

export default useRouteChange;
