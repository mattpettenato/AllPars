import React, { useState, useEffect } from "react";
import axios from 'axios'

const Courses = () => {
  const [courses, setCourses] = useState([])

  useEffect(()=> {
    // get all courses from api
    // update courses in our state

    axios.get('/api/v1/courses.json')
    .then( resp => console.log(resp) )
    .catch( resp => console.log(resp) )
  }, [courses.length])

  return (
      <div>This is the Courses#index view</div>
  );
}

export default Courses;