import { useState } from "react";
import SVG from "react-inlinesvg";

export default function InviteVistorModal() {
  const [msg,setMsg]=useState('one');
  return (
    <>
      <div className="w-invitation-modal bg-white ">
        <div className="flex justify-between">
          <div
            className="flex flex-col"
            style={{ width: "300px", height: "120px" }}
          >
            {msg==='one'&&(
              <div className="flex flex-col m-3 ">
              <label class="input mb-5">
                <input class="input__field" type="text" placeholder=" " />
                <span class="input__label font-BwN">Reason</span>
              </label>
              <button className="relative text-center p-3 mt-10  bg-blue-800 text-white rounded-sm font-13 mx-1 mr-0"
              onClick={()=>setMsg('two')}
              >
                Alright, thank you!
              </button>
            </div>
            )}
            {msg==='two'&&(
              <div className="flex flex-col m-3 justify-center">
              <SVG className="h-4 bg-red-200 p-2 rounded-full m-auto" style={{width:'40px',height:'40px'}} src={"/assets/svg/triangle.svg"}></SVG>
              <strong className='text-center'>Emergency notification sent</strong>
              <p className='text-gray-500 text-center'>Check your notifications for update on who has replied</p>
              <button className="relative text-center p-3 mt-10  bg-blue-800 text-white rounded-sm font-13 mx-1 mr-0"
              onClick={()=>setMsg('two')}
              >
                Alright, thank you!
              </button>
            </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
