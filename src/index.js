import React from 'react';
import ReactDOM from 'react-dom';
//import Image5 from "./images/img5.jpg";
import './index.css';
//import MediaCard from "./mediaCard";
import Learn_state from "./learn_state";
//import App from './App';
import * as serviceWorker from './serviceWorker';



/* function Gate({isOpen}){
  return <div>{ isOpen ? "is open" : "closed" }</div> ;
} */


ReactDOM.render(
/*(<MediaCard title="Hello heading title" body={<span>This is the body</span>} imageUrl = {Image5} />,
  document.querySelector("#root")),
  <Gate isOpen={false} />, document.querySelector("#root")*/

  <Learn_state />, document.querySelector("#root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();



// function Class3(props) {
//   return (
//     <div>
//       <p>
//         Hello: &nbsp; <strong>{props.name}</strong>{" "}
//       </p>
//       <p>Testing paragraph</p>
//       <p>som of two numbers using javascript => 5 + 10 : {5 + 10}</p>
//       <ul>
//         <li>Testing</li>

//         <li>testaad</li>
//       </ul>
//     </div>
//   );
// }

// ReactDOM.render(
//   <Class3
//     name="Owais Ahmed"
//     green={false}
//     width={64}
//     options={{ awesome: "yes", disabled: "no" }}
//   />,
//   document.querySelector("#root")
// );

