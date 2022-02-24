import Layout from "@/components/layout/layout";
import { useRouter } from "next/router";
import { useState } from "react";
import SVG from "react-inlinesvg";
// import Modal from "@/components/modals/modal";
// import InvitationModal from "@/components/modals/InvitationModal";
import Modal from "@/components/modals/modal";
import InvitationModal from "@/components/modals/InvitationModal";
import MeetingModal from "@/components/modals/MeetingModel";
import NewRoomModal from "@/components/modals/NewRoom";
import EditMeetingModal from "@/components/modals/EditeMeeting";

export default function MeetingsPage() {
  const router = useRouter();
  const [tabs, setTabs] = useState("calendar");
  const [subTab, setSubTab] = useState("meeting");
  const [meetingModal, setMeetingModal] = useState(false);
  const [editMeetingModal, setEditMeetingModal] = useState(false);
  const [newRoomModal, setNewRoomModal] = useState(false);
  const [invitationModal, setInvitationModal] = useState(false);
  const [inviteVisitor, setInviteVisitor] = useState(false);
  const [edit, setEdit] = useState(false);
  const [room, setRoom] = useState(false);

  const toggleInvitationModal = () => {
    setInvitationModal(!invitationModal);
    document.querySelector("body").classList.toggle("no-scroll");
  };
  const toggleMeetingModal = () => {
    setMeetingModal(!meetingModal);
    document.querySelector("body").classList.toggle("no-scroll");
  };
  const toggleNewRoomModal = () => {
    setNewRoomModal(!newRoomModal);
    document.querySelector("body").classList.toggle("no-scroll");
  };
  const toggleEditMeetingModal = () => {
    setEdit(true);
    setEditMeetingModal(!editMeetingModal);
    document.querySelector("body").classList.toggle("no-scroll");
  };
  const handleRemove = () => {
    setTabs("calendar");
    setSubTab("meeting");
    setRoom(true);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <InvitationModal
        title="View Invitation"
        showmodal={invitationModal}
        modalHandler={toggleInvitationModal}
        width="100%"
      />
      {tabs === "calendar" && (
        <Modal
          title="New Meeting"
          showmodal={meetingModal}
          modalHandler={toggleMeetingModal}
          children={<MeetingModal />}
          width="750px"
        />
      )}
      {tabs === "rooms" && (
        <Modal
          title="New Room"
          showmodal={newRoomModal}
          modalHandler={toggleNewRoomModal}
          children={<NewRoomModal />}
          width="750px"
        />
      )}
      {edit && (
        <Modal
          title="New Room"
          showmodal={editMeetingModal}
          modalHandler={toggleEditMeetingModal}
          children={<EditMeetingModal />}
          width="750px"
        />
      )}
      <Layout title="Meetings">
        {/* breadcrum */}
        <div
          id="breadcrum"
          className="breacurm fixed flex justify-between z-1  p-4 mt-14  bg-white "
        >
          <div className="inner-breadcrum">
            <button
              className="flex outline-none m-3"
              onClick={() => router.back()}
            >
              <SVG className="h-4" src={"/assets/svg/arrow-left.svg"}></SVG>
              <span className="text-gray-700 font-BwN font-BwN--bolder font-12">
                Wednesday, 2nd December, 2020
              </span>
            </button>
            {tabs === "calendar" && (
              <button
                className="relative flex p-3 border-50 bg-blue-800 
                      rounded-md font-12 mx-1 mr-10"
                onClick={toggleMeetingModal}
              >
                <SVG
                  className="h-4 "
                  src={"/assets/svg/add-empolyee.svg"}
                ></SVG>
                <span className="text-white mx-2"> New meeting</span>
              </button>
            )}
            {tabs === "rooms" && (
              <button
                className="relative flex p-3 border-50 bg-blue-800 
                      rounded-md font-12 mx-1 mr-10"
                onClick={toggleNewRoomModal}
              >
                <SVG
                  className="h-4 "
                  src={"/assets/svg/add-empolyee.svg"}
                ></SVG>
                <span className="text-white mx-2">Add new room</span>
              </button>
            )}
          </div>
        </div>
        {/* breadcrum */}

        <div className=" p-2 mt-meeting-table">
          <table className="meeting-table">
            <tr>
              <div className="meeting-table-content">
                <div className="flex  justify-center">
                  <div
                    className="flex bg-white p-2  justify-center mt-20 rounded-sm"
                    style={{ width: "45%" }}
                  >
                    <button
                      style={{ width: "50%" }}
                      className={`font-BwN rounded-md cursor-pointer ${
                        tabs === "calendar"
                          ? "bg-blue-800 text-white transition-all ease-in-out"
                          : "bg-white text-black"
                      }`}
                      onClick={() => setTabs("calendar")}
                    >
                      Calendar
                    </button>
                    <button
                      style={{ width: "50%" }}
                      className={`font-BwN p-4 px-10  rounded-md cursor-pointer ${
                        tabs === "rooms"
                          ? "bg-blue-800 text-white transition-all ease-in-out"
                          : "bg-white text-black"
                      }`}
                      onClick={() => setTabs("rooms")}
                    >
                      Rooms
                    </button>
                  </div>
                </div>

                {/*  */}

                {tabs === "calendar" && (
                  <>
                    <div className="w-full bg-white my-5 py-5 px-5 rounded-md">
                      {room && (
                        <div className="py-5">
                          <div className="flex justify-between">
                            <div className="flex relative">
                              <h2 className="initials relative font-bold bottom-1  mx-3 ml-0">
                                OI
                              </h2>
                              <h2 className="relative font-bold">
                                {" "}
                                Executive room 1
                              </h2>
                            </div>
                            <div className="flex">
                              <button
                                className="relative flex p-3 border-50 border border-blue-800 bg-transparent 
                                    rounded-md font-12 mx-1 "
                                onClick={toggleNewRoomModal}
                              >
                                <span className="text-blue-800 mx-2">
                                  View logs
                                </span>
                              </button>
                              <button
                                className="relative flex p-3 border-50 bg-blue-800 
                                    rounded-md font-12 mx-1 mr-10"
                                onClick={toggleMeetingModal}
                              >
                                <SVG
                                  className="h-4 "
                                  src={"/assets/svg/add-empolyee.svg"}
                                ></SVG>
                                <span className="text-white mx-2">
                                  New meeting
                                </span>
                              </button>
                            </div>
                            {/* end of buttons container */}
                          </div>
                          {/* end of first row */}
                          <div className='flex justify-between mt-3 ' style={{width:'70%'}}>
                            <div>
                              <small className="text-gray-500">
                                MEETING ROOM MANAGER
                              </small>
                              <div className="flex mt-3">
                                <img
                                  width="40"
                                  src={"/assets/images/person.png"}
                                />
                                <div className="ml-3 flex flex-col">
                                  <strong>Osamuisn Imsuan</strong>
                                  <small className="text-gray-400">
                                    User Interaction Design
                                  </small>
                                </div>
                              </div>
                            </div>
                            {/* first flex item */}
                            <div className='flex flex-col'>
                              <small className="text-gray-500">
                                Resources
                              </small>
                              <div className='mt-3'>
                                <span className='border border-gray-700 p-1 rounded-lg'>Projector <small>x</small></span>
                                <span className='border border-gray-700 p-1 rounded-lg ml-2'>HDMI <small>x</small></span>
                              </div>
                            </div>
                            {/* second flex item */}
                            <div className='flex flex-col justify-center'>
                              <small className="text-gray-500">
                                CAPACITY
                              </small>
                              <strong className='ml-5'>4</strong>
                            </div>
                          </div>
                        </div>
                      )}
                      <div className="flex mb-10 p-5">
                        <div className="w-6/12 flex justify-between items-center">
                          {subTab === "meeting" ? (
                            <div className="border-b-2 border-blue-800 mx-auto  pb-2 w-full">
                              <div className="font-BwN font-14 text-blue-800 text-center cursor-pointer">
                                Meetings
                              </div>
                            </div>
                          ) : (
                            <div
                              className="border-b-2 text-gray-400 mx-auto  pb-2 w-full"
                              onClick={() => setSubTab("meeting")}
                            >
                              <div className="font-BwN font-12 text-gray-400 text-center cursor-pointer">
                                Meetings
                              </div>
                            </div>
                          )}
                          {subTab === "invited" ? (
                            <div className="border-b-2 border-blue-800 mx-auto  pb-2 w-full">
                              <div className="font-BwN font-12 text-blue-800 text-center cursor-pointer">
                                Invited
                              </div>
                            </div>
                          ) : (
                            <div
                              className="border-b-2 text-gray-400 mx-auto  pb-2 w-full"
                              onClick={() => setSubTab("invited")}
                            >
                              <div className="font-BwN font-14 text-gray-400 text-center cursor-pointer">
                                Invited
                              </div>
                            </div>
                          )}
                        </div>

                        <div className="mt-4 w-6/12 flex justify-end items-start">
                          <div className="flex">
                            <SVG
                              className="h-3 mx-1"
                              src={"/assets/svg/blue-arrow-left.svg"}
                            ></SVG>
                            <SVG
                              className="h-3 mx-1"
                              src={"/assets/svg/blue-arrow-right.svg"}
                            ></SVG>

                            <div className="ml-6 -mt-3" style={{width:'50%'}}>
                              <select
                                name=""
                                id=""
                                className="bg-gray-100 font-BwN  font-12 rounded-lg w-24 h-10 text-gray-800 outline-none ml-5 px-3"
                              >
                                <option>Daily</option>
                                <option>Weekly</option>
                                <option>Monthly</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>

                      {subTab === "meeting" && (
                        <>
                          <div className="mx-16  border-l-2 border-gray-200 h-auto">
                            <div className="block w-full border-b-2 border-gray-100 meeting-list-item -ml-5">
                              <div className="flex justify-start">
                                <div className="w-8 -ml-10 mx-4 -mb-2  text-sm">
                                  7AM
                                </div>
                                <div className="w-full first-meeting  rounded-xl ml-10">
                                  <div className="p-5">
                                    <strong className="p-5">
                                      Review meeting with shyon
                                    </strong>
                                    <p className="pl-5">
                                      Room 3. 07:10 to 08:00
                                    </p>
                                    <small className="font-bold pl-5">
                                      You and 3 others
                                    </small>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="block w-full border-b-2 border-gray-100 meeting-list-item -ml-5 ">
                              <div className="flex justify-start">
                                <div className="w-8 -ml-10 mx-4 text-sm -mt-3">
                                  8AM
                                </div>
                              </div>
                            </div>

                            <div className="block w-full border-b-2 border-gray-100 meeting-list-item -ml-5">
                              <div className="-ml-10 mx-4 text-sm -mt-3">
                                9AM
                              </div>
                            </div>

                            <div className="block w-full border-b-2 border-gray-100 meeting-list-item -ml-5">
                              <div className="-ml-10 mx-4 text-sm -mt-3">
                                10AM
                              </div>
                              <div className=" second-meeting  rounded-xl ml-10 ">
                                <div className="pl-5 pt-2 -mt-3">
                                  <div className="flex justify-between second-meeting-item">
                                    <strong>
                                      Review meeting with mudia Imcsum
                                    </strong>
                                    <small className="font-bold">
                                      You & 3 others
                                    </small>
                                  </div>
                                  <p>Room 3. 10:00AM to 11:00AP</p>
                                </div>
                              </div>
                            </div>
                            <div className="block w-full border-b-2 border-gray-100 meeting-list-item -ml-5">
                              <div className="-ml-10 mx-4 text-sm -mt-3">
                                11AM
                              </div>
                            </div>
                            <div className="block w-full border-b-2 border-gray-100 meeting-list-item -ml-5">
                              <div className="-ml-10 mx-4 text-sm -mt-3">
                                12AM
                              </div>
                            </div>
                            <div className="block w-full border-b-2 border-gray-100 meeting-list-item -ml-5">
                              <div className="-ml-10 mx-4 text-sm -mt-3">
                                1PM
                              </div>
                            </div>
                            <div className="block w-full border-b-2 border-gray-100 meeting-list-item -ml-5">
                              <div className="-ml-10 mx-4 text-sm -mt-3">
                                2PM
                              </div>
                            </div>
                            <div className="block w-full border-b-2 border-gray-100 meeting-list-item -ml-5">
                              <div className="-ml-10 mx-4 text-sm -mt-3">
                                3PM
                              </div>
                            </div>
                            <div className="block w-full border-b-2 border-gray-100 meeting-list-item -ml-5">
                              <div className="-ml-10 mx-4 text-sm -mt-3">
                                4PM
                              </div>
                            </div>
                            <div className="block w-full border-b-2 border-gray-100 meeting-list-item -ml-5">
                              <div className="-ml-10 mx-4 text-sm -mt-3">
                                5PM
                              </div>
                            </div>
                            <div className="block w-full border-b-2 border-gray-100 meeting-list-item -ml-5">
                              <div className="-ml-10 mx-4 text-sm -mt-3">
                                6PM
                              </div>
                            </div>
                            <div className="block w-full border-b-2 border-gray-100 meeting-list-item -ml-5">
                              <div className="-ml-10 mx-4 text-sm -mt-3">
                                7PM
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                      {subTab === "invited" && (
                        <>
                          <div className="mx-16  border-l-2 border-gray-200 h-auto">
                            <div className="block w-full border-b-2 border-gray-100 meeting-list-item -ml-5">
                              <div className="flex justify-start">
                                <div className="w-8 -ml-10 mx-4 -mb-2  text-sm">
                                  7AM
                                </div>
                                <div className="w-full first-meeting-invited  rounded-xl ml-10">
                                  <div className="p-5">
                                    <strong className="p-5">
                                      Review meeting with shyon
                                    </strong>
                                    <p className="pl-5">
                                      Room 3. 07:10 to 08:00
                                    </p>
                                    <small className="font-bold pl-5">
                                      You and 3 others
                                    </small>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="block w-full border-b-2 border-gray-100 meeting-list-item -ml-5 ">
                              <div className="flex justify-start">
                                <div className="w-8 -ml-10 mx-4 text-sm -mt-3">
                                  8AM
                                </div>
                              </div>
                            </div>

                            <div className="block w-full border-b-2 border-gray-100 meeting-list-item -ml-5">
                              <div className="-ml-10 mx-4 text-sm -mt-3">
                                9AM
                              </div>
                            </div>

                            <div className="block w-full border-b-2 border-gray-100 meeting-list-item -ml-5">
                              <div className="-ml-10 mx-4 text-sm -mt-3">
                                10AM
                              </div>
                              <div className=" second-meeting  rounded-xl ml-10 ">
                                <div className="pl-5 pt-2 -mt-3">
                                  <div className="flex justify-between second-meeting-item">
                                    <strong>
                                      Review meeting with mudia Imcsum
                                    </strong>
                                    <small className="font-bold">
                                      You & 3 others
                                    </small>
                                  </div>
                                  <p>Room 3. 10:00AM to 11:00AP</p>
                                </div>
                              </div>
                            </div>
                            <div className="block w-full border-b-2 border-gray-100 meeting-list-item -ml-5">
                              <div className="-ml-10 mx-4 text-sm -mt-3">
                                11AM
                              </div>
                            </div>
                            <div className="block w-full border-b-2 border-gray-100 meeting-list-item -ml-5">
                              <div className="-ml-10 mx-4 text-sm -mt-3">
                                12AM
                              </div>
                            </div>
                            <div className="block w-full border-b-2 border-gray-100 meeting-list-item -ml-5">
                              <div className="-ml-10 mx-4 text-sm -mt-3">
                                1PM
                              </div>
                            </div>
                            <div className="block w-full border-b-2 border-gray-100 meeting-list-item -ml-5">
                              <div className="-ml-10 mx-4 text-sm -mt-3">
                                2PM
                              </div>
                            </div>
                            <div className="block w-full border-b-2 border-gray-100 meeting-list-item -ml-5">
                              <div className="-ml-10 mx-4 text-sm -mt-3">
                                3PM
                              </div>
                            </div>
                            <div className="block w-full border-b-2 border-gray-100 meeting-list-item -ml-5">
                              <div className="-ml-10 mx-4 text-sm -mt-3">
                                4PM
                              </div>
                            </div>
                            <div className="block w-full border-b-2 border-gray-100 meeting-list-item -ml-5">
                              <div className="-ml-10 mx-4 text-sm -mt-3">
                                5PM
                              </div>
                            </div>
                            <div className="block w-full border-b-2 border-gray-100 meeting-list-item -ml-5">
                              <div className="-ml-10 mx-4 text-sm -mt-3">
                                6PM
                              </div>
                            </div>
                            <div className="block w-full border-b-2 border-gray-100 meeting-list-item -ml-5">
                              <div className="-ml-10 mx-4 text-sm -mt-3">
                                7PM
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </>
                )}

                {tabs === "rooms" && (
                  <>
                    <div className="w-full bg-white grid grid-cols-3 gap-4 my-5 p-8 rounded-md">
                      <div className="flex flex-col justify-between h-32 p-3 cursor-pointer border border-blue-800 rounded-lg meeting-backdrop">
                        <p className="font-BwN font-BwN--bold font-18 text-blue-800 ">
                          Total Users
                        </p>
                        <span className="font-BwN font-12 text-black">
                          25 people
                        </span>
                      </div>
                      <div className="flex flex-col justify-between h-32 p-3 cursor-pointer border border-blue-800 rounded-lg meeting-backdrop">
                        <div className="flex flex-col">
                          <p className="font-BwN font-BwN--bold font-18 text-blue-800 ">
                            Total Hours
                          </p>
                          <span className="font-BwN font-10 text-black">
                            in the last 30 days
                          </span>
                        </div>
                        <div className="flex justify-between align-baseline">
                          <span className="font-BwN font-12 text-black">
                            25 hours
                          </span>
                          <span className="-mt-1">
                            +14%{" "}
                            <strong className="text-blue-800">&#8593;</strong>
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col justify-between h-32 p-3 cursor-pointer border border-blue-800 rounded-lg meeting-backdrop">
                        <div className="flex flex-col">
                          <p className="font-BwN font-BwN--bold font-18 text-blue-800 ">
                            Total Complaints
                          </p>
                          <span className="font-BwN font-10 text-black">
                            in the last 30 days
                          </span>
                        </div>
                        <div className="flex justify-between align-baseline">
                          <span className="font-BwN font-12 text-black">
                            10
                          </span>
                          <span className="-mt-1">
                            +25%{" "}
                            <strong className="text-blue-800">&#8593;</strong>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="w-full bg-white my-5 p-8 rounded-md">
                      <div
                        className="w-auto flex bg-gray-200 rounded-md"
                        style={{ width: "45%" }}
                      >
                        <input
                          className="p-3 font-BwN font-12 bg-gray-200 rounded-sm outline-none"
                          type="text"
                          placeholder="Search for a name"
                          style={{ width: "100%" }}
                        />
                        <button>
                          <SVG
                            className="h-5 m-2"
                            src={"/assets/svg/search.svg"}
                          ></SVG>
                        </button>
                      </div>

                      <div className="grid grid-cols-4 gap-2 py-3 my-5 mt-10 ">
                        <small className="text-spacing text-gray-500">
                          MEETING ROOM NAME
                        </small>
                        <small className="text-spacing text-gray-500">
                          MEETING ROOM MANAGER
                        </small>
                        <small className="text-spacing text-gray-500 ml-20">
                          CAPACITY
                        </small>
                        <span className="text-spacing font-BwN font-12"></span>
                      </div>

                      <div className="grid grid-cols-4 gap-4 py-3 my-5 border-b border-gray-200">
                        <div className="flex relative">
                          <span className="initials relative  bottom-1 font-BwN font-BwN--bolder mx-3 ml-0">
                            OI
                          </span>
                          <span className="relative font-bold font-BwN font-12">
                            {" "}
                            Executive Room 1
                          </span>
                        </div>
                        <div className="flex cursor-pointer">
                          <img
                            className="cursor-pointer h-5"
                            src={`/assets/images/mudia.png`}
                            alt="Olasukanmi"
                          />

                          <div className="flex flex-col mx-1">
                            <b className=" font-BwN font-BwN--bold font-12 cursor-pointer">
                              Olasukanmi Habeeb
                            </b>
                            <span className="font-BwN font-BwN--lighter font-10">
                              User Interaction Design
                            </span>
                          </div>
                        </div>

                        <span className="text-spacing font-BwN font-12 text-center">
                          12
                        </span>
                        <div className="flex justify-start">
                          <button
                            className="font-BwN font-12 text-center px-4 py-2 border border-blue-800 rounded-sm text-blue-800"
                            onClick={toggleEditMeetingModal}
                          >
                            Edit
                          </button>
                          <button
                            className="font-BwN font-12 text-center px-4 py-2 mx-4 border border-red-600 rounded-sm text-red-600"
                            onClick={handleRemove}
                          >
                            Remove
                          </button>
                        </div>
                      </div>

                      <div className="grid grid-cols-4 gap-4 py-3 my-5 border-b border-gray-200">
                        <div className="flex relative">
                          <span className="initials relative  bottom-1 font-BwN font-BwN--bolder mx-3 ml-0">
                            OI
                          </span>
                          <span className="relative font-bold font-BwN font-12">
                            {" "}
                            Executive Room 1
                          </span>
                        </div>
                        <div className="flex cursor-pointer">
                          <img
                            className="cursor-pointer h-5"
                            src={`/assets/images/mudia.png`}
                            alt="Olasukanmi"
                          />

                          <div className="flex flex-col mx-1">
                            <b className=" font-BwN font-BwN--bold font-12 cursor-pointer">
                              Olasukanmi Habeeb
                            </b>
                            <span className="font-BwN font-BwN--lighter font-10">
                              User Interaction Design
                            </span>
                          </div>
                        </div>

                        <span className="text-spacing font-BwN font-12 text-center">
                          12
                        </span>
                        <div className="flex justify-start">
                          <button
                            className="font-BwN font-12 text-center px-4 py-2 border border-blue-800 rounded-sm text-blue-800"
                            onClick={toggleEditMeetingModal}
                          >
                            Edit
                          </button>
                          <button className="font-BwN font-12 text-center px-4 py-2 mx-4 border border-red-600 rounded-sm text-red-600">
                            Remove
                          </button>
                        </div>
                      </div>

                      <div className="grid grid-cols-4 gap-4 py-3 my-5 border-b border-gray-200">
                        <div className="flex relative">
                          <span className="initials relative  bottom-1 font-BwN font-BwN--bolder mx-3 ml-0">
                            OI
                          </span>
                          <span className="relative font-bold font-BwN font-12">
                            {" "}
                            Executive Room 1
                          </span>
                        </div>
                        <div className="flex cursor-pointer">
                          <img
                            className="cursor-pointer h-5"
                            src={`/assets/images/mudia.png`}
                            alt="Olasukanmi"
                          />

                          <div className="flex flex-col mx-1">
                            <b className=" font-BwN font-BwN--bold font-12 cursor-pointer">
                              Olasukanmi Habeeb
                            </b>
                            <span className="font-BwN font-BwN--lighter font-10">
                              User Interaction Design
                            </span>
                          </div>
                        </div>

                        <span className="text-spacing font-BwN font-12 text-center">
                          12
                        </span>
                        <div className="flex justify-start">
                          <button
                            className="font-BwN font-12 text-center px-4 py-2 border border-blue-800 rounded-sm text-blue-800"
                            onClick={toggleEditMeetingModal}
                          >
                            Edit
                          </button>
                          <button className="font-BwN font-12 text-center px-4 py-2 mx-4 border border-red-600 rounded-sm text-red-600">
                            Remove
                          </button>
                        </div>
                      </div>

                      <div className="grid grid-cols-4 gap-4 py-3 my-5 border-b border-gray-200">
                        <div className="flex relative">
                          <span className="initials relative  bottom-1 font-BwN font-BwN--bolder mx-3 ml-0">
                            OI
                          </span>
                          <span className="relative font-bold font-BwN font-12">
                            {" "}
                            Executive Room 1
                          </span>
                        </div>
                        <div className="flex cursor-pointer">
                          <img
                            className="cursor-pointer h-5"
                            src={`/assets/images/mudia.png`}
                            alt="Olasukanmi"
                          />

                          <div className="flex flex-col mx-1">
                            <b className=" font-BwN font-BwN--bold font-12 cursor-pointer">
                              Olasukanmi Habeeb
                            </b>
                            <span className="font-BwN font-BwN--lighter font-10">
                              User Interaction Design
                            </span>
                          </div>
                        </div>

                        <span className="text-spacing font-BwN font-12 text-center">
                          12
                        </span>
                        <div className="flex justify-start">
                          <button
                            className="font-BwN font-12 text-center px-4 py-2 border border-blue-800 rounded-sm text-blue-800"
                            onClick={toggleEditMeetingModal}
                          >
                            Edit
                          </button>
                          <button className="font-BwN font-12 text-center px-4 py-2 mx-4 border border-red-600 rounded-sm text-red-600">
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </tr>
          </table>
        </div>
      </Layout>
    </>
  );
}
