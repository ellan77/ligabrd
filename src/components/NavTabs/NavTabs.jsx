import React, { Component } from 'react';


import NavItem from './NavItem'

class navTabs extends Component {

    render() {

        return (

            <nav className=" tabs is-centered is-toggle is-toggle-rounded ">
                <ul >
                    <NavItem to='/' children='Обзор' icon='far fa-futbol' exact={true} />
                    <NavItem to='/calendar' children='Календарь' icon='far fa-calendar-alt' />
                    <NavItem to='/tournament' children='Турнирная Таблица' icon='fas fa-table' />
                    <NavItem to='/teams' children='Команды' icon='fas fa-users' />

                </ul>
            </nav>

        );
    }
}

export default navTabs;
