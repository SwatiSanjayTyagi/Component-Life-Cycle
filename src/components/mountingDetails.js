import React , {Component } from  'react'
//import myMountingData from './myMountingData'
import mountdata from './myArray'
class mountingDetails extends  Component {
    constructor(props){
        super(props)
        this.state={
            mountingDetailData: mountdata.myMountingData,
            currentMounting: {}
        }
    }
    componentDidMount() {
        const myMount = this.state.mountingDetailData.find(items => items.evtId == this.props.match.params.evtId)
        this.setState({currentMounting: myMount})
    }
    render() {
        const {currentMounting} = this.state
        console.log(this.props , 'in details')
        return(
            <div className='createSpace'> 
                <br/>
                <div><strong>{currentMounting.evtSubType}</strong></div>
                <br/>
                <div>{currentMounting.evtDesc}</div>
            </div>
        )
    }
}

export default mountingDetails