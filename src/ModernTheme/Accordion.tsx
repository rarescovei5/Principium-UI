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

  return (
    <button
      className="w-full my-4 flex justify-between items-center h3 cursor-pointer hover:underline text-left"
      onClick={context.toggle}
      {...props}
    >
      {children}

      <svg
        className={`w-4 transition-transform duration-300 ml-4 ${
          context.isOpen ? 'rotate-180' : ''
        }`}
        viewBox="0 0 8 4"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.75078 3.90553L0.0950727 0.511126C0.0340446 0.454488 0 0.379241 0 0.300992C0 0.222744 0.0340446 0.147497 0.0950727 0.0908601L0.0992035 0.0872054C0.128789 0.0596535 0.1644 0.0377147 0.203871 0.022723C0.243343 0.0077312 0.285849 2.38419e-07 0.328804 2.38419e-07C0.371759 2.38419e-07 0.414265 0.0077312 0.453736 0.022723C0.493207 0.0377147 0.528819 0.0596535 0.558404 0.0872054L4.00069 3.28366L7.4416 0.0872054C7.47118 0.0596535 7.50679 0.0377147 7.54626 0.022723C7.58573 0.0077312 7.62824 2.38419e-07 7.6712 2.38419e-07C7.71415 2.38419e-07 7.75666 0.0077312 7.79613 0.022723C7.8356 0.0377147 7.87121 0.0596535 7.9008 0.0872054L7.90493 0.0908601C7.96596 0.147497 8 0.222744 8 0.300992C8 0.379241 7.96596 0.454488 7.90493 0.511126L4.24922 3.90553C4.21707 3.93538 4.17841 3.95915 4.13557 3.97539C4.09273 3.99163 4.04661 4 4 4C3.95339 4 3.90727 3.99163 3.86443 3.97539C3.82159 3.95915 3.78293 3.93538 3.75078 3.90553Z"
          fill="white"
        />
      </svg>
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
