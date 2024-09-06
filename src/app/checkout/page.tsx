import React from "react";
import ContactForm from "../components/ContactForm/page";
import "./checkout.css";
import LineItems from "@/app/components/LineItems/LineItems";

function Checkout() {
  return (
    <div>
      <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
        <div className="px-4 pt-8 sticky-div border-r-2 border-r-grey-200">
          <ContactForm />
        </div>
        <div className="mt-10  px-4 pt-8 lg:mt-0">
          <div className="flex flex-col items-center">
            <div className="w-4/5">
            <LineItems />
              <hr className="my-4" />
              <div className="flex justify-between items-center">
                <span className="font-bold">Subtotal</span>
                <span className="font-bold">$19.99</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="">Shipping</span>
                <span className="">$1.00</span>
              </div>
              <div className="flex justify-between items-center mt-4 mb-2">
                <span>Taxes</span>
                <span>$1.00</span>
              </div>
              <hr className="my-4" />
              <div className="flex justify-between items-center mt-2">
                <span className="font-bold">Total</span>
                <span className="font-bold">$41.99</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
