import React, {
  createContext,
  SetStateAction,
  useContext,
  useState,
  ReactNode,
  ReactElement,
  FC,
  useEffect,
} from 'react';
import { Dialog, DialogContent } from './Dialog';

// ────────────────────────────────────────────────────────────────
// CONTEXT
// ────────────────────────────────────────────────────────────────

type CommandContextType = {
  selectedIndex: number | null;
  setSelectedIndex: React.Dispatch<SetStateAction<number | null>>;
  searchQuery: string;
  setSearchQuery: React.Dispatch<SetStateAction<string>>;
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

const Command: FC<CommandProps> = ({ className = '', children, ...props }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <CommandContext.Provider
      value={{
        selectedIndex,
        setSelectedIndex,
        searchQuery,
        setSearchQuery,
      }}
    >
      <div className={`rounded-lg ${className}`} {...props}>
        {children}
      </div>
    </CommandContext.Provider>
  );
};

const CommandDialog: FC<CommandDialogProps> = ({ children, ...props }) => {
  return (
    <Dialog {...props}>
      <DialogContent>
        <Command>{children}</Command>
      </DialogContent>
    </Dialog>
  );
};

const CommandEmpty: FC<CommandEmptyProps> = ({ children }) => {
  const context = useContext(CommandContext);
  if (!context)
    throw new Error(
      'CommandEmpty must be used inside of a Command or CommandDialog'
    );

  return <div className="text-center p-4">{children}</div>;
};

const CommandGroup: FC<CommandGroupProps> = ({
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

const CommandInput: FC<CommandInputProps> = ({ className = '', ...props }) => {
  const context = useContext(CommandContext);
  if (!context) throw new Error('CommandInput must be used within a Command');
  const { searchQuery, setSearchQuery } = context;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    if (props.onChange) props.onChange(e);
  };

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
        value={searchQuery}
        onChange={handleChange}
        {...props}
      />
    </div>
  );
};

const CommandItem: FC<CommandItemProps> = ({
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

const CommandSeparator: FC<CommandSeparatorProps> = ({
  className = '',
  ...props
}) => {
  const context = useContext(CommandContext);
  if (!context)
    throw new Error(
      'CommandSeparator has to be used inside of a Command or CommandDialog'
    );
  return (
    <hr className={`min-h-[1px] h-[1px] bg-border ${className}`} {...props} />
  );
};

const CommandShortcut: FC<CommandShortcutProps> = ({
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
// SEARCH HELPERS
// ────────────────────────────────────────────────────────────────

/**
 * Recursively extract text from a React node.
 */
const getTextFromReactNode = (node: ReactNode): string => {
  if (typeof node === 'string' || typeof node === 'number') {
    return node.toString();
  } else if (React.isValidElement<{ children?: ReactNode }>(node)) {
    return getTextFromReactNode(node.props.children);
  } else if (Array.isArray(node)) {
    return node.map(getTextFromReactNode).join(' ');
  }
  return '';
};

/**
 * Recursively filter command children by search query.
 * For CommandGroup, it preserves the group if any child matches.
 */
const filterCommands = (children: ReactNode, query: string): ReactNode => {
  return React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) return child;
    const element = child as ReactElement<any>;

    if ((element as any).type.name === 'CommandSeparator') {
      return null;
    }

    if ((element as any).type.name === 'CommandGroup') {
      const filteredChildren = filterCommands(element.props.children, query);
      if (!filteredChildren || React.Children.count(filteredChildren) === 0)
        return null;
      return React.cloneElement(element, { children: filteredChildren });
    }

    if ((element as any).type.name === 'CommandItem') {
      const text = getTextFromReactNode(element.props.children);
      return text.toLowerCase().includes(query.toLowerCase()) ? element : null;
    }

    return element;
  });
};

// ────────────────────────────────────────────────────────────────
// AUTO-INDEXING HELPER
// ────────────────────────────────────────────────────────────────

const injectIndex = (
  child: ReactNode,
  counter: { current: number }
): ReactNode => {
  if (React.isValidElement(child)) {
    const element = child as ReactElement<any>;
    if ((element as any).type.name === 'CommandItem') {
      const newChild = React.cloneElement(element, { index: counter.current });
      counter.current++;
      return newChild;
    }
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

// ────────────────────────────────────────────────────────────────
// COMMAND LIST (FILTERING & INDEXING)
// ────────────────────────────────────────────────────────────────

const CommandList: FC<CommandListProps> = ({
  className = '',
  children,
  ...props
}) => {
  const context = useContext(CommandContext);
  if (!context)
    throw new Error(
      'CommandList must be used inside of a Command or CommandDialog'
    );

  const query = context?.searchQuery || '';

  // Separate `CommandEmpty` from other children
  let commandEmpty: ReactNode | null = null;
  const validChildren: ReactNode[] = [];

  React.Children.forEach(children, (child) => {
    if (
      React.isValidElement(child) &&
      (child as any).type.name === 'CommandEmpty'
    ) {
      commandEmpty = child; // Store CommandEmpty for later
    } else {
      validChildren.push(child); // Store valid children
    }
  });

  // Filter items based on search query
  const filteredChildren = query.trim()
    ? filterCommands(validChildren, query)
    : validChildren;

  // Inject indexes for selection behavior
  const counter = { current: 0 };
  const childrenWithIndex = React.Children.map(filteredChildren, (child) =>
    injectIndex(child, counter)
  );

  return (
    <div className={className} {...props}>
      {React.Children.count(childrenWithIndex) > 0
        ? childrenWithIndex
        : commandEmpty}
    </div>
  );
};

// ────────────────────────────────────────────────────────────────
// EXPORTS
// ────────────────────────────────────────────────────────────────

export {
  Command,
  CommandDialog,
  CommandGroup,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandSeparator,
  CommandShortcut,
  CommandList,
};
