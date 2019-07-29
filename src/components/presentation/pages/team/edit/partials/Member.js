import React, {Component} from 'react'

import MemberOption from "./MemberOptions";
import { ClipLoader } from 'react-spinners';

export default class Member extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listMembers: [],
            error: "",
            numMembers: 0,
            isExpanded: false,
            loading:false
        }
    }
    async handleExpand(status) {
        console.log(status.index);
        
        const currentMembers = this.state.listMembers
        
        const index = currentMembers.findIndex(e => e.index === status.index)

        if (index >= 0) {
            currentMembers[index] = status
        } else {
            currentMembers.push(status)
        }
        if (status.isDeleted) {
            const indexDel = currentMembers.findIndex(e => e.index === status.index)
            currentMembers.splice(indexDel, 1)
        }
        await this.setState({listMembers: currentMembers})
        this
            .props
            .getData(this.state.listMembers)
    }

    handleAddMore = (e) => {
        e.preventDefault()
        this.setState({
            numMembers: this.state.numMembers + 1
        })
    }

    async componentWillMount() {
       
        await this.setState({listMembers: this.props.memberSelected.map((e, idx)=>{
            return {
                data: {
                    id: e.member.value,
                    role: e.role.value
                },
                index: idx
            }
           
        }), numMembers: this.props.memberSelected.length})
    }    
    render() {
        console.log(this.state.numMembers )

        console.log(this.props.memberSelected.length)
        const dataRender = []
        for (let i = 0; i < this.state.numMembers; i += 1) {
            dataRender.push(<MemberOption
                keyIndex={i}
                key={i}
                data={this.props.memberSelected[i]}
                options={this.props.options}
                handleExpand={this
                .handleExpand
                .bind(this)}/>)
        };
        
        return (        
            <div className="Skills">
                {this.state.loading ? 
                (<div className='sweet-loading d-flex justify-center'>
                <ClipLoader 
                  sizeUnit={"px"}
                  size={25}
                  color={'#123abc'}
                  loading={this.state.loading}
                />
                </div>): dataRender
                }
               
                <div className="row">
                    <div className="col-12">
                        <div
                            className="margin-top-10"
                            style={{
                            textAlign: 'center'
                        }}>
                            <button className="btn yellow" onClick={(event) => this.handleAddMore(event)}>
                                Add more member
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
