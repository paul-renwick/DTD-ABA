import React from 'react'
// import Chart from 'chart.js'

import { Line } from 'react-chartjs-2'
import { sessionData, target } from './Inputs'
import { PrimaryGrid } from './CustomMaterialUI'

class LineChart extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      chartData: {
        labels: target,
        datasets: [
          {
            label: '% Correct',
            data: sessionData
          }
        ],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ]
      }

    }
  }

  static defaultProps = {
    display: false,
    displayTitle: true,
    displayLegend: false,
    legendPosition: 'left'
  }

  render () {
    return (
      <React.Fragment>
        <PrimaryGrid>
          <Line
            data={this.state.chartData}
            options={{
              title: {
                display: this.props.displayTitle,
                text: '',
                fontSize: 30
              },
              legend: {
                display: this.props.displayLegend,
                position: this.props.legendPosition
              },
              maintainAspectRatio: false
            }} />
        </PrimaryGrid>
      </React.Fragment>
    )
  }
}

export default LineChart
