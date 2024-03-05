import React, { Component } from 'react';
import loading from './img/loading.gif';
export default class Loading extends Component {
  render() {
    return (
      <div className='text-center' >
        <img width="70" height="70" src={loading} alt="Loading"/>
      </div>
    )
  }
}
