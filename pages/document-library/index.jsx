import { useState } from "react";
import Layout from "@/components/layout/layout";
import SVG from "react-inlinesvg";
import DirectoryModal from "@/components/modals/DirectoryModal";
import AddEmployee from "@/components/modals/AddEmployee";
import Link from "@/components/link";
import { useRouter } from "next/router";

export default function DocumentLibrary({}) {
  const [tabs, setTabs] = useState("kn");
  const [innerContent,setInnerContent]=useState('list');
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

  const [directory, setDirectory] = useState(false);

  const toggleDirectoryModal = () => {
    setDirectory(!directory);
    document.querySelector("body").classList.toggle("no-scroll");
  };
  const [addEmployee, setAddEmployee] = useState(false);

  const toggleAddEmployeeModal = () => {
    setAddEmployee(!addEmployee);
    document.querySelector("body").classList.toggle("no-scroll");
  };

  return (
    <>
      <DirectoryModal
        showmodal={directory}
        modalHandler={toggleDirectoryModal}
        width="500px"
      />
      <AddEmployee
        showmodal={addEmployee}
        modalHandler={toggleAddEmployeeModal}
        width="500px"
      />
      <Layout title="Directory">
        {/* breadcrum */}
        <div
          id="breadcrum"
          className="breacurm flex fixed   p-4 mt-14  bg-white  shadow-sm"
        >
          <div className="inner-breadcrum">
            <button
              className="flex outline-none m-3"
              onClick={() => router.back()}
            >
              <SVG className="h-4" src={"/assets/svg/arrow-left.svg"}></SVG>
              <span className="text-gray-700 font-BwN font-BwN--bolder font-12">
                Document Library
              </span>
            </button>

            <Link
              to="/document-library/add-new-item"
              className="relative flex library-btn p-3 border-50 bg-blue-800  rounded-md font-12 mx-1 mr-10 "
            >
              <SVG className="h-4" src={"/assets/svg/add-empolyee.svg"}></SVG>
              <span className="text-white mx-2"> Add new Item</span>
            </Link>
          </div>
        </div>
        {/* breadcrum */}
        <br />
        <br />

        <div className=" p-2 directory-main-content">
          {innerContent==='list'&&(
            <div 
            className="w-full  bg-white mt-5 p-8 rounded-md directory-main-content-inner"
            >
            <div className="flex justify-center">
              <div
                className="flex flex-col justify-between p-3"
                style={{ width: "100%" }}
              >
                <div className="flex justify-between">
                  <button
                    className={`${
                      tabs === "kn"
                        ? "w-full border-b border-blue-800 py-1 px-4 font-14 text-blue-800"
                        : "w-full py-1 px-4 font-14 text-gray-400"
                    }`}
                    onClick={() => setTabs("kn")}
                  >
                    Knowledge base
                  </button>
                  <button
                    className={`${
                      tabs === "ln"
                        ? "w-full border-b border-blue-800 py-1 px-4 font-14 text-blue-800"
                        : "w-full py-1 px-4 font-14 text-gray-400"
                    }`}
                    onClick={() => setTabs("ln")}
                  >
                    Learning
                  </button>
                </div>

                <div className="w-fill flex bg-gray-100 rounded-md my-5">
                  <input
                    className="p-3 font-BwN font-12 bg-gray-100 rounded-sm outline-none"
                    type="text"
                    placeholder="Search Document Library"
                    style={{ width: "100%" }}
                  />
                  <button>
                    <SVG
                      className="h-5 m-2"
                      src={"/assets/svg/search.svg"}
                    ></SVG>
                  </button>
                </div>

                {tabs === "kn" &&
                  lists.map((list, index) => (
                    <Link
                      to={`/document-library/${index}`}
                      className="flex justify-between border border-gray-200 cursor-pointer p-3 my-2 rounded-sm"
                      onClick={toggleDirectoryModal}
                    >
                      <div className="flex">
                        <div className="flex flex-col py-2 mx-1 cursor-pointer"
                        onClick={()=>setInnerContent('blog-base')}
                        >
                          <b className=" font-BwN font-BwN--bold font-12 cursor-pointer">
                            Safety in the Office
                          </b>
                          <span className="font-BwN font-BwN--lighter font-10">
                            3 articles
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                {tabs === "ln" &&
                  lists.map((list, index) => (
                    <Link
                      to={`/document-library/${index}`}
                      className="flex justify-between border border-gray-200 cursor-pointer p-3 my-2 rounded-sm"
                      onClick={toggleDirectoryModal}
                    >
                      <div className="flex">
                        <div className="flex flex-col py-2 mx-1">
                          <b className=" font-BwN font-BwN--bold font-12 cursor-pointer">
                            Learning in the Office
                          </b>
                          <span className="font-BwN font-BwN--lighter font-10">
                            4 articles
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>

              {/*  */}
            </div>

            {/* search input */}

            {/* search input */}
          </div>
          )}
          {/* end of list content */}
          
          {innerContent==='blog-base'&&(
            <div>
              hey
            </div>
          )}
        </div>
      </Layout>
    </>
  );
}
