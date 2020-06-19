import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap'
import { withRouter, Link } from 'react-router-dom'
import API from '../../../api'
import { getTitleRouteName } from '../../../utility/function'

const fakeData = [
    { ID: 1, Title: '', Image: '../../assets/images/big/img6.jpg', Content: ` <h4 className="card-title">Card title</h4><p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>` },
    { ID: 2, Title: '', Image: '../../assets/images/big/img3.jpg', Content: ` <h4 className="card-title">Card title</h4><p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>` },
    { ID: 3, Title: '', Image: '../../assets/images/big/img4.jpg', Content: ` <h4 className="card-title">Card title</h4><p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>` },
    { ID: 4, Title: '', Image: '../../assets/images/big/img6.jpg', Content: ` <h4 className="card-title">Card title</h4><p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>` },
    { ID: 5, Title: '', Image: '../../assets/images/big/img3.jpg', Content: ` <h4 className="card-title">Card title</h4><p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>` },
]

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listCarousal: [],
            listTimHieuSanPham: [],
            spPage: 1,
            spTotalpage: 0,
            listBaiVietMoi: [],
            bvPage: 0,
            bvTotalpage: 0,
        }
    }

    async componentDidMount() {
        // Gọi API ở đây
        // fetch('locahost:44/api/Posts').then(res => { console.log(res); this.setState({ listTimHieuSanPham: res.data || [] }) } )

        API.getPaging(1, 0).then(res => {
            if (res) {
                this.setState({ listCarousal: res.items })
            }
        })

        this.getPagingSanPham(1);
        this.getPagingBaiViet(1);

        //this.setState({ listTimHieuSanPham: fakeData, listBaiVietMoi: fakeData })
    }

    getPagingBaiViet(page) {
        API.getPaging(page, 1).then(res => {
            if (res) {
                this.setState({
                    listBaiVietMoi: res.items || [],
                    bvPage: res.page,
                    bvTotalpage: res.totalPage
                })
            }
        })
    }

    getPagingSanPham(page) {
        API.getPaging(page, 2).then(res => {
            if (res) {
                this.setState({
                    listTimHieuSanPham: res.items || [],
                    spPage: res.page,
                    spTotalpage: res.totalPage
                })
            }
        })
    }

    viewDetail(id) {
        API.getPostById(id).then(res => {
            if (res) {
                let titleRoute = getTitleRouteName(res.title);
                this.props.history.push(`../${titleRoute}`)
            }
        }).catch(err => {
            console.log(38, err)
        })
    }

    render() {
        const { listTimHieuSanPham, listBaiVietMoi, listCarousal } = this.state;
        let spPageGroup = [];
        for (let i = 0; i < this.state.spTotalpage; i++) {
            spPageGroup.push(
                <li className="page-item"><a className="page-link" onClick={() => this.getPagingSanPham(i + 1)}>{i + 1}</a></li>
            )
        }

        let bvPageGroup = [];
        for (let i = 0; i < this.state.bvTotalpage; i++) {
            bvPageGroup.push(
                <li className="page-item"><a className="page-link" onClick={() => this.getPagingBaiViet(i + 1)}>{i + 1}</a></li>
            )
        }

        return (
            <div id="Home">
                {/* Carousel */}
                <section id="Carousel">
                    <div className="row" style={{ justifyContent: 'center' }}>
                        {/* <div className="col-3"></div> */}
                        <div className="card">
                            <div className="card-body">
                                <Carousel>
                                    {
                                        listCarousal.map((item, index) => {
                                            return (
                                                <Carousel.Item key={index.toString()}>
                                                    <Link to={`../${item.unsignedTitle}`}>
                                                        <img
                                                            className="d-block"
                                                            src={item.coverImage ? item.coverImage : '../../assets/images/big/img6.jpg'}
                                                            alt={`${index} slide`}
                                                            style={{ maxHeight: '300px' }}
                                                        />
                                                        <Carousel.Caption>
                                                            {item.title}
                                                        </Carousel.Caption>
                                                    </Link>
                                                </Carousel.Item>
                                            )
                                        })
                                    }
                                </Carousel>
                            </div>
                            {/* </div> */}
                        </div>
                    </div>
                </section>
                <section id="Tìm hiểu sản phẩm">
                    <h2>Tìm hiểu về sản phẩm</h2>
                    <div className="row">
                        {/* Đoạn render sử dụng mảng, lấy dữ liệu từ state listTimHieuSanPham */}
                        {
                            listTimHieuSanPham.map((item, index) => {
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
                            {spPageGroup}
                        </ul>
                    </div>
                </section>
                <section id="Bài viết mới">
                    <h2>Bài viết mới</h2>
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

export default withRouter(Home);