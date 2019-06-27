/*import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
*/

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import Tryreact from './tryreact'
import Reactform from './Reactform'
import './samplereactcss.css'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
        //<Tryreact firstname="Sri" lastname="Shilesh"/> //Always begin the component name with a Capital letter
        <Reactform/>
        , document.getElementById('abc'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
