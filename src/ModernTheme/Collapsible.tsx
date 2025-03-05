import React, { createContext, useContext, useState } from 'react';
import { Button } from './Button';

interface CollapsibleContextType {
  isOpen: boolean;
  toggle: () => void;
}

const CollapsibleContext = createContext<CollapsibleContextType | null>(null);

const Collapsible: React.FC<
  React.HTMLAttributes<HTMLDivElement> & {
    isOpen?: boolean;
    toggle?: () => void;
  }
> = ({ children, isOpen, toggle, ...props }) => {
  const [isOpen2, setIsOpen2] = useState<boolean>(isOpen ?? true);

  const toggleF = toggle ?? (() => setIsOpen2((prev) => !prev));

  return (
    <CollapsibleContext.Provider
      value={{ isOpen: isOpen ?? isOpen2, toggle: toggleF }}
    >
      <div {...props}>{children}</div>
    </CollapsibleContext.Provider>
  );
};

const CollapsibleTrigger: React.FC<
  React.HTMLAttributes<HTMLButtonElement> & {
    asChild?: boolean;
    children: React.ReactNode | React.ReactElement<any>;
  }
> = ({ children, asChild = false, ...props }) => {
  const context = useContext(CollapsibleContext);

  if (!context)
    throw new Error(
      'CollapsibleTrigger must be used within a Collapsible component.'
    );

  if (asChild) {
    if (!React.isValidElement(children)) {
      console.error(
        'AlertDialogTrigger requires a valid ReactElement when `asChild` is true.'
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

const CollapsibleContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  ...props
}) => {
  const context = useContext(CollapsibleContext);

  if (!context) {
    console.error(
      'CollapsibleContent must be used within a Collapsible component.'
    );
    return null;
  }

  return context.isOpen ? <div {...props}>{children}</div> : null;
};

export { Collapsible, CollapsibleTrigger, CollapsibleContent };
