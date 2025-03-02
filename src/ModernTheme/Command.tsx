import React, {
  createContext,
  SetStateAction,
  useContext,
  useState,
  ReactNode,
  ReactElement,
} from 'react';
import { Dialog, DialogContent } from './Dialog';

// ────────────────────────────────────────────────────────────────
// CONTEXT
// ────────────────────────────────────────────────────────────────

type CommandContextType = {
  selectedIndex: number | null;
  setSelectedIndex: React.Dispatch<SetStateAction<number | null>>;
};

const CommandContext = createContext<CommandContextType | null>(null);

// ────────────────────────────────────────────────────────────────
// PROP TYPES
// ────────────────────────────────────────────────────────────────

interface CommandProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

interface CommandDialogProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

interface CommandEmptyProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

interface CommandGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  heading?: string;
  children: ReactNode;
}

interface CommandInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

interface CommandItemProps extends React.HTMLAttributes<HTMLDivElement> {
  disabled?: boolean;
  index?: number;
  children: ReactNode;
}

interface CommandSeparatorProps extends React.HTMLAttributes<HTMLHRElement> {}

interface CommandShortcutProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

interface CommandListProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

// ────────────────────────────────────────────────────────────────
// COMPONENTS
// ────────────────────────────────────────────────────────────────

const Command: React.FC<CommandProps> = ({
  className = '',
  children,
  ...props
}) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  return (
    <CommandContext.Provider value={{ selectedIndex, setSelectedIndex }}>
      <div className={`rounded-lg ${className}`} {...props}>
        {children}
      </div>
    </CommandContext.Provider>
  );
};

const CommandDialog: React.FC<CommandDialogProps> = ({
  children,
  ...props
}) => {
  return (
    <Dialog {...props}>
      <DialogContent>
        <Command>{children}</Command>
      </DialogContent>
    </Dialog>
  );
};

const CommandEmpty: React.FC<CommandEmptyProps> = ({
  className = '',
  children,
  ...props
}) => {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
};

const CommandGroup: React.FC<CommandGroupProps> = ({
  className = '',
  heading,
  children,
  ...props
}) => {
  return (
    <div className={`flex flex-col py-2 gap-1 ${className}`} {...props}>
      {heading && <p className="px-4 text-subtext small">{heading}</p>}
      {children}
    </div>
  );
};

const CommandInput: React.FC<CommandInputProps> = ({
  className = '',
  ...props
}) => {
  return (
    <div className="flex px-3 py-3 items-center gap-2 border-b border-b-border">
      <svg
        className="w-4"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17 17L13.1396 13.1396M13.1396 13.1396C13.7999 12.4793 14.3237 11.6953 14.6811 10.8326C15.0385 9.96978 15.2224 9.04507 15.2224 8.11121C15.2224 7.17735 15.0385 6.25264 14.6811 5.38987C14.3237 4.5271 13.7999 3.74316 13.1396 3.08283C12.4793 2.42249 11.6953 1.89868 10.8326 1.54131C9.96978 1.18394 9.04507 1 8.11121 1C7.17735 1 6.25264 1.18394 5.38987 1.54131C4.5271 1.89868 3.74316 2.42249 3.08283 3.08283C1.74921 4.41644 1 6.2252 1 8.11121C1 9.99722 1.74921 11.806 3.08283 13.1396C4.41644 14.4732 6.2252 15.2224 8.11121 15.2224C9.99722 15.2224 11.806 14.4732 13.1396 13.1396Z"
          stroke="#999999"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <input
        className={`w-full p outline-0 ${className}`}
        type="text"
        {...props}
      />
    </div>
  );
};

const CommandItem: React.FC<CommandItemProps> = ({
  className = '',
  children,
  disabled,
  index,
  ...props
}) => {
  const context = useContext(CommandContext);
  if (!context) {
    throw new Error(
      'CommandItem must be used inside a Command or CommandDialog'
    );
  }
  const { selectedIndex, setSelectedIndex } = context;
  const isSelected = selectedIndex === index;

  return (
    <div
      className={`mx-1 px-3 py-2 select-none rounded-lg flex items-center ${
        disabled ? 'opacity-50' : ''
      } ${isSelected ? 'bg-surface' : ''} ${className}`}
      onMouseEnter={() => {
        if (!disabled && index !== undefined) {
          setSelectedIndex(index);
        }
      }}
      {...props}
    >
      {children}
    </div>
  );
};
CommandItem.displayName = 'CommandItem';

const CommandSeparator: React.FC<CommandSeparatorProps> = ({
  className = '',
  ...props
}) => {
  return (
    <hr className={`min-h-[1px] h-[1px] bg-border ${className}`} {...props} />
  );
};

const CommandShortcut: React.FC<CommandShortcutProps> = ({
  className = '',
  children,
  ...props
}) => {
  return (
    <div className={`ml-auto text-subtext small ${className}`} {...props}>
      {children}
    </div>
  );
};

// ────────────────────────────────────────────────────────────────
// AUTO-INDEXING HELPER FOR CommandList
// ────────────────────────────────────────────────────────────────

/**
 * Recursively traverses the React node tree and injects an `index` prop
 * into every CommandItem element.
 */
const injectIndex = (
  child: ReactNode,
  counter: { current: number }
): ReactNode => {
  if (React.isValidElement(child)) {
    const element = child as ReactElement<any>;
    // If the element is a CommandItem, inject the current index.
    if ((element.type as any).displayName === 'CommandItem') {
      const newChild = React.cloneElement(element, { index: counter.current });
      counter.current++;
      return newChild;
    }
    // If the element has children, process them recursively.
    if (element.props && element.props.children) {
      const newChildren = React.Children.map(
        element.props.children,
        (nestedChild) => injectIndex(nestedChild, counter)
      );
      return React.cloneElement(element, { children: newChildren });
    }
  }
  return child;
};

const CommandList: React.FC<CommandListProps> = ({
  className = '',
  children,
  ...props
}) => {
  const counter = { current: 0 };
  const childrenWithIndex = React.Children.map(children, (child) =>
    injectIndex(child, counter)
  );
  return (
    <div className={className} {...props}>
      {childrenWithIndex}
    </div>
  );
};

// ────────────────────────────────────────────────────────────────
// EXPORTS
// ────────────────────────────────────────────────────────────────

export {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandSeparator,
  CommandShortcut,
  CommandList,
};
