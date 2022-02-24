import { useEffect } from "react";
import SVG from "react-inlinesvg";
import Link from "../link";

export default function SinglePost({ post }) {
  const { name, color, isAdmin, role, image, postImage, text, poll } = post;
  console.log(post);
  // useEffect(() => {
  //   if (poll) {
  //     console.log(poll.forEach((i) => console.log(i)))
  //   }
  // }, [])
  return (
    <Link
      to={`posts/${name}`}
      className={`w-single-post bg-white  my-5 cursor-pointer  `}
    >
      <section className="flex justify-between">
        <div className="flex my-2 cursor-pointer img-flex">
          <img
            className="cursor-pointer rounded-full m-1"
            src={image}
            alt="Olasukanmi"
          />

          <div className="flex flex-col mx-1">
            <span>
              <b className="text-blue-500 font-BwN font-BwN--bold font-12 cursor-pointer">
                {name}{" "}
              </b>
              <small
                className="bg-blue-700 text-white text-thin px-1 text-center
             rounded-tl-md rounded-tr-md rounded-br-md"
              >
                Admin
              </small>
            </span>
            <span className="font-BwN font-BwN--lighter text-gray-500 font-10">
              {role}
            </span>
          </div>
        </div>
        <span className="text-gray-500 font-12">12:20pm</span>
      </section>
      <section className="px-4">
        {postImage !== null ? (
          <img className="my-2 rounded" src={postImage} alt="emoji" />
        ) : null}

        <p className="w-10/12 font-BwN font-12">{text ? text : ""}</p>
        <div
          className="w-50 flex flex-col justify-items-start my-2 poll-btn-group"
          style={{ justifyContent: "start !important" }}
        >
          {poll ? (
            <>
              <button className="flex justify-start bg-gray-100 border border-blue-200 my-2 p-3 font-BwN font-13 px-4 rounded focus:bg-blue-800 focus:text-white fifa-btn">
                <span>1.</span>{" "}
                <span className="mx-1">
                  FIFA 2021, PES 2020 and Need for Speed
                </span>
              </button>
              <button className="flex justify-start bg-gray-100 border border-blue-200 my-2 p-3 font-BwN font-13 px-4 rounded focus:bg-blue-800 focus:text-white">
                <span>2.</span>
                <span className="mx-1">Scrabble, WHOT, and beer pong</span>
              </button>
              <button className="flex justify-start bg-gray-100 border border-blue-200 my-2 p-3 font-BwN font-13 px-4 rounded focus:bg-blue-800 focus:text-white">
                <span>3.</span>
                <span className="mx-1">Truth or Dare</span>
              </button>
              <button className="flex justify-between partial-bg border border-blue-200 my-2 p-3 font-BwN font-13 px-4 rounded focus:bg-blue-800 focus:text-white">
                <span>
                  <span>4.</span>
                  <span className="mx-1"> Monopoly</span>
                </span>
                <span className="flex ">
                  80% <i className="fa fa-user"></i>
                  <SVG className="h-4 ml-2" src={"/assets/svg/check.svg"}></SVG>
                </span>
              </button>
            </>
          ) : (
            ""
          )}
        </div>
      </section>
      <section className="flex px-4 justify-between" style={{ width: "55%" }}>
        <div className="flex">
          <div className="flex font-BwN font-10 ">
            <SVG className="h-4 " src={"/assets/svg/replies.svg"}></SVG>
            <span className="mx-1">45 repiles</span>
          </div>
          <div className="flex font-BwN font-10 mx-2">
            <SVG className="h-4 " src={"/assets/svg/likes.svg"}></SVG>
            <span className="mx-1">3 likes</span>
          </div>
        </div>
        {poll ? (
          <div className="flex font-BwN font-10 mx-2 ">
            <img className="h-4 " src={"/assets/svg/clock-16.png"} />
            <span className="mx-1">2 h 30m left</span>
          </div>
        ) : (
          <div className="flex font-BwN font-10 mx-2 ">
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
            <span className="mx-1 text-blue-800 mb-1">completed</span>
          </div>
        )}
      </section>
    </Link>
  );
}
