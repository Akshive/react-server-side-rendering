import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import {handleModifyANswerVots} from '../shared/utility'
// ReactDOM.render(<App />, document.getElementById("container"));

let state = undefined;
fetch("http://localhost:7777/data")
  .then((data) => data.json())
  .then((json) => {
    state = json;
    console.log("Got the state", state);
    render();
  });

function handleVots(answerId, increment) {
  state.answers = handleModifyANswerVots(state.answers, answerId, increment);
  fetch(`vote/${answerId}?increment=${increment}`)
  render();
}

function render() {
    console.log(handleModifyANswerVots)
  ReactDOM.hydrate(<App {...state} handleModifyANswerVots={handleVots}/>, document.getElementById("container"));
}
