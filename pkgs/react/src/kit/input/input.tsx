import React, { useEffect, useRef, useMemo } from 'react';
import * as LABL from '@radix-ui/react-label';
import { clsx } from 'clsx';
import { input, inputLabel, inputFlex, inputTypeNumber } from './input.css';
import { type InputProps } from './input.types';

const InputBase: React.FC<InputProps> = ({
  className,
  autoFocus = false,
  autoComplete = 'off',
  autoCorrect = 'off',
  autoCapitalize = 'off',
  spellCheck = false,
  required = false,
  disabled = false,
  placeholder,
  inputMode = 'text',
  value,
  type = 'text',
  onChange = () => {},
  variant = 'carbon',
  inputSize = 'sm',
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const inputType = useMemo(
    () => (type === 'password' ? 'password' : 'text'),
    [type],
  );

  useEffect(() => {
    if (autoFocus) {
      inputRef.current?.focus();
    }
  }, [autoFocus]);

  return (
    <input
      {...rest}
      ref={inputRef}
      type={inputType}
      className={clsx(input({ inputSize, variant }), className)}
      autoComplete={autoComplete}
      autoCorrect={autoCorrect}
      autoCapitalize={autoCapitalize}
      spellCheck={spellCheck}
      required={required}
      disabled={disabled}
      placeholder={placeholder}
      inputMode={inputMode}
      value={value}
      onChange={onChange}
    />
  );
};

// if type is number
const NumberInput: React.FC<InputProps> = ({ className, ...rest }) => {
  return (
    <input
      {...rest}
      className={clsx(inputTypeNumber, className)}
      type='number'
      inputMode='numeric'
      pattern='[0-9]*'
    />
  );
};

/** ---------------- label ---------------------- */

type InputLabelPrmitiveProps = React.HTMLAttributes<HTMLLabelElement> &
  React.ComponentPropsWithRef<typeof LABL.Root>;
export type InputLabelProps = InputLabelPrmitiveProps;
const InputLabel = React.forwardRef<
  React.ElementRef<typeof LABL.Root>,
  InputLabelProps
>(({ className, htmlFor, ...props }, forwardedRef) => {
  return (
    <LABL.Root
      {...props}
      ref={forwardedRef}
      htmlFor={htmlFor}
      className={clsx(inputLabel, className)}>
      {props.children}
    </LABL.Root>
  );
});

/** ---------------- flexbox ---------------------- */

type FlexProps = React.HTMLAttributes<HTMLDivElement> & {
  children?: React.ReactNode;
  className?: string;
};

const InputWrapper: React.FC<FlexProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <div
      {...rest}
      className={clsx(inputFlex, className)}>
      {children}
    </div>
  );
};

/** ---------------- export input ---------------------- */

export const Input: React.FC<InputProps> & {
  Wrapper: typeof InputWrapper;
  Label: typeof InputLabel;
} = ({ type, ...rest }) => {
  if (type === 'number') {
    return <NumberInput {...rest} />;
  }
  return <InputBase {...rest} />;
};

Input.Wrapper = InputWrapper;
Input.Label = InputLabel;

Input.displayName = 'Input';

Input.Wrapper.displayName = 'Input.Wrapper';
InputWrapper.displayName = 'Input.Wrapper';

Input.Label.displayName = 'Input.Label';
InputLabel.displayName = 'InputLabel';

export type InputElement = keyof typeof Input;
export type { InputProps };
