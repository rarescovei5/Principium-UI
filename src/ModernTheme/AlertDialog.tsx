import React, { createContext, useContext, useState } from 'react';
import { Button } from './Button';

// ────────────────────────────────────────────────────────────────
// ALERT DIALOG CONTEXT
// ────────────────────────────────────────────────────────────────

interface AlertDialogContextType {
  isOpen: boolean;
  toggle: () => void;
}

const AlertDialogContext = createContext<AlertDialogContextType | null>(null);

const useAlertDialogContext = () => {
  const context = useContext(AlertDialogContext);
  if (!context)
    throw new Error(
      `AlertDialog Components Must be used inside of an AlertDialog component`
    );
  return context;
};
// ────────────────────────────────────────────────────────────────
// ALERT DIALOG PROVIDER
// ────────────────────────────────────────────────────────────────

/**
 * AlertDialog component that provides the AlertDialog context.
 * It manages the open/close state.
 */
const AlertDialog = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((prev) => !prev);
  return (
    <AlertDialogContext.Provider value={{ isOpen, toggle }}>
      {children}
    </AlertDialogContext.Provider>
  );
};

// ────────────────────────────────────────────────────────────────
// ALERT DIALOG TRIGGER
// ────────────────────────────────────────────────────────────────

/**
 * AlertDialogTrigger component. It supports an `asChild` prop so that the trigger
 * can be rendered as a custom element. If `asChild` is true, it clones the child
 * and injects an onClick handler to toggle the dialog.
 */
const AlertDialogTrigger = ({
  children,
  className = '',
  asChild = false,
  ...props
}: React.HTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  children?: React.ReactNode | React.ReactElement<any>;
}) => {
  const context = useAlertDialogContext();

  if (asChild) {
    if (!React.isValidElement(children)) {
      console.error(
        'AlertDialogTrigger requires a valid ReactElement when `asChild` is true.'
      );
      return null;
    }
    // Clone the child element and inject the onClick handler.
    return React.cloneElement(children, {
      onClick: context.toggle,
    });
  }

  // If not using asChild, render the default Button.
  return (
    <Button variant="outline" onClick={context.toggle} {...props}>
      {children}
    </Button>
  );
};

// ────────────────────────────────────────────────────────────────
// ALERT DIALOG CONTENT (Header, Footer, Title, Description)
// ────────────────────────────────────────────────────────────────

/**
 * AlertDialogContent component. It conditionally renders its content based on
 * whether the dialog is open. When open, it displays a centered overlay.
 */
const AlertDialogContent = ({
  children,
  className = '',
  ...props
}: {
  children: React.ReactNode;
  className?: any;
  props?: any;
}) => {
  const context = useAlertDialogContext();
  return context.isOpen ? (
    <div className="fixed z-1000 inset-0 bg-bg/75 backdrop-opacity-5 bg-opacity-5 grid place-content-center">
      <div
        className={`w-2xl bg-bg flex flex-col gap-4 border border-border p-6 rounded-lg ${className}`}
        {...props}
      >
        {children}
      </div>
    </div>
  ) : (
    <></>
  );
};

/**
 * AlertDialogHeader component that renders the header section of the dialog.
 */
const AlertDialogHeader = ({
  children,
  className = '',
  ...props
}: {
  children: React.ReactNode;
  className?: any;
  props?: any;
}) => {
  return (
    <div className={`flex flex-col gap-2 ${className}`} {...props}>
      {children}
    </div>
  );
};

/**
 * AlertDialogFooter component that renders the footer section of the dialog.
 */
const AlertDialogFooter = ({
  children,
  className = '',
  ...props
}: {
  children: React.ReactNode;
  className?: any;
  props?: any;
}) => {
  return (
    <div className={`self-end flex gap-4 ${className}`} {...props}>
      {children}
    </div>
  );
};

/**
 * AlertDialogTitle component that renders the title of the dialog.
 */
const AlertDialogTitle = ({
  children,
  className = '',
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

/**
 * AlertDialogDescription component that renders the description content.
 */
const AlertDialogDescription = ({
  children,
  className = '',
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

// ────────────────────────────────────────────────────────────────
// ALERT DIALOG CANCEL BUTTON
// ────────────────────────────────────────────────────────────────

/**
 * AlertDialogCancel component renders a cancel button. It automatically toggles
 * the dialog off when clicked.
 */
const AlertDialogCancel = ({
  children,
  className = '',
  onClick,
  ...props
}: {
  children: React.ReactNode;
  onClick?: any;
  className?: any;
  props?: any;
}) => {
  const context = useAlertDialogContext();
  return (
    <button
      className={`px-6 py-2 rounded-lg border border-border hover:bg-border cursor-pointer transition-colors duration-150 p ${className}`}
      onClick={context.toggle}
      {...props}
    >
      {children}
    </button>
  );
};

// ────────────────────────────────────────────────────────────────
// ALERT DIALOG ACTION BUTTON
// ────────────────────────────────────────────────────────────────

/**
 * AlertDialogAction component renders an action button.
 */
const AlertDialogAction = ({
  children,
  className = '',
  ...props
}: {
  children: React.ReactNode;
  className?: any;
  props?: any;
}) => {
  return (
    <button
      className={`px-6 py-2 rounded-lg text-bg bg-white cursor-pointer transition-colors duration-150 hover:bg-white/90 p ${className}`}
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
