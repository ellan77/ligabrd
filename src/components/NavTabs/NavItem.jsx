
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'


class NavItem extends Component {
 
    render() {
        return (
            <li className='nav-tab is-12-mobile'>
            <NavLink to={this.props.to} exact={this.props.exact} activeClassName='is-active-tab' >
                <span className="icon is-small"><i className={this.props.icon}></i></span>
                <span>{this.props.children}</span>
            </NavLink>
        </li>
            
        );
    }
}

export default NavItem;
