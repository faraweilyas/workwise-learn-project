import SVG from 'react-inlinesvg'

export default function AddEmployee({ showmodal, modalHandler, width, title }) {
  return (
    <div className={`modal   ${showmodal ? 'modal--active ' : ''}`}>
      <div className="middle p-0">
        <div
          className="modal--content pb-0"
          style={{ width: width ? width : 'auto',height:'75vh' }}
        >
          {/*  */}

          <h2 className="absolute top-1  m-5 font-BwN--bold">{title}</h2>
          <button className="modal--close m-2 mb-0 p-2" onClick={modalHandler}>
            <span className="font-BwN font-10 mx-2">Close</span>
            <SVG src="/svg/close.svg"></SVG>
          </button>

          <div className="w-full flex flex-col py-10 px-24">
            <span className="font-BwN text-space font-BwN--light font-10 my-2">
              ADD NEW EMPLOYEE
            </span>
            <div className="my-3">
              <label class="input">
                <input class="input__field" type="text" placeholder=" " />
                <span class="input__label font-BwN">Name of Employee</span>
              </label>
            </div>
            <div className="my-3">
              <label class="input">
                <input class="input__field" type="text" placeholder=" " />
                <span class="input__label font-BwN">Department</span>
              </label>
            </div>
            <div className="my-3">
              <label class="input">
                <input class="input__field" type="text" placeholder=" " />
                <span class="input__label font-BwN">Employee</span>
              </label>
            </div>
            <div className="my-3">
              <label class="input">
                <input class="input__field" type="text" placeholder=" " />
                <span class="input__label font-BwN">Email address</span>
              </label>
            </div>
            <div className="my-3">
              <label class="input">
                <input class="input__field" type="text" placeholder=" " />
                <span class="input__label font-BwN">Phone Number</span>
              </label>
            </div>
            <div className="flex flex-col my-3">
              <button className="relative text-center p-3 py-5 bg-blue-200 text-white rounded-sm font-13 mx-1 mr-0">
                Add new employee
              </button>
            </div>
          </div>

          {/*  */}
        </div>
      </div>
    </div>
  )
}
