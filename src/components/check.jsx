import React, { Component } from 'react'
import Video from './Video';
import New from './New';
import Popular from './Popular';

function check(Component) {
  return class extends React.Component {
    render() {
      if (this.props.views < 100) {
        return (
          <New>
            <Component {...this.props} />
          </New>
        )
      }
      if (this.props.views > 1000) {
        return (
          <Popular>
            <Component {...this.props} />
          </Popular>
        )
      }
      console.log(this.props);
      return <Component {...this.props} />;
    }
  };
}

export default check;