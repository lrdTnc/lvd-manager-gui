import React, {Component} from 'react';
import {Container,ListGroup, ListGroupItem, Button} from 'reactstrap';
import glyphicons from 'glyphicons';
import StockItem from '../model/StockItem';
import './StockPage.css';

class StockPage extends Component {
  constructor() {
    super();
    this.state = { stocks : [] };
    this.addNewStock = this.addNewStock.bind(this);
    this.removeEmptyStock = this.removeEmptyStock.bind(this);
    this.getStocks();
  }

  render() {
    return(
      <div>
        <br/>
        <Container className="stockPage">
          <h2>Stocul Curent:<Button className="addButton" onClick={this.addNewStock}>{glyphicons.plus} Adauga nou</Button></h2>
          <ListGroup>
            {
            this.state.stocks.map(stock => (
              <ListGroupItem key={stock.id? stock.id : "0"}><StockItem obj={stock} handleEmptyTarget={this.removeEmptyStock}></StockItem></ListGroupItem>
            ))
          }
          </ListGroup>
        </Container>
      </div>
    )
  }
  removeEmptyStock() {
    this.state.stocks.shift();
    this.setState(this.state);
  }
  addNewStock() {
    this.state.stocks.unshift({});
    this.setState(this.state);
  }
  async getStocks() {
    //todo move to stockService
    const response = await fetch('/stocks');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return this.setState({stocks: body});
  }
}

export default StockPage;
