import React , {Component} from 'react'
import myUpdatingData from './myUpdatingData'
import {Link} from 'react-router-dom'
class Updating extends Component {
    constructor(props){
        super(props)
        this.state={
            updatingData: myUpdatingData
        }
    }
    render() {
        return(
            <div className='createSpace'>
                <br/>
              The next phase in the lifecycle is when a component is updated. <br/>
              A component is updated whenever there is a change in the component's state or props. <br/>
              React has five built-in methods that gets called, in this order, when a component is updated:
                <ol>
                    {this.state.updatingData.map((items,index) => {
                        return <li key={index}>
                            <Link to ={`/updatingDetails/${items.evtId}`}>{items.evtSubType} </Link>
                            </li>
                    })}
                </ol>
                The render() method is required and will always be called, the others are optional and will be called if you define them.
            </div>
        )
    }
}
export default Updating