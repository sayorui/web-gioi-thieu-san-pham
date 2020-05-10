import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { Carousel } from "react-bootstrap";
import Home from '../Home';

export default class Body extends Component {
    render() {
        return (
            <>
                {/* Page */}
                <div className="page-wrapper" style={{ display: 'block' }}>
                    <div className="container-fluid">
                        <Home />
                    </div>
                </div>

                {/* Side bar - Left */}
                <aside className="left-sidebar" data-sidebarbg="skin1" >
                    <nav className="sidebar-nav">
                        <input placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" class="form-control" />
                        <ul id="sidebarnav" className="in">
                            <li className="sidebar-item">
                                <a className="sidebar-link has-arrow waves-effect waves-dark">Link 1</a>
                            </li>
                            <li><a>Link 2</a></li>
                            <li><a>Link 3</a></li>
                            <li><a>Link 4</a></li>
                            <li><a>Link 5</a></li>
                            <li><a>Link 6</a></li>
                        </ul>
                    </nav>
                </aside>
            </>
        )
    }
}
