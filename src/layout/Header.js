import React,{Component} from 'react';
import {Link} from 'react-router-dom';
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
                <NavLink><Link to='/stock'>Stoc</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><Link to='/orders'>Comenzi</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><Link to='/statistics'>Statistici</Link></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
     )
   }
 }
 export default Header;
