import React from 'react'

interface options {
    name: string;
    email: string;
   }

interface selectGroupProps {
    id?:string;
    options?:options;
    label:string,
    error:string
}

export default function Select({id,options,label,error,...rest}:selectGroupProps) {
  return (
    <div>
        <div className="relative">
      <select className="peer p-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none
            text-black
            focus:pt-6
            focus:pb-2
            [&:not(:placeholder-shown)]:pt-6
            [&:not(:placeholder-shown)]:pb-2
            autofill:pt-6
            autofill:pb-2">
            <option>Usa</option>
                    <option>Canada</option>
                    <option>India</option>
        </select>
        <label className="absolute top-0 start-0 p-4 h-full truncate pointer-events-none transition ease-in-out duration-100 border border-transparent dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
            peer-focus:text-xs
            peer-focus:-translate-y-1.5
            peer-focus:text-gray-500 dark:peer-focus:text-neutral-500
            peer-[:not(:placeholder-shown)]:text-xs
            peer-[:not(:placeholder-shown)]:-translate-y-1.5
            peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-neutral-500 dark:text-neutral-500">{label}</label>
        </div>
        {!error && <div className="text-red-500 mt-1">{error}</div>}
    </div>
  )
}
