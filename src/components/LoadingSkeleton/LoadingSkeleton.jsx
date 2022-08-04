import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./LoadingSkeleton.css";

const LoadingSkeleton = () => {
  return (
    <div className="loadingSkeleton">
      {Array.from({ length: 10 }, () => (
        <div className="skeleton">
          <Skeleton height={200} width={230} />
        </div>
      ))}
    </div>
  );
};

export default LoadingSkeleton;
