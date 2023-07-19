import React, { forwardRef, type ElementRef } from 'react';
import * as SWI from '@radix-ui/react-switch';
import { switchToggle, switchRoot } from './switch.css';
import clsx from 'clsx';

import {
  type SwitchRootVariantProps,
  type SwitchToggleVariantProps,
} from './switch.css';

interface BASE_SWITCH_PROPS {
  className?: string;
  asChild?: boolean;
  /**
   *
   * The state of the switch when it is
   * initially rendered.
   * Use when you do not need to control its state.
   */
  defaultChecked?: boolean;
  /**
   *
   * The controlled state of the switch.
   * Must be used in conjunction with onCheckedChange.
   */
  checked?: boolean;
  /**
   *
   * Event handler called when
   * the state of the switch changes.
   */
  onCheckedChange?: (checked: boolean) => void;
  /**
   *
   * If true, prevents the user
   * from interacting with the switch.
   */
  disabled?: boolean;
  /**
   *
   * If true, indicates that the user must
   * check the switch before the owning
   * form can be submitted.
   */
  required?: boolean;
  /**
   *
   * The name of the switch.
   * Submitted with its owning form
   * as part of a name/value pair.
   */
  name?: string;
  /**
   *
   * The value given as data
   * when submitted with a name.
   */
  value?: string;

  size?: 'small' | 'medium';
}

export type SwitchProps = BASE_SWITCH_PROPS &
  SwitchRootVariantProps &
  React.ComponentProps<typeof SWI.Root>;
const SwitchRootComponent: React.FC<SwitchProps> = ({
  className,
  asChild,
  defaultChecked,
  checked,
  onCheckedChange,
  disabled,
  required,
  name,
  value,
  size = 'small',
  ...rest
}) => {
  return (
    <SWI.Root
      {...rest}
      asChild={asChild}
      className={clsx(className, switchRoot({ size }))}
      defaultChecked={defaultChecked}
      checked={checked}
      onCheckedChange={onCheckedChange}
      disabled={disabled}
      required={required}
      name={name}
      value={value}
    />
  );
};

/**
 * --------------------------------------------
 * [SwitchToggleVariantProps]
 * holds the props (size) and (variant) for the ToggleComponent.
 */
export type ToggleProps = SwitchToggleVariantProps &
  React.ComponentProps<typeof SWI.Thumb>;

const SwitchToggleComponent = forwardRef<
  ElementRef<typeof SWI.Thumb>,
  ToggleProps
>((props, ref) => {
  const { className, size = 'small', asChild = false, ...rest } = props;

  return (
    <SWI.Thumb
      {...rest}
      ref={ref}
      asChild={asChild}
      className={clsx(className, switchToggle({ size }))}
    />
  );
});

/** ------------------- exports ------------------------- */

export const Switch: React.FC<SwitchProps> & {
  Toggle: typeof SwitchToggleComponent;
} = (props) => <SwitchRootComponent {...props} />;

Switch.Toggle = SwitchToggleComponent;

Switch.displayName = 'Switch';
Switch.Toggle.displayName = 'Switch.Toggle';
SwitchToggleComponent.displayName = 'Switch.Toggle';
