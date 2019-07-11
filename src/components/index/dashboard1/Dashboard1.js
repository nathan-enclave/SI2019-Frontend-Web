import React, { Component } from 'react';
import getTotal from '../../../services/GetTotal';
import CashStats from './CashStats';
import CashFlowPortlet from './CashFlowPortlet';
import ProfitPortlet from './ProfitPortlet';
import Receivable from './Receivable';
import Payable from './Payable';

class Dashboard1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                engineer: 0,
                project: 0,
                team: 0,
                manager: 5
            }
        }
    }
    async componentWillMount() {
        const res = await getTotal();
        this.setState({
            data: {
                engineer: res.engineer,
                project: res.project,
                team: res.team,
                manager: res.manager
            }
        });
    }
    render() {
        return (
            <div>
                <CashStats engineer={this.state.data.engineer}
                    project={this.state.data.project}
                    team={this.state.data.team}
                    manager={this.state.data.manager}
                />
                <CashFlowPortlet />
                <div className="col-lg-6 col-xs-12 col-sm-12">
                    <ProfitPortlet />
                </div>
                <div className="col-lg-6 col-xs-12 col-sm-12">
                    <div className="col-lg-6 col-xs-12 col-sm-6">
                        <Receivable />
                    </div>
                    <div className="col-lg-6 col-xs-12 col-sm-6">
                        <Payable />
                    </div>
                </div>
            </div>
        );
    }
}
export default Dashboard1;