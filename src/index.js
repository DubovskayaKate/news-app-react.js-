import React from 'react';
import ReactDOM from 'react-dom';
import instance from './APINews';
import App from './App';

import './index.css';
import './images/img1.jpg';
import './images/banner.png';


ReactDOM.render(<App />, document.getElementById('root'));
instance.loadSources();



