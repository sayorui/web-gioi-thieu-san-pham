import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import API from '../../../api'
import { getTitleRouteName } from '../../../utility/function'

class Reviews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listBaiVietMoi: [],
            page: 0,
            totalpage: 0,
        }
    }

    async componentDidMount() {
        // Gọi API ở đây
        // fetch('locahost:44/api/Posts').then(res => { console.log(res); this.setState({ listTimHieuSanPham: res.data || [] }) } )

        this.getPagingBaiViet(1);

        // Scroll về đầu trang 
        window.scrollTo(0, 0);
    }

    getPagingBaiViet(page) {
        API.getPaging(page, 1).then(res => {
            if (res) {
                this.setState({
                    listBaiVietMoi: res.items || [],
                    page: res.page,
                    totalpage: res.totalPage
                }, () => {
                    // Scroll về đầu trang 
                    window.scrollTo(0, 0);
                })
            }
        })
    }

    render() {
        const { listBaiVietMoi } = this.state;

        let bvPageGroup = [];
        for (let i = 0; i < this.state.totalpage; i++) {
            bvPageGroup.push(
                <li className="page-item"><a className="page-link" onClick={() => this.getPagingBaiViet(i + 1)}>{i + 1}</a></li>
            )
        }

        return (
            <div id="Home">
                <section id="Bài viết mới">
                    <h2>Đánh giá của khách hàng</h2>
                    <div className="row">
                        {/* Đoạn render sử dụng mảng, lấy dữ liệu từ state listBaiVietMoi */}
                        {
                            listBaiVietMoi.map((item, index) => {
                                return (
                                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12" key={index.toString()}>
                                        <div className="card" >
                                            <Link to={`../${item.unsignedTitle}`}>
                                                <img
                                                    className="d-block"
                                                    src={item.coverImage ? item.coverImage : '../../assets/images/big/img6.jpg'}
                                                    alt="First slide"
                                                    style={{ maxHeight: '300px' }}
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
                            {bvPageGroup}
                        </ul>
                    </div>
                </section>
            </div>
        )
    }
}

export default withRouter(Reviews);