import React from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import {getAll} from "./service/StudentService.js";
import HeaderComponent from "./class_component/HeaderComponent.jsx";
import List from "./component/List.jsx";
function App() {
  return (
      <>
          <HeaderComponent/>
          <List/>
        </>

  );
}

export default App
