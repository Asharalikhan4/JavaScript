import { FC } from "react";

const ShimmerEffect: FC = () => {
  return (
    <div className="animate-pulse space-y-4">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="h-8 w-20 bg-gray-300 rounded"></div>
        <div className="flex space-x-4">
          <div className="h-8 w-20 bg-gray-300 rounded"></div>
          <div className="h-8 w-20 bg-gray-300 rounded"></div>
          <div className="h-8 w-20 bg-gray-300 rounded"></div>
          <div className="h-8 w-8 bg-gray-300 rounded-full"></div>
        </div>
      </div>

      {/* Title */}
      <div className="h-10 w-1/4 bg-gray-300 rounded"></div>

      {/* Content */}
      <div className="space-y-2">
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        <div className="h-20 bg-gray-300 rounded"></div>
      </div>

      <div className="space-y-2">
        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
        <div className="h-8 bg-gray-300 rounded w-3/4"></div>
      </div>

      <div className="space-y-2">
        <div className="h-4 bg-gray-300 rounded w-1/4"></div>
        <div className="h-8 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
};

export default ShimmerEffect;