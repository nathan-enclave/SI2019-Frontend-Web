import React, { Component } from 'react';
import RowData from './RowData';
import getData from '../../../services/getDataEngineers'
class TableData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ""
    }

  }
  async componentWillMount() {
    const res = await getData()
    console.log(res);


    let dataRender = res.results.map((e, idx) =>
      (
        <RowData key={idx} firstName={e.firstName} 
                           lastName= {e.lastName}
                           englishName={e.englishName}
                           phoneNumber={e.phoneNumber}
                           address={e.address}
                           email={e.email}
                           skype={e.skype}
                           dayOffRemain={e.dayOffRemain}
        />
        
      )
    )
    this.setState({
      data: dataRender
    })
  }

  render() {
    console.log(this.state.data);

    return (
      <div className="table-scrollable">
        <table className="table table-striped table-bordered table-advance table-hover">
          <thead>
            <tr>
              <th style={{ fontWeight: 'bold' }}>First Name </th>
              <th style={{ fontWeight: 'bold' }}>Last Name </th>
              <th style={{ fontWeight: 'bold' }}>English Name </th>
              <th style={{ fontWeight: 'bold' }}>Phone Number </th>
              <th style={{ fontWeight: 'bold' }}>Email </th>
              <th style={{ fontWeight: 'bold' }}>Skype </th>
              <th style={{ fontWeight: 'bold' }}>Day off remain </th>
              <th style={{ fontWeight: 'bold' }}>View </th>
            </tr>
          </thead>
          <tbody>
            {this.state.data}
            {/* {this.state.data.results.map(e => <RowData firstName= {e.firstName} /> )} */}
            {/* <RowData />
                <RowData />
                <RowData /> */}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TableData;