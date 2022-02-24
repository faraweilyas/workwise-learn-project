import { useState } from 'react'
import SVG from 'react-inlinesvg'
import Modal from './modal'
import PollModal from './PollModal'

export default function NewPost() {
  const [pollModal, setPollModal] = useState(false)

  const togglePollModal = () => {
    setPollModal(!pollModal)
    document.querySelector('body').classList.toggle('no-scroll')
  }
  return (
    <>
      <PollModal
        title="New Poll"
        showmodal={pollModal}
        modalHandler={togglePollModal}
        width="100%"
      />
      <div className="w-newpost bg-white">
        <div className="flex flex-col border border-gray-200 p-5 rounded-md">
          <textarea
            name="new-post"
            className="w-full font-BwN font-12 text-gray-500 p-2 border border-gray-200  rounded-md outline-none"
            id=""
            rows="3"
            defaultValue="Create new post"
          ></textarea>

          <div className=" flex mt-5 justify-end create-btn-group ">
            <button className="flex p-3 border-50 bg-white border border-blue-800  rounded-md font-12 mx-1">
              <SVG className="h-4 " src={'/assets/svg/thumbsup.svg'}></SVG>
              <span className="text-blue-800 mx-2">
                Appreciation/Inspiration
              </span>
            </button>
            <button
              className="flex px-2 py-3 border-50 bg-white border border-blue-800  rounded-md font-10 mx-1"
              
            >
              <SVG className="" src={'/assets/svg/poll.svg'}></SVG>
              <span className="text-blue-800 mx-1" style={{marginTop:'1px'}}>Start a poll</span>
            </button>
            <button className="flex px-2 py-3 border-50 bg-white border border-blue-800  rounded-md font-10 mx-1">
              <SVG className=" " src={'/assets/svg/attachment.svg'}></SVG>
              <span className="text-blue-800 mx-1" style={{marginTop:'1px'}}>Attach files</span>
            </button>

            <button className="flex px-2 py-3 border-50 bg-blue-800  rounded-md font-10 mx-1 mr-0">
              <SVG className=" " src={'/assets/svg/post.svg'} style={{marginTop:'3px'}}></SVG>
              <span className="text-white mx-1" style={{marginTop:'3px'}}> Post to feed</span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
