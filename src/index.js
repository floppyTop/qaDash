import React from 'react';
import ReactDOM from 'react-dom';
import './css/App.scss';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import '../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
