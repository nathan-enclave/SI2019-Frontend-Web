import React, { Component } from 'react';

class DefaultProject extends Component {
    render() {
        return (
            <div className="col-md-3">
            <div className="profile-sidebar">
                {/* PORTLET MAIN */}
                <div className="portlet light profile-sidebar-portlet bordered">
                    {/* SIDEBAR USERPIC */}
                    <div className="profile-userpic">
                        <img src="https://i2.wp.com/explorista.net/wp-content/uploads/2019/02/beautiful-places-in-the-netherlands.jpg?fit=1270%2C846&ssl=1" className="img-responsive" alt="pictu" /> </div>
                    {/* END SIDEBAR USERPIC */}
                    {/* SIDEBAR USER TITLE */}
                    <div className="profile-usertitle">
                        <div className="profile-usertitle-name"> <h4>{this.props.teamName} </h4></div>
                    </div>
                    {/* END SIDEBAR USER TITLE */}

                    {/* SIDEBAR MENU */}
                    {/* END MENU */}
                </div>
                {/* END PORTLET MAIN */}
                {/* PORTLET MAIN */}
                <div className="portlet light bordered">
                    {/* STAT */}
                    {/* END STAT */}
                    <div>
                        <h4 className="profile-desc-title">Enclave Software Engineer</h4>
                        <span className="profile-desc-text"> Our information. </span>
                        <div className="margin-top-20 profile-desc-link">
                            <i className="fa fa-globe" />
                            <a href="http://enclaveit.com/"> www.enclaveit.com</a>
                        </div>
                        <div className="margin-top-20 profile-desc-link">
                            <i className="fa fa-facebook" />
                            <a href="http://www.facebook.com/enclaveit/"> Enclave</a>
                        </div>
                    </div>
                </div>
                {/* END PORTLET MAIN */}
            </div>
            </div>

        );
    }
}

export default DefaultProject;