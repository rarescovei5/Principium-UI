import React, { createContext, useContext, useState } from 'react';
import { Button } from './Button';

const PopoverContext = createContext({
  isOpen: false,
  toggle: () => {},
});

const Popover: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((prev) => !prev);
  return (
    <PopoverContext.Provider value={{ isOpen, toggle }}>
      <div className="relative inline-block">{children}</div>
    </PopoverContext.Provider>
  );
};

const PopoverTrigger = ({
  children,
  className,
  asChild = false,
  ...props
}: React.HTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  children: React.ReactNode | React.ReactElement<any>;
}) => {
  const context = useContext(PopoverContext);

  if (asChild) {
    if (!React.isValidElement(children)) {
      console.error(
        'PopoverTrigger requires a valid ReactElement when `asChild` is true.'
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
const PopoverContent = ({
  children,
  className,
  side = 'bottom',
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  side?: 'top' | 'right' | 'bottom' | 'left';
}) => {
  const context = useContext(PopoverContext);
  const sideClasses: Record<typeof side, string> = {
    top: 'bottom-[calc(100%+0.5rem)] left-[50%] -translate-x-[50%]',
    right: 'left-[calc(100%+0.5rem)] top-[50%] -translate-y-[50%]',
    bottom: 'top-[calc(100%+0.5rem)] left-[50%] -translate-x-[50%]',
    left: 'right-[calc(100%+0.5rem)] top-[50%] -translate-y-[50%]',
  };
  return context.isOpen ? (
    <div
      className={'absolute ' + sideClasses[side] + ' ' + className}
      {...props}
    >
      {children}
    </div>
  ) : (
    <></>
  );
};

export { Popover, PopoverTrigger, PopoverContent };
