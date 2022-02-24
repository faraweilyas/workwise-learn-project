import { useState,useEffect,Component } from "react";
import { Line,Pie } from "react-chartjs-2";
import Layout from "@/components/layout/layout";
import Modal from "@/components/modals/modal";
import InvitationModal from "@/components/modals/InvitationModal";
import InviteVistorModal from "@/components/modals/InviteVistorModal";
import Pagination from "@/components/pagination";


import SVG from "react-inlinesvg";
import { useRouter } from "next/router";
import Axios from 'axios';
import {baseUrl} from '@/utils/baseUrl';
export default function VisitorManagement() {
  const handleClick=(num)=>{
    num==drop?setDrop(null):
    setDrop(num)
  }

  //get Visitors API Calling
    const getVisitors =(initialParam)=>{
      let Token='c7dd2554181c877c85d76430a59ff27c93286414 DeviceCode 2XMH2B'
      Axios.get(`${baseUrl}/api/company/visitlogs/${initialParam}`,{
        headers:{
          Authorization:`Bearer ${Token}`
        }
      })
      .then((response) => {
        
        // setVisitorsList(response.data.response.visitLogs)
      }, (error) => {
        console.log(error.response);
      });
      
    }
  
  const router = useRouter();
  const [invitationModal, setInvitationModal] = useState(false);
  const [activeList, setActiveList] = useState({});
  const [inviteVisitor, setInviteVisitor] = useState(false);
  const [visitorsList, setVisitorsList] = useState([]);
  const [pageOfItems, setPageOfItems] = useState([]);
  const [drop,setDrop]=useState(null);

  const onChangePage =(items)=>{
    setPageOfItems(items)
    console.log(items)
  }
    //use Effect Start
      
    useEffect(()=>{
      let initial='CHCOC967C3SN';
      let current='CHCOC967C3SN';
      
      getVisitors(initial,current)
    },[])
    //use Effect End
  const toggleInvitationModal = list =>() => {
    setActiveList(list)
    setInvitationModal(!invitationModal);
    document.querySelector("body").classList.toggle("no-scroll");
  };
  const toggleInviteVisitor = () => {
    
    setInviteVisitor(!inviteVisitor);
    document.querySelector("body").classList.toggle("no-scroll");
  };
  let lists = [
    { name: "dropdown" },
    { name: "list" },
    { name: "list" },
    { name: "list" },
    { name: "list" },
    { name: "list" },
    { name: "list" },
    { name: "list" },
    { name: "list" },
    { name: "list" },
    { name: "list" },
    { name: "list" },
    { name: "list" },
    { name: "list" },
    { name: "list" },
    { name: "list" },
    { name: "list" },
    { name: "list" },
    { name: "list" },
    { name: "list" },
    { name: "list" },
    { name: "list" },
  ];
  const closeModelHandler =()=>{
    
    setInvitationModal(!invitationModal);
    document.querySelector("body").classList.toggle("no-scroll");
  }

  return (
    <>
      <InvitationModal
        title="View Invitation"
        data={activeList}
        showmodal={invitationModal}
        modalHandler={closeModelHandler}
        width="420px"
      />
      <Modal
        title="Invite a visitor"
        showmodal={inviteVisitor}
        modalHandler={toggleInviteVisitor}
        children={<InviteVistorModal />}
        width="100%"
      />
      <Layout title="Visitor Management">
        {/* breadcrum */}
        <div
          id="breadcrum"
          className="breacurm fixed flex justify-between  z-1  p-4 mt-14  bg-white  shadow-sm"
        >
          <div className='inner-breadcrum'>
          <button
            className="flex outline-none m-3"
            onClick={() => router.back()}
          >
            <SVG className="h-4" src={"/assets/svg/arrow-left.svg"}></SVG>
            <span className="text-gray-700 font-BwN font-BwN--bolder font-12">
              Visitor Management
            </span>
          </button>

          <button
            className="relative flex p-3 border-50 bg-blue-800  rounded-md font-12 mx-1 mr-10"
            onClick={toggleInviteVisitor}
          >
            <SVG className="h-4 " src={"/assets/svg/add-empolyee.svg"}></SVG>
            <span className="text-white mx-2"> Invite a Visitor</span>
          </button>
          </div>
        </div>
        {/* breadcrum */}

        <div className="md:ml-5 p-2 mt-visitor-table" >
          <div className="w-full bg-white  gap-4 my-5 p-8   rounded-md">
            <div className="total-cards cards-margin">
              <div className="flex flex-col justify-between h-32 p-5 cursor-pointer border border-blue-800 rounded-md meeting-backdrop">
                <p className="font-BwN font-BwN--bold font-18 text-blue-800 ">
                  Users
                </p>
                <span className="font-BwN font-12 text-black">25 people</span>
              </div>
              <div className="flex flex-col justify-between h-32 p-5 cursor-pointer border border-blue-800 rounded-md meeting-backdrop">
                <div className="flex flex-col">
                  <p className="font-BwN font-BwN--bold font-18 text-blue-800 ">
                    Visitors
                  </p>
                  <span className="font-BwN font-10 text-black">
                    in the last 30 days
                  </span>
                </div>
                <div className='flex justify-between align-baseline'>
                          <span className="font-BwN font-12 text-black">
                            45 People
                          </span>
                          <span className='-mt-1'>+14% <strong className='text-blue-800'>&#8593;</strong></span>
                        </div>
              </div>
              <div className="flex flex-col justify-between h-32 p-5 cursor-pointer border border-blue-800 rounded-md meeting-backdrop">
                <div className="flex flex-col">
                  <p className="font-BwN font-BwN--bold font-18 text-blue-800 ">
                    Visits
                  </p>
                  <span className="font-BwN font-10 text-black">
                    in the last 30 days
                  </span>
                </div>
                <div className='flex justify-between align-baseline'>
                          <span className="font-BwN font-12 text-black">
                            253 invites
                          </span>
                          <span className='-mt-1'>+25% <strong className='text-blue-800'>&#8593;</strong></span>
                        </div>
              </div>
            </div>
            <div style={{width:'100%',marginTop:'40px'}} className='charts-container'>
              <LineChartExample/>
              <PieChartExample/>
            </div>
          </div>
          {/* end of cards */}
          <table className="visitor-table ">
            <tr>
              <div className="visitor-details relative  bg-white my-5 p-8 rounded-md">
                <div className="flex justify-between">
                  <div className="flex" style={{ width: "100%" }}>
                    <div
                      className="w-auto flex bg-gray-100 rounded-md"
                      style={{ width: "55%" }}
                    >
                      <input
                        className="p-3 font-BwN font-12 bg-gray-100 rounded-sm outline-none"
                        type="text"
                        placeholder="Search for a name"
                        style={{ width: "100%" }}
                      />
                      <button>
                        <SVG
                          className="h-5 m-2"
                          src={"/assets/svg/search.svg"}
                        ></SVG>
                      </button>
                    </div>

                    <select style={{ width: "20%" }} className=" relative bg-gray-50 vistor-select  font-BwN font-12 rounded-lg w-50 h-12 text-gray-800 outline-none p-3  mx-4 ">
                      <option>Filter by status</option>
                      <option>Weekly</option>
                      <option>Monthly</option>
                    </select>
                  </div>

                  <button className="absolute top-10 right-5 flex p-2 border border-50 border-blue-800  rounded-md font-12 mx-1 mr-0">
                    <SVG
                      className="h-4 "
                      src={"/assets/svg/download.svg"}
                    ></SVG>
                    <span className="text-blue-800  mx-2">Export as CSV</span>
                  </button>
                </div>

                <div className="grid grid-cols-6 gap-2 py-3 my-5 mt-10 ">
                  <span className="text-spacing font-BwN font-BwN--lighter  font-12">
                    NAME OF GUEST
                  </span>
                  <span className="text-spacing font-BwN font-BwN--lighter  font-12">
                    DATE/TIME
                  </span>
                  <span className="text-spacing font-BwN font-BwN--lighter  font-12 ">
                    NAME OF RECEIVER
                  </span>
                  <span className="text-spacing font-BwN font-BwN--lighter text-center  font-12">
                    PURPOSE OF VISIT
                  </span>
                  <span className="text-spacing font-BwN font-BwN--lighter text-right font-12">
                    STATUS
                  </span>
                  <span className="text-spacing font-BwN font-BwN--lighter text-center font-12">
                    MORE
                  </span>
                </div>

                {pageOfItems.map((list, index) => (
                  <div
                    className="grid grid-cols-6 gap-4 py-3 my-5 border-b border-gray-200 cursor-pointer"
                    key={`${index}${list}` + 1}
                    onClick={toggleInvitationModal(list)}
                  >
                    <div className="flex relative">
                      <span className="initials relative  bottom-1 font-BwN font-BwN--bolder mx-3 ml-0">
                      <img src={list.picture} className='w-10 h-8 rounded-full'/>
                      </span>
                      <span className="relative font-BwN font-12">
                        {" "}
                        {list.visitorName}
                      </span>
                    </div>

                    <div className="flex relative">
                      <span className="relative font-BwN font-12">
                      {(list.checkin)}
                      </span>
                    </div>

                    <div className="flex relative">
                      <span className="relative font-BwN font-12">
                        {list.employeeName}
                      </span>
                    </div>  
                    <div className="flex justify-center relative">
                      <span className="relative font-BwN font-12">
                        {list.purposeOfVisit}
                      </span>
                    </div>

                    <div className="flex justify-end">
                      <span className="m-1">
                        <svg
                          width="15"
                          height="10"
                          viewBox="0 0 15 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.068 6.1805L8.00933 7.12183L13.6533 1.47783L14.596 2.4205L8.00933 9.00716L3.76667 4.7645L4.70933 3.82183L6.126 5.2385L7.068 6.17983V6.1805ZM7.06933 4.29516L10.3707 0.993164L11.3107 1.93316L8.00933 5.23516L7.06933 4.29516ZM5.18467 8.06516L4.24267 9.00716L0 4.7645L0.942667 3.82183L1.88467 4.76383L1.884 4.7645L5.18467 8.06516Z"
                            fill="#0A459F"
                          />
                        </svg>
                      </span>
                      <span className="text-blue-800 text-spacing font-BwN font-12 text-right">
                      {list.status}
                      </span>
                    </div>
                    <button className="relative flex justify-center "
                    onClick={()=>handleClick(index)}
                    >
                      <SVG className="h-4" src={"/assets/svg/option.svg"}
                      ></SVG>
                      {true ? (
                        <div
                          className={`flex flex-col absolute top-5 -right-20 bg-white shadow-md p-3 rounded-md cursor-pointer mb-5 ${drop!==index?'hidden':''}`}
                          style={{ zIndex: "100" }}
                        >
                          <div className="flex py-3 bg-white ">
                            <span className="h-1">
                              <SVG
                                className="h-5 mx-2"
                                src={"/assets/svg/printer.svg"}
                              ></SVG>
                            </span>
                            <span className="font-BwN font-12">
                              Print label
                            </span>
                          </div>
                          <div className="flex py-3 bg-white  ">
                            <span className="h-1">
                              <SVG
                                className="h-5 mx-2"
                                src={"/assets/svg/download.svg"}
                              ></SVG>
                            </span>
                            <span className="font-BwN font-12">
                              Download label
                            </span>
                          </div>
                          <div className="flex py-3 bg-white ">
                            <span className="h-1">
                              <SVG
                                className="h-5 mx-2 "
                                src={"/assets/svg/download.svg"}
                              ></SVG>
                            </span>
                            <span className="font-BwN font-12">
                              Download NDA
                            </span>
                          </div>
                        </div>
                      ) : (
                        <span>hey</span>
                      )}
                    </button>
                  </div>
                ))}
                <Pagination items={visitorsList} onChangePage={onChangePage} />
              </div>
            </tr>
          </table>
        </div>
      </Layout>
    </>
  );
}
//Line Chart Example 





function LineChartExample()  {
  const [screenWidth,setScreenWidth]=useState(0);
  useEffect(()=>{
    setScreenWidth(window.innerWidth)
  },[])
  const widthToBeSet=screenWidth<500?300:190;
  console.log(screenWidth)
  const [state,setState] =useState ({
    dataSet: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
      datasets: [
        {
          label: "First Time",
          data: [100, 37, 100, 200, 310, 400, 200, 10],
          backgroundColor: "#0A459F",
          borderColor: "rgba(54, 162, 235, 1)",
          borderWidth: 1,
          tension: 0.5,
        },
        {
          label: "Returning",
          data: [50, 70, 101, 19, 90, 80, 100, 12],
          backgroundColor: "#EA8BF9",
          borderColor: "#EA8BF9",
          borderWidth: 1,
          tension: 0.5,
          options: {
            bezierCurve: true,
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },
          },
        },
      ],
    },
  })
  return (
    <>
      <div className='border border-blue-800 p-5 rounded-xl chart-2-set' >
      <div className='flex justify-between'>
          <h2 className='font-bold text-blue-800'>Visitors</h2>
          <select style={{width:'45%'}} className="relative bg-gray-100 font-BwN font-12 rounded-lg  text-gray-800 outline-none p-3 pr-5 mx-4 ">
                    <option>1-31-2020 to 12-3-2021</option>
                    <option>Weekly</option>
                    <option>Monthly</option>
                  </select>
        </div>
        {screenWidth<500&&(
          <Line data={state.dataSet} height={350} width={500} />
        )}
        {screenWidth>500&&(
          <Line data={state.dataSet} height={190} width={500} />
        )}

      </div>
    </>
  );
}

//Pie Chart Example



class PieChartExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSet: {
        labels: ["Unhappy", "Indifferent", "Happy"],
        datasets: [
          {
            data: [310, 400, 200],
            backgroundColor: [
              "#64C18F",
              "#0A459F",
              "#EA8BF9",
            ],
            borderColor: "rgba(255, 255, 255, 1)",
            borderWidth: 3,
          },
        ],
      },
    };
  }
  render() {
    return (
      <>
        <div className='border border-blue-800 p-5 rounded-xl chart-3-set'>
          <div className='flex justify-between'>
            <h2 className='font-bold text-blue-800'>Reach by device</h2>
            <select style={{width:'45%'}} className="relative bg-gray-100 font-BwN font-12 rounded-lg  text-gray-800 outline-none p-3 pr-5 mx-4 ">
                      <option>Filter by date</option>
                      <option>Weekly</option>
                      <option>Monthly</option>
                    </select>
          </div>
          <Pie
            data={this.state.dataSet}
            height={200}
            width={200}
            className='mb-5 p-8 '
            options={{
              maintainAspectRatio: false,
            }}
          />
        </div>
      </>
    );
  }
}
