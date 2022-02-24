import { useState } from "react";
import Layout from "@/components/layout/layout";
import SVG from "react-inlinesvg";
import Pagination from "@/components/pagination";
import DirectoryModal from "@/components/modals/DirectoryModal";
import AddEmployee from "@/components/modals/AddEmployee";
import Link from "@/components/link";
import { useRouter } from "next/router";
import Chart4 from '../../components/charts/Chart4';
import Modal from "@/components/modals/modal";
import InvitationModal from "@/components/modals/InvitationModal";
import LogsModal from '@/components/modals/LogsModal'
import SendNoteModal from '@/components/modals/SendNoteModal'

export default function TimeIn({}) {
  const router = useRouter();
  const [invitationModal, setInvitationModal] = useState(false);
  const [logModal,setLogModal]=useState(false);
  const [sendNoteModal,setSendNoteModal]=useState(false)
  const toggleInvitationModal = () => {
    setInvitationModal(!invitationModal);
    document.querySelector("body").classList.toggle("no-scroll");
  };
  const toggleLogModal = () => {
    setLogModal(!logModal);
    document.querySelector("body").classList.toggle("no-scroll");
  };
  const toggleSendNoteModal = () => {
    setSendNoteModal(!sendNoteModal);
    document.querySelector("body").classList.toggle("no-scroll");
  };
  let lists = [
    { name: "dropdown" },
    { name: "list" },
    { name: "list" },
    { name: "list" },
    { name: "list" },
    { name: "list" },
    { name: "list" },
    { name: "list" },
    { name: "list" },
    { name: "list" },
    { name: "list" },
    { name: "list" },
    { name: "list" },
    { name: "list" },
    { name: "list" },
    { name: "list" },
    { name: "list" },
    { name: "list" },
    { name: "list" },
    { name: "list" },
    { name: "list" },
    { name: "list" },
  ];

  return (
    <>
    <InvitationModal
        title="View Invitation"
        showmodal={invitationModal}
        modalHandler={toggleInvitationModal}
        width="100%"
      />
      <Modal
          title="Emergency Logs"
          showmodal={logModal}
          modalHandler={toggleLogModal}
          children={<LogsModal />}
          width="850px"
        />
        <Modal
          title="Emergency notification"
          showmodal={sendNoteModal}
          modalHandler={toggleSendNoteModal}
          children={<SendNoteModal />}
          width="300px"
        />
      <Layout title="Time IN">
        {/* breadcrum */}
        <div
          id="breadcrum"
          className="breacurm flex justify-between fixed   p-4 mt-14  bg-white  shadow-sm"
        >
          <div className="inner-breadcrum-time">
            <button
              className="flex outline-none m-3"
              onClick={() => router.back()}
            >
              <SVG className="h-4" src={"/assets/svg/arrow-left.svg"}></SVG>
              <span className="text-gray-700 font-BwN font-BwN--bolder font-12">
                Time Clock-in
              </span>
            </button>

            <div className='flex inner-time-buttons'>
              <button className="relative flex p-3 border-50 border border-blue-800  rounded-md font-12 mx-1  "
              onClick={toggleLogModal}
              >
                <span className="text-blue-800"> Emergency Logs</span>
              </button>
              <button className="relative flex p-3 border-50 font-bold bg-red-200  rounded-md font-12 mx-1 mr-10 "
              onClick={toggleSendNoteModal}
              >
                <SVG className="h-4" style={{width:'20px'}} src={"/assets/svg/triangle.svg"}></SVG>
                <span className="text-red-800 mx-2">
                  Send Emergency Notification
                </span>
              </button>
            </div>
          </div>
        </div>
        {/* breadcrum */}
        <br />
        <br />
        <table className=" visitor-table" style={{ marginTop: "8%" }}>
          <tr>
          <div className="visitor-details relative  bg-white my-5 p-8 rounded-md"
          style={{width:'850px'}}
          >
            <div className='flex justify-between' >
              <h3 className='text-blue-800 font-bold' style={{width:'50%'}}>Employee Promptness</h3>
              <select
                    className="relative bg-gray-100 font-BwN font-12 rounded-lg w-50 h-12 text-gray-800 outline-none p-3 pr-5 mx-4"
                    style={{ width: "20%" }}
                  >
                    <option>Filter by status</option>
                    <option>Weekly</option>
                    <option>Monthly</option>
                  </select>
            </div>
            <div className='flex justify-center'>
            <Chart4/>
            </div>
          </div>
          </tr>
        </table>
        <table className=" visitor-table" style={{ marginTop: "8%" }}>
          <tr>
            <div className="visitor-details relative  bg-white my-5 p-8 rounded-md">
              <div className="flex justify-between">
                <div className="flex" style={{ width: "75%" }}>
                  <div
                    className="w-auto flex bg-gray-100 rounded-md"
                    style={{ width: "100%" }}
                  >
                    <input
                      className="p-3 font-BwN font-12 bg-gray-100 rounded-sm outline-none"
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

                  <select
                    className="relative bg-gray-100 font-BwN font-12 rounded-lg w-50 h-12 text-gray-800 outline-none p-3 pr-5 mx-4"
                    style={{ width: "40%" }}
                  >
                    <option>Filter by status</option>
                    <option>Weekly</option>
                    <option>Monthly</option>
                  </select>
                </div>

                <button className="absolute top-10 right-5 flex p-2 border border-50 border-blue-800  rounded-md font-12 mx-1 mr-0">
                  <SVG className="h-4 " src={"/assets/svg/download.svg"}></SVG>
                  <span className="text-blue-800  mx-2">Export as CSV</span>
                </button>
              </div>

              <div className="flex justify-between gap-2 py-3 my-5 mt-10 ">
                <span className="text-spacing font-BwN font-BwN--lighter  font-12">
                  DATE
                </span>
                <span className="text-spacing font-BwN font-BwN--lighter  font-12">
                  NAME OF EMPLOYEE
                </span>
                <span className="text-spacing font-BwN font-BwN--lighter  font-12">
                  CLOCK IN
                </span>
                <span className="text-spacing font-BwN font-BwN--lighter  font-12 ">
                  CLOCK OUT
                </span>
              </div>

              {lists.map((list, index) => (
                <div
                  className="flex justify-between gap-4 py-3 my-5 border-b border-gray-200 cursor-pointer"
                  key={`${index}${list}` + 1}
                >
                  <div>
                    <input type="radio" />
                  </div>
                  <div className="flex relative">
                    <span className="initials relative  bottom-1 font-BwN font-BwN--bolder mx-3 ml-0">
                      OI
                    </span>
                    <span className="relative font-BwN font-12">
                      {" "}
                      Olly Ichabod
                    </span>
                  </div>

                  <div className="flex relative">
                    <span className="relative font-BwN font-12">
                      Today, 2:00PM
                    </span>
                  </div>
                  <div className="flex relative">
                    <span className="relative font-BwN font-12">
                      Today, 2:00PM
                    </span>
                  </div>
                </div>
              ))}
              <Pagination />
            </div>
          </tr>
        </table>
      </Layout>
    </>
  );
}
