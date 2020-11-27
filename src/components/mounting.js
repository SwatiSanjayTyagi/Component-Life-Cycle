import React , {Component} from 'react'
import myMountingData from './myMountingData'
import {Link} from 'react-router-dom'

class Mounting extends Component {
    constructor(props){
        super(props)
        this.state = {
            mountingData: myMountingData
        }
    }
    render() {
        return(
            <div className='createSpace'>
                <br/>
                Mounting means putting elements into the DOM. <br/>
                React has four built-in methods that gets called, in this order, when mounting a component:
                <ol>
                    {this.state.mountingData.map((items,index) => {
                        return <li key={index}>
                                <Link to ={`/mountingDetails/${items.evtId}`}>{items.evtSubType} </Link>
                                </li>
                    })}
                </ol>
                
                The render() method is required and will always be called, the others are optional and 
                will be called if you define them.


            </div>
        )
    }
}
export default Mounting