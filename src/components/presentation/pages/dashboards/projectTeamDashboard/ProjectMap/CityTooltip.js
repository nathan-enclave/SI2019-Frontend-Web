import React, {Component} from 'react'
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
export default class CityTooltip extends Component {
    constructor() {
        super()
        this.state = {
            open: false
        }
    }
    handleTooltipClose() {
        this.setState({open: false})
    }
    handleTooltipOpen() {
        this.setState({open: true})
    }
    render() {
        return (
            <div>
                <Tooltip placement="top" title="Add">
                    <Button>Controlled</Button>
                </Tooltip>
            </div>
        )
    }

}
