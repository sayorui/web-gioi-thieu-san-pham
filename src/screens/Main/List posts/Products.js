import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import API from '../../../api'
import { getTitleRouteName } from '../../../utility/function'


class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listTimHieuSanPham: [],
            page: 1,
            totalpage: 0,
        }
    }

    async componentDidMount() {
        // Gọi API ở đây
        // fetch('locahost:44/api/Posts').then(res => { console.log(res); this.setState({ listTimHieuSanPham: res.data || [] }) } )

        this.getPagingSanPham(1);
        // Scroll về đầu trang 
        window.scrollTo(0, 0);
    }

    getPagingSanPham(page) {
        API.getPaging(page, 2).then(res => {
            if (res) {
                this.setState({
                    listTimHieuSanPham: res.items || [],
                    page: res.page,
                    totalpage: res.totalPage
                })
            }
        })
    }

    render() {
        const { listTimHieuSanPham } = this.state;
        let spPageGroup = [];
        for (let i = 0; i < this.state.totalpage; i++) {
            spPageGroup.push(
                <li className="page-item"><a className="page-link" onClick={() => this.getPagingSanPham(i + 1)}>{i + 1}</a></li>
            )
        }

        return (
            <div id="Products">
                <section id="Tìm hiểu về sản phẩm">
                    <h2>Tìm hiểu về sản phẩm</h2>
                    <div className="row">
                        {/* Đoạn render sử dụng mảng, lấy dữ liệu từ state listTimHieuSanPham */}
                        {
                            listTimHieuSanPham.map((item, index) => {
                                return (
                                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12" key={index.toString()}>
                                        <div className="card" >
                                            <Link to={`../${item.unsignedTitle}`} style={{}}>
                                                <img
                                                    className="d-block"
                                                    src={item.coverImage ? item.coverImage : '../../assets/images/big/img6.jpg'}
                                                    alt="First slide"
                                                    style={{ height: '300px', width: '100%' }}
                                                />
                                                <div className="card-body">
                                                    {item.title}
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div>
                        <ul className="pagination">
                            {spPageGroup}
                        </ul>
                    </div>
                </section>
            </div>
        )
    }
}

export default withRouter(Products);