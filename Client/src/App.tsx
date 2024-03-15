import React, { ChangeEvent, useState } from "react";
import "./App.css";
import { upload } from "@testing-library/user-event/dist/upload";
import axios from "axios";
import { CsvUploader, Table } from "./components";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CsvUploader />} />
        <Route path="/table" element={<Table />} />
      </Routes>
    </div>
  );
}

export default App;
