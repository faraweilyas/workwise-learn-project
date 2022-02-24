import { useState } from "react";
import SVG from "react-inlinesvg";

export default function InviteVistorModal() {
  return (
    <>
      <div className="w-invitation-modal bg-white">
        <div className="company-modal-container">
          <div
            className="flex flex-col"
            style={{ width: "300px", height: "380px" }}
          >
            <div className=" my-5">
              <label class="input">
                <input class="input__field" type="text" placeholder=" " />
                <span class="input__label font-BwN">Company Name</span>
              </label>
            </div>
            <div
              className="upload-btn flex relative bg-blue-200 border border-blue-800 border-dashed p-3 my-2 rounded-sm"
              style={{ width: "100%" }}
            >
              <SVG
                className="h-4 m-1"
                src={"/assets/svg/upload-icon.svg"}
              ></SVG>

              <small className="text-blue-800">
                Click here to upload your logo.
              </small>
              <input
                type="file"
                className="w-full absolute top-0 left-0  h-10 -z-10 hidden"
              />
            </div>
            <div className=" my-4">
              <label class="input">
                <select class="input__field" type="text" placeholder=" ">
                  <option>company 1</option>
                  <option>company 2</option>
                </select>
                <span class="input__label font-BwN">Select Your Company</span>
              </label>
            </div>
            <div className=" my-4">
              <label class="input">
                <input class="input__field" type="text" placeholder=" " />
                <span class="input__label font-BwN">Website</span>
              </label>
            </div>
            <div className=" my-4">
              <label class="input">
                <select class="input__field" type="text" placeholder=" ">
                  <option>Yes</option>
                  <option>No</option>
                </select>
                <span class="input__label font-BwN">Phone no.</span>
              </label>
            </div>
            <button className="relative text-center p-3 mt-0 bg-blue-800 text-white rounded-sm font-13 mx-1 mr-0">
              Add new company
            </button>
          </div>
          <div style={{width:'270px'}}>
            <div className=" my-4">
              <label class="input">
                <textarea
                  rows="6"
                  class="input__field"
                  type="text"
                  placeholder=" "
                />
                <span class="input__label font-BwN">Description</span>
              </label>
            </div>
            <div className=" my-5">
              <label class="input">
                <textarea
                  rows="6"
                  class="input__field"
                  type="text"
                  placeholder=" "
                />
                <span class="input__label font-BwN">Address</span>
              </label>
            </div>
          </div>
          {/* end of container */}
        </div>
      </div>
    </>
  );
}
