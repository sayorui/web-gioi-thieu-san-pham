import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { Carousel } from "react-bootstrap";
import Home from '../Home';
import { Route, Link } from 'react-router-dom';
import Detail from '../../Detail';
import API from '../../../api'
import Header from '../Header';
import { getTitleRouteName } from '../../../utility/function';

export default class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listLatest: [],
            showSideBar: true,
            mobile: false,
        }
    }

    componentDidMount() {
        API.getLatest().then(res => {
            if (res && res.length > 0) {
                this.setState({ listLatest: res })
            }
        })
        this.calculateWindowWidth();
        window.addEventListener('resize', this.calculateWindowWidth);
        window.addEventListener('click', this.detectClick);
    }

    detectClick = (e) => {
        if (e?.path && e.path[0]) {
            if (e.path[0]?.id !== 'SideBar' && e.path[0]?.id !== 'OpenSideBar' && e.path[0]?.id !== 'IconOpenSideBar'
                && e.path[0]?.id !== 'InputSideBar'
                && this.state.mobile && this.state.showSideBar) {
                this.setState({ showSideBar: false })
            }
        }
    }

    calculateWindowWidth = () => {
        if (window.innerWidth < 576) {
            this.setState({ showSideBar: false, mobile: true })
        } else {
            this.setState({ mobile: false })
        }
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.calculateWindowWidth);
        window.removeEventListener('click', this.detectClick);
    }

    render() {
        const { listLatest, showSideBar, mobile } = this.state;
        return (
            <>
                {/* Header */}
                <div id="Header" style={{ backgroundColor: 'white', textAlign: 'center', position: 'fixed', width: '100%', zIndex: 100, paddingLeft: showSideBar && !mobile ? 250 : 0 }}>
                    <h1>IZUMIO JAPAN</h1>
                    <h4>Nhập Khẩu Chính Hãng Nội Địa Nhật Bản</h4>
                    <header className="header-bar" data-navbarbg="skin6" id="header-bar" style={{}}>
                        <nav className="navbar top-navbar navbar-expand-md navbar-light" >
                            <div className="navbar-collapse flex" id="navbarSupportedContent" data-navbarbg="skin6" id="sticky">
                                <span id="OpenSideBar" className="nav-link sidebartoggler waves-effect waves-light"
                                    href="#" data-sidebartype="mini-sidebar"
                                    onClick={() => {
                                        this.setState({ showSideBar: !showSideBar })
                                    }}
                                >
                                    <i id="IconOpenSideBar" className="fas fa-bars"></i>
                                </span>
                                {/* Left */}
                                <ul className="navbar-nav float-left mr-auto">
                                    <li className="nav-item">
                                        <Link
                                            to={`./`}
                                            className="nav-link sidebartoggler waves-effect waves-light"
                                        >
                                            Home
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            to={`./IZUMIO-la-gi?-Tai-sao-nuoc-giau-Hydro-IZUMIO-lai-chua-tri-duoc-hon-170-loai-benh-ly-?`}
                                            className="nav-link sidebartoggler waves-effect waves-light"
                                        >
                                            Nước Giàu Hydro IZUMIO Nhật Bản
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            to={`./super-lutein-mirto+-naturally-plus,-vien-uong-bo-sung-toan-dien-voi-13-duong-chat-sac-mau-huu-co`}
                                            className="nav-link sidebartoggler waves-effect waves-light"
                                        >
                                            Super Lutein Mirto+ Naturally Plus
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            to={`#`}
                                            className="nav-link sidebartoggler waves-effect waves-light"
                                        >
                                            Khách Hàng Sử Dụng Đánh Giá – Review
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

                {/* Page */}
                <div id="Page" className="page-wrapper" style={{ display: 'block', paddingTop: 140, marginLeft: showSideBar && !mobile ? 250 : 0 }}>
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
                <aside id="SideBar" className="left-sidebar" data-sidebarbg="skin1" style={{ zIndex: 100, display: showSideBar ? 'block' : 'none' }}>
                    <nav className="sidebar-nav">
                        <input id="InputSideBar" placeholder="Tìm kiếm" aria-label="Tìm kiếm" aria-describedby="basic-addon1" className="form-control" style={{ display: 'inline-block' }} />
                        <ul id="sidebarnav" className="in">
                            {
                                listLatest.map((item, index) => {
                                    return (
                                        <li className="sidebar-item" key={index.toString()}>
                                            <Link
                                                // to={`./${item.title}`}
                                                to={`./${getTitleRouteName(item.title)}`}
                                                className="sidebar-link waves-effect waves-dark"
                                                onClick={() => {
                                                    if (mobile && showSideBar) {
                                                        this.setState({ showSideBar: false })
                                                    }
                                                }}
                                                style={{ whiteSpace: 'normal' }}
                                            >
                                                {item.title}
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </nav>
                </aside>

                {/* Footer */}
                <div style={{ marginLeft: showSideBar && !mobile ? 260 : 0 }}>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12" style={{ padding: '5px 10px' }}>
                            <h3 className="widget-title">NPP IZUMIO JAPAN</h3>
                            <div className="textwidget custom-html-widget">NPP IZUMIO JAPAN <br />
                            – Xuất xứ sản phẩm :  Nhật Bản<br />
                                + Sản xuất tại: Shefco Co., Ltd. Kanuma Factory.<br />
                                + Địa chỉ: 990-57 Higashiyama, Fukahodo, Kanuma – shi, Tochigi, Japan<br />
                                # Hỗ trợ hướng dẫn mua hàng :<br />
                                0982.877.559/ 079.4678933</div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12" style={{ padding: '5px 10px' }}>
                            <h3 className="widget-title">CAM KẾT CHẤT LƯỢNG</h3>
                            <div className="textwidget custom-html-widget">– Sản phẩm chất lượng, nhập khẩu chính hãng 100% từ Nhật Bản<br />
                            – Giao hàng miễn phí toàn quốc<br />
                            – SẢN PHẨM ĐẠT HIỆU QUẢ RÕ RỆT SAU 1 LIỆU TRÌNH SỬ DỤNG<br />
                            ( Được kiểm chứng bởi hàng trăm người đã và đang dùng sản phẩm : <a href="http://izumiojapan.net/cau-chuyen-khach-hang-izumio-super-lutein-mirto-review/">xem tại đây</a> )
                        </div>
                        </div>
                        {/* <div className="col-lg-3 col-md-6 col-sm-12">
                            <h3 className="widget-title">NPP IZUMIO JAPAN</h3>
                            <div className="textwidget custom-html-widget">NPP IZUMIO JAPAN <br />
                            – Xuất xứ sản phẩm :  Nhật Bản<br />
                                + Sản xuất tại: Shefco Co., Ltd. Kanuma Factory.<br />
                                + Địa chỉ: 990-57 Higashiyama, Fukahodo, Kanuma – shi, Tochigi, Japan<br />
                                # Hỗ trợ hướng dẫn mua hàng :<br />
                                0968-01-8166</div>
                        </div> */}
                        <div className="col-lg-4 col-md-6 col-sm-12" style={{ padding: '5px 10px' }}>
                            <h3 className="widget-title">CHI NHÁNH TRÊN TOÀN CẦU</h3>
                            <div className="textwidget custom-html-widget">
                                <a rel="nofollow noopener noreferrer" href="http://www.naturally-plus.com/jp/ja/" target="_blank">  NHẬT BẢN </a><br />
                                <a rel="nofollow noopener noreferrer" href="http://www.npusainc.com/us/en/" target="_blank">  MỸ </a><br />
                                <a rel="nofollow noopener noreferrer" href="http://www.naturally-plus.com/zh/tw/" target="_blank">  ĐÀI LOAN </a><br />
                                <a rel="nofollow noopener noreferrer" href="http://www.naturally-plus.com/sg/en/" target="_blank"> SINGAPORE</a><br />
                                <a rel="nofollow noopener noreferrer" href="http://www.naturally-plus.com/ko/kr/" target="_blank"> HÀN QUỐC </a><br />
                                <a rel="nofollow noopener noreferrer" href="http://www.naturally-plus.com/zh/hk/" target="_blank"> HONG KONG</a><br />
                                <a rel="nofollow noopener noreferrer" href="http://www.naturally-plus.com/my/en/" target="_blank"> MALAYSIA</a><br />
                                <a rel="nofollow noopener noreferrer" href="http://www.naturally-plus.com/th/th/" target="_blank"> THÁI LAN</a><br />
                                <a rel="nofollow noopener noreferrer" href="http://www.naturally-plus.com/id/id/" target="_blank"> INDONESIA</a><br />
                                <a rel="nofollow noopener noreferrer" href="http://www.naturally-plus.com/ph/en/products/izumio/overview/" target="_blank"> PHILIPIN</a><br />
                                <a rel="nofollow noopener noreferrer" href="http://www.naturally-plus.com/bn/en/" target="_blank"> BRUNEI</a><br />
                            </div>
                        </div>
                    </div>
                    <div className="copyrights">
                        <div className="container">
                            <div id="copyright-note">
                                {/* <span><a href="https://izumiojapan.net/" title="Nhập Khẩu Chính Hãng Nội Địa Nhật Bản" rel="nofollow">IZUMIO JAPAN</a> Copyright © 2020.</span>
                                <div className="right"></div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
