import React , {Component} from 'react';
import './App.css';
import { BrowserRouter , Route, Switch } from 'react-router-dom'
import Home from '../src/components/home'
import Mounting from '../src/components/mounting'
import Updating from '../src/components/updating'
import UnMounting from '../src/components/unMounting'
import MainPage from '../src/components/mainPage'
import mountingDetails from '../src/components/mountingDetails';
import updatingDetails from '../src/components/updatingDetails';
import unMountingDetails from '../src/components/unMountingDetails';

class App extends Component{
    constructor(props) {
        super(props)
    }
    render() {
        return(
                <BrowserRouter>
                <div className='Container'>
                    <MainPage/>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/mounting' component={Mounting}/>
                        <Route exact path='/mountingDetails/:evtId' component={mountingDetails}/>
                        <Route exact path='/updating' component={Updating}/>
                        <Route exact path='/updatingDetails/:evtId' component={updatingDetails}/>
                        <Route exact path='/unmounting' component={UnMounting}/>
                        <Route exact path='/unmountingDetails/:evtId' component={unMountingDetails}/>
                    </Switch>
                </div>
                </BrowserRouter>
            
        )
    }

}

export default App;
