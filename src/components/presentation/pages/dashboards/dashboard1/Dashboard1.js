import React, { Component } from 'react';
// import getTotal from '../../../services/GetTotal';
import CashStats from './CashStats';
import CashFlowPortlet from './CashFlowPortlet';
import SalaryBand from './SalaryBand';
import StatMoney from './StatMoney';

class Dashboard1 extends Component {
    render() {
        return (
            <div className="FinanceDashboard">
                <CashStats />
                <CashFlowPortlet />
                <div className="col-lg-6 col-xs-12 col-sm-12">
                    <SalaryBand />
                </div>
                <div className="col-lg-6 col-xs-12 col-sm-12">
                    <StatMoney />
                </div>
            </div>
        );
    }
}
export default Dashboard1;