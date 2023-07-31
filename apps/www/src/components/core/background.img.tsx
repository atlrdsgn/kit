import React from 'react';
import Image from 'next/image';
import CanvasLockup from '../canvas.lockup';

export type BackgroundProps = {
  className?: string;
  alt: string;
  src: string;
  style: React.CSSProperties;
} & React.ImgHTMLAttributes<HTMLImageElement> &
  React.ComponentProps<typeof Image>;

export const BackgroundImage = ({
  className,
  alt,
  src,
  style,

  // ..
  ...rest
}: BackgroundProps) => {
  return (
    <CanvasLockup>
      <Image
        {...rest}
        src={src}
        alt={alt}
        width={1920}
        height={1080}
        style={{
          zIndex: 1,
          position: 'relative',
          objectFit: 'cover',
          width: '100vw',
          height: '100vh',
          overflow: 'hidden',
          // opacity: 0.5,

          ...style,
        }}
      />
    </CanvasLockup>
  );
};
