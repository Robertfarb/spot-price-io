import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getLivePrices } from "../actions/price_actions";

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
            <div className="col-md-12 text-center">
              <h1 className="display-3 mb-4">Spot Price IO Live Feed Page</h1>
              <p className="lead">This is where the live feed will live</p>
              <hr />
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