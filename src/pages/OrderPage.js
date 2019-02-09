import React, {Component} from 'react';
import * as glyphicons from "glyphicons";
import OrderItem from "../model/OrderItem";

class OrderPage extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <br/>
                    <h2>Lista Comenzilor:
                        <button type="button" className="btn btn-secondary addButton"
                                onClick={this.addNewOrder}>{glyphicons.plus} Adauga comanda
                        </button>
                    </h2>
                    <ul className="list-group">
                        <li className="list-group-item margin-bottom-small drop-shadow"><OrderItem/></li>
                        <li className="list-group-item margin-bottom-small drop-shadow"><OrderItem/></li>
                        <li className="list-group-item margin-bottom-small drop-shadow"><OrderItem/></li>
                        <li className="list-group-item margin-bottom-small drop-shadow"><OrderItem/></li>
                        <li className="list-group-item margin-bottom-small drop-shadow"><OrderItem/></li>
                    </ul>
                </div>
            </div>
        )
    }

    addNewOrder() {
        alert("Not yet Implemented");
    }
}

export default OrderPage;
