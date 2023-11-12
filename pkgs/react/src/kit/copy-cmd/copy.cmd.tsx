import React, { useCallback, useState } from 'react';
import { useCopyToClipboard } from 'usehooks-ts';
import * as CSS from './copy.cmd.css';
import { createKitClass } from '../../lib';
import { isError } from '../@utils';

export type CopyCommandProps = {
  className?: string;
  copytext: string;
};

type TriggerProps = React.HTMLAttributes<HTMLButtonElement> & CopyCommandProps;
type CopyFieldTextProps = React.HTMLAttributes<HTMLParagraphElement> &
  CopyCommandProps;

const CopyTrigger: React.FC<TriggerProps> = ({
  className,
  copytext,
  ...rest
}) => {
  /**
   *
   * useCopyToClipboard hook
   * see more: https://usehooks-ts.com/react-hook/use-copy-to-clipboard
   */
  const [error, setError] = useState<string | null>(null);
  const [value, copy] = useCopyToClipboard();

  const copyClick = useCallback(async () => {
    try {
      await copy(copytext);
    } catch (err) {
      if (isError(err)) {
        setError(`Failed to copy text: ${err.message}`);
      } else {
        setError('An unexpected error occurred.');
      }
    }
  }, [copytext, copy]);

  return (
    <button
      {...rest}
      onClick={copyClick}
      className={createKitClass(CSS.copyTrigger, className)}>
      {value ? 'Copied' : 'Copy'}

      {error && <span className='error'>{error}</span>}
    </button>
  );
};

const CopyFieldText: React.FC<CopyFieldTextProps> = ({
  className,
  copytext,
  ...rest
}) => {
  return (
    <p
      {...rest}
      className={createKitClass(CSS.copyCmdText, className)}>
      {copytext}
    </p>
  );
};

export const CopyCommand: React.FC<CopyCommandProps> & {
  Text: typeof CopyFieldText;
  Trigger: typeof CopyTrigger;
} = ({ className, copytext }) => (
  <div className={createKitClass(CSS.fieldRoot, className)}>
    <div className={createKitClass(CSS.backplate, className)}>
      <CopyCommand.Text copytext={copytext} />
      <CopyCommand.Trigger copytext={copytext} />
    </div>
  </div>
);

CopyCommand.displayName = 'CopyCommand';

CopyCommand.Text = CopyFieldText;
CopyCommand.Trigger = CopyTrigger;

CopyCommand.Text.displayName = 'CopyCommand.Text';
CopyCommand.Trigger.displayName = 'CopyCommand.Trigger';
