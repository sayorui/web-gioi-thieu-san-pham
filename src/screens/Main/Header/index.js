import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <>
                <div>
                    <h1>IZUMIO JAPAN</h1>
                    <h4>Nhập Khẩu Chính Hãng Nội Địa Nhật Bản</h4>
                </div>
                <header className="header-bar" data-navbarbg="skin6" id="header-bar">
                    <nav className="navbar top-navbar navbar-expand-md navbar-light" style={{ marginLeft: '250px' }}>
                        <div className="navbar-collapse collapse" id="navbarSupportedContent" data-navbarbg="skin6" id="sticky">
                            {/* Left */}
                            <ul className="navbar-nav float-left mr-auto">
                                <li className="nav-item d-none d-md-block">
                                    <a className="nav-link sidebartoggler waves-effect waves-light">Home</a>
                                </li>
                                <li className="nav-item d-none d-md-block">
                                    <a className="nav-link sidebartoggler waves-effect waves-light">Sản phẩm 1</a>
                                </li>
                                <li className="nav-item d-none d-md-block">
                                    <a className="nav-link sidebartoggler waves-effect waves-light">Sản phẩm 2</a>
                                </li>
                                <li className="nav-item d-none d-md-block">
                                    <a className="nav-link sidebartoggler waves-effect waves-light">Sản phẩm 3</a>
                                </li>
                            </ul>
                            {/* Right */}
                            <ul className="navbar-nav float-right">

                            </ul>
                        </div>
                    </nav>
                </header>
            </>
        )
    }
}
