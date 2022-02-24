import { useState } from "react";
import SVG from "react-inlinesvg";
import Link from "next/link";

export default function InviteVistorModal() {
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
      <div className="w-invitation-modal bg-white ">
        <div className="flex justify-between">
          <div
            className="flex flex-col"
            style={{ width: "850px", height: "410px",overflowY:"scroll" }}
          >
            <table style={{ width: "100%",height:'400px' }} className="mt-10 view-inner-table">
              <tr className="view-tr">
                <td>
                  <span className="text-spacing font-BwN font-BwN--lighter  font-12 view-table-item">
                    Name of employee
                  </span>
                </td>
                <td>
                  <span className="text-spacing font-BwN font-BwN--lighter  font-12 view-table-item">
                    Department
                  </span>
                </td>
                <td>
                  <span className="text-spacing font-BwN font-BwN--lighter  font-12 view-table-item">
                    Within Vacinity
                  </span>
                </td>
                <td>
                  <span className="text-spacing font-BwN font-BwN--lighter  font-12 view-table-item">
                    Reply
                  </span>
                </td>
              </tr>

              {lists.map((list, index) => (
                <tr
                  className="view-tr border-b border-gray-200 cursor-pointer"
                  key={`${index}${list}` + 1}
                >
                  <td>
                    <div className="flex relative view-table-item">
                      <span className="initials relative  bottom-1 font-BwN font-BwN--bolder mx-3 ml-0">
                        OI
                      </span>
                      <span className="relative font-BwN font-12">
                        {" "}
                        Olly Ichabod
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className="flex relative view-table-item">
                      <span className="relative font-BwN font-12">
                        {" "}
                        Design
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className="flex relative view-table-item">
                      <span className="relative font-BwN font-12"> No</span>
                    </div>
                  </td>

                  <td>
                    <div className="flex relative view-table-item">
                      <span className="relative font-BwN font-12">
                        {" "}
                        I am fine
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
