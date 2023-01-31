// import React from "react";
import React, { Component } from 'react';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Courses from "./Courses/Courses";
import Course from "./Course/Course";


class App extends Component {
  render() {
    return (
      
        <Routes>
          <Route path="/" element={<Courses />} />
          <Route path="/course/:slug" element={<Course />} />
        </Routes>
      
    );
  }
}

export default App;