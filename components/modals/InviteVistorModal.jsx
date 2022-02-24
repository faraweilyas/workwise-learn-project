import { useState ,useEffect} from "react";
import SVG from "react-inlinesvg";

import Axios from 'axios';
import {baseUrl} from '@/utils/baseUrl';

export default function InviteVistorModal() {
  const [first_name,setFirstName]=useState('');
  const [last_name,setLastName]=useState('');
  const [company,setCompany]=useState('');
  const [subject,setSubject]=useState('');
  
  const [message,setMessage]=useState("");
  
  const [phone,setPhone]=useState("");
  const [email,setEmail]=useState("");
  const [startDate,setDate]=useState();
  const [rooms,setRooms]=useState([]);
  const [room,setRoom]=useState('');
  const [endTimes,setEndTimes]=useState([]);
  const [startTimes,setStartTimes]=useState([]);
  const [manual,setManual]=useState(false);
  const [endTime,setEndTime]=useState("");
  const [startTime,setStartTime]=useState("");
  
    const sendInvite =()=>{
      
        const dataToSend=({
          email,
          firstName:first_name,
          lastName:last_name,
          phoneNumber:phone,
          company,
          subject,
          message,
          meetArea:room,
          start_date_time:startDate+' '+startTime,
          end_date_time:startDate+' '+endTime
        });
        
        let Token='c7dd2554181c877c85d76430a59ff27c93286414 DeviceCode 2XMH2B'
        
        Axios.post(`https://workwise.ng/api/company/invite-visitor/CHCOC967C3SN/4`,dataToSend,{
          headers:{
            Authorization:`Bearer ${Token}`
          }
        })
        .then((response) => {
        console.log(response)
        }, (error) => {
          console.log(error.response);
        });
    }

  const fetchTimeAndRooms =(initialParam)=>{
    let Token='c7dd2554181c877c85d76430a59ff27c93286414 DeviceCode 2XMH2B'
    Axios.get(`${baseUrl}/api/company/reservation-times`,{
      headers:{
        Authorization:`Bearer ${Token}`
      }
    })
    .then((response) => {
      var end_times=response.data.response.end_times
      var start_times=response.data.response.start_times

      var end_times_result = Object.keys(end_times).map((key) => [(key), end_times[key]]);
      var start_times_result = Object.keys(start_times).map((key) => [(key), start_times[key]]);
      setStartTimes(start_times_result)
      setEndTimes(end_times_result)
    }, (error) => {
      console.log(error.response);
    });

    Axios.get(`${baseUrl}/api/company/getrooms/${initialParam}`,{
      headers:{
        Authorization:`Bearer ${Token}`
      }
    })
    .then((response) => {
      console.log('rooms response',response.data.response.rooms)
      setRooms(response.data.response.rooms)
    }, (error) => {
      console.log(error.response);
    });
    
  }

  useEffect(()=>{
    
    let company='CHCOC967C3SN';
    fetchTimeAndRooms(company)
  },[])


  return (
    <>
      <div
        className="w-invitation-modal bg-white"
        style={{ width: "700px", height: "500px" }}
      >
        <div className="flex justify-between">
          <div
            className="flex flex-col"
            style={{ width: "280px", height: "200px" }}
          >
            <span className="font-10 font-BwN--light text-space p-3 my-1">
              CONTACT INFORMATION
            </span>

            <div className="m-3 ">
              <label class="input">
                <input class="input__field" type="text" placeholder=" "  value={first_name} onChange={e=>{setFirstName(e.target.value)}} />
                <span class="input__label font-BwN">First Name</span>
              </label>
            </div>
            <div className="m-3 ">
              <label class="input">
                <input class="input__field" type="text" placeholder=" "  value={last_name} onChange={e=>{setLastName(e.target.value)}} />
                <span class="input__label font-BwN">Last Name</span>
              </label>
            </div>
            <div className="m-3 ">
              <label class="input">
                <input class="input__field" type="text" placeholder=" " value={phone} onChange={e=>{setPhone(e.target.value)}} />
                <span class="input__label font-BwN">Phone Number</span>
              </label>
            </div>
            <div className="m-3 ">
              <label class="input">
                <input class="input__field" type="text" placeholder=" " value={email} onChange={e=>{setEmail(e.target.value)}}  />
                <span class="input__label font-BwN">Email</span>
              </label>
            </div>

            <div className="m-3 ">
              <label class="input">
                <input class="input__field" type="text" placeholder=" " value={company} onChange={e=>{setCompany(e.target.value)}}  />
                <span class="input__label font-BwN">Company</span>
              </label>
            </div>
            <div className="m-3 ">
              <label class="input">
                <input class="input__field" type="text" placeholder=" " value={subject} onChange={e=>{setSubject(e.target.value)}}  />
                <span class="input__label font-BwN">Subject</span>
              </label>
            </div>
            <br/>

            <div className="flex flex-col m-3 ">
              <button className="relative text-center p-3  bg-blue-800 text-white rounded-sm font-13 mx-1 mr-0" onClick={e=>{e.preventDefault(); sendInvite() } }>
                Save & Send Invite
              </button>
              <button className="relative text-center p-3  bg-white border border-blue-600 text-blue-600 rounded-sm font-13 mx-1 my-2 mr-0">
                Cancel
              </button>
            </div>
          </div>
          <div className="flex flex-col mt-5" style={{ width: "290px" }}>
            <span className="font-10 font-BwN--light text-space p-3">
              OFFICIAL INFORMATION
            </span>
            <span className="font-14 text-black p-3 mb-1">
              Use meeting room to receive visitor?
            </span>

            <div className="flex mx-2">
              <div class="flex items-center mr-4 mb-4">
                <input id="radio1"  type="radio" value='yes' name="radio" class="hidden" 
                // onChange={e=>{
                //     setRoom("")
                //     setManual(true)
                //   }}
                   />
                <label for="radio1" class="flex items-center cursor-pointer">
                  <span class="w-4 h-4 inline-block mr-1 rounded-full border border-grey"></span>
                  Yes
                </label>
              </div>
              <div class="flex items-center mr-4 mb-4">
                <input
                  id="radio2"
                  type="radio"
                  name="radio"
                  class="hidden"
                  
                  value='no'
                  // onChange={e=>{
                  //   console.log('workin')
                  //   setRoom("")
                  //   setManual(false)
                  // }}
                  
                />
                <label for="radio1" class="flex items-center cursor-pointer">
                  <span class="w-4 h-4 inline-block mr-1 rounded-full border border-grey"></span>
                  No
                </label>
              </div>
            </div>

            <div className="m-3 ">
              <label class="input">
                <input class="input__field" type="date" placeholder=" " onChange={e=>setDate(e.target.value)} value={startDate} />
                <span class="input__label font-BwN">Date</span>
              </label>
            </div>
            <div className="m-3 ">
              <label class="input">
              <select class="input__field" value={startTime} onChange={e=>setStartTime(e.target.value)}   >
                  {startTimes.map(item=>{
                    return (
                      <option value={item[0]}>{item[1]} </option>
                    )
                  })}
                </select>
                <span class="input__label font-BwN">
                  Expected  Start time of visitor’s arrival
                </span>
              </label>
            </div>
            <div className="m-3 ">
              <label class="input">
              <select class="input__field"  value={endTime} onChange={e=>setEndTime(e.target.value)}   >
                  {endTimes.map(item=>{
                    return (
                      <option key={item[0]} value={item[0]}>{item[1]} </option>
                    )
                  })}
                </select>
                <span class="input__label font-BwN">
                  Expected  End time of visitor’s arrival
                </span>
              </label>
            </div>
            <div className="m-3 ">
              <label class="input">
                <select class="input__field" value={room} onChange={e=>setRoom(e.target.value)} >
                  {
                    rooms.map(item=>{
                      return (
                        <option key={item.id} value={item.id}>{item.title}</option>
                      )
                    })
                  }
                  
                </select>
                {/* <input  type="text" placeholder=" " /> */}
                <span class="input__label font-BwN">Select Meeting Room</span>
              </label>
            </div>

            <span className="flex m-2 font-12 text-green-500">
              <svg
                className="m-1"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.99967 13.6667C3.31767 13.6667 0.333008 10.682 0.333008 7.00001C0.333008 3.31801 3.31767 0.333344 6.99967 0.333344C10.6817 0.333344 13.6663 3.31801 13.6663 7.00001C13.6663 10.682 10.6817 13.6667 6.99967 13.6667ZM6.33501 9.66668L11.0483 4.95268L10.1057 4.01001L6.33501 7.78134L4.44901 5.89534L3.50634 6.83801L6.33501 9.66668Z"
                  fill="#219653"
                />
              </svg>
              Meeting room avaliable at this time
            </span>
            <div className="m-3 ">
              <label class="input">
                <input
                  class="input__field"
                  type="text"
                  placeholder=" "
                  style={{ height: "100px" }}
                  value={message}
                  onChange={e=>setMessage(e.target.value)}
                />
                <span class="input__label font-BwN">
                  More details on the visit (optional)
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
