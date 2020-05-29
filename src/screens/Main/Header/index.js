import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <>
                <div style={{ backgroundColor: 'white', textAlign: 'center', position: 'fixed', width: '100%', zIndex: 100, paddingLeft: 250 }}>
                    <h1>IZUMIO JAPAN</h1>
                    <h4>Nhập Khẩu Chính Hãng Nội Địa Nhật Bản</h4>
                    <header className="header-bar" data-navbarbg="skin6" id="header-bar" style={{}}>
                        <nav className="navbar top-navbar navbar-expand-md navbar-light" >
                            <div className="navbar-collapse collapse" id="navbarSupportedContent" data-navbarbg="skin6" id="sticky">
                                <a className="nav-link sidebartoggler waves-effect waves-light" href="#" data-sidebartype="mini-sidebar"
                                    onClick={() => {

                                    }}
                                >
                                    <i class="fas fa-bars"></i>
                                </a>
                                {/* Left */}
                                <ul className="navbar-nav float-left mr-auto">
                                    <li className="nav-item d-none d-md-block">
                                        <Link
                                            to={`./`}
                                            className="nav-link sidebartoggler waves-effect waves-light"
                                        >
                                            Home
                                        </Link>
                                    </li>
                                </ul>
                                {/* Right */}
                                <ul className="navbar-nav float-right">

                                </ul>
                            </div>
                        </nav>
                    </header>
                </div>

                
            </>
        )
    }
}
