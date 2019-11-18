import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
//import CreateData from './containers/createdata/CreateData';
//import "filepond/dist/filepond.min.css";
//import ImageUploader from './containers/imageuploader/ImageUploader'
//import ImageSlider from './components/imageslider/ImageSlider';
//import Slide from './components/imageslider/slide/Slide';
//import Alert from './components/alertcard/Alert';

const app = <BrowserRouter><App /></BrowserRouter>;

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
