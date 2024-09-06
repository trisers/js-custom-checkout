import React from 'react'
import InputField from '@/app/components/Input/inputField'
import Select from '@/app/components/Input/select'

export default function BillingForm() {
  return (
    <div>
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

    </div>
  )
}
