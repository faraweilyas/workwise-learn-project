import Layout from "@/components/layout/layout";
import Comments from "@/components/posts/Comments";
import SVG from "react-inlinesvg";
import router from "next/router";

export default function SinglePostComponent() {
  return (
    <Layout title="New Post">
      {/* breadcrum */}
      <div
        id="breadcrum"
        className="breacurm  flex justify-between fixed z-10  p-4 mt-14  bg-white  shadow-sm"
      >
        <div className="inner-breadcrum">
          <button
            className="flex outline-none m-3"
            onClick={() => router.back()}
          >
            <SVG className="h-4" src={"/assets/svg/arrow-left.svg"}></SVG>
            <span className="text-gray-700 font-BwN font-BwN--bolder font-12">
              Post details
            </span>
          </button>
        </div>
      </div>
      {/* breadcrum */}

      <div className="visitor-table p-2 " style={{ marginTop: "5%" }}>
        <Comments />
      </div>
      <div
        id="breadcrum"
        className="breacurm-reply  flex justify-between fixed z-20  p-4 mt-500  bg-white  shadow-sm"
      >
        <div className="inner-breadcrum">
          <button
            className="flex outline-none m-2"
            onClick={() => router.back()}
          >
            <img
              className="cursor-pointer"
              src={`/assets/images/mudia.png`}
              alt="Olasukanmi"
            />
            <span className="text-gray-400 font-BwN mt-2 ml-2  font-12">
              Add a reply
            </span>
          </button>
          <div>
          <button
              className="relative flex p-3 border-50 bg-blue-800 
         rounded-md font-12 mx-1 mt-1 mr-10"
            >
              <SVG className="h-4 " src={"/assets/svg/post.svg"}></SVG>
              <span className="text-white mx-2"> Reply</span>
            </button>
          </div>
        </div>
      </div>
      {/* breadcrum */}
    </Layout>
  );
}
