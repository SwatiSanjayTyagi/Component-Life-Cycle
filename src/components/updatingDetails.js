import React , {Component} from 'react'
import myUpdatingData from './myUpdatingData'

class updatingDetails extends Component {
    constructor(props){
        super(props)
        this.state={
            updatingDetailData: myUpdatingData ,
            currentUpdating: {}            
        }
    }
    componentDidMount() {
        const myUpdate = this.state.updatingDetailData.find(items => items.evtId == this.props.match.params.evtId)
        this.setState({currentUpdating: myUpdate})
    }
    render() {
        const {currentUpdating} = this.state
        console.log(this.props , 'in details')
        return(
            <div className='createSpace'> 
                <br/>
                <div><strong>{currentUpdating.evtSubType}</strong></div>
                <br/>
                <div>{currentUpdating.evtDesc}</div>
            </div>
        )
    }
}

export default updatingDetails