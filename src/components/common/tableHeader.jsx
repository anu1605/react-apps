import React, { Component } from "react";

class TableHeader extends Component {
  raiseSort = (item) => {
    const { sortProperties } = this.props;
    let { sortItem, order } = sortProperties;

    if (sortItem == item) {
      order *= -1;
    } else {
      sortItem = item;
      order = 1;
    }

    this.props.onSort({ sortItem, order });
  };

  renderIcon = (column) => {
    const { sortItem, order } = this.props.sortProperties;
    if (column.sortItem != sortItem) return null;
    if (order == 1) return <i className="fa fa-sort-asc"> </i>;
    return <i className="fa fa-sort-desc"> </i>;
  };

  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map((column) => (
            <th
              key={column.sortItem || column.key}
              onClick={() => this.raiseSort(column.sortItem)}
            >
              {column.label} {this.renderIcon(column)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
