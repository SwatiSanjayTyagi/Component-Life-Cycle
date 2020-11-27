import React , {Component} from 'react'
import myUnmountingData from './myUnmountingData'

class unMountingDetails extends Component {
    constructor(props){
        super(props)
        this.state={
            unMountingDetailData: myUnmountingData ,
            currentUnMounting: {}            
        }
    }
    componentDidMount() {
        const myUnMount = this.state.unMountingDetailData.find(items => items.evtId == this.props.match.params.evtId)
        this.setState({currentUnMounting: myUnMount})
    }
    render() {
        const {currentUnMounting} = this.state
        console.log(this.props , 'in details')
        return(
            <div className='createSpace'> 
                <br/>
                <div><strong>{currentUnMounting.evtSubType}</strong></div>
                <br/>
                <div>{currentUnMounting.evtDesc}</div>
            </div>
        )
    }
}

export default unMountingDetails