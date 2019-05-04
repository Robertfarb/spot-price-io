import React, { Component } from "react";
import { AgGridReact } from "ag-grid-react";

class TestTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columnDefs: [
        {
          headerName: "Product Description",
          field: "productDescription",
          sortable: true
        },
        {
          headerName: "Retail Bid",
          field: "retailBid",
          sortable: true
        },
        {
          headerName: "Retail Ask",
          field: "retailAsk",
          sortable: true
        }
      ],
      rowData: [
        {
          productDescription: "1964 JFK Half Dollar Caculated",
          retailBid: "$6.62",
          retailAsk: "$9.71"
        },
        {
          productDescription: "1964 JFK Half Dollar BU",
          retailBid: "$8.25",
          retailAsk: "$7.79"
        },
        {
          productDescription: "Silver Mercury Dime",
          retailBid: "$1.31",
          retailAsk: "$1.52"
        },
        {
          productDescription: "Silver Mercury Dime",
          retailBid: "$1.31",
          retailAsk: "$1.52"
        }
      ]
    };
  }
  
  render() {
    return (
      <div
        className="ag-theme-balham"
        style={{
          height: "500px",
          width: "600px",
        }}
      >
        <AgGridReact
          columnDefs={this.state.columnDefs}
          rowData={this.state.rowData}
        ></AgGridReact>
      </div>
    );
  }
}

export default TestTable;