import React, { Component } from 'react';
import Chart from 'react-google-charts';

class Portlet extends Component {
  render() {
    return (
      <div className="portlet light bordered">
        <div className="portlet-title">
          <div className="caption">
            <i className="icon-bar-chart font-dark hide" />
            <span className="caption-subject font-dark bold uppercase">Overview</span>
            <span className="caption-helper">weekly stats...</span>
          </div>

        </div>
        {/* chart here */}
        <div style={{ border: "1px solid black" }}>
          <Chart
            width={600}
            height={500}
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data={[
              ['year', 'Number of projects'],
              ['2015', 500],
              ['2016',512 ],
              ['2017', 430],
              ['2018',502 ],
              ['2019',444 ],
            ]}
            options={{
              title: 'Overview of projects each year',
              chartArea: { width: '40%' },
              hAxis: {
                title: 'year',
                minValue: 0,
              },
              vAxis: {
                title: 'Number of projects',
              },
            }}
            legendToggle
          />
        </div>

      </div>
    );
  }
}

export default Portlet;