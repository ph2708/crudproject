import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Create from "./components/create";
import Read from "./components/read";
import Update from "./components/update";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route exact path="/create" element={<Create />} />
      <Route exact path="/read" element={<Read />} />
      <Route exact path="/update" element={<Update />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
