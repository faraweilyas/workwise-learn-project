import React, { useState,useEffect } from "react";
import { Line } from "react-chartjs-2";
function ChartEx2()  {
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
export default ChartEx2;

