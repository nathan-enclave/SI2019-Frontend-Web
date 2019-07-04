import React, { Component } from 'react'

export default class EditProject extends Component {
  render() {
    return (
      <div className="col-md-8">
        <div className="portlet light bordered">
          <div className="portlet-title tabbable-line">
            <div className="caption caption-md">
              <i className="icon-globe theme-font hide" />
              <span className="caption-subject font-blue-madison bold uppercase">Profile Project</span>
            </div>
            <ul className="nav nav-tabs">
              <li className="active">
                <a href="#tab_1_1" data-toggle="tab">Edit Info</a>
              </li>
              {/* <li>
                <a href="#tab_1_2" data-toggle="tab">Change Avatar</a>
              </li>
              <li>
                <a href="#tab_1_3" data-toggle="tab">Change Password</a>
              </li> */}
            </ul>
          </div>
          <div className="portlet-body">
            <div className="tab-content">
              {/* PERSONAL INFO TAB */}
              <div className="tab-pane active" id="tab_1_1">
                <form role="form" action="#">
                  <div className="form-group">
                    <label className="control-label">Name</label>
                    <input type="text" placeholder="John" className="form-control" /> </div>
                  <div className="form-group">
                    <label className="control-label">Technology</label>
                    <input type="text" placeholder="Doe" className="form-control" /> </div>
                  <div className="form-group">
                    <label className="control-label">Time Start</label>
                    <input type="text" placeholder="+1 646 580 DEMO (6284)" className="form-control" /> </div>
                  <div className="form-group">
                    <label className="control-label">Time End</label>
                    <input type="text" placeholder="Design, Web etc." className="form-control" /> </div>
                  <div className="margiv-top-10">
                    <a href="javascript:;" className="btn green"> Save Changes </a>
                    <a href="javascript:;" className="btn default"> Cancel </a>
                  </div>
                </form>
              </div>
              {/* END PERSONAL INFO TAB */}
              {/* CHANGE AVATAR TAB */}
              <div className="tab-pane" id="tab_1_2">
                <p> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
                      eiusmod. </p>
                <form action="#" role="form">
                  <div className="form-group">
                    <div className="fileinput fileinput-new" data-provides="fileinput">
                      <div className="fileinput-new thumbnail" style={{ width: '200px', height: '150px' }}>
                        <img src="http://www.placehold.it/200x150/EFEFEF/AAAAAA&text=no+image" alt /> </div>
                      <div className="fileinput-preview fileinput-exists thumbnail" style={{ maxWidth: '200px', maxHeight: '150px' }}> </div>
                      <div>
                        <span className="btn default btn-file">
                          <span className="fileinput-new"> Select image </span>
                          <span className="fileinput-exists"> Change </span>
                          <input type="file" name="..." /> </span>
                        <a href="javascript:;" className="btn default fileinput-exists" data-dismiss="fileinput"> Remove </a>
                      </div>
                    </div>
                    <div className="clearfix margin-top-10">
                      <span className="label label-danger">NOTE! </span>
                      <span>Attached image thumbnail is supported in Latest Firefox, Chrome, Opera, Safari and Internet Explorer 10 only </span>
                    </div>
                  </div>
                  <div className="margin-top-10">
                    <a href="javascript:;" className="btn green"> Submit </a>
                    <a href="javascript:;" className="btn default"> Cancel </a>
                  </div>
                </form>
              </div>
              {/* END CHANGE AVATAR TAB */}
              {/* CHANGE PASSWORD TAB */}
              <div className="tab-pane" id="tab_1_3">
                <form action="#">
                  <div className="form-group">
                    <label className="control-label">Current Password</label>
                    <input type="password" className="form-control" /> </div>
                  <div className="form-group">
                    <label className="control-label">New Password</label>
                    <input type="password" className="form-control" /> </div>
                  <div className="form-group">
                    <label className="control-label">Re-type New Password</label>
                    <input type="password" className="form-control" /> </div>
                  <div className="margin-top-10">
                    <a href="javascript:;" className="btn green"> Change Password </a>
                    <a href="javascript:;" className="btn default"> Cancel </a>
                  </div>
                </form>
              </div>
              {/* END CHANGE PASSWORD TAB */}
              {/* PRIVACY SETTINGS TAB */}
              {/* END PRIVACY SETTINGS TAB */}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
