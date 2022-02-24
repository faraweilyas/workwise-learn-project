import React, { Component } from "react";
import { Pie } from "react-chartjs-2";

class ChartEx4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSet: {
        labels: ["Late", "Early/On time", "Absent"],
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
        <div className='flex justify-center  p-5 rounded-xl chart-3-set'>
          <Pie
            data={this.state.dataSet}
            height={4000}
            width={2000}
            className='mb-5 p-2 '
            options={{
              maintainAspectRatio: false,
            }}
          />
        </div>
      </>
    );
  }
}
export default ChartEx4;
