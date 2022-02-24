import { useState } from "react";
import SVG from "react-inlinesvg";

export default function InviteVistorModal() {
  return (
    <>
      <div className="w-invitation-modal bg-white " >
        <div className="flex justify-between">
          <div className="flex flex-col" style={{ width: "300px",height:'410px' }}>
            <span className="font-10 font-BwN--light text-space  meeting-title">
              Meeting Title
            </span>
            <div className="ml-6 mt-3">
              <select
                name=""
                id=""
                className=" font-BwN font-12  w-full h-10  select-option-meeting p-2"
              >
                <option>Select meeting duration</option>
                <option>Weekly</option>
                <option>Monthly</option>
              </select>
            </div>
            <div className="ml-6 mt-3">
              <select
                name=""
                id=""
                className="select-option-meeting  font-BwN font-12  w-full h-10  outline-none p-2"
              >
                <option>Select meeting room</option>
                <option>Weekly</option>
                <option>Monthly</option>
              </select>
            </div>
            <div className="ml-6 mt-3">
              <select
                name=""
                id=""
                className=" font-BwN font-12  w-full h-10  select-option-meeting p-2"
              >
                <option>Date</option>
                <option>Weekly</option>
                <option>Monthly</option>
              </select>
            </div>
            <div className="ml-6 mt-3">
              <select
                name=""
                id=""
                className=" font-BwN font-12  w-full h-10  select-option-meeting p-2"
              >
                <option>Time</option>
                <option>Weekly</option>
                <option>Monthly</option>
              </select>
            </div>
            <br />
            <br />

            <div className="flex flex-col mt-3 ml-5 ">
              <button className="relative text-center p-3  bg-blue-800 text-white rounded-sm font-13 mx-1 mr-0">
                Save
              </button>
              <button className="relative text-center p-3  bg-white border border-blue-600 text-blue-600 rounded-sm font-13 mx-1 my-2 mr-0">
                Cancel
              </button>
            </div>
          </div>
          <div style={{width:'40%'}} className='mt-2'>
            <small className='text-gray-500'>MEETING GUESTS</small>
            <div className='p-3 flex cursor-pointer'>
              <SVG className="h-4 text-gray-500" src={"/assets/svg/add-user.svg"}></SVG>
              <small className='h-4 text-gray-500 ml-3'>Add Guests</small>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
