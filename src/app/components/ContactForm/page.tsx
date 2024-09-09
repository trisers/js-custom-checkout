"use client";

import React, { Fragment, useState } from "react";
import InputField from "@/app/components/Input/inputField";
import Select from "../Input/select";
import BillingForm from "@/app/components/Forms/BillingForm";

interface UserFormInput {
  first_name: string;
  last_name: string;
  email: string;
  country:string;
  address:string;
  address2:string;
  city:string;
  state:string;
  pinCode:string;
}

interface FormData {
  shipping_address: {
    [key: string]: string;
  },
  billing_address: {
    [key: string]: string;
  };
}


export default function ContactForm() {
  const [useShipAsBill, setUseShipAsBill] = useState(true);
  const [paymentType, setPaymentType] = useState(true); // if true it means credit our if false is cash on
  const [formData,setFormData]=useState({shipping_address:{},billing_address:{}});
  const handleSubmit=(e:any) =>{
      e.preventDefault();
      console.log(formData)
  }

  const handleChange = (e: any) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      shipping_address: {
        ...prevFormData?.shipping_address, 
        [e.target.name]: e.target.value,
      },
    }));
  };

  const handleBillingChange = (e: any) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      shipping_address: {
        ...prevFormData?.shipping_address, 
        [e.target.name]: e.target.value,
      },
    }));
  };
  
  return (
    <>
      <div className="p-4 shadow-md">
        <form onSubmit={handleSubmit}>
          <h4 className="text-lg font-bold mb-3 text-black">Contact</h4>
          <div className="mb-3 relative">
            <InputField
              id="email"
              name="email"
              type="email"
              placeholder="email"
              className=""
              label="Email or mobile phone number"
              error="Please provide a valid email or mobile phone number."
              // onMouseLeave={()=>validateEmail()}
              onChange={handleChange}
            />
          </div>
          <h4 className="text-lg font-bold mb-3 text-black">Delivery</h4>

          <div className="flex gap-3 mb-3">
            <div className="relative w-1/2">
              <InputField
                id="fname"
                name="first_name"
                type="text"
                placeholder="First name(optional)"
                className=""
                label="First name(optinal)"
              onChange={handleChange}
              />
            </div>
            <div className="relative w-1/2">
              <InputField
                id="lname"
                name="last_name"
                type="text"
                placeholder="Last name"
                className=""
                label="Last name"
                required
              onChange={handleChange}

              />
            </div>
          </div>
          <div className="mb-3 relative">
            <Select
              label="Country"
              id="country"
              error="Please select a country."
              // onchange="updateStatesAndPrices()"
            />
          </div>

          <div className="mb-3">
            <InputField
              id="address"
              name="address"
              type="text"
              placeholder="Address"
              className=""
              label="Address"
              error="Address is required."
              required
              onChange={handleChange}
            />
          </div>

          <div className="mb-3 relative">
            <InputField
              id="address2"
              name="address2"
              type="text"
              placeholder="Apartment, suite, etc. (optional)"
              className=""
              label="Apartment, suite, etc. (optional)"
              onChange={handleChange}

            />
          </div>

          <div className="flex gap-3 mb-3">
            <div className="relative w-1/3">
              <InputField
                id="city"
                name="city"
                type="text"
                placeholder="City"
                className=""
                label="City"
                error="City is required."
                required
              onChange={handleChange}

              />
            </div>

            <div className="relative w-1/3">
              <Select
                id="state"
                label="state"
                error="Please select a state."
                // onchange="updateStatesAndPrices()"
              />
            </div>

            <div className="relative w-1/3">
              <InputField
                id="pinCode"
                name="pinCode"
                type="text"
                placeholder="Postal code"
                className=""
                label="Pin code"
                error="Pin code is required."
                required
              onChange={handleChange}

              />
            </div>
          </div>
        <div className="mb-3 form-check d-none">
          <input
            type="checkbox"
            className="form-check-input ml-2 mr-2"
            id="saveInfo"
          />
          <label htmlFor="saveInfo">Save this information for next time</label>
        </div>

        {/* <!-- Delivery address end --> */}
        <h5 className="text-sm font-bold mt-2 mb-3 text-black">
          Shipping method
        </h5>
        <p className="shipping-method">
          Enter your shipping address to view available shipping methods.
        </p>

        <h5 className="text-lg font-bold mb-3">Payment</h5>
        <p className="text-gray-600 mb-3">
          All transactions are secure and encrypted.
        </p>

        <div className="border rounded-lg mb-3">
          <div
            className={`flex items-center border rounded-t-lg p-4 cursor-pointer transition-all 
             ${paymentType ? "border-blue-500 bg-blue-50" : "border-gray-300"}`}
            onClick={() => {
              setUseShipAsBill(true);
              setPaymentType(true);
            }}
          >
            <input
              className="mr-2"
              type="radio"
              name="cardOption"
              id="creditCardOption"
              checked={paymentType}
            />
            <label className="text-gray-700" htmlFor="creditCardOption">
              Credit Card
            </label>
          </div>

          {paymentType && (
            <div className="p-4">
              <div className="mb-3">
                <div id="card-element2" className="mb-4"></div>
              </div>

              <div className="flex items-center mb-3">
                <input
                  className="mr-2"
                  type="checkbox"
                  id="sameAddress"
                  checked={useShipAsBill}
                  onClick={() => setUseShipAsBill(!useShipAsBill)}
                />
                <label htmlFor="sameAddress" className="text-gray-700">
                  Use shipping address as billing address
                </label>
              </div>
              {!useShipAsBill && (
                <div className="border rounded-md mb-3 p-4">
                  <h4 className="text-lg font-bold mb-3">Billing Address</h4>
                  <div className="mb-3 relative">
                    <Select
                      id="billingCountry"
                      label="Country/Region"
                      error="Please select a country/region."
                      // onchange="updateStates()"
                    />
                    <div className="flex gap-3 mb-3 mt-3">
                      <div className="relative w-1/2">
                        <InputField
                          id="fname"
                          type="text"
                          placeholder="First name(optional)"
                          className=""
                          label="First name(optinal)"
                        />
                      </div>
                      <div className="relative w-1/2">
                        <InputField
                          id="lname"
                          type="text"
                          placeholder="Last name"
                          className=""
                          label="Last name"
                          required
                        />
                      </div>
                    </div>
                    <div className="mb-3 relative">
                      <Select
                        label="Country"
                        id="country"
                        error="Please select a country."
                        // onchange="updateStatesAndPrices()"
                      />
                    </div>

                    <div className="mb-3">
                      <InputField
                        id="address"
                        type="text"
                        placeholder="Address"
                        className=""
                        label="Address"
                        error="Address is required."
                        required
                      />
                    </div>

                    <div className="mb-3 relative">
                      <InputField
                        id="address2"
                        type="text"
                        placeholder="Apartment, suite, etc. (optional)"
                        className=""
                        label="Apartment, suite, etc. (optional)"
                      />
                    </div>

                    <div className="flex gap-3 mb-3">
                      <div className="relative w-1/3">
                        <InputField
                          id="city"
                          type="text"
                          placeholder="City"
                          className=""
                          label="City"
                          error="City is required."
                          required
                        />
                      </div>

                      <div className="relative w-1/3">
                        <Select
                          id="state"
                          label="state"
                          error="Please select a state."
                          // onchange="updateStatesAndPrices()"
                        />
                      </div>

                      <div className="relative w-1/3">
                        <InputField
                          id="pinCode"
                          type="text"
                          placeholder="Postal code"
                          className=""
                          label="Pin code"
                          error="Pin code is required."
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          <div
            className={`flex items-center border rounded-b-lg p-4 cursor-pointer transition-all 
              ${
                !paymentType ? "border-blue-500 bg-blue-50" : "border-gray-300"
              }`}
            onClick={() => {
              setUseShipAsBill(true);
              setPaymentType(false);
            }}
          >
            <input
              className="mr-2"
              type="radio"
              name="cod"
              id="cod"
              checked={!paymentType}
            />
            <label className="text-gray-700" htmlFor="cod">
              Cash on Delivery (COD)
            </label>
          </div>
        </div>

        {!paymentType && (
          <Fragment>
            <h4 className="text-lg font-bold mb-3">Billing Address</h4>
            <div className="border rounded-lg mb-3">
              <div
                className={`flex items-center border rounded-t-lg p-4 cursor-pointer transition-all 
               ${
                 useShipAsBill
                   ? "border-blue-500 bg-blue-50"
                   : "border-gray-300"
               }`}
                onClick={() => setUseShipAsBill(true)}
              >
                <input
                  className="mr-2"
                  type="radio"
                  name="sameShipAddress"
                  id="sameShipAddress"
                  checked={useShipAsBill}
                />
                <label className="text-gray-700" htmlFor="sameShipAddress">
                  Same as shipping address
                </label>
              </div>

              <div
                className={`flex items-center border  p-4 cursor-pointer transition-all 
              ${
                !useShipAsBill
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-300 rounded-b-lg"
              }`}
                onClick={() => setUseShipAsBill(false)}
              >
                <input
                  className="mr-2"
                  type="radio"
                  name="udb"
                  id="udb"
                  checked={!useShipAsBill}
                />
                <label className="text-gray-700" htmlFor="udb">
                  Use a different billing address
                </label>
              </div>

              {!useShipAsBill && <BillingForm handleBillingChange={handleBillingChange}/>}
            </div>
          </Fragment>
        )}

        {paymentType ? (
          <button
            className="w-full bg-blue-500 text-white py-2 rounded-md mt-3"
            type="submit"
            // onclick="validatePayment()"
            id="submit"
          >
            <span id="payNow-spinner">
              <span
                id="spinner"
                className="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
            </span>
            Pay now
          </button>
        ) : (
          <button
            className="w-full bg-blue-500 text-white py-2 rounded-md mt-3"
            type="submit"
            // onclick="orderComplete()"
          >
            Complete Order
          </button>
        )}
        </form>

      </div>
    </>
  );
}
