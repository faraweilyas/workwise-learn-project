import { useState, useEffect, Children } from 'react'
import SVG from 'react-inlinesvg'

export default function InvitationModal({
  showmodal,
  modalHandler,
  children,
  width,
  title,
  data
}) {
  console.log({data})
  return (
    <div className={`modal  ${showmodal ? 'modal--active ' : ''}`}>
      <div className="middle ">
        <div
          className="modal--content"
          style={{ width: width ? width : 'auto',height:'125vh' }}
        >
          {/*  */}

          <h2 className="absolute top-1  m-5 font-BwN--bold ml-8">{title}</h2>
          <button className="modal--close m-5 mb-0 p-2" onClick={modalHandler}>
            <span className="font-BwN mx-2">Close</span>
            <SVG src="/svg/close.svg"></SVG>
          </button>

          <div className="w-full p-5 flex flex-col  justify-between">
            <div className="w-invitation-modal bg-white">
              <div className="flex flex-col">
                <span className="font-10 font-BwN--light text-space p-3 my-1">
                  CONTACT INFORMATION
                </span>

                <div className="flex flex-col my-1">
                  <span className="font-BwN font-12 text-gray-500 px-3 py-1">
                    Name of Guest
                  </span>
                  <span className="font-14 font-BwN-bold  px-3 py-1 ">
                  {data?data.visitorName:''}
                  </span>
                </div>
                <div className="flex flex-col my-1">
                  <span className="font-BwN font-12 text-gray-500 px-3 py-1">
                    Date/Time
                  </span>
                  <span className="font-14 font-BwN-bold  px-3 py-1 ">
                  {(data?data.checkin:'')}
                  </span>
                </div>
                <div className="flex flex-col my-1">
                  <span className="font-BwN font-12 text-gray-500 px-3 py-1">
                    Phone Number
                  </span>
                  <span className="font-14 font-BwN-bold  px-3 py-1 ">
                  {(data?data.phone:'')}
                  </span>
                </div>
                <div className="flex flex-col my-1">
                  <span className="font-BwN font-12 text-gray-500 px-3 py-1">
                    Email
                  </span>
                  <span className="font-14 font-BwN-bold  px-3 py-1 ">
                  {(data?data.vtEmail:'')}
                  </span>
                </div>

                <span className="font-10 font-BwN--light text-space p-3 my-2">
                  MEETING INFORMATION
                </span>

                <div className="flex flex-col my-1">
                  <span className="font-BwN font-12 text-gray-500 px-3 py-1">
                    Name of Recipient
                  </span>
                  <span className="font-14 font-BwN-bold  px-3 py-1 ">
                  {(data?data.employeeName:'')}
                  </span>
                </div>

                <div className="flex flex-col my-1">
                  <span className="font-BwN font-12 text-gray-500 px-3 py-1">
                    Meeting Room
                  </span>
                  <span className="font-14 font-BwN-bold  px-3 py-1 ">
                    Room  {(data?data.room:'')}
                  </span>
                </div>

                <div className="flex flex-col my-1">
                  <span className="font-BwN font-12 text-gray-500 px-3 py-1">
                    Meeting Details
                  </span>
                  <span className="font-14 font-BwN-bold  px-3 py-1 ">
                    What else would you have a meeting like this for if not to
                    merge both companies.
                  </span>
                </div>

                <div className="flex flex-col mt-5">
                  <button className="bg-blue-800 p-3 py-5 text-white rounded-sm">
                    Check-out
                  </button>
                  <button className="border border-blue-800 p-3 py-5 text-blue-800 rounded-sm my-2">
                    Edit Invitation
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/*  */}
        </div>
      </div>
    </div>
  )
}
