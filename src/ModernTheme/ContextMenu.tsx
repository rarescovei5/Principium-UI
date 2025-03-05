import {
  createContext,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';

interface ContextMenuContextType {
  lastPos: { x: number; y: number } | null;
  setLastPos: React.Dispatch<SetStateAction<{ x: number; y: number } | null>>;
}
const ContextMenuContext = createContext<ContextMenuContextType | null>(null);

const ContextMenu: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
}) => {
  const [lastPos, setLastPos] = useState<{ x: number; y: number } | null>(null);

  return (
    <ContextMenuContext.Provider value={{ lastPos, setLastPos }}>
      {children}
    </ContextMenuContext.Provider>
  );
};
const ContextMenuTrigger: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
}) => {
  const context = useContext(ContextMenuContext);
  if (!context)
    throw new Error('ContextMenuTrigger must be used inside ContextMenu');

  const handleRightClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.preventDefault();

    context.setLastPos({ x: e.clientX, y: e.clientY });
  };

  return (
    <div className={className} onContextMenu={handleRightClick}>
      {children}
    </div>
  );
};
const ContextMenuContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
}) => {
  const context = useContext(ContextMenuContext);
  if (!context)
    throw new Error('ContextMenuTrigger must be used inside ContextMenu');

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target as Node;

      if (!document.getElementById('ContextMenuContent')?.contains(target)) {
        context.setLastPos(null);
      }
    };
    window.addEventListener('mousedown', handleOutsideClick);
  }, []);

  return context.lastPos ? (
    <div
      style={{
        position: 'fixed',
        zIndex: '100',
        left: `${context.lastPos.x + 8}px`,
        top: `${context.lastPos.y + 8}px`,
      }}
      className={className}
      id="ContextMenuContent"
    >
      {children}
    </div>
  ) : (
    <></>
  );
};

export { ContextMenu, ContextMenuTrigger, ContextMenuContent };
