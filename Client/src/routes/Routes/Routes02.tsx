import { Route, Routes } from "react-router-dom";
import { CsvUploader, Table } from "../../components";

const Routes02 = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<CsvUploader/>} />
        <Route path="/table" element={<Table/>} />
      </Routes>
    </div>
  );
};

export default Routes02;
