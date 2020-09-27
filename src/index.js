import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import './css/Navbar.css';
import './css/About.css';
import './css/Social.css';
import './css/Work.css';
import './css/Education.css';
import './css/Skills.css';
import './css/Footer.css';
import Navbar from './Components/Navbar.js';
import About from './Contents/About.js';
import Work from './Contents/Work.js';
import Education from './Contents/Education.js';
import Skills from './Contents/Skills.js';
import Footer from './Components/Footer.js';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router} from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';

ReactDOM.render(
    <Router>
        <Navbar />
        <About />
        <Work />
        <Education />
        <Skills />
        <Footer />
    </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
