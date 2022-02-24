import SVG from 'react-inlinesvg'

export default function EditCompany({ showmodal, modalHandler, width, title }) {
  return (
    <div className={`modal  ${showmodal ? 'modal--active ' : ''}`}>
      <div className="middle pb-0">
        <div
          className="modal--content pb-0"
          style={{ width: width ? width : 'auto',height:'350px' }}
        >
          <h2 className="absolute top-1  m-5 font-BwN--bold">{title}</h2>
          <button className="modal--close m-2 mb-0 p-2" onClick={modalHandler}>
            <span className="font-BwN font-10 mx-2">Close</span>
            <SVG src="/svg/close.svg"></SVG>
          </button>

          <div className="w-full flex  p-10">
            <div className="flex flex-col" style={{ width: '300px' }}>
              <span className="font-BwN text-space font-BwN--light font-10 my-2">
                EDIT COMPANY
              </span>
              <div className="my-3">
                <label class="input">
                  <input class="input__field" type="text" placeholder=" " />
                  <span class="input__label font-BwN">Company Name</span>
                </label>
              </div>
              <div className="my-3">
                <label class="input">
                  <input class="input__field" type="text" placeholder=" " />
                  <span class="input__label font-BwN">Status</span>
                </label>
              </div>
              <div className="my-3">
                <label class="input">
                  <input class="input__field" type="text" placeholder=" " />
                  <span class="input__label font-BwN">Multitenant</span>
                </label>
              </div>

              <div className="flex flex-col my-3">
                <button className="relative text-center p-3 py-5 bg-blue-800 text-white rounded-sm font-13 mx-1 mr-0">
                  Save profile
                </button>
              </div>
            </div>
            <div className="relative top-11 mx-5">
              <div className="mt-15">
                <label class="input">
                  <input
                    class="input__field"
                    type="text"
                    placeholder=" "
                    style={{ width: '300px', height: '170px' }}
                  />
                  <span class="input__label font-BwN">Description</span>
                </label>
              </div>
            </div>
          </div>

          {/*  */}
        </div>
      </div>
    </div>
  )
}
