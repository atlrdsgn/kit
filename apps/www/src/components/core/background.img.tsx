import React from 'react';
import Image from 'next/image';
import Lockup from '../canvas.lockup';

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
    <Lockup>
      <div
        className=''
        style={{
          zIndex: 1,
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          overflow: 'hidden',
          backgroundColor: 'transparent',
          backdropFilter: 'blur(10px) saturate(180%)',
          WebkitBackdropFilter: 'blur(10px) saturate(180%)',
        }}
      />
      <Image
        {...rest}
        src={src}
        alt={alt}
        width={1920}
        height={1080}
        style={{
          zIndex: 0,
          position: 'relative',
          objectFit: 'cover',
          width: '100vw',
          height: '100vh',
          overflow: 'hidden',

          ...style,
        }}
      />
    </Lockup>
  );
};
