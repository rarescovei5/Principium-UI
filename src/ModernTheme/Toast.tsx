import React, { createContext, useContext, useState } from 'react';
import { Button } from './Button';

interface ToastContextType {
  isOpen: boolean;
  toggle: () => void;
}
const ToastContext = createContext<ToastContextType | null>(null);

const Toast: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((prev) => !prev);

  return (
    <ToastContext.Provider value={{ isOpen, toggle }}>
      {children}
    </ToastContext.Provider>
  );
};
const ToastTrigger = ({
  children,
  className,
  asChild = false,
  ...props
}: React.HTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  children?: React.ReactNode | React.ReactElement<any>;
}) => {
  const context = useContext(ToastContext);
  if (!context)
    throw new Error('ToastTrigger must be used inside Toast component');

  if (asChild) {
    if (!React.isValidElement(children)) {
      console.error(
        'ToastTrigger requires a valid ReactElement when `asChild` is true.'
      );
      return null;
    }
    return React.cloneElement(children, {
      onClick: context.toggle,
    });
  }

  return (
    <Button variant="outline" onClick={context.toggle} {...props}>
      {children}
    </Button>
  );
};
const ToastAction = ({
  children,
  className,
  asChild = false,
  ...props
}: React.HTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  children?: React.ReactNode | React.ReactElement<any>;
}) => {
  const context = useContext(ToastContext);
  if (!context)
    throw new Error('ToastAction must be used inside Toast component');

  if (asChild) {
    if (!React.isValidElement(children)) {
      console.error(
        'ToastAction requires a valid ReactElement when `asChild` is true.'
      );
      return null;
    }
    return React.cloneElement(children, {
      onClick: context.toggle,
    });
  }

  return (
    <div style={{ gridArea: 'TA' }} className="grid place-content-center mx-6">
      <Button variant="outline" {...props}>
        {children}
      </Button>
    </div>
  );
};
const ToastContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
}) => {
  const context = useContext(ToastContext);
  if (!context)
    throw new Error('ToastTrigger must be used inside Toast component');

  return context.isOpen ? (
    <div
      style={{
        display: 'grid',
        gridTemplateAreas: `
            'TT TA'
            'TD TA'
            `,
        gridTemplateColumns: '1fr auto',
      }}
      className={
        'fixed min-w-100 p-6 right-4 bottom-4 rounded-lg border border-border ' +
        className
      }
    >
      <button
        className="flex items-center justify-center w-6 h-6 absolute top-3 right-3 cursor-pointer rounded-lg group"
        onClick={context.toggle}
      >
        <svg
          className="w-2 fill-subtext group-hover:fill-text"
          viewBox="0 0 8 8"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M4 4.4632L0.567877 7.89532C0.506815 7.95638 0.431796 7.9891 0.34282 7.99346C0.253843 7.99782 0.174463 7.96511 0.104678 7.89532C0.0348925 7.82554 0 7.74834 0 7.66372C0 7.57911 0.0348925 7.50191 0.104678 7.43212L3.5368 4L0.104678 0.567877C0.0436156 0.506815 0.0109038 0.431796 0.0065422 0.34282C0.00218062 0.253843 0.0348925 0.174463 0.104678 0.104678C0.174463 0.0348925 0.251663 0 0.336277 0C0.420892 0 0.498092 0.0348925 0.567877 0.104678L4 3.5368L7.43212 0.104678C7.49319 0.0436156 7.56842 0.0109038 7.65783 0.0065422C7.74637 0.00218062 7.82554 0.0348925 7.89532 0.104678C7.96511 0.174463 8 0.251663 8 0.336277C8 0.420892 7.96511 0.498092 7.89532 0.567877L4.4632 4L7.89532 7.43212C7.95638 7.49319 7.9891 7.56842 7.99346 7.65783C7.99782 7.74637 7.96511 7.82554 7.89532 7.89532C7.82554 7.96511 7.74834 8 7.66372 8C7.57911 8 7.50191 7.96511 7.43212 7.89532L4 4.4632Z" />
        </svg>
      </button>
      {children}
    </div>
  ) : (
    <></>
  );
};

const ToastTitle: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
}) => {
  return (
    <div style={{ gridArea: 'TT' }} className={'p ' + className}>
      {children}
    </div>
  );
};
const ToastDescription: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
}) => {
  return (
    <div style={{ gridArea: 'TD' }} className={'p text-subtext ' + className}>
      {children}
    </div>
  );
};

export {
  Toast,
  ToastTrigger,
  ToastContent,
  ToastTitle,
  ToastDescription,
  ToastAction,
};
