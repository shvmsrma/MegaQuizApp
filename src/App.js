import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/navbar.component"
import QuestionsList from "./components/questionslist.component";
import AddQuestion from "./components/add-question.component";
import MainComponent from "./components/maincomponent"


function App() {
  return (
    <Router>
      <div class="container">
    <Navbar />
  <br/>
  <Route path="/questionlist" component={QuestionsList} />
  <Route path="/add" component={AddQuestion} />
  <Route path = "/" exact component = {MainComponent} />
    </div>
    </Router>
    
  );
}

export default App;
