import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import NavigationBar from "./components/navigationbar.component";
import Homepage from './components/homepage.component';

function App() {
  return (
    <div>
      <NavigationBar />
      <Homepage />
    </div>
  );
}

export default App;
