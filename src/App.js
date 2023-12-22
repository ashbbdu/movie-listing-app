import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import { useEffect, useState } from "react";
import Table from "./components/Table";

function App() {
  const [tableData, setTableData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/products");
    const json = await data.json();
    setTableData(json.products);
    setFilterData(json.products);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {/* <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/movie/:id' element={<MovieDetails />} />
        </Routes> */}
      <Table
        tableData={tableData}
        filterData={filterData}
        setFilterData={setFilterData}
        tableHeader={{
          name: "name",
          email: "email",
          title: "title",
          description: "description",
        }}
      />
    </div>
  );
}

export default App;
