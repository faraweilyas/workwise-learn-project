import { useState } from "react";
import SVG from "react-inlinesvg";

export default function InviteVistorModal() {
  return (
    <>
      <div className="w-invitation-modal bg-white ">
        <div className="">
          <div
            className="flex flex-col"
            style={{ width: "100%", height: "230px" }}
          >
            <div className="flex  justify-center mx-10 my-10 p-5 bg-blue-50 border border-dotted border-blue-800">
              <div className='flex flex-col justify-center' style={{width:'70%',margin:'auto'}}>
                <SVG
                  className="relative"
                  style={{ width: "60px", height: "60px",margin:'auto' }}
                  src={"/assets/svg/upload-database.svg"}
                ></SVG>
                <p className="text-blue-800 text-center">
                  Click here to upload or drag and drop
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center m-3 ">
              <button className="relative text-center p-3  bg-blue-800 text-white rounded-sm font-13 mx-10 ">
                Add Employee Database
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
