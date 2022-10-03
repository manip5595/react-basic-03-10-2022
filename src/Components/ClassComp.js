import React, { Component } from 'react';

class ClassComp extends Component {
 render() {
  return <h1>this is class component from {this.props.location}</h1>
 }
}

export default ClassComp