import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { Carousel } from "react-bootstrap";
import Home from '../Home';
import { Route } from 'react-router-dom';
import Detail from '../../Detail';
import API from '../../../api'

export default class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listLatest: []
        }
    }

    async componentDidMount() {
        API.getLatest().then(res => {
            if (res && res.length > 0) {
                this.setState({listLatest: res})
    }
        })
    }

    render() {
        const listLatest  = this.state.listLatest;
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
                            {
                                listLatest.map((item,index) => {
                                    return (
                                        <li className="sidebar-item">
                                            <a className="sidebar-link has-arrow waves-effect waves-dark">{item.title}</a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </nav>
                </aside>
            </>
        )
    }
}
