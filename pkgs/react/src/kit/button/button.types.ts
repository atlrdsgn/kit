import React from 'react';
import type { ButtonSize, ButtonVariant } from './button.css';

export interface BaseButtonProps {
  children: React.ReactNode;
  /**
   *
   * @state props..
   */
  active?: boolean;
  disabled?: boolean;
  /**
   * The slot to be rendered before the label.
   */
  before?: React.ReactElement<HTMLElement>;

  /**
   * The slot to be rendered after the label.
   */
  after?: React.ReactElement<HTMLElement>;

  type?: 'button' | 'submit' | 'reset';
  /**
   *
   * @router props..
   * as = React.ElementType | 'a' | 'button'
   * href = string = url
   * onClick = () => buttonProps.onClick
   */
  as?: React.ElementType<unknown> | 'a' | 'button';
  href?: string;
  onClick?: () => void;

  target?: string | '_blank' | '_self' | '_parent' | '_top';
  rel?:
    | string
    | 'alternate'
    | 'author'
    | 'bookmark'
    | 'external'
    | 'help'
    | 'license'
    | 'next'
    | 'nofollow'
    | 'noreferrer'
    | 'noopener'
    | 'prev'
    | 'search'
    | 'tag';

  /**
   *
   * @styling props..
   */
  className?: string;

  size?: ButtonSize;
  variant?: ButtonVariant;
}
