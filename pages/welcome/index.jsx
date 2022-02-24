import Layout from "@/components/layout/layout";
import NewPost from "@/components/modals/NewPost";
import Comments from "@/components/posts/Comments";
import SinglePost from "@/components/posts/SinglePost";
import { useState } from "react";
import SVG from 'react-inlinesvg'

export default function Home() {
  return (
    <>
    <SVG
          className="h-8 mt-10 ml-20 cursor-pointer ham-burgur"
          src={'/assets/svg/w-logo.svg'}
        ></SVG>
      <div className="w-9/12 flex p-2 ml-auto mr-auto justify-between " style={{marginTop:'6%'}}>
        <div className="w-4/12  justify-between">
            <div className='flex'>
                <div className='w-20 h-1 bg-blue-800'></div>
                <div className='w-20 h-1 bg-gray-300'></div>
            </div>
          <h3 className="text-blue-800  mt-5" style={{fontSize:'1.7em'}}>Welcome Back!</h3>
          <p className="text-gray-700 mt-5">
            Enter your workwise company url and your company email to gain
            success
          </p>
        </div>
        <div className="w-6/12 border border-2 border-blue-500 rounded-lg p-10" style={{height:'50vh'}}>
          <div className="flex items-center">
            <div className="m-3 ">
              <label class="input">
                <input class="input__field" style={{height:'8vh'}} type="text" placeholder=" " />
                <span class="input__label font-BwN">Full Name</span>
              </label>
            </div>
            <p>.workwise.com</p>
          </div>
          <div className="m-3 ">
            <label class="input">
              <input class="input__field" style={{height:'8vh'}} type="text" placeholder=" " />
              <span class="input__label font-BwN">Full Name</span>
            </label>
          </div>
          <button className="w-full relative text-center p-3 m-3 rounded-lg  bg-blue-800 text-white rounded-sm font-13 mx-1 mr-0" style={{height:'8vh'}}>
            Get secure verification code
          </button>
        </div>
      </div>
    </>
  );
}
