import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './layout/Header';
import HomePage from './pages/HomePage';
import OrderPage from './pages/OrderPage';
import StockPage from './pages/StockPage';


class App extends Component {
  render() {
    return (
      <div>
        <Router basename={process.env.PUBLIC_URL}>
          <div>
            <Header/>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/stock"  component={StockPage}/>
            <Route exact path="/orders" componen={OrderPage}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
