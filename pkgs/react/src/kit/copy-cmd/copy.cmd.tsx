import React, { useCallback, useState } from 'react';
import * as CSS from './copy.cmd.css';
import { createKitClass } from '../../lib';

/** ------------------------------------------------------- */

type CopyCmdProps = {
  className?: string;
  copytext: string;
};

type TriggerProps = React.HTMLAttributes<HTMLButtonElement> & CopyCmdProps;
type CopyFieldTextProps = React.HTMLAttributes<HTMLParagraphElement> &
  CopyCmdProps;

const CopyTrigger: React.FC<TriggerProps> = ({
  className,
  copytext,
  ...rest
}) => {
  const [copied, setCopied] = useState(false); // create a state to keep track of copy status

  const copyClick = useCallback(async () => {
    // click handler with async/await
    try {
      await navigator.clipboard.writeText(copytext); // use clipboard API asynchronously
      setCopied(true); // set copy status to true after successful copy
    } catch (err) {
      console.error('Failed to copy text: ', err); // log error if copy failed
    }
  }, [copytext]);

  // clear copied status after a certain period
  React.useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (copied) {
      timeoutId = setTimeout(() => setCopied(false), 2000); // Clear copied status after 2 seconds
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [copied]);

  return (
    <button
      {...rest}
      onClick={copyClick}
      className={createKitClass(CSS.copyTrigger, className)}>
      {copied ? 'Copied' : 'Copy'}
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

const CopyCommand: React.FC<CopyCmdProps> & {
  Text: typeof CopyFieldText;
  Trigger: typeof CopyTrigger;
} = ({ className, copytext }) => (
  <div className={createKitClass(CSS.fieldRoot, className)}>
    <CopyCommand.Text copytext={copytext} />
    <CopyCommand.Trigger copytext={copytext} />
  </div>
);

CopyCommand.Text = CopyFieldText;
CopyCommand.Trigger = CopyTrigger;
export { CopyCommand };
