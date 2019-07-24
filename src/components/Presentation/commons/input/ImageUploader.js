import React, {Component} from 'react'

export default class ImageUploader extends Component {
    constructor(props) {
        super(props)
        this.state = {
            file:this.props.data? this.props.data: 'http://s3.amazonaws.com/37assets/svn/765-default-avatar.png',
            status: this.props.status
        }
        this.handleChange = this
            .handleChange
            .bind(this)
    }
    handleChange(event) {
        this.setState({
            file: URL.createObjectURL(event.target.files[0])
        })
        this.props.function(event.target.files[0]);
    }
    handleCancel() {
        const img = document.getElementsByClassName("avatar-preview")[0];
        img.src = 'http://s3.amazonaws.com/37assets/svn/765-default-avatar.png'
    }
   
    render() {
        return (

            <div className="Uploader">
                   <div className="image-preview-area">
                        <div className="border-close">
                            <div className="close" onClick={()=>this.handleCancel()}></div>
                        </div>
                        <img src={this.state.file}  alt="file-upload" className="avatar-preview"/>
                    </div>

                    <div className="btn green relative">
                        <input
                            type="file"
                            onChange={this.handleChange}
                            name={this.props.name}
                            className="upload-image-preview-input"/>
                            <div className="inline-block title-upload">Upload</div>
                        
                    </div>
            </div>
        );
    }
}
