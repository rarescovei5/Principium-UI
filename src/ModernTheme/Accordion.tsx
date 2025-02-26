import React, { createContext, useContext, useState } from 'react';

interface AccordionContextType {
  isOpen: boolean;
  toggle: () => void;
}

const AccordionContext = createContext<AccordionContextType>({
  isOpen: false,
  toggle: () => {},
});

const AccordionItem = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  props?: any;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((prev) => !prev);

  return (
    <AccordionContext.Provider value={{ isOpen, toggle }}>
      <div className="border-b-[1px] border-b-border">{children}</div>
    </AccordionContext.Provider>
  );
};

const AccordionTrigger = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: any;
}) => {
  const context = useContext(AccordionContext);
  if (!context)
    console.warn('AccordionTrigger must be use insde of a AccordionItem!');

  return (
    <button
      className="w-full my-4 flex justify-between items-center h3 cursor-pointer hover:underline text-left"
      onClick={context.toggle}
    >
      {children}
      <img
        className={`w-4 transition-transform duration-300 ml-4 ${
          context.isOpen ? 'rotate-180' : ''
        }`}
        src="/ChevronDown.svg"
        alt=""
      />
    </button>
  );
};

const AccordionContent = ({
  className,
  children,
  ...props
}: {
  children: React.ReactNode;
  props?: any;
  className?: string;
}) => {
  const context = useContext(AccordionContext);
  if (!context)
    console.warn('AccordionTrigger must be use insde of a AccordionItem!');

  return (
    <div
      className={`p text-subtext grid transition-all duration-300 ${
        context.isOpen ? 'mb-4 grid-rows-[1fr]' : 'grid-rows-[0fr]'
      }`}
    >
      <div className="overflow-hidden">{children}</div>
    </div>
  );
};

const Accordion = ({
  className,
  children,
  ...props
}: {
  className?: string;
  children: React.ReactNode;
  props?: any;
}) => {
  return <div className="flex flex-col">{children}</div>;
};

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
