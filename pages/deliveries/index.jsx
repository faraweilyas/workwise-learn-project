import { useState } from "react";
import Layout from "@/components/layout/layout";
import Modal from "@/components/modals/modal";
import SVG from "react-inlinesvg";
import InvitationModal from "@/components/modals/InvitationModal";
import { useRouter } from "next/router";
import InviteVistorModal from "@/components/modals/InviteVistorModal";
import Pagination from "@/components/pagination";

export default function DeliverisPage({}) {
  const router = useRouter();
  const [invitationModal, setInvitationModal] = useState(false);
  const [inviteVisitor, setInviteVisitor] = useState(false);

  const toggleInvitationModal = () => {
    setInvitationModal(!invitationModal);
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
  const toggleInviteVisitor = () => {
    setInviteVisitor(!inviteVisitor);
    document.querySelector("body").classList.toggle("no-scroll");
  };
  return (
    <>
      <InvitationModal
        title="View Invitation"
        showmodal={invitationModal}
        modalHandler={toggleInvitationModal}
        width="100%"
      />
      <Modal
        title="Invite a visitor"
        showmodal={inviteVisitor}
        modalHandler={toggleInviteVisitor}
        children={<InviteVistorModal />}
        width="100%"
      />
      <Layout title="Visitor Management">
        {/* breadcrum */}
        <div
          id="breadcrum"
          className="breacurm flex justify-between fixed  z-1  p-4 mt-14  bg-white  shadow-sm"
        >
          <div className="inner-breadcrum">
            <button
              className="flex outline-none m-3"
              onClick={() => router.back()}
            >
              <SVG className="h-4" src={"/assets/svg/arrow-left.svg"}></SVG>
              <span className="text-gray-700 font-BwN font-BwN--bolder font-12">
                Deliveries
              </span>
            </button>

            <button
              className="relative flex p-3 border-50 bg-blue-800  rounded-md font-12 mx-1 mr-10"
              onClick={toggleInviteVisitor}
            >
              <span className="text-white mx-2"> Send reminders</span>
            </button>
          </div>
        </div>
        {/* breadcrum */}

        <div className="md:ml-5 p-2" style={{ marginTop: "12%" }}>
          {/* end of cards */}
          <table className="visitor-table">
            <tr>
              <div className="visitor-details relative  bg-white my-5 p-8 rounded-md">
                <div className="flex justify-between">
                  <div className="flex" style={{ width: "60%" }}>
                    <div
                      className="w-auto flex bg-gray-100 rounded-md"
                      style={{ width: "80%" }}
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
                  </div>
                </div>
              <table
              style={{ width: "800px" }}
              className="mt-10 view-inner-table"
              >
                <tr className="view-tr mt-10 ">
                  <td>
                    <small className=" text-gray-500">NAME RECIPIENT</small>
                  </td>
                  <td>
                    <small className="text-gray-500">RECIPIENT REPLY</small>
                  </td>
                  <td>
                    <small className="text-gray-500 ">SENDER</small>
                  </td>
                  <td>
                    <small className="text-gray-500 ">STATUS</small>
                  </td>
                </tr>

                {lists.map((list, index) => (
                  <tr
                    className="view-tr border-b border-gray-200 "
                    key={`${index}${list}` + 1}
                  >
                    <td>
                      <div className="flex relative">
                        <span className="initials relative  bottom-1 font-BwN font-BwN--bolder mx-3 ml-0">
                          OI
                        </span>
                        <span className="relative font-BwN font-12">
                          {" "}
                          Olly Ichabod
                        </span>
                      </div>
                    </td>

                    <td>
                      <div className="flex relative">
                        <span className="relative font-BwN font-12">
                          i`ll pick up from the town
                        </span>
                      </div>
                    </td>
                    <td>
                      <div className="flex relative">
                        <span className="relative font-BwN font-12"> john</span>
                      </div>
                    </td>

                    <td>
                      <div className="flex ">
                        <span className="m-1">
                          <svg
                            width="15"
                            height="10"
                            viewBox="0 0 15 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.068 6.1805L8.00933 7.12183L13.6533 1.47783L14.596 2.4205L8.00933 9.00716L3.76667 4.7645L4.70933 3.82183L6.126 5.2385L7.068 6.17983V6.1805ZM7.06933 4.29516L10.3707 0.993164L11.3107 1.93316L8.00933 5.23516L7.06933 4.29516ZM5.18467 8.06516L4.24267 9.00716L0 4.7645L0.942667 3.82183L1.88467 4.76383L1.884 4.7645L5.18467 8.06516Z"
                              fill="#0A459F"
                            />
                          </svg>
                        </span>
                        <span className="text-blue-800 text-spacing font-BwN font-12 text-right">
                          Recieved
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
                <tr>
                  <td colSpan="4">
                  <Pagination />
                  </td>
                </tr>
                </table>
              </div>
            </tr>
          </table>
        </div>
      </Layout>
    </>
  );
}
