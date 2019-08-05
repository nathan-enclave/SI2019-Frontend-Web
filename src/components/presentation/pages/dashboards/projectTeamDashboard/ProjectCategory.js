import React, {Component} from 'react';
import Chart from "react-apexcharts";
import DashboardContainer from "../../../../container/dashboard";
import { ClipLoader } from 'react-spinners';

export default class ProjectCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            load : true,
            options: {
                labels: [
                    'Tourism', 'Business', 'Education', 'Healthcare', 'Management'
                ],

                colors: [
                    '#273c75',
                    '#e1b12c',
                    '#e84118',
                    '#0097e6',
                    '#2ed573',
                    '#747d8c',
                    '#e056fd',
                    '#eccc68',
                    '#badc58',
                    '#fd79a8'
                ]
            },
            series: [14, 24, 25, 25, 40]
        }
    }
    async componentDidMount() {
        const data = await DashboardContainer.getStatistic('dashboard/statistic/projects/groupBy/category')
        this.setState({
            load : false,
            options: {
                ...this.state.options,
                labels: data.map(e => e.name)
            },
            series: data.map(e => e.projects)
        })
    }
    render() {
        return (
            <div className="portlet light bordered">
                <div className="portlet-title">
                    <div className="caption">
                        <i className="icon-bar-chart font-dark hide"/>
                        <span className="caption-subject font-dark bold uppercase">Project by category</span>
                    </div>
                </div>
                {/* chart here */}
                <div>
                {this.state.load === true ? (
          <div className='sweet-loading d-flex justify-center middle-loading-custom' >
            <ClipLoader
              sizeUnit={"px"}
              size={70}
              color={'#7ed6df'}
              loading={this.state.loading} />
          </div>
        ) : (
                    <Chart
                        options={this.state.options}
                        series={this.state.series}
                        type="donut"
                        width="80%"
                        // height="390"
                        />
        )}
                </div>
            </div>
        );
    }
}