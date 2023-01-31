import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from '../components/App'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    // <Router>
    //   <Route path="/" component={App}/>
    // </Router>,
    <App/>,
    document.body.appendChild(document.createElement('div')),
  )
})