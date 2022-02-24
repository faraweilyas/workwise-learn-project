import SVG from 'react-inlinesvg'

export default function DirectoryModal({
  showmodal,
  modalHandler,
  width,
  title,
}) {
  return (
    <div className={`modal  ${showmodal ? 'modal--active ' : ''}`}>
      <div className="middle pb-0" style={{ paddingBottom: '0px !important' }}>
        <div
          className="modal--content pb-0 no-paddding-bottom"
          style={{ width: width ? width : 'auto' }}
        >
          {/*  */}

          {/* <h2 className="absolute top-1  m-5 font-BwN--bold">{title}</h2>
          <button className="modal--close m-5 mb-0 p-2" onClick={modalHandler}>
            <span className="font-BwN mx-2">Close</span>
            <SVG src="/svg/close.svg"></SVG>
          </button> */}

          <div className="w-full relative h-36 flex justify-center bg-green-200 p-2 py-28">
            <button
              className="absolute top-0 right-0 modal--close m-5 mb-0 p-2"
              onClick={modalHandler}
            >
              <span className="font-BwN font-12 mx-2">Close</span>
              <SVG src="/svg/close.svg"></SVG>
            </button>
            <h2 className="font-BwN font-BwN--bolf text-4xl">BK</h2>
          </div>

          <div className="w-full flex flex-col p-3">
            <div className="flex flex-col my-2">
              <h2 className="font-BwN font-BwN--bolder px-3 text-2xl">
                Beyonce Knowles
              </h2>
              <p className="font-BwN font-12 px-3">Design</p>
            </div>
            <div className="flex flex-col my-2">
              <p className="font-BwN font-BwN--light px-3 text-gray-500 font-14">
                Phone number
              </p>
              <p className="flex font-BwN font-13 px-3">
                0818-565-8795
                <span className="mx-2 px-3">
                  <SVG className="h-4" src={'/assets/svg/edit-field.svg'}></SVG>
                </span>
              </p>
            </div>
            <div className="flex flex-col my-2">
              <p className="font-BwN px-3 font-BwN--light text-gray-500 font-14">
                Email address
              </p>
              <p className="flex font-BwN px-3 font-13">
                beyonce.knowles@ahsk.com
                <span className="mx-2">
                  <SVG className="h-4" src={'/assets/svg/edit-field.svg'}></SVG>
                </span>
              </p>
            </div>
            <div className="flex flex-col my-2">
              <button className="relative text-center p-4 py-5 bg-blue-800 text-white rounded-sm font-13 mx-1 mr-0">
                Edit details
              </button>
              <button className="relative text-center p-4 py-5 border border-red-500 text-red-500 rounded-sm font-13 mx-1 my-2 mr-0">
                Remove employee
              </button>
            </div>
          </div>

          {/*  */}
        </div>
      </div>
    </div>
  )
}
