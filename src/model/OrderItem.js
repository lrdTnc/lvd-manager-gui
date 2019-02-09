import React, {Component} from 'react';
import "./OrderItem.css";
import * as glyphicons from "glyphicons";
import Product from "./Product";

class OrderItem extends Component {

    render() {
        return (
            <div>
                <div className="row listItemRow">
                    <div className="col-xs-6 col-sm-3 col-md-3 col-lg-1">
                        <label>Nr.</label>
                        <input className="form-control" type="text"
                               value="1234567"/>
                    </div>
                    <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                        <label>Status</label>
                        <input className="form-control" type="text"
                               value="REZERVAT"/>
                    </div>
                    <div className="col-xs-12 col-sm-4 col-md-4 col-lg-2">
                        <label>Data </label>
                        <input className="form-control" type="text" value="01.01.1993"/>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                        <label>Client</label>
                        <input className="form-control" type="text" value="Antoniu Ienciu"/>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                        <label>Date de contact </label>
                        <input className="form-control" type="text" value="0734567890, exemplu.email@adresa.ro"/>
                    </div>

                    <div className="buttonsContainer">
                        <button type="button" className="btn btn-secondary" hidden>{glyphicons.crossHeavy}</button>
                        <button type="button" className="btn btn-secondary" hidden>{glyphicons.checkHeavy}</button>
                        <button type="button" className="btn btn-secondary">{glyphicons.pencil}</button>
                    </div>
                </div>
                <div className="row margin-top-small">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div className="blue-border-top padding-top-xs">
                            <label>Produse Comandate</label>
                            <Product/>
                            <Product/>
                            <Product/>
                        </div>

                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div className="blue-border-top padding-top-xs">
                            <label>Total: <strong>450 RON</strong></label>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div className="black-border-top padding-top-xs">
                            <label>Observatii</label>
                            <textarea class="form-control" rows="5"></textarea>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default OrderItem;
