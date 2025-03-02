const Button = ({
  children,
  className,
  variant = 'primary',
  disabled = false,
  icon = false,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?:
    | 'primary'
    | 'secondary'
    | 'destructive'
    | 'outline'
    | 'ghost'
    | 'link';
  disabled?: boolean;
  icon?: boolean;
}) => {
  const variantClasses: Record<
    'primary' | 'secondary' | 'destructive' | 'outline' | 'ghost' | 'link',
    string
  > = {
    primary: !disabled
      ? `bg-white hover:bg-white/90 text-bg`
      : `bg-white/50 text-bg`,
    secondary: !disabled ? `bg-surface hover:bg-surface/50 ` : `bg-surface/25`,
    destructive: !disabled ? `bg-error hover:bg-error/50` : `bg-error/25`,
    outline: !disabled
      ? `border border-border hover:bg-border`
      : `border border-border/50`,
    ghost: !disabled ? `hover:bg-surface` : ``,
    link: !disabled ? `hover:underline` : ``,
  };

  return (
    <button
      className={
        `inline-flex items-center justify-center h-10 gap-2 rounded-lg transition-colors duration-150 ${
          icon ? 'aspect-square' : 'p px-6 py-2 min-w-20'
        } ${disabled ? '' : 'cursor-pointer'} ` +
        variantClasses[variant] +
        ' ' +
        className
      }
      {...props}
    >
      {children}
    </button>
  );
};

export { Button };
