import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">Spot Price IO Live Feed Page</h1>
                <p className="lead">This is where the live feed will live</p>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Landing;