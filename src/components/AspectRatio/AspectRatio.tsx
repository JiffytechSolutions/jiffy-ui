import React, { CSSProperties, HTMLAttributes } from 'react';

export interface AspectRatioI extends HTMLAttributes<HTMLDivElement> {
  maxW?: string;
  ratio: number;
  style?: CSSProperties;
  children: React.ReactNode;
}

const AspectRatio = ({ maxW, ratio, children, style }: AspectRatioI) => {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        paddingBottom: `${(1 / ratio) * 100}%`,
        maxWidth: maxW,
        ...style,
      }}
    >
      <div style={{ position: 'absolute', inset: 0 }}>
        {React.Children.map(children, (child) => {

          if (React.isValidElement(child)) {
            return React.cloneElement(child as React.ReactElement, { style: { width: '100%', height: '100%' } });
          }
          return child;
        })}
      </div>
    </div>
  );
};

export default AspectRatio;
