import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// const {MongoClient}=require('mongodb');
// const url = 'mongodb://localhost:3001';
// const client = new MongoClient(url);

// async function getData()
// {
//   let result = client.connect();
//   let db= result.db('iecse');
//   let collection = db.collection('formdata');
//   let response = await collection.find({}).toArray();
//   console.log(response);
// }

// getData();


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
