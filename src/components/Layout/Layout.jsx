import React, { Component } from 'react';
import './Layout.scss'
import NavTabs from '../NavTabs/NavTabs';


class Layout extends Component {

    render() {
        return (
            <>

                <section className="hero ">

                    <div class="hero-body">
                        <div class="container has-text-centered">
                            <p class="title">
                                Футбольная Лига
                            </p>
                            <p class="subtitle">
                                Бердянска
                            </p>
                        </div>
                    </div>        

                    <div className="hero-foot">
                        <NavTabs />
                    </div>
                </section>

                <section>
                    <div class="container">
                        <div className="content has-text-centered">
                            {this.props.children}
                        </div>
                   </div>
                </section>
                





                <footer className="footer">
                    <div className="content has-text-centered">
                        <p>
                        <strong>Бердянск</strong> &copy; Футбольная Лига 2019
                        
                        </p>
                    </div>
                </footer>
             


            </>
        );
    }
}

export default Layout;
