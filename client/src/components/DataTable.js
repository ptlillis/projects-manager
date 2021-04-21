import React from "react";
import DataBody from "./DataBody";
// import "../styles/DataTable.css";

function DataTable() {
  return (
    <div className="datatable mt-5">
      <table
        id="table"
        className="table table-striped table-hover table-condensed"
      >
        {/* <thead>
          <tr>
              return (
                <th>
                </th>
              );
          </tr>
        </thead> */}

        <DataBody />
      </table>
    </div>
  );
}

export default DataTable;
