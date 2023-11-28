import React, { Component } from "react";
 

import {
  createBrowserRouter,
  RouterProvider,
  Link,
} from "react-router-dom";

import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import Blogs from './pages/Blogs';
import Toolbar from './pages/Toolbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Instructors from "./pages/Instructors";
import Location from "./pages/Location";
import Classes from "./pages/Classes";
import CreateBlog from "./pages/CreateBlog";


function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div><Toolbar/><Home/></div>,
    },
    {
      path: "/home",
      element: <div><Toolbar/><Home/></div>,
    },
    {
      path: "/classes",
      element: <div><Toolbar/><Classes/></div>,
    },
    {
      path: "/instructors",
      element: <div><Toolbar/><Instructors/></div>,
    },
    {
      path: "/locations",
      element: <div><Toolbar/><Location/></div>,
    },
    {
      path: "/blogs",
      element: <div><Toolbar/><Blogs/></div>,
    },
    {
      path: "/contactus",
      element: <div><Toolbar/><ContactUs/></div>,
    },
    {
      path: "/CreateBlog",
      element: <div><Toolbar/><CreateBlog/></div>,
    }
  ]);

  return (
    <div className="container-fluid" style={{overflow: "auto", position: "absolute" }}>
      {/* <React.StrictMode> */}
        <RouterProvider router={router} />
      {/* </React.StrictMode> */}
    </div>
  );
}

export default App;
