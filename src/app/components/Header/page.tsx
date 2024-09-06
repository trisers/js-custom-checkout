import Image from 'next/image';
import React from 'react';
import cartSvg from "@/app/assets/icons/cart.svg"

export default function Header() {
  return (
    <div>
             <div className="flex flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
        <a href="#" className="text-2xl font-bold text-gray-800">
          Checkout
        </a>
        <div className="mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base">
          <div className="relative">
            <ul className="relative flex w-full items-center justify-between space-x-2 sm:space-x-4">
              <li className="flex items-center space-x-3 text-left sm:space-x-4">
                <Image src={cartSvg} alt='cartsvg'/>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
