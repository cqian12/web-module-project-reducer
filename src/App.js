import React, { useReducer } from 'react';
import reducer, { initialState } from './reducers';
import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';
import { applyNumber,applyOp,applyClear,applyMC,applyMR,applyMP } from './actions';

function App() {

  const [state, dispatch] = useReducer(reducer,initialState)

  const clickNum = (num) => {
    dispatch(applyNumber(num))
  }

  const clickOp = (op) => {
    dispatch(applyOp(op))
  }

  const clickClear = () => {
    dispatch(applyClear())
  }

  const memP = () => {
    dispatch(applyMP())
  }

  const memR = () => {
    dispatch(applyMR())
  }

  const memC = () => {
    dispatch(applyMC())
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img width="40px" src="./Lambda-Logo-Red.png"/> Lambda Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation} </span>
              <span id="memory"><b>Memory:</b> {state.memory} </span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"} onClick = {() => memP()}/>
              <CalcButton value={"MR"} onClick = {() => memR()}/>
              <CalcButton value={"MC"} onClick = {() => memC()}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick = {() => clickNum(1)}/>
              <CalcButton value={2} onClick = {() => clickNum(2)}/>
              <CalcButton value={3} onClick = {() => clickNum(3)}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick = {() => clickNum(4)}/>
              <CalcButton value={5} onClick = {() => clickNum(5)}/>
              <CalcButton value={6} onClick = {() => clickNum(6)}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick = {() => clickNum(7)}/>
              <CalcButton value={8} onClick = {() => clickNum(8)}/>
              <CalcButton value={9} onClick = {() => clickNum(9)}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick = {() => clickOp('+')}/>
              <CalcButton value={"*"} onClick = {() => clickOp('*')}/>
              <CalcButton value={"-"} onClick = {() => clickOp('-')}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick = {() => clickClear()}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
