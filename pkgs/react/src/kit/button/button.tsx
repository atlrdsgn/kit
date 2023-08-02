import React from 'react';
import { button } from './button.css';
import { type BASE_BUTTON_PROPS } from './button.types';
import { type ButtonVariantProps } from './button.css';

type ButtonElementProps = BASE_BUTTON_PROPS &
  ButtonVariantProps &
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

  if (href) {
    // If href is provided, render an anchor element
    return (
      <a
        {...rest}
        href={href}
        target={target}
        rel={rel}
        onClick={onClick}
        className={button({ size, variant, font })}>
        {children}
      </a>
    );
  } else {
    // If href is not provided, render a button element

    return (
      <button
        {...rest}
        type={type}
        className={button({ size, variant, font })}
        onClick={handleClick}>
        {children}
      </button>
    );
  }
};

Button.displayName = 'Button';
