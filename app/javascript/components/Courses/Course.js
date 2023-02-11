import React from "react";
import { BrowserRouter as Router, Link } from 'react-router-dom'



// const Course = (props) => {
//   const {name, image_url, slug} = props.attributes

const Course = ({ name, image_url, slug, ...props}) => {

  return (
    <div className="card">
      <div className="course-main-pic">
        {/* <img src={image_url} alt={name} width="50"/> */}
        <img src={image_url} alt={name} width='50%'/>

      </div>
      <div>
        <h3>{name}</h3>
      </div>
      <div className="course-name">
        {name}
      </div>

      <div className="link-wrapper">
        <a to={"/" + slug}>View Golf Course</a>
      </div>
    </div>
  )
}

export default Course