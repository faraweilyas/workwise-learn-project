import { useState,useEffect } from "react";
import Layout from "@/components/layout/layout";
import SVG from "react-inlinesvg";
import { useRouter } from "next/router";
import Modal from "@/components/modals/modal";
import InvitationModal from "@/components/modals/InvitationModal";
import InviteVistorModal from "@/components/modals/CompanyModal";

import EditCompany from "@/components/modals/EditCompany";

import Link from "next/link";
import Axios from 'axios';
import {baseUrl} from '@/utils/baseUrl';

export default function DeliverisPage({}) {
  const router = useRouter();
  const [companyModal, setCompanyModal] = useState(false);
  const [invitationModal, setInvitationModal] = useState(false);
  const [companies,setCompanies]=useState([]);
  const [inviteVisitor, setInviteVisitor] = useState(false);
  const [editCompany, setEditCompany] = useState(false);

  const toggleEditCompanyModal = () => {
    setEditCompany(!editCompany);
    document.querySelector("body").classList.toggle("no-scroll");
  };

  
  const getCompanies =(initialParam)=>{
    let Token='c7dd2554181c877c85d76430a59ff27c93286414 DeviceCode 2XMH2B'
    //
    Axios.get(`${baseUrl}/api/get/companytenants/${initialParam}`,{
      headers:{
        Authorization:`Bearer ${Token}`
      }
    })
    .then((response) => {
      console.log({response:response.data.response});
      setCompanies(response.data.response)
    }, (error) => {
      console.log(error.response);
    });
    
  }
  //Use Effect
  useEffect(()=>{
    let initial='CHCOC967C3SN';
    
    
    getCompanies(initial)
  },[])

  const [drop, setDrop] = useState(null);
  const handleClick = (num) => {
    num == drop ? setDrop(null) : setDrop(num);
  };

  const toggleInvitationModal = () => {
    setInvitationModal(!invitationModal);
    document.querySelector("body").classList.toggle("no-scroll");
  };
  const toggleCompanyModal = () => {
    setCompanyModal(!companyModal);
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
  return (
    <>
    <EditCompany
        showmodal={editCompany}
        modalHandler={toggleEditCompanyModal}
        width="700px"
      />
      <InvitationModal
        title="View Invitation"
        showmodal={invitationModal}
        modalHandler={toggleInvitationModal}
        width="100%"
      />
      <Modal
        title="Add Details"
        showmodal={companyModal}
        modalHandler={toggleCompanyModal}
        children={<InviteVistorModal />}
        width="650px"
      />
      <Layout title="Visitor Management">
        {/* breadcrum */}
        <div
          id="breadcrum"
          className="breacurm flex justify-between fixed z-1  p-4 mt-14  bg-white  shadow-sm"
        >
          <div className="inner-breadcrum-view">
            <button
              className="flex outline-none m-3"
              onClick={() => router.back()}
            >
              <SVG className="h-4" src={"/assets/svg/arrow-left.svg"}></SVG>
              <span className="text-gray-700 font-BwN font-BwN--bolder font-12">
                View Companies
              </span>
            </button>
            <button
              className="relative flex p-3 border-50 bg-blue-800 
         rounded-md font-12 mx-1 mr-10"
              onClick={toggleCompanyModal}
            >
              <SVG className="h-4 " src={"/assets/svg/add-empolyee.svg"}></SVG>
              <span className="text-white mx-2"> Add new company</span>
            </button>
          </div>
        </div>
        {/* breadcrum */}

        <div className="md:ml-5 p-2">
          {/* end of cards */}
          <table className="view-table">
            <tr>
              <div
                className="view-details relative  bg-white my-5 p-8 rounded-md"
                style={{ width: "900px" }}
              >
                <div className="flex justify-between">
                  <div className="flex" style={{ width: "60%" }}>
                    <div
                      className="w-auto flex bg-gray-100 rounded-md"
                      style={{ width: "100%" }}
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
                  </div>
                </div>

                <table
                  style={{ width: "100%" }}
                  className="mt-10 view-inner-table"
                >
                  <tr className="view-tr">
                    <td>
                      <span className="text-spacing font-BwN font-BwN--lighter  font-12 view-table-item">
                        NAME OF COMPANY
                      </span>
                    </td>
                    <td>
                      <span className="text-spacing font-BwN font-BwN--lighter  font-12 view-table-item">
                        TAGS
                      </span>
                    </td>
                    <td>
                      <span className="text-spacing font-BwN font-BwN--lighter  font-12 view-table-item">
                        PARENT
                      </span>
                    </td>
                    <td>
                      <span className="text-spacing font-BwN font-BwN--lighter  font-12 view-table-item">
                        MULTITANET
                      </span>
                    </td>
                    <td>
                      <span className="text-spacing font-BwN font-BwN--lighter text-right font-12 view-table-item">
                        STATUS
                      </span>
                    </td>
                    <td className="">
                      <span className="text-spacing font-BwN font-BwN--lighter text-right font-12 view-table-item">
                        MORE
                      </span>
                    </td>
                  </tr>

                  {companies.map((list, index) => (
                    <tr
                      className="view-tr border-b border-gray-200 cursor-pointer"
                      key={`${index}${list}` + 1}
                    >
                      <td>
                        <div className="flex relative view-table-item">
                          <span className="initials relative  bottom-1 font-BwN font-BwN--bolder  mx-3 ml-0">
                          <img src={list.logoFile} className='w-10 h-8 rounded-full' />
                          </span>
                          <span className="relative font-BwN font-12">
                            {" "}
                            {list.name}
                          </span>
                        </div>
                      </td>
                      <td>
                        <div className="flex relative view-table-item">
                          <span className="relative font-BwN font-12">
                          {list.serialNO}
                          </span>
                        </div>
                      </td>
                      <td>
                        <div className="flex relative view-table-item">
                          <span className="relative font-BwN font-12">
                            {" "}
                            {list.parent_company ==0 ? 'None' : list.parent_company}
                          </span>
                        </div>
                      </td>
                      <td>
                        <div className="flex relative view-table-item">
                          <span className="relative font-BwN font-12">
                            {" "}
                            <button className="active-btn">{list.isMultitenant ? 'Active' : 'Inactive'}</button>
                          </span>
                        </div>
                      </td>
                      <td>
                        <div className="flex relative view-table-item">
                          <span className="relative font-BwN font-12">  {list.parent_company ==true ? 'Yes' : 'No'}</span>
                        </div>
                      </td>

                      <td>
                        <div className="ml-3 view-table-item">
                          <span className="m-1"></span>
                          <span className="my-1">
                            <button
                              className=" flex justify-center "
                              onClick={() => handleClick(index)}
                            >
                              <SVG
                                className="h-4"
                                src={"/assets/svg/option.svg"}
                              ></SVG>
                              {true ? (
                                <div
                                  className={`flex flex-col absolute top-30 -right-10 bg-white shadow-md p-3 rounded-md cursor-pointer mb-5 ${
                                    drop !== index ? "hidden" : ""
                                  }`}
                                  style={{ zIndex: "100" }}
                                >
                                  <div className="flex py-3 bg-white ">
                                    <span className="h-1">
                                    </span>
                                    <span className="font-BwN font-12">
                                      <Link href='/view-company-details'>
                                        View profile
                                      </Link>
                                    </span>
                                  </div>
                                  <div className="flex py-3 bg-white  ">
                                    <span className="h-1">
                                    </span>
                                    <span className="font-BwN font-12"
                                    onClick={toggleEditCompanyModal}
                                    >
                                      Edit profile
                                    </span>
                                  </div>
                                  <div className="flex py-3 bg-white ">
                                    <span className="h-1">
                                    </span>
                                    <span className="font-BwN font-12 text-red-800">
                                      Delete company
                                    </span>
                                  </div>
                                </div>
                              ) : (
                                <span>hey</span>
                              )}
                            </button>
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </table>
              </div>
            </tr>
          </table>
        </div>
      </Layout>
    </>
  );
}
