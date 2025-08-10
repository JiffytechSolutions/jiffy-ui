import React from 'react';
import '../Skeleton.css'
export interface SkeletonCustomI {
  height?: number;
  width?: number;
  radius?: number;
}

const SkeletonCustom = ({
  height = 5,
  width = 5,
  radius = 1.4,
  ...props
}: SkeletonCustomI) => {

  //const ThumbnailSize = checkSize();

  return (

    <div className="skeleton SkeletonCustom" style={{ width: width + 'rem', height: height + "rem" }}>
      <div className="skeleton-inner" style={{ borderRadius: radius + 'rem' }}></div>
    </div>

  );
}
export default SkeletonCustom;
