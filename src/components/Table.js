import React, { useState } from "react";

const Table = ({ tableData, tableHeader, filterData, setFilterData }) => {
  const [value, setValue] = useState("");
  const handleSearch = (event) => {
    const data = tableData.filter(
      (res) =>
        res.title.toLowerCase().includes(value.toLowerCase()) ||
        res.description.toLowerCase().includes(value.toLowerCase())
    );
    setFilterData(data);
  };
  return (
    <>
      <div>
        <input type="text" onChange={(e) => setValue(e.target.value)} />
         <button onClick={handleSearch}>Search</button>
      </div>
      <table>
        <thead>
          <tr>
            <th scope="col">{tableHeader.title}</th>
            <th scope="col">{tableHeader.description}</th>
          </tr>
        </thead>
        <tbody>
          {filterData?.map((res) => {
            return (
              <tr key={res.id}>
                <th scope="row">{res.title}</th>
                <td>{res.description}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Table;
