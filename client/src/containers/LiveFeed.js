import React, { Component } from 'react';
import { connect } from 'react-redux';
import DataTable from "../components/universal/DataTable";
import { getLivePrices } from "../actions/price_actions";
import LoadingSpinner from './../components/universal/LoadingSpinner';
import "./../../src/App.css";


class LiveFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }

  componentDidMount() {
    const { getLivePrices } = this.props;
    this.interval = setInterval(() => {
      getLivePrices()
      .then(result => this.setState({loading: false}))
    }, 10000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { loading } = this.state;
    const { livePrices } = this.props;

    if (!livePrices || loading) {
      return (
        <LoadingSpinner />
      )
    } else {
      return (
        <div className="landing">
          <div className="dark-overlay landing-inner text-light">
            <div className="row">
              <div className="col-md-12 text-center table-parent">
                <DataTable livePrices={this.state.livePrices} {...this.props} />
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => ({
  livePrices: state.prices,
  errors: state.errors
})

export default connect(
  mapStateToProps,
  { getLivePrices }
)(LiveFeed);