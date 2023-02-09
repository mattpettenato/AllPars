import React, { useState, useEffect, Fragment } from "react";
import axios from 'axios'

const Courses = () => {
  const [courses, setCourses] = useState([])

  useEffect(()=> {
    // get all courses from api
    // update courses in our state

    axios.get('/api/v1/courses.json')
    .then( resp => {
      setCourses(resp.data.data)
    } )
    .catch( resp => console.log(resp) )
  }, [courses.length])

  const list = courses.map( item => {
    return (<li key={item.attributes.name}>{item.attributes.name}</li>)
  })

  return (
    <Fragment>
      {/* <div>This is the Courses#index view</div> */}
      <div className="home">
        <div className="header">
          <h1>AllPars</h1>
          <p className="subheader">Looking for the best golf? We got you covered.</p>
        </div>
        <div className="grid">
          <ul>{list}</ul>
        </div>
      </div>
    </Fragment>
  );
}

export default Courses;