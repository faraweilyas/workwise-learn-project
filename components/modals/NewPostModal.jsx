import { useState } from "react";
import SVG from "react-inlinesvg";
import PollModal from "./PollModal";
import DirectoryModal from "@/components/modals/SetDuration";
export default function NewPost() {
  const [invitationModal, setInvitationModal] = useState(false);
  const [pollModal, setPollModal] = useState(false);
  const [modal, setModal] = useState("default");
  const [directory, setDirectory] = useState(false);
  const toggleDirectoryModal = () => {
    setDirectory(!directory);
    document.querySelector("body").classList.toggle("no-scroll");
  };
  return (
    <>
    <DirectoryModal
        showmodal={directory}
        modalHandler={toggleDirectoryModal}
        width="450px"
      />
      <div className="w-newpost bg-white" style={{height:`${modal==='default'?'120px':modal==='poll'?'340px':modal==='appreciate'?'240px':''}`}}>
        <div className="flex flex-col border border-gray-200 p-5 rounded-md">
          {modal === "default" && (
            <>
              <textarea
                name="new-post"
                className="w-full font-BwN font-12 text-gray-500 p-2 border border-gray-200  rounded-md outline-none"
                id=""
                rows="3"
                defaultValue="Create new post"
              ></textarea>

              <div className=" flex mt-5 justify-end create-btn-group ">
                <button className="flex p-3 border-50 bg-white border border-blue-800  rounded-md font-12 mx-1"
                onClick={()=>setModal('appreciate')}
                >
                  <SVG className="h-4 " src={"/assets/svg/thumbsup.svg"}></SVG>
                  <span className="text-blue-800 mx-2">
                    Appreciation/Inspiration
                  </span>
                </button>
                <button
                  className="flex px-2 py-3 border-50 bg-white border border-blue-800  rounded-md font-10 mx-1"
                  onClick={() => setModal("poll")}
                >
                  <SVG className="" src={"/assets/svg/poll.svg"}></SVG>
                  <span
                    className="text-blue-800 mx-1"
                    style={{ marginTop: "1px" }}
                  >
                    Start a poll
                  </span>
                </button>
                <button className="flex px-2 py-3 border-50 bg-white border border-blue-800  rounded-md font-10 mx-1">
                  <SVG className=" " src={"/assets/svg/attachment.svg"}></SVG>
                  <span
                    className="text-blue-800 mx-1"
                    style={{ marginTop: "1px" }}
                  >
                    Attach files
                  </span>
                </button>

                <button className="flex px-2 py-3 border-50 bg-blue-800  rounded-md font-10 mx-1 mr-0">
                  <SVG
                    className=" "
                    src={"/assets/svg/post.svg"}
                    style={{ marginTop: "3px" }}
                  ></SVG>
                  <span
                    className="text-white mx-1"
                    style={{ marginTop: "3px" }}
                  >
                    {" "}
                    Post to feed
                  </span>
                </button>
              </div>
            </>
          )}
          {/* end of default modal */}
          {modal === "poll" && (
            <>
              <div
                className="flex flex-col border border-gray-200 p-5 rounded-md"
                style={{ width: "600px" }}
              >
                <p className="font-BwN text-gray-300">Create a new poll</p>

                <div className="w-full flex flex-col">
                  <div className="flex">
                    <button
                      className="bg-white text-left border border-blue-200 my-2 p-3 font-BwN font-13 px-4 rounded "
                      style={{ width: "50%" }}
                    >
                      <span className="mx-2">1.</span>
                      <span className="text-gray-500"> Option 1</span>
                    </button>

                    <span className="m-4">
                      {" "}
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 12.95L16.95 8L18.364 9.414L13.414 14.364L18.364 19.314L16.95 20.728L12 15.778L7.04999 20.728L5.63599 19.314L10.586 14.364L5.63599 9.414L7.04999 8L12 12.95Z"
                          fill="#BDBDBD"
                        />
                      </svg>
                    </span>
                  </div>

                  <div className="flex">
                    <button
                      className="bg-white text-left border border-blue-200 my-2 p-3 font-BwN font-13 px-4 rounded "
                      style={{ width: "50%" }}
                    >
                      <span className="mx-2">2.</span>
                      <span className="text-gray-500"> Option 2</span>
                    </button>

                    <span className="m-4">
                      {" "}
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 12.95L16.95 8L18.364 9.414L13.414 14.364L18.364 19.314L16.95 20.728L12 15.778L7.04999 20.728L5.63599 19.314L10.586 14.364L5.63599 9.414L7.04999 8L12 12.95Z"
                          fill="#BDBDBD"
                        />
                      </svg>
                    </span>
                  </div>

                  <div className="flex">
                    <button
                      className="bg-white text-left border border-blue-200 my-2 p-3 font-BwN font-13 px-4 rounded "
                      style={{ width: "50%" }}
                    >
                      <span className="mx-2">3.</span>
                      <span className="text-gray-500"> Option 3</span>
                    </button>

                    <span className="m-4">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.9998 13.3642L20.0002 13.3642L20.0002 15.3639L12.9998 15.3639V22.3642H11.0002V15.3639L3.99979 15.3639L3.99979 13.3642L11.0002 13.3642L11.0002 6.3638H12.9998L12.9998 13.3642Z"
                          fill="#0A459F"
                        />
                      </svg>
                    </span>
                  </div>
                </div>

                <div className=" my-2">
                  <p className="font-BwN font-BwN--light"> Poll duration: </p>

                  <button
                    onClick={toggleDirectoryModal}
                    className="font-BwN font-BwN--light text-blue-800 underline"

                  >
                    Select duration
                  </button>
                </div>
              </div>
              <div className=" flex mt-5 justify-end create-btn-group ">
                <button className="flex p-3 border-50 bg-white border border-blue-800  rounded-md font-12 mx-1"
                onClick={()=>setModal('appreciate')}
                >
                  <SVG className="h-4 " src={"/assets/svg/thumbsup.svg"}></SVG>
                  <span className="text-blue-800 mx-2">
                    Appreciation/Inspiration
                  </span>
                </button>
                <button
                  className="flex px-2 py-3 border-50 bg-white border border-blue-800  rounded-md font-10 mx-1"
                  onClick={() => setModal("poll")}
                >
                  <SVG className="" src={"/assets/svg/poll.svg"}></SVG>
                  <span
                    className="text-blue-800 mx-1"
                    style={{ marginTop: "1px" }}
                  >
                    Start a poll
                  </span>
                </button>
                <button className="flex px-2 py-3 border-50 bg-white border border-blue-800  rounded-md font-10 mx-1">
                  <SVG className=" " src={"/assets/svg/attachment.svg"}></SVG>
                  <span
                    className="text-blue-800 mx-1"
                    style={{ marginTop: "1px" }}
                  >
                    Attach files
                  </span>
                </button>

                <button className="flex px-2 py-3 border-50 bg-blue-800  rounded-md font-10 mx-1 mr-0">
                  <SVG
                    className=" "
                    src={"/assets/svg/post.svg"}
                    style={{ marginTop: "3px" }}
                  ></SVG>
                  <span
                    className="text-white mx-1"
                    style={{ marginTop: "3px" }}
                  >
                    {" "}
                    Post to feed
                  </span>
                </button>
              </div>
            </>
          )}
          {modal === "appreciate" && (
            <>
              <div
                className="flex flex-col border border-gray-200 p-5 rounded-md bg-yellow-50"
                style={{ width: "600px",height:'30vh' }}
              >
                

                <div className="w-full flex flex-col ">
                  <div className='bg-white w-20 h-20 p-5'></div>
                  <p className='pt-3 text-gray-400'>Write a congratulatory message</p>
                </div>
              </div>
              <div className=" flex mt-5 justify-end create-btn-group ">
                <div className='flex mt-3 justify-between'>
                  <i className='w-5 h-5 bg-gray-200 rounded-full border-blue-800 border'></i>
                  <i className='w-5 h-5 bg-green-200 rounded-full'></i>
                  <i className='w-5 h-5 bg-yellow-200 rounded-full'></i>
                  <i className='w-5 h-5 bg-red-200 rounded-full'></i>
                </div>
                <button className="flex p-3 border-50 bg-white border border-blue-800  rounded-md font-12 mx-1"
                onClick={()=>setModal('appreciate')}
                >
                  <SVG className="h-4 " src={"/assets/svg/thumbsup.svg"}></SVG>
                  <span className="text-blue-800 mx-2">
                    Appreciation/Inspiration
                  </span>
                </button>
                <button
                  className="flex px-2 py-3 border-50 bg-white border border-blue-800  rounded-md font-10 mx-1"
                  onClick={() => setModal("poll")}
                >
                  <SVG className="" src={"/assets/svg/poll.svg"}></SVG>
                  <span
                    className="text-blue-800 mx-1"
                    style={{ marginTop: "1px" }}
                  >
                    Start a poll
                  </span>
                </button>
                <button className="flex px-2 py-3 border-50 bg-white border border-blue-800  rounded-md font-10 mx-1">
                  <SVG className=" " src={"/assets/svg/attachment.svg"}></SVG>
                  <span
                    className="text-blue-800 mx-1"
                    style={{ marginTop: "1px" }}
                  >
                    Attach files
                  </span>
                </button>

                <button className="flex px-2 py-3 border-50 bg-blue-800  rounded-md font-10 mx-1 mr-0">
                  <SVG
                    className=" "
                    src={"/assets/svg/post.svg"}
                    style={{ marginTop: "3px" }}
                  ></SVG>
                  <span
                    className="text-white mx-1"
                    style={{ marginTop: "3px" }}
                  >
                    {" "}
                    Post to feed
                  </span>
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
