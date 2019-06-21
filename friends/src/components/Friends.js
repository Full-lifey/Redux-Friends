import React from 'react';
import { connect } from 'react-redux';

import { getFriends } from '../actions';

class Friends extends React.Component {
  componentDidMount() {
    this.props.getFriends();
  }

  render() {
    return (
      <div>
        <h1>Check Out My Friends</h1>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  friends: state.friends,
  error: state.error,
  fetchingFriends: state.fetchingFriends
});

export default connect(
  mapStateToProps,
  { getFriends }
)(Friends);
