import React from 'react';
import * as CSS from './button.css';
import { motion, type MotionProps } from 'framer-motion';
import type { BaseButtonProps } from './button.types';
import type { ButtonVariantProps } from './button.css';

type ButtonElementProps = BaseButtonProps &
  ButtonVariantProps &
  MotionProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;
export type ButtonProps = ButtonElementProps;

export const Button = ({
  children,
  type = 'button',
  onClick = () => {},
  href,
  target = '_self',
  rel = 'noopener noreferrer',
  size = 'sm',
  variant = 'carbon',
  font = 'system',
  ...rest
}: ButtonProps) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (href) {
      event.preventDefault();
      window.open(href, target, rel);
    }
    onClick(event);
  };

  const motionVariants = {
    hover: {
      scale: 1.01,
    },
  };

  if (href) {
    /**
     * href provided,
     * render an anchor element.
     * same styles.
     */
    return (
      <motion.a
        {...rest}
        href={href}
        target={target}
        rel={rel}
        onClick={onClick}
        variants={motionVariants}
        whileHover='hover'
        className={CSS.button({ size, variant, font })}>
        {children}
      </motion.a>
    );
  } else {
    /**
     * no href provided,
     * render as button.
     */
    return (
      <motion.button
        {...rest}
        type={type}
        variants={motionVariants}
        whileHover='hover'
        className={CSS.button({ size, variant, font })}
        onClick={handleClick}>
        {children}
      </motion.button>
    );
  }
};

Button.displayName = 'Button';
