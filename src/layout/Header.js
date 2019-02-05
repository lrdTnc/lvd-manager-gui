import React, {Component} from 'react';
import {Link} from 'react-router-dom';
class Header extends Component {
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    constructor() {
        super();
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">L A V A D O</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item ">
                            <Link className="nav-link" to='/stock'>Stoc</Link>
                        </li>
                        <li className="nav-item ">
                           <Link className="nav-link" to='/orders'>Comenzi</Link>
                        </li>
                        <li className="nav-item ">
                           <Link className="nav-link" to='/statistics'>Statistici</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
export default Header;
