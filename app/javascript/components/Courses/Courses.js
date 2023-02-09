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
      <div>This is the Courses#index view</div>
      <ul>{list}</ul>
    </Fragment>
  );
}

export default Courses;