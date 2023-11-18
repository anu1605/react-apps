import React, { Component } from "react";

import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const Table = ({ columns, sortProperties, onSort, listItems }) => {
  return (
    <table id="table" className="table">
      <TableHeader
        columns={columns}
        sortProperties={sortProperties}
        onSort={onSort}
      />

      <TableBody data={listItems} columns={columns} />
    </table>
  );
};

export default Table;
