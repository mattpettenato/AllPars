import React from 'react'
import ReactDOM from 'react-dom'
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from '../components/App'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<App />}/>
      </Routes>
    </BrowserRouter>,
  document.body.appendChild(document.createElement('div')),
  )
})