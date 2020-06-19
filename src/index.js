import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';

function Class3(props) {
  return (
    <div>
      <p>
        Hello: &nbsp; <strong>{props.name}</strong>{" "}
      </p>
      <p>Testing paragraph</p>
      <p>som of two numbers using javascript => 5 + 10 : {5 + 10}</p>
      <ul>
        <li>Testing</li>

        <li>testaad</li>
      </ul>
    </div>
  );
}

ReactDOM.render(
  <Class3
    name="Owais Ahmed"
    green={false}
    width={64}
    options={{ awesome: "yes", disabled: "no" }}
  />,
  document.querySelector("#root")
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
