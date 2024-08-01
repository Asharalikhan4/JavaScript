"use client";
import { FC } from "react";
import useRouteChange from "@/hooks/useRouteChange";

const LoadingBar: FC = () => {
    
  const loading = useRouteChange();

  if(!loading) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-blue-600 animate-pulse">
      <div className="h-full bg-blue-400 animate-[loading_2s_ease-in-out_infinite]"></div>
    </div>
  );
};

export default LoadingBar;
