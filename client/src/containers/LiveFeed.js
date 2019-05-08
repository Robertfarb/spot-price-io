import React, { Component } from 'react';
import { connect } from 'react-redux';
import MatUiTable from "../components/universal/MatUiTable";
import { getLivePrices } from "../actions/price_actions";
import LoadingSpinner from './../components/universal/LoadingSpinner';
import "./../../src/App.css";

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2
  }
});

class LiveFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }

  componentWillMount() {
    this.props.getLivePrices()
    .then(result => this.setState({loading: false}));
  }

  render() {
    const { loading } = this.state;
    const { livePrices } = this.props;

    if (loading || !livePrices) {
      return (
        <LoadingSpinner />
      )
    } else {
      const { livePrices } = this.props
      
      return (
        <div className="landing">
          <div className="dark-overlay landing-inner text-light">
            <div className="row">
              <div className="col-md-12 text-center table-parent">
                <MatUiTable livePrices={this.state.livePrices} {...this.props} />
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