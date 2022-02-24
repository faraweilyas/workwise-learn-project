import { useState } from "react";
import Pagination from "@/components/pagination";
import Layout from "@/components/layout/layout";
import SVG from "react-inlinesvg";
import DirectoryModal from "@/components/modals/DirectoryModal";
import AddEmployee from "@/components/modals/AddEmployee";
import Link from "@/components/link";
import { useRouter } from "next/router";

export default function Bookings({}) {
  const router = useRouter();
  const [tabs, setTabs] = useState("bookings");
  const [drop, setDrop] = useState(null);
  const handleClick = (num) => {
    num == drop ? setDrop(null) : setDrop(num);
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
      <Layout title="Directory">
        {/* breadcrum */}
        <div
          id="breadcrum"
          className="breacurm flex justify-between fixed z-1  p-4 mt-14  bg-white  shadow-sm"
        >
          <div className="inner-breadcrum">
            <button
              className="flex outline-none m-3"
              onClick={() => router.back()}
            >
              <SVG className="h-4" src={"/assets/svg/arrow-left.svg"}></SVG>
              <span className="text-gray-700 font-BwN font-BwN--bolder font-12">
                Desk Booking
              </span>
            </button>
          </div>
        </div>
        {/* breadcrum */}
        <br />
        <br />
        <br />
        <div className="flex justify-center mt-20">
          <div
            className="flex bg-white p-2 justify-center  rounded-sm"
            // style={{ width: '32%' }}
          >
            <button
              className={`${
                tabs === "bookings"
                  ? "font-BwN p-4 px-10 bg-blue-800 text-white rounded-md cursor-pointer"
                  : "font-BwN p-4 px-10 bg-white text-black rounded-md cursor-pointer"
              }`}
              onClick={() => setTabs("bookings")}
            >
              Booking Logs
            </button>

            <button
              className={`${
                tabs === "settings"
                  ? "font-BwN p-4 px-10 bg-blue-800 text-white rounded-md cursor-pointer"
                  : "font-BwN p-4 px-10 bg-white text-black rounded-md cursor-pointer"
              }`}
              onClick={() => setTabs("settings")}
            >
              Settings
            </button>
          </div>
        </div>

        <div className="md:ml-5 p-2">
          {/* end of cards */}
          <table className="visitor-table">
            {tabs === "bookings" && (
              <tr>
                <div className="visitor-details relative  bg-white my-5 p-8 rounded-md">
                  <div className="flex justify-between">
                    <div className="flex" style={{ width: "53%" }}>
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
                    </div>
                  </div>
                  <table
                    style={{ width: "100%" }}
                    className="mt-10 view-inner-table "
                  >
                    <tr className="view-tr">
                      <td>
                        <span className="text-spacing  font-BwN font-BwN--lighter  font-12 item">
                          DATE
                        </span>
                      </td>
                      <td>
                        <span className="text-spacing  font-BwN font-BwN--lighter  font-12 item">
                          NAME EMPLOYEE
                        </span>
                      </td>
                      <td>
                        <span className="text-spacing   font-BwN font-BwN--lighter  font-12 item">
                          START TIME
                        </span>
                      </td>
                      <td>
                        <span className="text-spacing  font-BwN font-BwN--lighter  font-12  item">
                          STOP TIME
                        </span>
                      </td>
                      <td>
                        <span className="text-spacing font-BwN font-BwN--lighter text-right font-12 item">
                          DESK
                        </span>
                      </td>
                      <td>
                        <span className="text-spacing font-BwN font-BwN--lighter text-right font-12 item">
                          MORE
                        </span>
                      </td>
                    </tr>

                    {lists.map((list, index) => (
                      <tr
                        className="view-tr relative border-b border-gray-200 cursor-pointer"
                        key={`${index}${list}` + 1}
                      >
                        <td>
                          <div className="flex relative">
                            <span className="relative font-BwN font-12">
                              Today
                            </span>
                          </div>
                        </td>
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
                              07:00am
                            </span>
                          </div>
                        </td>
                        <td>
                          <div className="flex relative">
                            <span className="relative font-BwN font-12">
                              {" "}
                              05:00pm
                            </span>
                          </div>
                        </td>
                        <td>
                          <div className="flex relative">
                            <span className="relative font-BwN font-12">
                              {" "}
                              AB Plaza seconde floor
                            </span>
                          </div>
                        </td>
                        <td>
                          <button
                            className=" flex justify-center "
                            onClick={() => handleClick(index)}
                          >
                            <SVG
                              className="h-4"
                              src={"/assets/svg/option.svg"}
                            ></SVG>
                            {true ? (
                              <div
                                className={`flex flex-col absolute top-50 bg-white shadow-md px-4 py-2 rounded-md cursor-pointer mb-5 ${
                                  drop !== index ? "hidden" : ""
                                }`}
                                style={{ zIndex: "100", right: "-55px" }}
                              >
                                <div className="flex py-3 bg-white ">
                                  <span className="h-1"></span>
                                  <span className="font-BwN font-12 text-red-800">
                                    Cancel Reservation
                                  </span>
                                </div>
                              </div>
                            ) : (
                              <span>hey</span>
                            )}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </table>
                  <Pagination />
                </div>
              </tr>
            )}
            {tabs === "settings" && (
              <div className="w-full bg-white my-5 p-8 rounded-md">
                <div className="flex flex-col">
                  <span className="font-BwN font-BwN--lighter text-space mt-20 font-10">
                    DESK AVAILABILITY
                  </span>

                  <div className="flex location-btn-group">
                    <select
                      style={{ width: "30%" }}
                      className=" relative mt-3 bg-gray-50 vistor-select  font-BwN font-12 rounded-lg w-50 h-11 text-gray-800 outline-none p-3  mx-2 "
                    >
                      <option>Location</option>
                      <option>Weekly</option>
                      <option>Monthly</option>
                    </select>
                    <div className="my-3 location-second-btn">
                      <label class="input">
                        <input
                          class="input__field"
                          type="text"
                          placeholder=" "
                        />
                        <span class="input__label font-BwN">
                          Number of desk per time
                        </span>
                      </label>
                    </div>
                  </div>

                  <div className="flex my-2 location-btn-group">
                  <select
                      style={{ width: "30%" }}
                      className=" relative mt-3 bg-gray-50 vistor-select  font-BwN font-12 rounded-lg w-50 h-11 text-gray-800 outline-none p-3  mx-2 "
                    >
                      <option>Location</option>
                      <option>Weekly</option>
                      <option>Monthly</option>
                    </select>
                    <div className="my-3 location-second-btn">
                      <label class="input">
                        <input
                          class="input__field"
                          type="text"
                          placeholder=" "
                        />
                        <span class="input__label font-BwN">
                          Number of desk per time
                        </span>
                      </label>
                    </div>
                  </div>

                  <div className="flex my-2 location-btn-group">
                  <select
                      style={{ width: "30%" }}
                      className=" relative mt-3 bg-gray-50 vistor-select  font-BwN font-12 rounded-lg w-50 h-11 text-gray-800 outline-none p-3  mx-2 "
                    >
                      <option>Location</option>
                      <option>Weekly</option>
                      <option>Monthly</option>
                    </select>
                    <div className="my-3 location-second-btn">
                      <label class="input">
                        <input
                          class="input__field"
                          type="text"
                          placeholder=" "
                        />
                        <span class="input__label font-BwN">
                          Number of desk per time
                        </span>
                      </label>
                    </div>
                  </div>

                  <div className="flex my-2">
                    <button className="relative text-center px-6 py-3 border border-blue-800 text-blue-800 rounded-sm font-13 mx-1 my-2 mr-0">
                      Add location
                    </button>
                  </div>

                  <div className="flex justify-between py-3 my-5 mt-10 ">
                    <span className="text-spacing font-BwN font-BwN--lighter  font-12">
                      LOCATION
                    </span>
                    <span className="text-spacing font-BwN font-BwN--lighter  font-12">
                      DESK
                    </span>

                    <span className="text-spacing font-BwN font-BwN--lighter  font-12 ">
                      STATUS
                    </span>
                  </div>

                  {lists.map((list, index) => (
                    <div
                      className="flex justify-between py-3 my-5 mt-2 border-b "
                      key={index + 1}
                    >
                      <span className="text-spacing font-BwN font-BwN--lighter  font-12">
                        First floor
                      </span>
                      <span className="text-spacing font-BwN font-BwN--lighter  font-12">
                        Desk 001
                      </span>

                      <span className="text-spacing font-BwN bg-green-300 text-green-700 border-50 p-1 font-BwN--lighter  font-12 ">
                        Available
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </table>
        </div>
      </Layout>
    </>
  );
}
