import React, { Children, createContext, useContext, useState } from 'react';
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
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  const context = useContext(PopoverContext);
  return context.isOpen ? (
    <div
      className={
        'absolute top-[calc(100%+0.5rem)] left-[50%] -translate-x-[50%] ' +
        className
      }
      {...props}
    >
      {children}
    </div>
  ) : (
    <></>
  );
};

export { Popover, PopoverTrigger, PopoverContent };
