import React from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import {getAll} from "./service/StudentService.js";
import HeaderComponent from "./class_component/HeaderComponent.jsx";
import List from "./component/List.jsx";
import {Route, Routes} from "react-router";
import Home from "./component/Home.jsx";
import Add from "./component/Add.jsx";
import Detail from "./component/Detail.jsx";
import {ToastContainer} from "react-toastify";
function App() {
  return (
      <>
          <HeaderComponent/>
          <Routes>
              <Route path={'/home'} element={<Home/>}/>
              <Route path={'/student'} element={<List/>}/>
              <Route path={'/student/add'} element={<Add/>}/>
              <Route path={'/student/detail/:id'} element={<Detail/>}/>
          </Routes>
          <ToastContainer/>
        </>

  );
}

export default App
