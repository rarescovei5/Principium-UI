import { createContext, useContext, useState } from 'react';

interface AlertDialogContextType {
  isOpen: boolean;
  toggle: () => void;
}
const AlertDialogContext = createContext<AlertDialogContextType>({
  isOpen: false,
  toggle: () => {},
});

const AlertDialog = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: any;
  props?: any;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((prev) => !prev);
  return (
    <AlertDialogContext.Provider value={{ isOpen, toggle }}>
      {children}
    </AlertDialogContext.Provider>
  );
};

const AlertDialogTrigger = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  props?: any;
}) => {
  const context = useContext(AlertDialogContext);
  return (
    <button
      className="px-6 py-2 border-[1px] border-border hover:bg-border rounded-lg cursor-pointer p transition-colors duration-150"
      onClick={context.toggle}
    >
      {children}
    </button>
  );
};

const AlertDialogContent = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: any;
  props?: any;
}) => {
  const context = useContext(AlertDialogContext);
  return context.isOpen ? (
    <div className="fixed inset-0 bg-bg/75 backdrop-opacity-5 bg-opacity-5 grid place-content-center">
      <div className="w-2xl bg-bg flex flex-col gap-4 border-[1px] border-border p-6 rounded-lg">
        {children}
      </div>
    </div>
  ) : (
    <></>
  );
};

const AlertDialogHeader = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: any;
  props?: any;
}) => {
  return (
    <div className="flex flex-col gap-2" {...props}>
      {children}
    </div>
  );
};
const AlertDialogFooter = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: any;
  props?: any;
}) => {
  return (
    <div className="self-end flex gap-4" {...props}>
      {children}
    </div>
  );
};

const AlertDialogTitle = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: any;
  props?: any;
}) => {
  return (
    <div className={'h3 ' + className} {...props}>
      {children}
    </div>
  );
};
const AlertDialogDescription = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: any;
  props?: any;
}) => {
  return (
    <div className={'p text-subtext ' + className} {...props}>
      {children}
    </div>
  );
};

const AlertDialogCancel = ({
  children,
  className,
  onClick,
  ...props
}: {
  children: React.ReactNode;
  onClick?: any;
  className?: any;
  props?: any;
}) => {
  const context = useContext(AlertDialogContext);
  return (
    <button
      className="px-6 py-2 rounded-lg border-[1px] border-border hover:bg-border cursor-pointer transition-colors duration-150 p"
      onClick={context.toggle}
      {...props}
    >
      {children}
    </button>
  );
};
const AlertDialogAction = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: any;
  props?: any;
}) => {
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
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
};
