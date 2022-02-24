import SVG from 'react-inlinesvg'

export default function NotificationModal({
  showmodal,
  modalHandler,
  width,
  title,
}) {
  return (
    <div className={`modal  ${showmodal ? 'modal--active ' : ''}`}>
      <div className="middle pb-0 no-paddding-bottom">
        <div
          className="modal--content pb-0 top-64"
          style={{ width: width ? width : 'auto' }}
        >
          {/*  */}

          <h2 className="absolute top-1  m-5 font-BwN--bold">{title}</h2>
          <button className="modal--close m-2 mb-0 p-2" onClick={modalHandler}>
            <span className="font-BwN font-10 mx-2">Close</span>
            <SVG src="/svg/close.svg"></SVG>
          </button>

          <div className="w-full flex flex-col p-3">
            <button className="bg-green-500 text-white p-3 rounded-sm">
              <div class="flex justify-between items-center ">
                <span>I’ll pick it up at the front desk</span>
                <label for="radio1" class="flex  items-center cursor-pointer">
                  <span class="w-4 h-4 inline-block mr-1 rounded-full border border-grey mx-3"></span>
                  <input id="radio1" type="radio" name="radio" class="hidden" />
                </label>
              </div>
            </button>
            <button className="border border-gray-500 text-dark p-3 rounded-sm my-3">
              <div class="flex justify-between items-center ">
                <span>Please deliver to my office</span>
                <label for="radio1" class="flex items-center cursor-pointer">
                  <span class="w-4 h-4 inline-block mr-1 rounded-full border border-gray-500 mx-3"></span>
                  <input id="radio1" type="radio" name="radio" class="hidden" />
                </label>
              </div>
            </button>
            <button className="bg-blue-800 text-white p-3 rounded-sm mt-5">
              Submit Response
            </button>
          </div>

          {/*  */}
        </div>
      </div>
    </div>
  )
}
