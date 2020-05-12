import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { Carousel } from "react-bootstrap";
import Home from '../Home';
import { Route } from 'react-router-dom';
import Detail from '../../Detail';

export default class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <>
                {/* Page */}
                <div className="page-wrapper" style={{ display: 'block' }}>
                    <div className="container-fluid">
                        <Route path="/" exact>
                            <Home />
                        </Route>
                        <Route path="/:title">
                            <Detail />
                        </Route>
                    </div>
                </div>

                {/* Side bar - Left */}
                <aside className="left-sidebar" data-sidebarbg="skin1" >
                    <nav className="sidebar-nav">
                        <input placeholder="Tìm kiếm" aria-label="Tìm kiếm" aria-describedby="basic-addon1" className="form-control" style={{ display: 'inline-block', width: '90%' }} />
                        <ul id="sidebarnav" className="in">
                            <li className="sidebar-item">
                                <a className="sidebar-link has-arrow waves-effect waves-dark">Link 1</a>
                            </li>
                            <li className="sidebar-item">
                                <a className="sidebar-link has-arrow waves-effect waves-dark">Link 2</a>
                            </li>
                            <li className="sidebar-item">
                                <a className="sidebar-link has-arrow waves-effect waves-dark">Link 3</a>
                            </li>
                            <li className="sidebar-item">
                                <a className="sidebar-link has-arrow waves-effect waves-dark">Link 4</a>
                            </li>
                            <li className="sidebar-item">
                                <a className="sidebar-link has-arrow waves-effect waves-dark">Link 5</a>
                            </li>
                        </ul>
                    </nav>
                </aside>
            </>
        )
    }
}
