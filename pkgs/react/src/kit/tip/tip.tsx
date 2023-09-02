import React from 'react';
import * as TIP from '@radix-ui/react-tooltip';
import * as CSS from './tip.css';
import { createKitClass } from '../../lib';
import { KitIcon } from '../../lib/icons';
import type { SVGKit, SVGVariants } from '../../lib/icons';

/**
 * TODO:
 * an idea here would be to render the popover
 * compopnent on mobile, and the tooltip component
 * on desktop. this would be a good way to
 * handle the different use cases for each.
 */

const TipPortal = TIP.Portal;

// root
interface BaseTipProps {
  children: React.ReactNode;
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  delayDuration?: number; // ms
  disableHoverableContent?: boolean;
}

type TipProps = BaseTipProps &
  React.ComponentProps<typeof TIP.Provider> &
  React.ComponentProps<typeof TIP.Root>;

const TipRoot: React.FC<TipProps> = ({
  children,
  defaultOpen,
  open,
  onOpenChange = () => {},
  delayDuration = 500,
  disableHoverableContent,
  ...rest
}) => {
  return (
    <TIP.Provider
      delayDuration={delayDuration}
      skipDelayDuration={300}
      disableHoverableContent={disableHoverableContent}>
      <TIP.Root
        {...rest}
        defaultOpen={defaultOpen}
        open={open}
        onOpenChange={onOpenChange}
        delayDuration={delayDuration}
        disableHoverableContent={disableHoverableContent}>
        {children}
      </TIP.Root>
    </TIP.Provider>
  );
};

// trigger
interface BaseTriggerProps {
  children: React.ReactNode;
  className?: string;
  asChild?: boolean;
}

type TriggerProps = BaseTriggerProps &
  React.HTMLAttributes<HTMLButtonElement> &
  React.ComponentProps<typeof TIP.Trigger>;

const TipTrigger = React.forwardRef<HTMLButtonElement, TriggerProps>(
  ({ children, className, asChild, ...props }, ref) => {
    const classes = createKitClass(CSS.tooltipTrigger, className);
    return (
      <TIP.Trigger
        {...props}
        ref={ref}
        asChild={asChild}
        className={classes}>
        {children}
      </TIP.Trigger>
    );
  },
);

// content
interface BaseContentProps {
  children: React.ReactNode;
  className?: string;
  asChild?: boolean;
  ariaLabel?: string;
  onEscapeKeyDown?: () => void;
  onPointerDownOutside?: () => void;
  side?: 'top' | 'right' | 'bottom' | 'left';
  sideOffset?: number;
  align?: 'start' | 'center' | 'end';
  alignOffset?: number;
  avoidCollisions?: boolean;
  collisionPadding?: number;
  sticky?: 'partial' | 'always';
  hideWhenDetached?: boolean;
}

type ContentProps = BaseContentProps &
  React.HTMLAttributes<HTMLDivElement> &
  React.ComponentProps<typeof TIP.Content>;

const TipContent = React.forwardRef<
  React.ElementRef<typeof TIP.Content>,
  ContentProps
>(
  (
    {
      children,
      className,
      asChild,
      ariaLabel,
      onEscapeKeyDown,
      onPointerDownOutside,
      side = 'top',
      sideOffset = 10,
      align = 'center',
      alignOffset = 0,
      avoidCollisions = true,
      collisionPadding = 4,
      sticky = 'partial',
      hideWhenDetached,
      ...props
    },
    ref,
  ) => {
    const classes = createKitClass(CSS.tooltipContent, className);
    return (
      <TIP.Content
        {...props}
        ref={ref}
        asChild={asChild}
        aria-label={ariaLabel}
        onEscapeKeyDown={onEscapeKeyDown}
        onPointerDownOutside={onPointerDownOutside}
        side={side}
        sideOffset={sideOffset}
        align={align}
        alignOffset={alignOffset}
        avoidCollisions={avoidCollisions}
        collisionPadding={collisionPadding}
        sticky={sticky}
        hideWhenDetached={hideWhenDetached}
        className={classes}>
        {children}
      </TIP.Content>
    );
  },
);

const TipIcon: React.FC<SVGKit> = ({
  className,
  icon,
  color = 'currentColor',
  ...props
}) => {
  const classes = createKitClass(CSS.tooltipIcon, className);
  const variant = icon as SVGVariants;
  return (
    <KitIcon
      size={24}
      color={color}
      className={classes}
      icon={variant}
      {...props}
    />
  );
};
// exports
export const Tip: React.FC<TipProps> & {
  Trigger: typeof TipTrigger;
  Content: typeof TipContent;
  Icon: typeof TipIcon;
  //..
  Portal: typeof TipPortal;
} = (props) => <TipRoot {...props} />;

Tip.displayName = 'Tip';

Tip.Trigger = TipTrigger;
Tip.Content = TipContent;
Tip.Icon = TipIcon;
Tip.Portal = TipPortal;

TipTrigger.displayName = 'Tip.Trigger';
TipContent.displayName = 'Tip.Content';
TipIcon.displayName = 'Tip.Icon';
TipPortal.displayName = 'Tip.Portal';

export type { TipProps };
