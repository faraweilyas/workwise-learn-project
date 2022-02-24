import { useState } from "react";
import Layout from "@/components/layout/layout";
import SVG from "react-inlinesvg";
import DirectoryModal from "@/components/modals/DirectoryModal";
import AddEmployee from "@/components/modals/AddEmployee";
import UploadDbModal from "@/components/modals/UploadDb";
import InvitationModal from "@/components/modals/InvitationModal";
import { useRouter } from "next/router";
import Modal from "@/components/modals/modal";

export default function DirectoryPage({}) {
  const [tabs, setTabs] = useState("indiviuals");
  const router = useRouter();
  const [invitationModal, setInvitationModal] = useState(false);
  const [uploadDbModal,setUploadDbModal]=useState(false)
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

  const [directory, setDirectory] = useState(false);

  const toggleDirectoryModal = () => {
    setDirectory(!directory);
    document.querySelector("body").classList.toggle("no-scroll");
  };
  const [addEmployee, setAddEmployee] = useState(false);
  const [uploadDb,setUploadDb]=useState(false);
  const toggleAddEmployeeModal = () => {
    setAddEmployee(!addEmployee);
    document.querySelector("body").classList.toggle("no-scroll");
  };
  const toggleInvitationModal = () => {
    setInvitationModal(!invitationModal);
    document.querySelector("body").classList.toggle("no-scroll");
  };
  const toggleUploadDbModal = () => {
    setUploadDbModal(!uploadDbModal);
    document.querySelector("body").classList.toggle("no-scroll");
  };

  return (
    <>
      <DirectoryModal
        showmodal={directory}
        modalHandler={toggleDirectoryModal}
        width="450px"
      />
      <AddEmployee
        showmodal={addEmployee}
        modalHandler={toggleAddEmployeeModal}
        width="450px"
      />
      <InvitationModal
        title="Upload CSV file"
        showmodal={invitationModal}
        modalHandler={toggleInvitationModal}
        width="100%"
      />
      <Modal
          title="Upload CSV File"
          showmodal={uploadDbModal}
          modalHandler={toggleUploadDbModal}
          children={<UploadDbModal />}
          width="450px"
        />
      <Layout title="Directory">
        {/* breadcrum */}
        <div
          id="breadcrum"
          className="breacurm fixed flex p-4 mt-14  bg-white  shadow-sm"
        >
          <div className='flex inner-breadcrum-directory'>
            <button
              className="flex outline-none m-3"
              onClick={() => router.back()}
            >
              <SVG className="h-4 mt-1" src={"/assets/svg/arrow-left.svg"}></SVG>
              <span className="text-gray-700 font-BwN font-BwN--bolder font-15">
                Company Directory(design)
              </span>
            </button>

            <div className="flex">
              <button
                className="relative flex p-3 border-50 bg-blue-800  rounded-md font-12 mx-1 mr-2 "
                onClick={toggleAddEmployeeModal}
              >
                <SVG className="h-4 mt-1" src={"/assets/svg/add-empolyee.svg"}></SVG>
                <span className="text-white mx-2 mt-1"> Add an employee</span>
              </button>
            </div>
          </div>
        </div>
        {/* breadcrum */}
        <br />
        <br />

        <div className=" p-2 directory-main-content">
          <div className=" bg-white mt-14 p-8 rounded-md directory-main-content-inner">
            <div className="flex justify-center">
              <div
                className="flex flex-col justify-center p-3"
                style={{ width: "100%" }}
              >
                  <div className="w-fill flex bg-gray-100 rounded-md my-5">
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
                {
                  lists.map((list, index) => (
                    <div
                      className="flex justify-between border border-gray-200 cursor-pointer p-3 my-2 rounded-sm"
                      onClick={toggleDirectoryModal}
                    >
                      <div className="flex">
                        <span className="initials relative  -bottom-0 font-BwN font-BwN--bolder mx-3 my-1 ml-0">
                          BK
                        </span>

                        <div className="flex flex-col mx-1">
                          <b className=" font-BwN font-BwN--bold font-12 cursor-pointer">
                            Beyonce Knowles
                          </b>
                          <span className="font-BwN font-BwN--lighter font-10">
                            Design
                          </span>
                        </div>
                      </div>
                      
                    </div>
                  ))}
              </div>

              {/*  */}
            </div>

            {/* search input */}

            {/* search input */}
          </div>
        </div>
      </Layout>
    </>
  );
}
