import React,{Component} from 'react';
import {Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink} from 'reactstrap';
 class Header extends Component {
   toggle() {
     this.setState({
       isOpen: !this.state.isOpen
     });
   }
   constructor(){
     super();
     this.toggle = this.toggle.bind(this);
     this.state = {
       isOpen: false
     };
   }
   render() {
     return (
       <Navbar color="dark" dark expand="sm">
          <NavbarBrand href="/">L A V A D O</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href='/stock'>Stoc</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/orders">Comenzi</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/statistics">Statistici</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
     )
   }
 }
 export default Header;
