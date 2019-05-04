import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TestTable from './universal/TestTable';

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center table-parent">
                <TestTable />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Landing;