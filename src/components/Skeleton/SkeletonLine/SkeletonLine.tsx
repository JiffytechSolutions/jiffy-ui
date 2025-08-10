import React from 'react';
import '../Skeleton.css'
export interface SkeletonLineI {
  numberOfLine?: number;
  lineGap?: number;
  lineHeight?: number;
}

const SkeletonLine = ({
  numberOfLine = 5,
  lineGap = 2,
  lineHeight = 1.4,
  ...props
}: SkeletonLineI) => {

  //const ThumbnailSize = checkSize();

  return (
    <div className={`SkeletonLine`} style={{ gap: lineGap + 'rem' }}>
      {Array.from({ length: numberOfLine }, () => (
        <div className="skeleton SkeletonLine-item" style={{ height: lineHeight + 'rem' }}>
          <div className="skeleton-inner"></div>
        </div>
      ))}
    </div>
  );
}
export default SkeletonLine;
