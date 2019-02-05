import React, {Component} from 'react';
import glyphicons from 'glyphicons';
import StockItem from '../model/StockItem';
import './StockPage.css';
import StockService from '../services/StockService';

class StockPage extends Component {
    state = {stocks: []};

    constructor() {
        super();
        this.addNewStock = this.addNewStock.bind(this);
        this.removeEmptyStock = this.removeEmptyStock.bind(this);
        this.service = new StockService();
        this.getStocks();
    }

    render() {
        return (
            <div>
                <div className={this.state.stocks.length === 0 ? "overlay show" : "overlay hide"} >
                    <div className="spinner-border m-5" role="status"> </div>
                </div>
                <br/>
                <div className="container stockPage">
                    <h2>Stocul Curent:
                        <button type="button" className="btn btn-secondary addButton"
                                onClick={this.addNewStock}>{glyphicons.plus} Adauga nou
                        </button>
                    </h2>
                    <ul className="list-group">
                        {
                           this.state.stocks.map(stock => (
                                <li className="list-group-item" key={stock.id ? stock.id +"" : "0"} order={stock.id ? stock.id +"" : "0"}>
                                    <StockItem service={this.service} obj={stock} handleEmptyTarget={this.removeEmptyStock}/>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        )
    }

    removeEmptyStock() {
        this.state.stocks.shift();
        this.setState(this.state);
    }

    async getStocks() {
        this.setState({stocks: await this.service.getStocks()});
    }

    addNewStock() {
        this.state.stocks.unshift({productName: "", quantity: "", modificationDate: "", stockStatus: "", price: ""});
        this.setState(this.state);
    }
}

export default StockPage;
