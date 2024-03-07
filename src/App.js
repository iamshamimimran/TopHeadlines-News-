import React, { Component } from 'react';
import Navbar from './compnents/Navbar';
import News from './compnents/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default class App extends Component {
  apiKey = process.env.REACT_APP_API_KEY;

  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route
              exact
              path="/"
              element={<News key="general" category="general" apiKey={this.apiKey} />}
            />
            <Route
              exact
              path="/general"
              element={<News key="general" category="general" apiKey={this.apiKey} />}
            />
            <Route
              exact
              path="/business"
              element={<News key="business" category="business" apiKey={this.apiKey} />}
            />
            <Route
              exact
              path="/entertainment"
              element={<News key="entertainment" category="entertainment" apiKey={this.apiKey} />}
            />
            <Route
              exact
              path="/sports"
              element={<News key="sports" category="sports" apiKey={this.apiKey} />}
            />
            <Route
              exact
              path="/health"
              element={<News key="health" category="health" apiKey={this.apiKey} />}
            />
            <Route
              exact
              path="/science"
              element={<News key="science" category="science" apiKey={this.apiKey} />}
            />
            <Route
              exact
              path="/technology"
              element={<News key="technology" category="technology" apiKey={this.apiKey} />}
            />
          </Routes>
        </Router>
      </div>
    );
  }
}
