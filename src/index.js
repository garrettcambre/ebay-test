import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as firebase from 'firebase';

// import PropTypes from "prop-types";
// import { configure, BarcodePicker as ScanditSDKBarcodePicker } from "scandit-sdk";
// import * as ScanditSDK from "scandit-sdk";
// import { ScanSettings, Barcode } from "scandit-sdk";
// import ScanditBarcodeScanner from "scandit-sdk-react";

var fireConfig = {
  apiKey: "AIzaSyBohOusl4XbLjR4E-0YauGbhaJeXXgW5Y4",
  authDomain: "feisty-tempest-199515.firebaseapp.com",
  databaseURL: "https://feisty-tempest-199515.firebaseio.com",
  projectId: "feisty-tempest-199515",
  storageBucket: "feisty-tempest-199515.appspot.com",
  messagingSenderId: "451790528783"
};
  firebase.initializeApp(fireConfig);



ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


export {firebase};
