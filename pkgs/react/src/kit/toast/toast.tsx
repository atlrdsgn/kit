import React from 'react';
import * as TST from '@radix-ui/react-toast';
import * as CSS from './toast.css';
import { createKitClass } from '../../lib';

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

type ToastProps = ToastRootProps &
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
    defaultOpen = true,
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
      className={createKitClass(CSS.toastAction, className)}>
      {children}
    </TST.Action>
  );
});

// close
const ToastClose = React.forwardRef<
  React.ElementRef<typeof TST.Close>,
  React.ComponentProps<typeof TST.Close>
>(({ children, className, asChild, ...props }, ref) => {
  return (
    <TST.Close
      {...props}
      ref={ref}
      asChild={asChild}
      className={createKitClass(CSS.toastClose, className)}>
      {children}
    </TST.Close>
  );
});

/** ----------------- exports --- */

export const Toast: React.FC<ToastProps> & {
  Title: typeof TST.Title;
  Description: typeof TST.Description;
  //..
  Action: typeof ToastAction;
  Close: typeof ToastClose;
} = (props) => <ToastRoot {...props} />;

Toast.Title = TST.Title;
Toast.Description = TST.Description;
Toast.Action = ToastAction;
Toast.Close = ToastClose;

Toast.displayName = 'Toast';
Toast.Title.displayName = 'Toast.Title';
Toast.Description.displayName = 'Toast.Description';
ToastAction.displayName = 'Toast.Action';
ToastClose.displayName = 'Toast.Close';
