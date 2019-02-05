import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './layout/Header';
import HomePage from './pages/HomePage';
import OrderPage from './pages/OrderPage';
import StockPage from './pages/StockPage';
import StatisticsPage from './pages/StatisticsPage';

class App extends Component {
  render() {
    return (
      <div className="lavado-app">
        <Router basename={process.env.PUBLIC_URL}>
          <div>
            <Header/>
            <Route exact path="/" component={HomePage}/>
            <Route path="/stock"  component={StockPage}/>
            <Route path="/orders" component={OrderPage}/>
            <Route path="/statistics" component={StatisticsPage}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
