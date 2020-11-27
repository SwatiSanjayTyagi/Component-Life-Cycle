import React , {Component} from 'react'
import myUnmountingData from './myUnmountingData'
import {Link} from 'react-router-dom'
class UnMounting extends Component {
    constructor(props){
        super(props)
        this.state={
            unMountingData: myUnmountingData
        }
    }
    render() {
        return(
            <div className='createSpace'>
                <br/>
                The next phase in the lifecycle is when a component is removed 
                from the DOM, or unmounting as React likes to call it. <br/>
                React has only one built-in method that gets called when a component is unmounted: <br/>
                <ol> 
                    {this.state.unMountingData.map((items,index)=>{
                        return <li key={index}>
                            <Link to ={`/unMountingDetails/${items.evtId}`}>{items.evtSubType} </Link>
                            </li>
                    })}
                    
                </ol>

            </div>
        )
    }
}
export default UnMounting