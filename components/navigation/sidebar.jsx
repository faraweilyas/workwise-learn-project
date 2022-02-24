import { useState } from 'react'
import Link from '../link'
import SVG from 'react-inlinesvg'
import Modal from '../modals/modal'
import NewPost from '../modals/NewPostModal'

export default function Sidebar({}) {
  const [createNew, setCreateNew] = useState(false)

  const toggleCreateNewModal = () => {
    setCreateNew(!createNew)
    document.querySelector('body').classList.toggle('no-scroll')
  }

  return (
    <>
      <Modal
        title="New Post"
        showmodal={createNew}
        modalHandler={toggleCreateNewModal}
        children={<NewPost handlePollModal={() => console.log(e)} />}
        width="100%"
      />

      <aside className="w-sidebar pb-20 " id="sidebar">
        <div className="w-full flex flex-col">
          <span
            id="menu-label"
            className="font-10 font-BwN--light text-space p-3 my-3"
          >
            HOME
          </span>
          <ul className="w-full flex flex-col">
            <button
              className="w-full flex p-3 hover:bg-blue-900"
              onClick={() => toggleCreateNewModal()}
            >
              <SVG className="h-4 my-1" src={'/assets/svg/plus.svg'}></SVG>
              <span
                id="menu-label"
                className="mx-3 font-BwN font-14 font-BwN--light "
              >
                Create New
              </span>
            </button>
            <Link className="w-full flex p-3 hover:bg-blue-900" to="/">
              <SVG className="h-4 my-1" src={'/assets/svg/chat.svg'}></SVG>
              <span
                id="menu-label"
                className="mx-3 font-BwN font-14 font-BwN--light "
              >
                General Feed
              </span>
            </Link>
          </ul>
          <span
            id="menu-label"
            className="font-10 font-BwN--light text-space p-3 my-3"
          >
            BOOKINGS
          </span>

          <ul className="w-full flex flex-col">
            <Link className="w-full flex p-3 hover:bg-blue-900" to="/meetings">
              <SVG className="h-4 my-1" src={'/assets/svg/meeting.svg'}></SVG>
              <span
                id="menu-label"
                className="mx-3 font-BwN font-14 font-BwN--light "
              >
                Meetings
              </span>
            </Link>
            <Link
              className="w-full flex p-3 hover:bg-blue-900"
              to="/visitor-managment"
              as="visitor-managment"
            >
              <SVG
                className="h-4 my-1"
                src={'/assets/svg/visitor-management.svg'}
              ></SVG>
              <span
                id="menu-label"
                className="mx-3 font-BwN font-14 font-BwN--light "
              >
                Visitor Management
              </span>
            </Link>
            <Link
              className="w-full flex p-3 hover:bg-blue-900"
              to="/deliveries"
            >
              <SVG
                className="h-4 my-1"
                src={'/assets/svg/deliveries.svg'}
              ></SVG>
              <span
                id="menu-label"
                className="mx-3 font-BwN font-14 font-BwN--light "
              >
                Deliveries
              </span>
            </Link>
          </ul>
          <span
            id="menu-label"
            className="font-10 font-BwN--light text-space p-3 my-3"
          >
            COMPANY
          </span>

          <ul className="w-full flex flex-col">
            <Link className="w-full flex p-3 hover:bg-blue-900" to="/directory">
              <SVG className="h-4 my-1" src={'/assets/svg/directory.svg'}></SVG>
              <span
                id="menu-label"
                className="mx-3 font-BwN font-14 font-BwN--light "
              >
                Directory
              </span>
            </Link>
            <Link
              className="w-full flex p-3 hover:bg-blue-900"
              to="/document-library"
            >
              <SVG
                className="h-4 my-1"
                src={'/assets/svg/document-lib.svg'}
              ></SVG>
              <span
                id="menu-label"
                className="mx-3 font-BwN font-14 font-BwN--light "
              >
                Document Library
              </span>
            </Link>
            <Link
              className="w-full flex p-3 hover:bg-blue-900"
              to="/view-company"
            >
              <SVG
                className="h-4 my-1"
                src={'/assets/svg/view-company.svg'}
              ></SVG>
              <span
                id="menu-label"
                className="mx-3 font-BwN font-14 font-BwN--light "
              >
                View Companies
              </span>
            </Link>
            <Link className="w-full flex p-3 hover:bg-blue-900" to="/time-in">
              <SVG
                className="h-4 my-1"
                src={'/assets/svg/time-clock-in.svg'}
              ></SVG>
              <span
                id="menu-label"
                className="mx-3 font-BwN font-14 font-BwN--light "
              >
                Time Clock-in
              </span>
            </Link>
            <Link className="w-full flex p-3 hover:bg-blue-900" to="/bookings">
              <SVG className="h-4 my-1" src={'/assets/svg/bookings.svg'}></SVG>
              <span
                id="menu-label"
                className="mx-3 font-BwN font-14 font-BwN--light "
              >
                Bookings
              </span>
            </Link>
            <Link
              className="w-full flex p-3 hover:bg-blue-900"
              to="/service-management"
            >
              <SVG
                className="h-4 my-1"
                src={'/assets/svg/service-management.svg'}
              ></SVG>
              <span
                id="menu-label"
                className="mx-3 font-BwN font-14 font-BwN--light "
              >
                Service Management
              </span>
            </Link>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </ul>
        </div>
      </aside>
    </>
  )
}
