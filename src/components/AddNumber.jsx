import React, { Component } from 'react';
import store from '../store';

export default class AddNumber extends Component {
  state = { size: 1 };
  render() {
    const chgVal = (e) => {
      this.setState({ size: Number(e.target.value) });
    }
    const addVal = () => {
      store.dispatch({
        type: 'INCREMENT',
        size: this.state.size
      });
    };
    return (
      <div>
        <h1>Add Number</h1>
        <input type="button" value="+" onClick={addVal}></input>
        <input type="text" value={this.state.size} onChange={chgVal}></input>
      </div>
    )
  }
}
