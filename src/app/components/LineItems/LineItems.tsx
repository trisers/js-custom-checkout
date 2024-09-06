import React from "react";

export default function LineItems() {
  return (
    <div>
      <div className="line-items">
        <div className="flex justify-between mb-4">
          <div className="flex flex-row">
            <div className="img-box mr-2 relative">
              <img
                src="https://pagedone.io/asset/uploads/1701162850.png"
                alt="perfume bottle image"
                className="border border-gray-400  w-[60px] rounded-xl"
              />
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 16"
              >
                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
              </svg>
              <span className="sr-only">Notifications</span>
              <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-gray-500 border-1 border-gray-800 rounded-full -top-2 -end-2 dark:border-gray-900">
                1
              </div>
            </div>
            <div className="grow">
              <h4 className="font-bold text-lg">Latest N-5 Perfuam</h4>
              <p className="text-gray-700">Perfumes</p>
            </div>
          <div className="flex flex-row">
            <button className="text-red-500 hover:text-red-700">
              <i className="fas fa-trash"></i>
            </button>
            <span className="font-bold">$19.99</span>
          </div>
          </div>
        </div>
        <div className="flex justify-between mb-4">
          <div className="flex flex-row mt-4">
            <div className="img-box mr-2 relative">
              <img
                src="https://pagedone.io/asset/uploads/1701162880.png"
                alt="perfume bottle image"
                className="border border-gray-400 w-[60px] rounded-xl"
              />
                 <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 16"
              >
                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
              </svg>
              <span className="sr-only">Notifications</span>
              <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-gray-500 border-1 border-gray-800 rounded-full -top-2 -end-2 dark:border-gray-900">
                1
              </div>
            </div>
            <div>
              <h4 className="font-bold text-lg">Dusk Dark Hue</h4>
              <p className="text-gray-700">Perfumes</p>
            </div>
          </div>
          <div className="flex flex-row">
            <button className="text-red-500 hover:text-red-700">
              <i className="fas fa-trash"></i>
            </button>
            <span className="font-bold">$19.99</span>
          </div>
        </div>
      </div>
    </div>
  );
}
