import './App.css';
import React from "react";
import {Switch,Route} from 'react-router-dom';
import HomePage from "./pages/homepage/homepage.component";

const HatsPage =()=>(
  <div>
    <h1>Hats Page</h1>
  </div>
)
function App() {
  return (
    <div>
      <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route path='/hats' component={HatsPage}/>
      </Switch>
{/* <HomePage/> */}
     </div>
  );  
}

export default App;
