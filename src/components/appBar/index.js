import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Page from './page';
import findSuggestions from './../../redux/actions/findSuggestions';
import findResults from './../../redux/actions/findResults';

class IAppBar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      text: ''
    };
  }

  onChangeText = text => {
    this.setState({ text });
    const sug = this.props.findSuggestions(text);
  }

  onChangeSelection = text => {
    this.setState({ text });
    this.props.findResults(text);

    if (this.props.match.path !== '/results') {
      this.props.history.push('/results');
    }
  }

  render() {
    const { text, suggestions } = this.props;

    return (
      <Page
        text={ text }
        suggestions={ suggestions }
        onChangeText={ this.onChangeText }
        onChangeSelection={ this.onChangeSelection }
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    suggestions: state.suggestions,
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     findSuggestions: text => dispatch(findSuggestions(text)),
//   };
// };
const mapDispatchToProps = {
  findSuggestions,
  findResults,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(IAppBar)
);
