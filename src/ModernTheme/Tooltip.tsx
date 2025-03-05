import React, { createContext, useContext, useRef, useState } from 'react';
import { Button } from './Button';

interface TooltipContextType {
  isOpen: boolean;
  onTriggerEnter: () => void;
  onTriggerLeave: () => void;
  onContentEnter: () => void;
  onContentLeave: () => void;
}

const TooltipContext = createContext<TooltipContextType | null>(null);

const Tooltip: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  // Track whether the trigger or content is hovered
  const triggerHovered = useRef(false);
  const contentHovered = useRef(false);
  // A shared timeout ref for both showing and hiding
  const timeoutRef = useRef<number | null>(null);

  const updateOpenState = () => {
    if (triggerHovered.current || contentHovered.current) {
      // If hovered over trigger or content, clear any pending hide
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      // Only open if not already open
      if (!isOpen) {
        timeoutRef.current = window.setTimeout(() => {
          setIsOpen(true);
          timeoutRef.current = null;
        }, 300);
      }
    } else {
      // Neither hovered: clear any pending open then schedule close
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      timeoutRef.current = window.setTimeout(() => {
        setIsOpen(false);
        timeoutRef.current = null;
      }, 150);
    }
  };

  const onTriggerEnter = () => {
    triggerHovered.current = true;
    updateOpenState();
  };

  const onTriggerLeave = () => {
    triggerHovered.current = false;
    updateOpenState();
  };

  const onContentEnter = () => {
    contentHovered.current = true;
    updateOpenState();
  };

  const onContentLeave = () => {
    contentHovered.current = false;
    updateOpenState();
  };

  return (
    <TooltipContext.Provider
      value={{
        isOpen,
        onTriggerEnter,
        onTriggerLeave,
        onContentEnter,
        onContentLeave,
      }}
    >
      <div className={'relative inline ' + className} {...props}>
        {children}
      </div>
    </TooltipContext.Provider>
  );
};

interface TooltipTriggerProps extends React.HTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  children: React.ReactNode | React.ReactElement<any>;
}

const TooltipTrigger: React.FC<TooltipTriggerProps> = ({
  children,
  asChild = false,
  ...props
}) => {
  const context = useContext(TooltipContext);
  if (!context) {
    throw new Error('TooltipTrigger must be used within a Tooltip component.');
  }

  const triggerProps = {
    onMouseEnter: context.onTriggerEnter,
    onMouseLeave: context.onTriggerLeave,
    ...props,
  };

  if (asChild) {
    if (!React.isValidElement(children)) {
      console.error(
        'TooltipTrigger requires a valid ReactElement when `asChild` is true.'
      );
      return null;
    }
    return React.cloneElement(children, triggerProps);
  }

  return <Button {...triggerProps}>{children}</Button>;
};

const TooltipContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  const context = useContext(TooltipContext);
  if (!context) {
    console.error('TooltipContent must be used within a Tooltip component.');
    return null;
  }

  // Render nothing if not open
  if (!context.isOpen) return null;

  return (
    <div
      className={
        'absolute bottom-[calc(100%+1rem)] left-[50%] translate-x-[-50%] bg-bg py-2 px-3 rounded-lg border border-border ' +
        className
      }
      onMouseEnter={context.onContentEnter}
      onMouseLeave={context.onContentLeave}
      {...props}
    >
      {children}
    </div>
  );
};

export { Tooltip, TooltipTrigger, TooltipContent };
