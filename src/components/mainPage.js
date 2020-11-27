// this file does not have any routing process its stationary
import React , {Component}  from 'react'
import {Link} from 'react-router-dom' // adding Link
import marray from './myArray'

class MainPage extends Component {
    constructor(props){
        super(props)
        this.state={
            headArray: marray.mainArray
        }
    }
    render(){
        return(
                <div className='head'>
                    <h1> Component Life Cycle</h1>
                    {this.state.headArray.map((items,index) => {
                        return <Link className='createSpace' to ={items.link}>{items.path}</Link>    
                    })}
                    {/* <Link className='createSpace' to ='/'>Home Page</Link>
                    <Link className='createSpace' to ='/mounting'>Mounting</Link>
                    <Link className='createSpace' to ='/updating'>Updateting</Link>
                    <Link className='createSpace' to ='/unmounting'>Unmounting</Link> */}
                </div>
        )
    }
}

export default MainPage