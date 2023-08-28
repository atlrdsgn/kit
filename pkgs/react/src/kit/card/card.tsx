import React from 'react';
import * as CSS from './card.css';
import { clsx } from 'clsx';
import { createKitClass } from '../../lib';

import {
  type CardHeadingLevels,
  type CardShadowVariantProps,
  type CardHeaderVariantProps,
  type CardShadowVariants,
} from './card.css';

interface CardInterfaceProps {
  className?: string;
  children?: React.ReactNode;
  shadow?: CardShadowVariants;
}

export type CardProps = CardInterfaceProps &
  React.HTMLAttributes<HTMLDivElement>;

const CardContainer = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, ...rest }, ref) => {
    const stx = createKitClass(CSS.cardContainer, className);

    return (
      <div
        ref={ref}
        className={stx}
        {...rest}>
        {children}
      </div>
    );
  },
);

CardContainer.displayName = 'Card';

/** ----------------------------- */

type CardContentProps = {
  className?: string;
  children?: React.ReactNode;
  shadow?: CardShadowVariants;
} & React.HTMLAttributes<HTMLDivElement> &
  CardShadowVariantProps;

const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, children, shadow = 'sm', ...rest }, ref) => {
    return (
      <div
        ref={ref}
        className={createKitClass(CSS.cardContent({ shadow }), className)}
        {...rest}>
        {children}
      </div>
    );
  },
);

CardContent.displayName = 'CardContent';

/** ----------------------------- */
export type CardHeaderProps =
  // ..
  CardInterfaceProps &
    CardHeaderVariantProps & {
      level?: CardHeadingLevels;
    } & React.HTMLAttributes<HTMLHeadingElement>;

const CardHeader = React.forwardRef<HTMLHeadingElement, CardHeaderProps>(
  ({ className, children, level = 'H2', ...rest }, ref) => {
    const stx = clsx(CSS.cardHeader, className);

    // Mapping object to map level values to corresponding HTML elements
    const componentMap: Record<CardHeadingLevels, React.ElementType> = {
      H1: 'h1',
      H2: 'h2',
      H3: 'h3',
      H4: 'h4',
      H5: 'h5',
      H6: 'h6',

      // Add mappings for other levels as needed
    };

    const Component = componentMap[level]; // Retrieve the corresponding HTML element

    return (
      <Component
        ref={ref}
        className={stx}
        level={level}
        {...rest}>
        {children}
      </Component>
    );
  },
);

CardHeader.displayName = 'CardHeader';

/** ---------------------- */

export const Card: React.FC<CardProps> & {
  Content: typeof CardContent;
  Header: typeof CardHeader;
} = (props) => <CardContainer {...props} />;

Card.Content = CardContent;
Card.Header = CardHeader;

Card.displayName = 'Card';
Card.Content.displayName = 'CardContent';
Card.Header.displayName = 'CardHeader';
