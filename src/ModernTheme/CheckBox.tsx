const Checkbox = ({
  checked,
  disabled,
  toggleChecked,
  ...props
}: React.HTMLAttributes<HTMLButtonElement> & {
  checked: boolean;
  disabled?: boolean;
  toggleChecked: () => void;
}) => {
  return (
    <button
      className={`w-5 h-5 flex items-center justify-center transition-colors duration-150 rounded-lg ${
        disabled
          ? 'cursor-not-allowed border-border border-[1px]'
          : checked
          ? 'bg-white border-white border-[1px] cursor-pointer'
          : 'bg-transparent border-white border-[1px] cursor-pointer'
      }`}
      onClick={toggleChecked}
      {...props}
    >
      <svg
        width="12"
        height="10"
        viewBox="0 0 12 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.5 1L3.8 9L0.5 6"
          stroke="#111111"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  );
};

export { Checkbox };
