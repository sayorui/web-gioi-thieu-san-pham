import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { Carousel } from "react-bootstrap";
import Home from '../Home';
import { Route, withRouter, Link, Switch } from 'react-router-dom';
import Detail from '../../Detail';
import API from '../../../api'
import Header from '../Header';
import { getTitleRouteName } from '../../../utility/function';
import Products from '../List posts/Products';
import Reviews from '../List posts/Reviews';

class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listLatest: [],
            mobile: false,
        }
    }

    componentDidMount() {
        this.calculateWindowWidth();
    }

    calculateWindowWidth = () => {
        if (window.innerWidth < 992) {
            this.setState({ mobile: true })
        } else {
            this.setState({ mobile: false })
        }
    }

    goHome = () => {
        this.props.history.push(`./`);
    }

    componentWillUnmount() {
    }

    render() {
        const { listLatest, mobile } = this.state;
        return (
            <>
                {/* Header */}
                <div id="Header" style={{ backgroundColor: 'white', textAlign: 'center', position: 'fixed', width: '100%', zIndex: 100 }}>
                    <h1 onDoubleClick={() => this.goHome()}>IZUMIO JAPAN</h1>
                    <h4>Nhập Khẩu Chính Hãng Nội Địa Nhật Bản</h4>
                    <h4>Hotline/Zalo: 0982.877.559</h4>
                    <header className="header-bar" data-navbarbg="skin6" id="header-bar" style={{ backgroundColor: 'CadetBlue' }}>
                        <nav className="navbar top-navbar navbar-expand-sm navbar-light" >
                            <div className="navbar-collapse flex" id="navbarSupportedContent" data-navbarbg="skin6" id="sticky" style={{justifyContent: mobile ? 'center' : '' }}>
                                {/* Left */}
                                <ul className="navbar-nav float-left" style={{ marginLeft: !mobile ? 250 : 0}}>
                                    <li className="nav-item">
                                        <Link
                                            to={`./`}
                                            className="nav-link sidebartoggler waves-effect waves-light"
                                            style={{ color: 'white', fontWeight: 'bold' }}
                                        >
                                            Home
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            to={`./gioi-thieu-san-pham`}
                                            className="nav-link sidebartoggler waves-effect waves-light"
                                            style={{ color: 'white', fontWeight: 'bold' }}
                                        >
                                            Tìm hiểu về sản phẩm
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            to={`./cau-chuyen-khach-hang`}
                                            className="nav-link sidebartoggler waves-effect waves-light"
                                            style={{ color: 'white', fontWeight: 'bold' }}
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
                <div id="Page" className="page-wrapper" style={{ display: 'block', paddingTop: window.innerWidth < 576 ? 250 : 140, marginRight: 250 }}>
                    <div className="container-fluid">
                        <Switch>
                            <Route path="/" exact>
                                <Home />
                            </Route>
                            <Route path="/gioi-thieu-san-pham" exact>
                                <Products />
                            </Route>
                            <Route path="/cau-chuyen-khach-hang" exact>
                                <Reviews />
                            </Route>
                            <Route path="/:title">
                                <Detail />
                            </Route>
                        </Switch>
                    </div>
                </div>

                {/* Footer */}
                    <div id="Footer" className="row" style={{ marginLeft: 250, marginRight: 250 }}>
                        <div className="col-lg-4 col-md-4 col-sm-4" style={{ padding: '5px 10px' }}>
                            <h3 className="widget-title">NPP IZUMIO JAPAN</h3>
                            <div className="textwidget custom-html-widget">NPP IZUMIO JAPAN <br />
                            – Xuất xứ sản phẩm :  Nhật Bản<br />
                                + Sản xuất tại: Shefco Co., Ltd. Kanuma Factory.<br />
                                + Địa chỉ: 990-57 Higashiyama, Fukahodo, Kanuma – shi, Tochigi, Japan<br />
                                # Hỗ trợ hướng dẫn mua hàng :<br />
                                0982.877.559/ 079.4678933</div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4" style={{ padding: '5px 10px' }}>
                            <h3 className="widget-title">CAM KẾT CHẤT LƯỢNG</h3>
                            <div className="textwidget custom-html-widget">– Sản phẩm chất lượng, nhập khẩu chính hãng 100% từ Nhật Bản<br />
                            – Giao hàng miễn phí toàn quốc<br />
                            – SẢN PHẨM ĐẠT HIỆU QUẢ RÕ RỆT SAU 1 LIỆU TRÌNH SỬ DỤNG<br />
                            ( Được kiểm chứng bởi hàng trăm người đã và đang dùng sản phẩm : <a href="./">xem tại đây</a> )
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
                        <div className="col-lg-4 col-md-4 col-sm-4" style={{ padding: '5px 10px' }}>
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
            </>
        )
    }
}
export default withRouter(Body);