import { useState } from "react";
import Layout from "@/components/layout/layout";
import SVG from "react-inlinesvg";
import DirectoryModal from "@/components/modals/DirectoryModal";
import AddEmployee from "@/components/modals/AddEmployee";
import Link from "@/components/link";
import { useRouter } from "next/router";
import SpoolLog from "@/components/modals/SpoolLog";
import EditCompany from "@/components/modals/EditCompany";
import Pagination from "@/components/pagination";
export default function ViewCompany({}) {
  const router = useRouter();

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

  const [tabs, setTabs] = useState("overview");
  const [editCompany, setEditCompany] = useState(false);

  const toggleEditCompanyModal = () => {
    setEditCompany(!editCompany);
    document.querySelector("body").classList.toggle("no-scroll");
  };
  const [spool, setSpool] = useState(false);

  const toggleAddSpoolModal = () => {
    setSpool(!spool);
    document.querySelector("body").classList.toggle("no-scroll");
  };

  return (
    <>
      <EditCompany
        showmodal={editCompany}
        modalHandler={toggleEditCompanyModal}
        width="700px"
      />
      <SpoolLog
        showmodal={spool}
        modalHandler={toggleAddSpoolModal}
        width="500px"
      />
      <Layout title="View Company">
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
                Company Profile
              </span>
            </button>
          </div>
        </div>
        {/* breadcrum */}
        <br />
        <br />
        <br />
        <br />
        <pagination />
        <div
          className="descrease-top center-no-top p-2"
          style={{ marginTop: "2%" }}
        >
          {/*  */}

          <table className="visitor-table">
            <tr>
              <div className="flex justify-center mt-20 visitor-details">
                <div
                  className="flex bg-white p-2 justify-center rounded-sm"
                  // style={{ width: '32%' }}
                >
                  <button
                    className={`font-BwN p-4 px-10  rounded-md cursor-pointer ${
                      tabs === "overview"
                        ? "bg-blue-800 text-white transition-all ease-in-out"
                        : "bg-white text-black"
                    }`}
                    onClick={() => setTabs("overview")}
                  >
                    Overview
                  </button>
                  <button
                    className={`font-BwN p-4 px-10  rounded-md cursor-pointer ${
                      tabs === "devices"
                        ? "bg-blue-800 text-white transition-all ease-in-out"
                        : "bg-white text-black"
                    }`}
                    onClick={() => setTabs("devices")}
                  >
                    Devices
                  </button>
                  <button
                    className={`font-BwN p-4 px-10  rounded-md cursor-pointer ${
                      tabs === "company-settings"
                        ? "bg-blue-800 text-white transition-all ease-in-out"
                        : "bg-white text-black"
                    }`}
                    onClick={() => setTabs("company-settings")}
                  >
                    Company Settings
                  </button>
                  <button
                    className={`font-BwN p-4 px-10  rounded-md cursor-pointer ${
                      tabs === "intergrations"
                        ? "bg-blue-800 text-white transition-all ease-in-out"
                        : "bg-white text-black"
                    }`}
                    onClick={() => setTabs("intergrations")}
                  >
                    Intergrations
                  </button>
                </div>
              </div>
              <div className="details-details  flex flex-col bg-white my-5 rounded-md">
                {tabs === "overview" && (
                  <div className="w-full relative flex flex-col bg-white ">
                    <img src="/assets/images/view-company.png" alt="" />
                    <div className="w-full flex flex-row p-4">
                      <img
                        className="absolute top-20 left-10"
                        style={{ width: "200px" }}
                        src="/assets/images/person.png"
                        alt="person"
                      />

                      <div className="w-full relative  -top-5 flex justify-end my-5">
                        <button
                          className="relative flex p-3 border-50 border border-blue-800  rounded-md font-13 mx-1 mr-0"
                          onClick={toggleAddSpoolModal}
                        >
                          <span className="text-blue-800 mx-2"> Spool Log</span>
                        </button>
                        <button
                          className="relative flex p-3 border-50 bg-blue-800  rounded-md font-13 mx-1 mr-0"
                          onClick={toggleEditCompanyModal}
                        >
                          <span className="text-white mx-2"> Edit Company</span>
                        </button>
                      </div>
                    </div>

                    <div className="w-full relative flex  p-10 rounded-md">
                      <div className="flex flex-col">
                        <h2 className="font-BwN text-4xl text-gray-700 font-BwN--mid mt-10">
                          Prime Atlantic
                        </h2>
                        <span className="font-BwN font-14">
                          #VVSH2918N28109
                        </span>
                        <span className="w-6/12 font-BwN font-12 my-5">
                          We pride ourselves in offering the most comprehensive
                          bouquet of solutions while subjecting our processes to
                          the most stringent global standards providing services
                          and solutions to the Oil & Gas industry.
                        </span>
                        <div className="w-6/12 flex flex-col justify-between p-2 ">
                          <div className="w-full flex justify-between my-5">
                            <span className="font-BwN font-BwN--lighter text-space font-12">
                              USER TYPE
                            </span>
                            <span className="font-BwN font-BwN--lighter text-space font-12">
                              NO OF USERS
                            </span>
                          </div>
                          <div className="w-full flex justify-between my-2 border-b">
                            <span className="font-BwN font-bold text-space font-12 my-2">
                              Tenants
                            </span>
                            <span className="font-BwN font-bold text-space font-12 my-2">
                              4
                            </span>
                          </div>
                          <div className="w-full flex justify-between my-2 border-b">
                            <span className="font-BwN font-bold text-space font-12 my-2">
                              Tenants
                            </span>
                            <span className="font-BwN font-bold text-space font-12 my-2">
                              4
                            </span>
                          </div>
                          <div className="w-full flex justify-between my-2 border-b">
                            <span className="font-BwN font-bold text-space font-12 my-2">
                              Tenants
                            </span>
                            <span className="font-BwN font-bold text-space font-12 my-2">
                              4
                            </span>
                          </div>
                          <div className="w-full flex justify-between my-2 border-b">
                            <span className="font-BwN font-bold text-space font-12 my-2">
                              Tenants
                            </span>
                            <span className="font-BwN font-bold text-space font-12 my-2">
                              4
                            </span>
                          </div>
                          <div className="w-full flex justify-between my-2 border-b">
                            <span className="font-BwN font-bold text-space font-12 my-2">
                              Tenants
                            </span>
                            <span className="font-BwN font-bold text-space font-12 my-2">
                              4
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col absolute top-20 right-10">
                        <button className="relative flex p-3 border-50 bg-green-600  rounded-md font-13 mx-1 mr-0">
                          <span className="text-white mx-2"> Active</span>
                        </button>
                        <span className="font-BwN font-10 my-2">
                          Multitenant: Yes
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {tabs === "devices" && (
                  <div className="w-full relative flex flex-col py-10 px-10 bg-white rounded-md">
                    <span className="text-space font-BwN font-BwN--ligther font-12">
                      PAIR A NEW DEVICE
                    </span>

                    <div className="w-4/12 my-5">
                      <label class="input">
                        <input
                          class="input__field"
                          type="text"
                          placeholder="Enter genrated code "
                        />
                        <span class="input__label font-BwN">Device code *</span>
                      </label>

                      <button className="w-full my-5 px-6 py-4 relative text-center bg-blue-800 text-white rounded-sm font-13 mx-1 mr-0">
                        Activate device
                      </button>
                    </div>

                    <span className="text-space font-BwN font-BwN--ligther font-12">
                      PAIRED DEVICES
                    </span>
                    <span className="font-BwN font-BwN--ligther font-12 my-5">
                      You’ve paired the following devices to your Workwise
                      account
                    </span>

                    <div className="w-full grid grid-cols-3 gap-6">
                      {/*  */}
                      {lists.map((list, index) => (
                        <div
                          key={index + 1}
                          className="flex p-1 border-b pb-2 cursor-pointer"
                        >
                          <img
                            className="mx-2"
                            style={{ width: "80px" }}
                            src="/assets/images/iphone.png"
                          />
                          <div className="flex flex-col">
                            <p className="font-BwN font-BwN--bolder font-12">
                              AR_CORK_F289283HWI189
                            </p>
                            <span className="font-BwN font-BwN--light my-2">
                              Model
                            </span>
                            <span className="font-BwN font-BwN--light my-1">
                              9 months ago
                            </span>
                            <span className="font-BwN font-BwN--bold font-12 text-blue-800 underline my-1">
                              Unpair
                            </span>
                            <span>AHS8291</span>
                          </div>
                        </div>
                      ))}
                    </div>
                    <Pagination />
                  </div>
                )}

                {tabs === "company-settings" && (
                  <div
                    className=" relative flex flex-col py-10 px-10 bg-white rounded-md"
                    style={{ width: "870px" }}
                  >
                    <span className="text-space font-BwN font-BwN--bold font-14">
                      General Settings
                    </span>
                    <span className="text-space font-BwN font-BwN--ligther font-10 mt-10">
                      OPENING AND CLOSING TIMES
                    </span>

                    <div className="flex">
                      <div className="w-2/6 my-5">
                        <label class="input">
                          <input
                            class="input__field"
                            type="text"
                            placeholder=" "
                          />
                          <span class="input__label font-BwN">
                            Office opens
                          </span>
                        </label>
                      </div>

                      <div className="w-2/6 my-5 mx-3">
                        <label class="input">
                          <input
                            class="input__field"
                            type="text"
                            placeholder=" "
                          />
                          <span class="input__label font-BwN">
                            Office closes
                          </span>
                        </label>
                      </div>
                    </div>

                    <span className="text-space font-BwN font-BwN--bold font-14">
                      Visitor Management
                    </span>
                    <span className="text-space font-BwN font-BwN--ligther font-10 mt-5">
                      SHOW/HIDE GUIDELINES
                    </span>
                    <div className="flex">
                      <div className="w-2/6 my-5">
                        <select
                          style={{ width: "100%" }}
                          className=" relative bg-white vistor-select  font-BwN font-12 rounded-lg w-50 h-12 text-gray-300
                      shadow-lg border border-gray-100 outline-none p-3   "
                        >
                          <option>Show</option>
                          <option>Weekly</option>
                          <option>Monthly</option>
                        </select>
                      </div>
                    </div>

                    <span className="text-space font-BwN font-BwN--ligther font-10 mt-2">
                      SET SAFETY GUIDELINES
                    </span>

                    <div className=" flex flex-col" style={{ width: "60%" }}>
                      <div className="my-5">
                        <label class="input">
                          <input
                            class="input__field"
                            type="text"
                            placeholder=" "
                          />
                          <span class="input__label font-BwN">
                            Safety Guidelines
                          </span>
                        </label>
                      </div>
                      <div className="my-2">
                        <label class="input">
                          <input
                            class="input__field"
                            type="text"
                            placeholder=" "
                          />
                          <span class="input__label font-BwN">
                            Safety Guidelines
                          </span>
                        </label>
                      </div>
                      <div className="flex">
                        <SVG
                          className="h-4 m-2"
                          src={"/assets/svg/plus-2.svg"}
                        ></SVG>
                        <p className="text-gray-400 mt-1">Add new guidlines</p>
                      </div>
                      <span className="text-space font-BwN font-BwN--ligther font-10 mt-2">
                        BADGE PRINTING
                      </span>

                      <div className="flex" style={{ width: "100%" }}>
                        <div className=" my-5">
                          <label class="input">
                            <input
                              class="input__field"
                              type="text"
                              placeholder=" "
                            />
                            <span class="input__label font-BwN">
                              Default Password
                            </span>
                          </label>
                        </div>

                        <div className="w-3/5 my-5 mx-3">
                          <select
                            style={{ width: "100%" }}
                            className=" relative bg-white vistor-select  font-BwN font-12 rounded-lg w-50 h-11 text-gray-300
                      shadow-lg border border-gray-100 outline-none p-3   "
                          >
                            <option>Select wifi status</option>
                            <option>Weekly</option>
                            <option>Monthly</option>
                          </select>
                        </div>
                      </div>

                      <div className="flex">
                        <div className=" my-5">
                          <label class="input">
                            <input
                              class="input__field"
                              type="text"
                              placeholder=" "
                            />
                            <span class="input__label font-BwN">
                              Guest wifi Name
                            </span>
                          </label>
                        </div>

                        <div className=" my-5 ml-3">
                          <label class="input">
                            <input
                              class="input__field"
                              type="text"
                              placeholder=" "
                            />
                            <span class="input__label font-BwN">
                              Add locations
                            </span>
                          </label>
                        </div>
                      </div>

                      <span className="text-space font-BwN font-BwN--ligther font-10 mt-2">
                        UPLOAD NDA DOCUMENT
                      </span>

                      <div className="w-3/6 flex relative bg-blue-200 border border-blue-800 border-dashed p-3 my-3 rounded-sm">
                        <SVG
                          className="h-4 mr-1"
                          src={"/assets/svg/upload-icon.svg"}
                        ></SVG>

                        <small className="text-blue-800">
                          Click here to upload your NDA.
                        </small>
                        <input
                          type="file"
                          className="w-full absolute top-0 left-0  h-10 -z-10 hidden"
                        />
                      </div>

                      <button className="w-3/6  relative bg-blue-200 text-white text-center p-3 my-3 rounded-sm">
                        Save new changes
                      </button>
                      <strong className="mt-4">Delivery</strong>
                      <span className="text-space text-grey-500 font-BwN font-BwN--ligther font-10 mt-3">
                        Frequency reminder
                      </span>
                      <div className="w-3/6 my-5">
                        <select
                          style={{ width: "100%" }}
                          className=" relative bg-white vistor-select  font-BwN font-12 rounded-lg w-50 h-12 text-gray-300
                      shadow-lg border border-gray-100 outline-none p-3   "
                        >
                          <option>Set frequency</option>
                          <option>Weekly</option>
                          <option>Monthly</option>
                        </select>
                      </div>
                      <button className="w-3/6  relative bg-blue-200 text-white text-center p-3 my-3 rounded-sm">
                        Save new changes
                      </button>
                    </div>

                    <div className="border-b my-5"></div>

                    <span className="text-space font-BwN font-BwN--bold font-14">
                      Time Clock-in
                    </span>
                    <span className="text-space font-BwN font-BwN--ligther font-10 mt-10">
                      CLOCK-IN RADIUS
                    </span>
                    <div className="flex">
                      <div className="w-2/6 my-5">
                        <select
                          style={{ width: "100%" }}
                          className=" relative bg-white vistor-select  font-BwN font-12 rounded-lg w-50 h-12 text-gray-300
                      shadow-lg border border-gray-100 outline-none p-3   "
                        >
                          <option>Set radius</option>
                          <option>Weekly</option>
                          <option>Monthly</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <span className="text-space font-BwN font-BwN--ligther font-10 mt-10">
                        SELECT LOCATION
                      </span>
                    </div>

                    <div
                      className="bg-gray-300 h-100 p-20 my-5"
                      style={{ height: "25rem" }}
                    ></div>

                    <button className="w-2/6  relative bg-blue-200 text-white text-center p-3 my-3 rounded-sm">
                      Save new changes
                    </button>
                  </div>
                )}

                {tabs === "intergrations" && (
                  <div className="w-full relative flex flex-col py-10 px-10 bg-white  rounded-md">
                    <span className="text-space font-BwN font-BwN--lighter font-10">
                      INTEGRATIONS
                    </span>

                    <div className="w-full flex justify-center flex-wrap gap-6 my-10">
                      {lists.map((list, index) => (
                        <div className="h-50 flex flex-col justify-center">
                          <img
                            style={{ width: "150px" }}
                            src={"/assets/images/google-calendar.png"}
                          />
                          <span className="text-gray-700  font-BwN">
                            Google Calendar
                          </span>
                          <span className="text-blue-800 text-center font-BwN underline cursor-pointer">
                            Connect
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </tr>
          </table>
          {/*  */}
        </div>
      </Layout>
    </>
  );
}
