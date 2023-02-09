import React, { useState, useEffect, Fragment } from "react";
import axios from 'axios'
import Course from "./Course";

const Courses = () => {
  const [courses, setCourses] = useState([])

  // useEffect(()=> {
  //   // get all courses from api
  //   // update courses in our state

  //   axios.get('/api/v1/courses.json')
  //   .then( resp => {
  //     setCourses(resp.data.data)
  //   } )
  //   .catch( resp => console.log(resp) )
  // }, [courses.length])

  useEffect(()=> {
    // get all courses from api
    // update courses in our state

    axios.get('/api/v1/courses.json')
    .then( resp => setCourses(resp))
    .catch( data => console.log('error', data) )
  }, [])

  console.log(courses)
  if (courses.data){

    const list = courses.data.data.map( (course, index) => { 
      const { name, image_url, slug} = course.attributes
      return (
        <Course 
        key={index}
        name={name}
        image_url={image_url}
        slug={slug}
        // attributes={course.data.attributes}
        />
        )
      })
      
      
      
      return (
        <Fragment>
      {/* <div>This is the Courses#index view</div> */}
      <div className="home">
        <div className="header">
          <h1>AllPars</h1>
          <p className="subheader">Looking for the best golf? We got you covered.</p>
        </div>
        <div className="list">
          <ul>
            {list}
          </ul>
        </div>
      </div>
    </Fragment>
  );
} else {
  return null
}
}

export default Courses;