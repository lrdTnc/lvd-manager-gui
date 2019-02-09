import React, {Component} from 'react';
import glyphicons from 'glyphicons';
import StockItem from '../model/StockItem';
import StockService from '../services/StockService';

class StockPage extends Component {
    state = {stocks: [], loading: false};

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
                <div className={this.state.loading ? "overlay show" : "overlay hide"} >
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
                                    <StockItem service={this.service} obj={stock} updateLoading={this.updateLoading} handleEmptyTarget={this.removeEmptyStock}/>
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
        this.setState({stocks: await this.service.getStocks(), loading: false});
    }

    updateLoading(loading) {
        this.setState({stocks: this.state.stocks, loading: loading});
    }

    addNewStock() {
        this.state.stocks.unshift({productName: "", quantity: "", modificationDate: "", stockStatus: "", price: ""});
        this.setState(this.state);
    }
}

export default StockPage;
