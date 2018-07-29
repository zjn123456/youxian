import React from 'react'
import ReactDom from 'react-dom'
import App from './Containers/App'

// import {
//     BrowserRouter as Router,
//     Route,
// } from 'react-router-dom'
// import {createStore} from 'redux'
// import {Provider} from 'react-redux'
// const store =createStore(reducers)
// console.log(store.getState())
ReactDom.render(
    <App age={18}/>,
    document.getElementById('app')
)


