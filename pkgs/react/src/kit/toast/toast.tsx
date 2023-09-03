import React from 'react';
import * as TST from '@radix-ui/react-toast';
import * as CSS from './toast.css';
import { createKitClass } from '../../lib';
import { Heading } from '../heading';
import { Text } from '../text';
import { KitIcon } from '../../lib';

type ToastVPProps = React.ComponentProps<typeof TST.Viewport> & {
  className?: string;
  asChild?: boolean;
  /**
   * The keys to use as the keyboard shortcut that
   * will move focus to the toast viewport.
   *
   * Use `event.code` value for each key from `keycode.info`.
   *
   * For meta keys, use ctrlKey, shiftKey, altKey and/or metaKey.
   */
  hotkey?: string[];
  /**
   * An author-localized label for the toast region to provide context
   * for screen reader users when navigating page landmarks.
   * The available `{hotkey}` placeholder will be replaced for you.
   */
  label?: string;
};

interface ToastProviderProps {
  /**
   * The time in milliseconds that should
   * elapse before automatically closing each toast.
   */
  duration?: number;
  label: string;
  /**
   * The direction of the pointer swipe that
   * should close the toast.
   */
  swipeDirection?: 'right' | 'left' | 'up' | 'down';
  /**
   * The distance in pixels that the swipe gesture
   * must travel before a close is triggered.
   */
  swipeThreshold?: number;
}

interface ToastRootProps {
  className?: string;
  asChild?: boolean;
  type?: 'foreground' | 'background';
  duration?: number;
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: () => void;
  onEscapeKeyDown?: () => void;
  onPause?: () => void;
  onResume?: () => void;
  onSwipeStart?: () => void;
  onSwipeMove?: () => void;
  onSwipeEnd?: () => void;
  forceMount?: boolean;
}

export type ToastProps = ToastRootProps &
  ToastProviderProps &
  ToastVPProps &
  React.ComponentProps<typeof TST.Root>;

const ToastRoot = React.forwardRef<
  React.ElementRef<typeof TST.Root>,
  ToastProps
>((props, forwardedRef) => {
  const {
    children,
    className,
    asChild,
    type = 'foreground',
    duration = 5000,
    defaultOpen,
    open,
    onOpenChange,
    onEscapeKeyDown,
    onPause,
    onResume,
    onSwipeStart,
    onSwipeMove,
    onSwipeEnd,
    // ..
    hotkey = ['F8'],
    // ..
    label = 'toast',
    swipeDirection = 'right',
    swipeThreshold = 60,

    ...rest
  } = props;

  return (
    <TST.Provider
      duration={duration}
      label={label}
      swipeDirection={swipeDirection}
      swipeThreshold={swipeThreshold}>
      <TST.Root
        {...rest}
        ref={forwardedRef}
        asChild={asChild}
        type={type}
        defaultOpen={defaultOpen}
        open={open}
        onOpenChange={onOpenChange}
        onEscapeKeyDown={onEscapeKeyDown}
        onPause={onPause}
        onResume={onResume}
        onSwipeStart={onSwipeStart}
        onSwipeMove={onSwipeMove}
        onSwipeEnd={onSwipeEnd}
        className={createKitClass(CSS.toastRoot, className)}>
        {children}
      </TST.Root>

      <TST.Viewport
        asChild={asChild}
        hotkey={hotkey}
        label={label}
        className={CSS.toastViewport}
      />
    </TST.Provider>
  );
});

type ToastTitleProps = React.HTMLAttributes<HTMLDivElement> & {
  className?: string;
  children: React.ReactNode;
};

const ToastTitle: React.FC<ToastTitleProps> = ({
  children,
  className,
  ...props
}) => (
  <div
    {...props}
    className={createKitClass(CSS.toastTitle, className)}>
    <Heading
      size='H3'
      weight='semibold'
      align='left'>
      {children}
    </Heading>
  </div>
);

type ToastDescriptionProps = React.HTMLAttributes<HTMLParagraphElement> & {
  className?: string;
  children: React.ReactNode;
};

const ToastDescription: React.FC<ToastDescriptionProps> = ({
  children,
  className,
  ...props
}) => (
  <TST.Description
    {...props}
    className={createKitClass(CSS.toastDescription, className)}>
    <Text
      size='sm'
      color='current'
      weight='medium'
      align='left'>
      {children}
    </Text>
  </TST.Description>
);

// action
const ToastAction = React.forwardRef<
  React.ElementRef<typeof TST.Action>,
  React.ComponentProps<typeof TST.Action>
>(({ children, altText = '', className, asChild, ...props }, ref) => {
  return (
    <TST.Action
      {...props}
      ref={ref}
      asChild={asChild}
      altText={altText}
      className={createKitClass(CSS.toastActionWrapper, className)}>
      <span className={CSS.toastAction}>{children}</span>
    </TST.Action>
  );
});

// close
const ToastClose = React.forwardRef<
  React.ElementRef<typeof TST.Close>,
  React.ComponentProps<typeof TST.Close>
>(({ className, asChild, ...props }, ref) => {
  return (
    <TST.Close
      {...props}
      ref={ref}
      asChild={asChild}
      className={createKitClass(CSS.toastClose, className)}>
      <KitIcon
        icon='Close.Icon'
        size={18}
      />
    </TST.Close>
  );
});

/** ----------------- exports --- */

export const Toast: React.FC<ToastProps> & {
  Title: typeof ToastTitle;
  Description: typeof ToastDescription;
  //..
  Action: typeof ToastAction;
  Close: typeof ToastClose;
} = (props) => <ToastRoot {...props} />;

Toast.Title = ToastTitle;
Toast.Description = ToastDescription;
Toast.Action = ToastAction;
Toast.Close = ToastClose;

Toast.displayName = 'Toast';
Toast.Title.displayName = 'Toast.Title';
Toast.Description.displayName = 'Toast.Description';

ToastTitle.displayName = 'Toast.Title';
ToastDescription.displayName = 'Toast.Description';
ToastAction.displayName = 'Toast.Action';
ToastClose.displayName = 'Toast.Close';
