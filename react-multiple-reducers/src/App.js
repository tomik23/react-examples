import React, { Component } from 'react';
import './spectre.min.css';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="container grid-lg">
        <div className="columns col-oneline">
          <div className="column col-6">
            <div>
              <span>A:</span>
              <span>{this.props.a}</span>
            </div>
            <button onClick={() => this.props.updateA(this.props.b)}>Update A</button>
          </div>
          <div className="column col-6">
            <div>
              <span>B:</span>
              <span>{this.props.b}</span>
            </div>
            <button onClick={() => this.props.updateB(this.props.a)}>Update B</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    a: store.rA.a,
    b: store.rB.b
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateA: (b) => dispatch({ type: 'UPDATE_A', b: b }),
    updateB: (a) => dispatch({ type: 'UPDATE_B', a: a })
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);