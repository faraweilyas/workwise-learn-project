import { useState } from 'react'
import Layout from '@/components/layout/layout'
import NotificationModal from '@/components/modals/NotificationModal'

export default function Notifications({}) {
  const [notificationModal, setNotificationModal] = useState(false)

  const toggleNotificationModal = () => {
    setNotificationModal(!notificationModal)
    document.querySelector('body').classList.toggle('no-scroll')
  }
  return (
    <>
      <NotificationModal
        showmodal={notificationModal}
        modalHandler={toggleNotificationModal}
        width="100%"
      />
      <Layout>
        <br />
        <br />
        <br />
        <div className="center p-2">
          <div className="w-full bg-white p-10 rounded-md">
            <span className="text-space font-BwN font-10">Today</span>

            <div
              className="flex flex-col border p-5 border-blue-800 rounded-md cursor-pointer my-5"
              onClick={() => toggleNotificationModal()}
            >
              <span className="font-BwN font-BwN--bolder text-blue-800 font-12">
                Delivery reminder
              </span>
              <span className="font-BwN  text-gray-500 font-12 my-1">
                You haven’t picked up your delivery
              </span>
              <button className="w-2/6 btn-full bg-blue-800 p-3 rounded-md cursor-pointer text-white">
                Mark as received
              </button>
            </div>
            <div
              className="flex flex-col border p-5 border-blue-800 rounded-md cursor-pointer my-5"
              onClick={() => toggleNotificationModal()}
            >
              <span className="font-BwN font-BwN--bolder text-blue-800 font-12">
                New Service Request Made
              </span>
              <span className="font-BwN  text-gray-500 font-12 my-1">
                Osamudiamen has reported a ticket
              </span>
            </div>
            <div
              className="flex flex-col border p-5 border-blue-800 rounded-md cursor-pointer my-5"
              onClick={() => toggleNotificationModal()}
            >
              <span className="font-BwN font-BwN--bolder text-blue-800 font-12">
                New Service Request Made
              </span>
              <span className="font-BwN  text-gray-500 font-12 my-1">
                Osamudiamen has reported a ticket
              </span>
            </div>
            <div
              className="flex flex-col border p-5 border-gray-800 rounded-md cursor-pointer my-5"
              onClick={() => toggleNotificationModal()}
            >
              <span className="font-BwN font-BwN--light text-gray-800 font-12">
                New Service Request Made
              </span>
              <span className="font-BwN  text-gray-500 font-12 my-1">
                Osamudiamen has reported a ticket
              </span>
            </div>
            <div
              className="flex flex-col border p-5 border-gray-800 rounded-md cursor-pointer my-5"
              onClick={() => toggleNotificationModal()}
            >
              <span className="font-BwN font-BwN--light text-gray-800 font-12">
                New Service Request Made
              </span>
              <span className="font-BwN  text-gray-500 font-12 my-1">
                Osamudiamen has reported a ticket
              </span>
            </div>
            <span className="text-space font-BwN font-10">Yesterday</span>

            <div
              className="flex flex-col border p-5 border-blue-800 rounded-md cursor-pointer my-5"
              onClick={() => toggleNotificationModal()}
            >
              <span className="font-BwN font-BwN--bolder text-blue-800 font-12">
                Delivery reminder
              </span>
              <span className="font-BwN  text-gray-500 font-12 my-1">
                You haven’t picked up your delivery
              </span>
              <button className="w-2/6 btn-full bg-blue-800 p-3 rounded-md cursor-pointer text-white">
                Mark as received
              </button>
            </div>
            <div
              className="flex flex-col border p-5 border-blue-800 rounded-md cursor-pointer my-5"
              onClick={() => toggleNotificationModal()}
            >
              <span className="font-BwN font-BwN--bolder text-blue-800 font-12">
                New Service Request Made
              </span>
              <span className="font-BwN  text-gray-500 font-12 my-1">
                Osamudiamen has reported a ticket
              </span>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}
