import SVG from "react-inlinesvg";

export default function DirectoryModal({
  showmodal,
  modalHandler,
  width,
  title,
}) {
  return (
    <div className={`modal  ${showmodal ? "modal--active " : ""}`}>
      <div
        className="middle pb-0"
        style={{ paddingBottom: "0px !important", overflowY: "hidden" }}
      >
        <div
          className="modal--content pb-0 no-paddding-bottom"
          style={{ width: "300px",height:'210px' }}
        >
          <div className=" relative  flex justify-between  p-1 m-2 ">
            <small className="font-bold mt-3">Set poll length</small>
            <button
              className="absolute top-0 right-0 modal--close m-2 mb-0 p-2"
              onClick={modalHandler}
            >
              <span className="font-BwN font-12 mx-2">Close</span>
              <SVG src="/svg/close.svg"></SVG>
            </button>
          </div>
          <div className='flex justify-between'>
            <div className='flex flex-col p-1'>
                <small className='font-bold p-3'>Days</small>
                <p className='pt-3 pb-3 pl-4 ml-1 text-gray-400'>0</p>
                <p className='pt-3 pb-3 pl-4 ml-1 border-t-2 border-b-2 border-blue-800'>1</p>
                <p className='pt-3 pb-3 pl-4 ml-1 text-gray-400'>2</p>
            </div>
            <div className='flex flex-col p-1'>
                <small className='font-bold p-3'>Hours</small>
                <p className='pt-3 pb-3 pl-4 ml-1 text-gray-400'>23</p>
                <p className='pt-3 pb-3 pl-4 ml-1 border-t-2 border-b-2 border-blue-800'>0</p>
                <p className='pt-3 pb-3 pl-4 ml-1 text-gray-400'>1</p>
            </div>
            <div className='flex flex-col p-1 '>
                <small className='font-bold p-3'>Min</small>
                <p className='pt-3 pb-3 pl-4 ml-1 text-gray-400'>59</p>
                <p className='pt-3 pb-3 pl-4 ml-1 border-t-2 border-b-2 border-blue-800'>0</p>
                <p className='pt-3 pb-3 pl-4 ml-1 text-gray-400'>1</p>
            </div>
          </div>

          <div className="w-full flex justify-end p-3">
              <span className='text-blue-800 p-2'>close</span>
              <span className='text-blue-800 p-2'>set</span>
          </div>

          {/*  */}
        </div>
      </div>
    </div>
  );
}
