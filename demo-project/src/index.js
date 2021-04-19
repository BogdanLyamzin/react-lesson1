import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const address = "deep hell";
const name = "";
const label = <label htmlFor=""></label>
const input = <input />
const title = <h2>Welcome to <a href="/" className="welcome-link">hell</a>, {name ? name : "bitches"}!</h2>;
const user = {
  name: "Alex"
};
const arr = ["Мишка", "очень", "любит", "мед"];

ReactDOM.render(
  // <>
  // {label}
  // {null}
  // {/* {user} */}
  // {undefined}
  // {arr}
  // {input}
  //   {title}
  //   </>
  <App />
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
