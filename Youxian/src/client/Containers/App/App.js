import React, { Component } from 'react';
import Order from './Order';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch,
} from 'react-router-dom'
import './style.css'
import routers from './routeConfig.js'
import Foot from './Foot.js'
class App extends React.Component {
    constructor() {
        super()
        this.state = {
           
        }
    }
    
    render() {
        return (
            <Router>
                <div className="box">
                    <Switch>
                        <Route exact path='/' render = {()=>{return(<Redirect to='/first'/>)}}></Route>
                        {
                            routers.map((item,index)=>{
                                return <Route key={index} exact={item.exact} path={item.path} component={item.component}></Route>
                            })
                        }
                    </Switch>
                    <Foot/>
                </div> 
            </Router>
        )
    }
}
export default App;
