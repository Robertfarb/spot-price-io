import React, { Component } from 'react';
import { connect } from 'react-redux';
import TestTable from "../components/universal/TestTable";
import { getLivePrices } from "../actions/price_actions";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

class LiveFeed extends Component {
  constructor(props) {
    super(props);
    this.state={

    }
  }

  componentWillMount() {
    this.props.getLivePrices();
  }
  
  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="row">
            <div className="col-md-12 text-center table-parent">
              {/* <ReactTabulator columns={columns} data={data} /> */}
              <TestTable />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  livePrices: state.livePrices,
  errors: state.errors
})

export default connect(
  mapStateToProps,
  { getLivePrices }
)(LiveFeed);