import React, {Component} from 'react';
import "./StockItem.css";

import glyphicons from 'glyphicons';

class StockItem extends Component {
    state = {target: {}, disabled: false};

    editStock() {
        this.initTarget = Object.assign({}, this.state.target);
        this.setState({disabled: false, target: this.state.target});
    }

    cancelChanges() {
        this.setState({disabled: "disabled", target: this.initTarget});
        if (!this.initTarget.id) {
            this.handleEmptyTarget();
        }
    }

    async saveStock() {
        this.setState({disabled: "disabled", target: await this.service.saveStock(this.state.target)});
    }

    constructor(props) {
        super(props);
        this.editStock = this.editStock.bind(this);
        this.handleChange = this.handleChangeFn.bind(this);
        this.saveStock = this.saveStock.bind(this);
        this.cancelChanges = this.cancelChanges.bind(this);
        this.initTarget = props.obj;
        this.service = props.service;
        this.handleEmptyTarget = props.handleEmptyTarget;
        this.state.disabled = props.obj.id ? "disabled" : false;
        this.state.target = this.initTarget;
    }

    handleChangeFn(attr) {
        return function (e) {
            var updatedTarget = this.state.target;
            updatedTarget[attr] = e.target.value;
            this.setState({disabled: false, target: updatedTarget});
        }.bind(this);
    }

    render() {
        return (
            <div className="row stockItemRow">
                <div className="col-xs-10 col-sm-10 col-md-11 col-lg-5">
                    <label>Produs</label>
                    <input className="form-control" onChange={this.handleChangeFn('productName')} disabled={this.state.disabled} type="text"
                           value={this.state.target.productName}/>
                </div>
                <div className="col-xs-6 col-sm-6 col-md-3 col-lg-1">
                    <label>Cantitate</label>
                    <input  className="form-control" disabled={this.state.disabled} onChange={this.handleChangeFn('quantity')} type="text"
                           value={this.state.target.quantity}/>
                </div>
                <div className="col-xs-6 col-sm-6 col-md-3 col-lg-2">
                    <label>Data Actualizare</label>
                    <input  className="form-control" disabled={this.state.disabled} onChange={this.handleChangeFn('modificationDate')} type="text"
                           value={this.state.target.modificationDate}/>
                </div>
                <div className="col-xs-6 col-sm-6 col-md-3 col-lg-2">
                    <label>Status</label>
                    <input  className="form-control" disabled={this.state.disabled} onChange={this.handleChangeFn("stockStatus")} type="text"
                           value={this.state.target.stockStatus}/>
                </div>
                <div className="col-xs-6 col-sm-6 col-md-3 col-lg-1">
                    <label>Pret</label>
                    <input  className="form-control" disabled={this.state.disabled} onChange={this.handleChangeFn("price")} type="text"
                           value={this.state.target.price}/>
                </div>
                <div className="buttonsContainer">
                    <button type="button" className="btn btn-secondary" hidden={this.state.disabled}
                            onClick={this.cancelChanges}>{glyphicons.crossHeavy}</button>
                    <button type="button" className="btn btn-secondary" hidden={this.state.disabled}
                            onClick={this.saveStock}>{glyphicons.checkHeavy}</button>
                    <button type="button" className="btn btn-secondary" hidden={!this.state.disabled}
                            onClick={this.editStock}>{glyphicons.pencil}</button>
                </div>
            </div>
        )
    }

}

export default StockItem;
