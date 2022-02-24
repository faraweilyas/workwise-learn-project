import { useState } from "react";
import SVG from "react-inlinesvg";

export default function InviteVistorModal() {
  return (
    <>
      <div className="w-invitation-modal bg-white ">
        <div className="flex justify-between">
          <div
            className="flex flex-col"
            style={{ width: "300px", height: "310px" }}
          >
            <span className="font-10 font-BwN--light text-space text-gray-300 mt-10  meeting-title">
              Room Name
            </span>
            <div className="ml-6 mt-5">
              <select
                name=""
                id=""
                style={{backgroundPosition:'97%'}}
                className=" font-BwN font-12 bg-gray-100   w-full h-10  select-option-meeting p-2"
              >
                <option>Select Manager</option>
                <option>Weekly</option>
                <option>Monthly</option>
              </select>
            </div>
            <div className="ml-6 mt-3">
              <select
                name=""
                id=""
                style={{backgroundPosition:'97%'}}
                className="select-option-meeting bg-gray-100  font-BwN font-12  w-full h-10  outline-none p-2"
              >
                <option>Number of Occupants</option>
                <option>Weekly</option>
                <option>Monthly</option>
              </select>
            </div>
            <div className="ml-6 mt-3">
              <select
                name=""
                id=""
                style={{backgroundPosition:'97%'}}
                className="select-option-meeting bg-gray-100  font-BwN font-12  w-full h-10  outline-none p-2"
              >
                <option>Resources</option>
                <option>Weekly</option>
                <option>Monthly</option>
              </select>
            </div>

            <div className="flex flex-col m-3 ">
              <button className="relative text-center p-3 mt-10 bg-blue-800 text-white rounded-sm font-13 mx-1 mr-0">
                Update room details
              </button>
            </div>
          </div>
          <div style={{ width: "45%" }} className="mt-5 ">
            <div className=" mr-5">
              <label class="input">
                <textarea
                  rows="4"
                  class="input__field"
                  type="text"
                  placeholder=" "
                />
                <span class="input__label font-BwN">Location</span>
              </label>
            </div>
            <div className=" mr-5 mt-5">
              <label class="input">
                <textarea
                  rows="4"
                  class="input__field"
                  type="text"
                  placeholder=" "
                />
                <span class="input__label font-BwN">Description</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
