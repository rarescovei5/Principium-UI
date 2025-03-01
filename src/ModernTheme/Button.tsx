const Button = ({
  children,
  className,
  variant,
  asChild = false,
  disabled = false,
  icon = false,
  ...props
}: React.HTMLAttributes<HTMLButtonElement> & {
  variant?:
    | 'normal'
    | 'inverted'
    | 'destructive'
    | 'outline'
    | 'ghost'
    | 'link';
  asChild?: boolean;
  disabled?: boolean;
  icon?: boolean;
}) => {
  const variantClasses: Record<
    'normal' | 'inverted' | 'destructive' | 'outline' | 'ghost' | 'link',
    string
  > = {
    normal: !disabled ? `bg-border hover:bg-surface ` : `bg-border/50`,
    inverted: !disabled
      ? `bg-white hover:bg-white/90 text-bg`
      : `bg-white/50 text-bg`,
    destructive: !disabled ? `bg-error hover:bg-error/50` : `bg-error/25`,
    outline: !disabled
      ? `border-[1px] border-border hover:bg-border`
      : `border-[1px] border-border/50`,
    ghost: !disabled ? `hover:bg-surface` : ``,
    link: !disabled ? `hover:underline` : ``,
  };
  const chosenClass = variant
    ? variantClasses[variant]
    : variantClasses['normal'];

  return !asChild ? (
    <button
      className={
        `inline-flex items-center justify-center h-10 gap-2 rounded-lg transition-colors duration-150 ${
          icon ? 'aspect-square' : 'p px-6 py-2 min-w-20'
        } ${disabled ? '' : 'cursor-pointer'} ` +
        chosenClass +
        ' ' +
        className
      }
      {...props}
    >
      {children}
    </button>
  ) : (
    <></>
  );
};

export { Button };
