import { useRouter } from 'next/router'
import SVG from 'react-inlinesvg'

export default function Breadcrum({ text, button }) {
  const router = useRouter()
  return (
    <div className="w-full flex fixed z-10  p-4 mt-14  bg-white  shadow-sm">
      <button className="flex outline-none m-3" onClick={() => router.back()}>
        <SVG className="h-4" src={'/assets/svg/arrow-left.svg'}></SVG>
        <span className="text-gray-700 font-BwN font-BwN--bolder font-12">
          {text}
        </span>
      </button>
      {button && (
        <button className="relative flex p-3 border-50 bg-blue-800  rounded-md font-12 mx-1 mr-0">
          <SVG className="h-4 " src={'/assets/svg/post.svg'}></SVG>
          <span className="text-white mx-2"> {button}</span>
        </button>
      )}
    </div>
  )
}
