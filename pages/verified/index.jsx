import Layout from "@/components/layout/layout";
import NewPost from "@/components/modals/NewPost";
import Comments from "@/components/posts/Comments";
import SinglePost from "@/components/posts/SinglePost";
import { useState } from "react";

export default function Home() {
  return (
    <>
      <div
        className="w-full flex flex-col justify-center items-center"
        style={{ marginTop: "15%" }}
      >
        <div className="flex border border-blue-800 rounded-full p-6 bg-blue-100">
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
        </div>
        <h2 className='text-blue-600 mt-5 font-bold' style={{fontSize:'1.3em'}}>Code verified</h2>
        <small className='text-gray-600 mt-1'>Signing you in...</small>
      </div>
    </>
  );
}
