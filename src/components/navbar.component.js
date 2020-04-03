import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Quiz App</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/questionlist" className="nav-link">Questions List</Link>
          </li>
          <li className="navbar-item">
          <Link to="/add" className="nav-link">Add Questions</Link>
          </li>          
        </ul>
        </div>
      </nav>
    );
  }
}