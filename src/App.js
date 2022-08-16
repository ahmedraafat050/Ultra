import React, { Component } from "react";
import All from "./components/all";
import NavBar from "./components/NavBar";
import Contact from "./components/Contact";

import { BrowserRouter, Route, Routes } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<All />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
