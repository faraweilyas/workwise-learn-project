import SVG from 'react-inlinesvg'

export default function PollModal({ showmodal, modalHandler, width, title }) {
  return (
    <div className={`modal  ${showmodal ? 'modal--active ' : ''}`}>
      <div className="middle">
        <div
          className="modal--content"
          style={{ width: width ? width : 'auto' }}
        >
          {/*  */}

          <h2 className="absolute top-1  m-5 font-BwN--bold">{title}</h2>
          <button className="modal--close m-5 mb-0 p-2" onClick={modalHandler}>
            <span className="font-BwN mx-2">Close</span>
            <SVG src="/svg/close.svg"></SVG>
          </button>

          <div className="w-full p-5 flex flex-col  justify-between">
            <div className="w-newpost bg-white">
              <div className="flex flex-col border border-gray-200 p-5 rounded-md">
                <div className="flex flex-col border border-gray-200 p-5 rounded-md">
                  <p className="font-BwN text-gray-300">Create a new poll</p>

                  <div className="w-full flex flex-col">
                    <div className="flex">
                      <button
                        className="bg-white text-left border border-blue-200 my-2 p-3 font-BwN font-13 px-4 rounded "
                        style={{ width: '50%' }}
                      >
                        <span className="mx-2">1.</span>
                        <span className="text-gray-500"> Option 1</span>
                      </button>

                      <span className="m-4">
                        {' '}
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 12.95L16.95 8L18.364 9.414L13.414 14.364L18.364 19.314L16.95 20.728L12 15.778L7.04999 20.728L5.63599 19.314L10.586 14.364L5.63599 9.414L7.04999 8L12 12.95Z"
                            fill="#BDBDBD"
                          />
                        </svg>
                      </span>
                    </div>

                    <div className="flex">
                      <button
                        className="bg-white text-left border border-blue-200 my-2 p-3 font-BwN font-13 px-4 rounded "
                        style={{ width: '50%' }}
                      >
                        <span className="mx-2">2.</span>
                        <span className="text-gray-500"> Option 2</span>
                      </button>

                      <span className="m-4">
                        {' '}
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 12.95L16.95 8L18.364 9.414L13.414 14.364L18.364 19.314L16.95 20.728L12 15.778L7.04999 20.728L5.63599 19.314L10.586 14.364L5.63599 9.414L7.04999 8L12 12.95Z"
                            fill="#BDBDBD"
                          />
                        </svg>
                      </span>
                    </div>

                    <div className="flex">
                      <button
                        className="bg-white text-left border border-blue-200 my-2 p-3 font-BwN font-13 px-4 rounded "
                        style={{ width: '50%' }}
                      >
                        <span className="mx-2">3.</span>
                        <span className="text-gray-500"> Option 3</span>
                      </button>

                      <span className="m-4">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.9998 13.3642L20.0002 13.3642L20.0002 15.3639L12.9998 15.3639V22.3642H11.0002V15.3639L3.99979 15.3639L3.99979 13.3642L11.0002 13.3642L11.0002 6.3638H12.9998L12.9998 13.3642Z"
                            fill="#0A459F"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col my-2">
                    <p className="font-BwN font-BwN--light"> Poll duration: </p>

                    <a
                      href="/"
                      className="font-BwN font-BwN--light text-blue-800 underline"
                    >
                      Select duration
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*  */}
        </div>
      </div>
    </div>
  )
}
