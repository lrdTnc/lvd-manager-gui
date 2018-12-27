import React, {Component} from 'react';
import "./StockItem.css";

import glyphicons from 'glyphicons';
import {Input, Row, Col, Fade,Button} from 'reactstrap';

class StockItem extends Component {
    state = {target: {}, disabled: false};

    editStock() {
       this.initTarget = Object.assign({},this.state.target);
       this.setState({disabled: false, target: this.state.target});
    }

    cancelChanges(){
      this.setState({disabled: "disabled", target: this.initTarget});
      if(!this.initTarget.id) {
        this.handleEmptyTarget();
      }
    }

    async saveStock() {
      //todo move to stockService
      var id = this.state.target.id;
      const response = await fetch('stocks/' + (id ? id.toString(): ''), {
        method: id ? 'PUT': 'POST',
        body: JSON.stringify(this.state.target),
        headers: {
            'Content-Type': 'application/json'
        }
      });
      const body = await response.json();
      this.setState({disabled: "disabled", target: body});
    }

    constructor(props) {
      super(props);
      this.editStock = this.editStock.bind(this);
      this.handleChange =this.handleChangeFn.bind(this);
      this.saveStock = this.saveStock.bind(this);
      this.cancelChanges = this.cancelChanges.bind(this);
      this.initTarget =props.obj;
      this.handleEmptyTarget = props.handleEmptyTarget;
      this.state.disabled = props.obj.id ? "disabled" : false;
      this.state.target = this.initTarget;
    }

    handleChangeFn(attr) {
      return function(e){
        var updatedTarget = this.state.target;
        updatedTarget[attr] = e.target.value;
        this.setState({disabled: false, target: updatedTarget});
      }.bind(this);
    }

    render(){
      return(
        <Fade in={true}>
          <Row className="stockItemRow">
            <Col xs="10" sm="10" md="11" lg="5"><label>Produs</label><Input onChange={this.handleChangeFn('productName')} disabled={this.state.disabled} type="text" value={this.state.target.productName}/></Col>
            <Col xs="6" sm="6" md="3" lg="1"><label>Cantitate</label><Input disabled={this.state.disabled} onChange={this.handleChangeFn('quantity')} type="text" value={this.state.target.quantity}/></Col>
            <Col xs="6" sm="6" md="3" lg="2"><label>Data Actualizare</label><Input disabled={this.state.disabled} onChange={this.handleChangeFn('modificationDate')} type="text" value={this.state.target.modificationDate}/></Col>
            <Col xs="6" sm="6" md="3" lg="2"><label>Status</label><Input disabled={this.state.disabled} onChange={this.handleChangeFn("stockStatus")} type="text" value={this.state.target.stockStatus}/></Col>
            <Col xs="6" sm="6" md="3" lg="1"><label>Pret</label><Input disabled={this.state.disabled} onChange={this.handleChangeFn("price")} type="text" value={this.state.target.price}/></Col>
            <div className="buttonsContainer">
              <Button hidden={this.state.disabled}  color="secondary" onClick={this.cancelChanges}>{glyphicons.crossHeavy}</Button>
              <Button hidden={this.state.disabled}  color="secondary" onClick={this.saveStock}>{glyphicons.checkHeavy}</Button>
              <Button hidden={!this.state.disabled} color="secondary" onClick={this.editStock}>{glyphicons.pencil}</Button>
            </div>

         </Row>
        </Fade>
      )
    }

}

export default StockItem;
