import React, { Component } from 'react'
import TableDataProject from './TableDataProject';

export default class ProjectManagement extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    {/* BEGIN EXAMPLE TABLE PORTLET*/}
                    <div className="portlet light portlet-fit bordered">
                        <div className="portlet-title">
                            <div className="caption">
                                <i className="icon-settings font-red" />
                                <span className="caption-subject font-red sbold uppercase">Editable Table</span>
                            </div>
                        </div>
                        <div className="portlet-body">
                            <div className="table-toolbar">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="btn-group">
                                            <button id="sample_editable_1_new" className="btn green"> Add New
                                                <i className="fa fa-plus" />
                                            </button>
                                        </div>
                                    </div>
                                
                                </div>
                            </div>
                            <TableDataProject/>
                            <TableDataProject/>
                            <TableDataProject/>
                        </div>
                    </div>
                    {/* END EXAMPLE TABLE PORTLET*/}
                </div>
            </div>

        )
    }
}
