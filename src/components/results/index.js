import React, { Component } from 'react';
import Page from './page';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Results extends Component {
  render() {
    const { results } = this.props;

    return (
      <Page
        results={ results }
        goTo={ (path) => this.props.history.push(path) }
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    results: state.results,
  };
};

export default withRouter(
  connect(mapStateToProps)(Results)
);
