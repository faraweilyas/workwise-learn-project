import {useState} from 'react'
import Layout from "@/components/layout/layout";
import Link from "@/components/link";
import { useRouter } from "next/router";
import SVG from "react-inlinesvg";

export default function AddNewItem({}) {
  const router = useRouter();
  const [count,setCount]=useState([1]);
  const increaseCount=()=>{
    const value=count.length+1
    setCount([...count,value]);
    console.log(value,count)
  }
  return (
    <Layout title="Knowlegbe Base">
      <div
        id="breadcrum"
        className="breacurm flex justify-between fixed z-10  p-4 mt-14  bg-white  shadow-sm"
      >
        <div className="inner-breadcrum">
          <button
            className="flex outline-none m-3"
            onClick={() => router.back()}
          >
            <SVG className="h-4" src={"/assets/svg/arrow-left.svg"}></SVG>
            <span className="text-gray-700 font-BwN font-BwN--bolder font-12">
              Add New Item
            </span>
          </button>

          <Link
            to="/document-library/add-new-item"
            className="relative flex p-3 border-50 bg-blue-800  rounded-md font-12 mx-1 mr-10 "
         >
            <SVG className="h-4" src={"/assets/svg/add-empolyee.svg"}></SVG>
            <span className="text-white mx-2"> Add new Item</span>
          </Link>
        </div>
      </div>

      <br />
      <br />

      <div className="directory-main-content p-2 mt-20">
        <div className="w-full flex flex-col bg-white p-3 px-14 rounded-md pb-20 ">
          <span className="font-BwN font-BwN--lighter text-space mt-20 font-10">
            CATEGORY
          </span>

          <div className="flex my-5">
            <div className="my-3">
              <label class="input">
                <input class="input__field" type="text" placeholder=" " />
                <span class="input__label font-BwN">
                  Type of Document Library
                </span>
              </label>
            </div>
            <div className="m-3">
              <label class="input">
                <input class="input__field" type="text" placeholder=" " />
                <span class="input__label font-BwN">Title</span>
              </label>
            </div>
          </div>

          <span className="font-BwN font-BwN--lighter text-space mt-5 font-10">
            UPLOAD ARTICLE
          </span>

          

          {count.map(()=>(
            <>
              <div className="flex my-5">
            <div className="my-3">
              <label class="input">
                <input class="input__field" type="text" placeholder=" " />
                <span class="input__label font-BwN">Title of Article</span>
              </label>
            </div>
          </div>

          <div className="my-3 relative">
            <label class="input">
              <input
                class="input__field"
                type="text"
                placeholder=" "
                style={{ height: "300px" }}
              />
              <span class="input__label font-BwN">Body Text</span>
            </label>
            <button class="border border-blue-800 font-smaller text-blue-800 py-1 px-4 rounded-full absolute top-30"
            style={{top:'240px',left:'590px'}}
            >
              <div className='flex'>
              <SVG className="h-4 my-2" src={"/assets/svg/attachment.svg"}></SVG>
              <small className='mt-2 ml-1'>Attach Media</small>
              </div>
            </button>
          </div>
            </>
          ))}

          <button className="w-6/12 flex font-BwN font-BwN--lighter text-space mt-5 font-10"
          onClick={()=>increaseCount()}
          >
            <SVG className="h-4 my-2" src={"/assets/svg/plus-icon.svg"}></SVG>

            <span className="text-black m-2">Add article now</span>
          </button>

          <div className="flex flex-row justify-center my-3">
            <button className="relative text-center px-20 py-3 border bg-blue-400 text-white rounded-sm font-13 mx-1 my-2 mr-0">
              Save and finish
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
