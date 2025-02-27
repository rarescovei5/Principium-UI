import { createContext, useContext, useState } from 'react';

interface AccordionContextType {
  isOpen: boolean;
  toggle: () => void;
}

const AccordionContext = createContext<AccordionContextType>({
  isOpen: false,
  toggle: () => {},
});

/**
 * AccordionItem is a provider and uses context to pass isOpen and toggle
 * to the children, this is to make a relation between them
 * [overwrites classes]
 */
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
      <div className="border-b-[1px] border-b-border" {...props}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
};

/**
 * This toggles the visibility of the content it is associated to,
 * It gets the context from the item it is in and acceses the toggle method
 * [overwrites classes]
 */
const AccordionTrigger = ({
  children,
  className,
  onClick,
  ...props
}: {
  children: React.ReactNode;
  className?: any;
  onClick?: any;
  props?: any;
}) => {
  const context = useContext(AccordionContext);
  if (!context)
    console.warn('AccordionTrigger must be use insde of a AccordionItem!');

  return (
    <button
      className="w-full my-4 flex justify-between items-center h3 cursor-pointer hover:underline text-left"
      onClick={context.toggle}
      {...props}
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

/**
 * This is for the content of the AccordionItem,
 * I suggest just putting text
 * [overwrites classes]
 */
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
      {...props}
    >
      <div className="overflow-hidden">{children}</div>
    </div>
  );
};

/**
 * Used with Item which contains a Trigger and a Content component.
 * You could also use a div that has display flex flex-col.
 * [overwrites classes]
 */
const Accordion = ({
  className,
  children,
  ...props
}: {
  className?: string;
  children: React.ReactNode;
  props?: any;
}) => {
  return (
    <div className="flex flex-col" {...props}>
      {children}
    </div>
  );
};

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
