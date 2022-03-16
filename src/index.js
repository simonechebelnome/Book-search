import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import Details from './Details';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import rootReducer from './rootReducer';
import './styles/index.css';
import './styles/scss/background.scss';

const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/details" element={<Details />}/>
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);