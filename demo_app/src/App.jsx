import React from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import {getAll} from "./service/StudentService.js";
import Header from "./component/HeaderComponent.jsx";
import HeaderComponent from "./component/HeaderComponent.jsx";
import ListComponent from "./component/ListComponent.jsx";
function App() {
  return (
      <>
          <HeaderComponent/>
          <ListComponent/>
        </>

  );
}

export default App
