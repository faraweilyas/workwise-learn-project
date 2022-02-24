import React, { Component } from "react";
import { Pie } from "react-chartjs-2";

class ChartEx3 extends Component {
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
export default ChartEx3;
