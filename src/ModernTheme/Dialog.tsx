import React, {
  createContext,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';
import { Button } from './Button';

interface DialogContextType {
  isOpen: boolean;
  toggle: () => void;
}
const DialogContext = createContext<DialogContextType>({
  isOpen: false,
  toggle: () => {},
});

const Dialog = ({
  children,
  open,
  toggleOpen,
}: {
  children: React.ReactNode;
  open?: boolean;
  toggleOpen?: () => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((prev) => !prev);

  const value = !(open && toggleOpen)
    ? { isOpen, toggle }
    : { isOpen: open, toggle: toggleOpen };
  return (
    <DialogContext.Provider value={value}>{children}</DialogContext.Provider>
  );
};

const DialogTrigger = ({
  children,
  className,
  asChild = false,
  ...props
}: React.HTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  children: React.ReactNode | React.ReactElement<any>;
}) => {
  const context = useContext(DialogContext);

  if (asChild) {
    if (!React.isValidElement(children)) {
      console.error(
        'DialogTrigger requires a valid ReactElement when `asChild` is true.'
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

const DialogContent = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  const context = useContext(DialogContext);
  useEffect(() => {
    const handleOutside = (e: MouseEvent) => {
      if (!context.isOpen) return;

      const target = e.target as Node;

      if (!document.getElementById('Dialog-Content')?.contains(target)) {
        context.toggle();
      }
    };

    document.addEventListener('mousedown', handleOutside);
    return () => {
      document.removeEventListener('mousedown', handleOutside);
    };
  }, [context.isOpen]);
  return context.isOpen ? (
    <div className="fixed z-1000 inset-0 bg-bg/75 backdrop-opacity-5 bg-opacity-5 grid place-content-center">
      <div
        className={
          'w-2xl relative bg-bg flex flex-col gap-4 border border-border rounded-lg ' +
          className
        }
        id="Dialog-Content"
      >
        <button
          className="flex items-center justify-center w-6 h-6 absolute top-3 right-3 cursor-pointer rounded-lg hover:bg-surface"
          onClick={context.toggle}
        >
          <svg
            className="w-2"
            viewBox="0 0 8 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 4.4632L0.567877 7.89532C0.506815 7.95638 0.431796 7.9891 0.34282 7.99346C0.253843 7.99782 0.174463 7.96511 0.104678 7.89532C0.0348925 7.82554 0 7.74834 0 7.66372C0 7.57911 0.0348925 7.50191 0.104678 7.43212L3.5368 4L0.104678 0.567877C0.0436156 0.506815 0.0109038 0.431796 0.0065422 0.34282C0.00218062 0.253843 0.0348925 0.174463 0.104678 0.104678C0.174463 0.0348925 0.251663 0 0.336277 0C0.420892 0 0.498092 0.0348925 0.567877 0.104678L4 3.5368L7.43212 0.104678C7.49319 0.0436156 7.56842 0.0109038 7.65783 0.0065422C7.74637 0.00218062 7.82554 0.0348925 7.89532 0.104678C7.96511 0.174463 8 0.251663 8 0.336277C8 0.420892 7.96511 0.498092 7.89532 0.567877L4.4632 4L7.89532 7.43212C7.95638 7.49319 7.9891 7.56842 7.99346 7.65783C7.99782 7.74637 7.96511 7.82554 7.89532 7.89532C7.82554 7.96511 7.74834 8 7.66372 8C7.57911 8 7.50191 7.96511 7.43212 7.89532L4 4.4632Z"
              fill="white"
            />
          </svg>
        </button>
        {children}
      </div>
    </div>
  ) : (
    <></>
  );
};

const DialogHeader = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className="flex flex-col gap-2" {...props}>
      {children}
    </div>
  );
};
const DialogFooter = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className="self-end flex gap-4" {...props}>
      {children}
    </div>
  );
};

const DialogTitle = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={'h3 ' + className} {...props}>
      {children}
    </div>
  );
};
const DialogDescription = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={'p text-subtext ' + className} {...props}>
      {children}
    </div>
  );
};

const DialogClose = ({
  children,
  className,
  onClick,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const context = useContext(DialogContext);
  return (
    <button
      className="px-6 py-2 rounded-lg border border-border hover:bg-border cursor-pointer transition-colors duration-150 p"
      onClick={context.toggle}
      {...props}
    >
      {children}
    </button>
  );
};
const DialogAction = ({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className="px-6 py-2 rounded-lg text-bg bg-white cursor-pointer transition-colors duration-150 hover:bg-white/90 p"
      {...props}
    >
      {children}
    </button>
  );
};
export {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogClose,
  DialogAction,
  DialogDescription,
};
