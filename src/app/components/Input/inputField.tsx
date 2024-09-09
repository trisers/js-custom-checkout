import React from "react";

interface InputGroupProps {
  label: string;
  type?: string;
  name?: string;
  required?: boolean;
  placeholder?: string;
  id?: string;
  inputSize?: string;
  className?: string;
  error?: any;
  value?: string;
  onChange?: any;
}

export default function InputField({
  label,
  inputSize,
  type,
  className,
  placeholder,
  error,
  ...rest
}: InputGroupProps) {
  const classes = `${inputSize || ""} ${className || ""}`;

  return (
    <div>
      <div className="relative">
        <input
          type={type}
          className={`${classes} peer p-4 block w-full border-2 border-gray-200 rounded-lg text-sm
         placeholder:text-transparent 
       focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50
         disabled:pointer-events-none
        dark:bg-white 
        dark:text-neutral-400 dark:focus:ring-neutral-600
        focus:pt-6
        focus:pb-2
        [&:not(:placeholder-shown)]:pt-6
        [&:not(:placeholder-shown)]:pb-2
        autofill:pt-6
        autofill:pb-2`}
          placeholder={placeholder}
          {...rest}
        />
        {label && (
          <label
            htmlFor="hs-floating-input-email"
            className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none 
    transition ease-in-out duration-100 border border-transparent  origin-[0_0]
     text-black peer-disabled:opacity-50 peer-disabled:pointer-events-none
      peer-focus:scale-90
      peer-focus:translate-x-0.5
      peer-focus:-translate-y-1.5
      peer-focus:text-gray-500 dark:peer-focus:text-neutral-500
      peer-[:not(:placeholder-shown)]:scale-90
      peer-[:not(:placeholder-shown)]:translate-x-0.5
      peer-[:not(:placeholder-shown)]:-translate-y-1.5
      peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-neutral-500 dark:text-neutral-500"
          >
            {label}
          </label>
        )}
        {!error && <div className="text-red-500 mt-1">{error}</div>}
      </div>
    </div>
  );
}
