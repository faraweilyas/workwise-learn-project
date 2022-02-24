import { useState } from "react";
import Layout from "@/components/layout/layout";
import SVG from "react-inlinesvg";
import { useRouter } from "next/router";

export default function Profile({}) {
  const router = useRouter();

  const [tabs, setTabs] = useState("my-account");

  return (
    <Layout title="Profile">
      {/* breadcrum */}
      <div
        id="breadcrum"
        className="breacurm flex justify-between fixed  z-1  p-4 mt-14  bg-white  shadow-sm"
      >
        <div className="breadcrum-inner">
          <button
            className="flex outline-none m-3"
            onClick={() => router.back()}
          >
            <SVG className="h-4" src={"/assets/svg/arrow-left.svg"}></SVG>
            <span className="text-gray-700 font-BwN font-BwN--bolder font-12">
              Settings
            </span>
          </button>
        </div>
      </div>
      {/* breadcrum */}
      <br />
      <br />
      {/*  */}
      <div className="flex justify-center  my-5">
        <div className="flex bg-white p-2 justify-center mt-20 rounded-sm">
          <button
            className={`font-BwN p-4 px-10  rounded-md cursor-pointer ${
              tabs === "my-account"
                ? "bg-blue-800 text-white transition-all ease-in-out"
                : "bg-white text-black"
            }`}
            onClick={() => setTabs("my-account")}
          >
            My Account
          </button>
          <button
            className={`font-BwN p-4 px-10  rounded-md cursor-pointer ${
              tabs === "admin-settings"
                ? "bg-blue-800 text-white transition-all ease-in-out"
                : "bg-white text-black"
            }`}
            onClick={() => setTabs("admin-settings")}
          >
            Admin Settings
          </button>
        </div>
      </div>

      <div
        className="view-table p-2"
        style={{ marginTop: "-2%", width: "79%", marginLeft: "9%" }}
      >
        {tabs === "my-account" && (
          <div className="w-full relative flex flex-col bg-white my-5 rounded-md pb-10">
            <img src="/assets/images/profile-image.png" alt="" />
            <div className="profile-container">
              <img
                className="absolute top-20 left-10"
                style={{ width: "200px" }}
                src="/assets/images/person.png"
                alt="person"
              />
            </div>

            <div className="w-full relative flex mt-20  p-10 rounded-md">
              <div className="relative top-10 flex flex-col ">
                <span className="font-BwN font-12">ACCOUNT INFORMATION</span>
              </div>
            </div>

            {/*  */}
            <div className="relative flex mx-10 edit-controls">
              <div className="my-3">
                <label class="input">
                  <input class="input__field" type="text" placeholder=" " />
                  <span class="input__label font-BwN">Full Name</span>
                </label>
              </div>
              <div className="my-3 mx-3 sub-control">
                <label class="input">
                  <input class="input__field" type="text" placeholder=" " />
                  <span class="input__label font-BwN">Department</span>
                </label>
              </div>
            </div>
            <div className="relative flex mx-10 edit-controls">
              <div className="my-3">
                <label class="input">
                  <input class="input__field" type="text" placeholder=" " />
                  <span class="input__label font-BwN">Phone Number</span>
                </label>
              </div>
              <div className="my-3 mx-3 sub-control">
                <label class="input">
                  <input class="input__field" type="text" placeholder=" " />
                  <span class="input__label font-BwN">Email Address</span>
                </label>
              </div>
            </div>
            <div className="w-full relative flex  p-10 rounded-md">
              <div className="relative top-0 flex flex-col ">
                <span className="font-BwN font-12">CHANGE YOUR PASSWORD</span>
              </div>
            </div>
            <div className="relative flex mx-10 ">
              <div className="my-3">
                <label class="input">
                  <input class="input__field" type="text" placeholder=" " />
                  <span class="input__label font-BwN">Current Password</span>
                </label>
              </div>
            </div>
            <div className="relative flex mx-10 edit-controls">
              <div className="my-3">
                <label class="input">
                  <input class="input__field" type="text" placeholder=" " />
                  <span class="input__label font-BwN">New Password</span>
                </label>
              </div>
              <div className="my-3 mx-3 sub-control">
                <label class="input">
                  <input class="input__field" type="text" placeholder=" " />
                  <span class="input__label font-BwN">Repeat New Password</span>
                </label>
              </div>
            </div>
            <div className="w-2/6 relative flex mx-10 my-5">
              <button className="w-full text-center p-3 py-5 bg-blue-800 text-white rounded-sm font-13  mr-0">
                Save new changes
              </button>
            </div>
            {/*  */}
          </div>
        )}

        {tabs === "admin-settings" && (
          <div className="w-full relative flex flex-col py-10 px-10 bg-white my-5 rounded-md">
            <span className="text-space font-BwN font-BwN--bold font-14">
              General Settings
            </span>
            <span className="text-space font-BwN font-BwN--ligther font-10 mt-10">
              OPENING AND CLOSING TIMES
            </span>

            <div className="flex edit-controls">
              <div className=" my-5">
                <label class="input">
                  <input class="input__field" type="text" placeholder=" " />
                  <span class="input__label font-BwN">Office opens</span>
                </label>
              </div>

              <div className=" my-5 mx-3 sub-control">
                <label class="input">
                  <input class="input__field" type="text" placeholder=" " />
                  <span class="input__label font-BwN">Office closes</span>
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
              <div className=" my-5">
                <label class="input">
                  <input class="input__field" type="text" placeholder=" " />
                  <span class="input__label font-BwN">Status</span>
                </label>
              </div>
            </div>

            <span className="text-space font-BwN font-BwN--ligther font-10 mt-2">
              SET SAFETY GUIDELINES
            </span>

            <div className=" flex flex-col" style={{ width: "60%" }}>
              <div className="my-5">
                <label class="input">
                  <input class="input__field" type="text" placeholder=" " />
                  <span class="input__label font-BwN">Safety Guidelines</span>
                </label>
              </div>
              <div className="my-2">
                <label class="input">
                  <input class="input__field" type="text" placeholder=" " />
                  <span class="input__label font-BwN">Safety Guidelines</span>
                </label>
              </div>
              <div className="flex">
                <SVG className="h-4 m-2" src={"/assets/svg/plus-2.svg"}></SVG>
                <p className='text-gray-400 mt-1'>Add new guidlines</p>
              </div>

              <span className="text-space font-BwN font-BwN--ligther font-10 mt-2">
                BADGE PRINTING
              </span>

              <div className="flex edit-controls">
                <div className=" my-5 ">
                  <label class="input">
                    <input class="input__field" type="text" placeholder=" " />
                    <span class="input__label font-BwN">Default Password</span>
                  </label>
                </div>

                <div className=" my-5 mx-3 sub-control">
                  <label class="input">
                    <input class="input__field" type="text" placeholder=" " />
                    <span class="input__label font-BwN">
                      Select WiFi Status
                    </span>
                  </label>
                </div>
              </div>

              <div className="flex edit-controls">
                <div className=" my-5">
                  <label class="input">
                    <input class="input__field" type="text" placeholder=" " />
                    <span class="input__label font-BwN"></span>
                  </label>
                </div>

                <div className="sub-control my-5 mx-3">
                  <label class="input">
                    <input class="input__field" type="text" placeholder=" " />
                    <span class="input__label font-BwN">Add locations</span>
                  </label>
                </div>
              </div>

              <span className=" text-space font-BwN font-BwN--ligther font-10 mt-2">
                UPLOAD NDA DOCUMENT
              </span>

              <div className="upload-btn flex relative bg-blue-200 border border-blue-800 border-dashed p-3 my-3 rounded-sm">
                <SVG
                  className="h-4 m-1"
                  src={"/assets/svg/upload-icon.svg"}
                ></SVG>

                <span className="text-blue-800">
                  Click here to upload your NDA.
                </span>
                <input
                  type="file"
                  className="w-full absolute top-0 left-0  h-10 -z-10 hidden"
                />
              </div>

              <button className="save-btn  relative bg-blue-200 text-white text-center p-3 my-3 rounded-sm">
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
              <div className=" my-5">
                <label class="input">
                  <input class="input__field" type="text" placeholder=" " />
                  <span class="input__label font-BwN">Set radius</span>
                </label>
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

            <button className="save-btn  relative bg-blue-200 text-white text-center p-3 my-3 rounded-sm">
              Save new changes
            </button>
          </div>
        )}
      </div>
    </Layout>
  );
}
