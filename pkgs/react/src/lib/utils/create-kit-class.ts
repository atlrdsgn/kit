import clsx from 'clsx';

export const createKitClass = (cssClass: string, className?: string) => {
  return clsx(cssClass, className);
};
