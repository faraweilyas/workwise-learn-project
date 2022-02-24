import { useState } from "react";
import Layout from "@/components/layout/layout";
import SVG from "react-inlinesvg";
import Pagination from "@/components/pagination";
import { useRouter } from "next/router";

export default function ServiceManagement({}) {
  const router = useRouter();
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
      <Layout title="Time IN">
        {/* breadcrum */}
        <div
          id="breadcrum"
          className="breacurm flex justify-between  z-1  p-4 mt-14  bg-white  shadow-sm"
        >
          <button
            className="flex outline-none m-3"
            onClick={() => router.back()}
          >
            <SVG className="h-4" src={"/assets/svg/arrow-left.svg"}></SVG>
            <span className="text-gray-700 font-BwN font-BwN--bolder font-12">
              Service Management
            </span>
          </button>
        </div>
        {/* breadcrum */}
        <div className="md:ml-5 p-2">
          {/* end of cards */}
          <table className="visitor-table">
            <tr>
              <div className="visitor-details relative  bg-white my-5 p-8 rounded-md">
                <div className="flex justify-between">
                  <div className="flex" style={{ width: "60%" }}>
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
                      <span className="text-spacing font-BwN font-BwN--lighter  font-12">
                        DATE
                      </span>
                    </td>
                    <td>
                      <span className=" font-BwN font-BwN--lighter  font-12">
                        CREATOR
                      </span>
                    </td>
                    <td>
                      <span className=" font-BwN font-BwN--lighter  font-12 ">
                        ASSIGNED TO
                      </span>
                    </td>
                    <td>
                      <span className=" font-BwN font-BwN--lighter text-center font-12">
                        STATUS
                      </span>
                    </td>
                    <td>
                      <span className=" font-BwN font-BwN--lighter text-center font-12">
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
                            Today, 2:00PM
                          </span>
                        </div>
                      </td>

                      <td>
                        <div className="flex ">
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
                        <div className="flex ">
                          <span className="relative font-BwN font-12">
                            Imasuen
                          </span>
                        </div>
                      </td>
                      <td>
                        <div className="">
                          <span className="relative font-BwN font-12 bg-yellow-100 border-50 p-2 text-yellow-500">
                            In progress
                          </span>
                        </div>
                      </td>

                      <td>
                      <button className=" flex justify-center "
                    onClick={()=>handleClick(index)}
                    >
                      <SVG className="h-4" src={"/assets/svg/option.svg"}
                      ></SVG>
                      {true ? (
                        <div
                          className={`flex flex-col absolute top-50  bg-white shadow-md p-3 rounded-md cursor-pointer mb-5 ${drop!==index?'hidden':''}`}
                          style={{ zIndex: "100",right:'-40px',width:'130px' }}
                        >
                          <div className="flex py-3 bg-white ">
                            <span className="h-1">
                              
                            </span>
                            <span className="font-BwN font-12">
                              Assign to
                            </span>
                          </div>
                          <div className="flex py-3 bg-white  ">
                            <span className="h-1">
                              
                            </span>
                            <span className="font-BwN font-12">
                              Query
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
          </table>
        </div>
      </Layout>
    </>
  );
}
