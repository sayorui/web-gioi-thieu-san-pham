import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap'

const fakeData = [
    { ID: 1, Title: '', Image: '../../assets/images/big/img6.jpg', Content: ` <h4 class="card-title">Card title</h4><p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>` },
    { ID: 2, Title: '', Image: '../../assets/images/big/img3.jpg', Content: ` <h4 class="card-title">Card title</h4><p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>` },
    { ID: 3, Title: '', Image: '../../assets/images/big/img4.jpg', Content: ` <h4 class="card-title">Card title</h4><p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>` },
    { ID: 4, Title: '', Image: '../../assets/images/big/img6.jpg', Content: ` <h4 class="card-title">Card title</h4><p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>` },
    { ID: 5, Title: '', Image: '../../assets/images/big/img3.jpg', Content: ` <h4 class="card-title">Card title</h4><p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>` },
]

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listTimHieuSanPham: [],
            listBaiVietMoi: [],
        }
    }

    async componentDidMount() {
        // Gọi API ở đây
        // fetch('').then(res => { console.log(res); this.setState({ listTimHieuSanPham: res.data || [] }) } )
        this.setState({ listTimHieuSanPham: fakeData, listBaiVietMoi: fakeData })
    }


    render() {
        const { listTimHieuSanPham, listBaiVietMoi } = this.state;

        return (
            <>
                {/* Carousel */}
                <section id="Carousel">
                    <div className="row">
                        <div className="col-3"></div>
                        <div className="col-6">
                            <div className="card">
                                <div className="card-body">
                                    <Carousel>
                                        <Carousel.Item>
                                            <img
                                                className="d-block"
                                                src="../../assets/images/big/img6.jpg"
                                                alt="First slide"
                                                style={{ maxHeight: '300px' }}
                                            />
                                            <Carousel.Caption>
                                                <h3>First slide label</h3>
                                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                                className="d-block"
                                                src="../../assets/images/big/img3.jpg"
                                                alt="Third slide"
                                                style={{ maxHeight: '300px' }}
                                            />

                                            <Carousel.Caption>
                                                <h3>Second slide label</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                                className="d-block"
                                                src="../../assets/images/big/img4.jpg"
                                                alt="Third slide"
                                                style={{ maxHeight: '300px' }}
                                            />

                                            <Carousel.Caption>
                                                <h3>Third slide label</h3>
                                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                    </Carousel>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="Tìm hiểu sản phẩm">
                    <h4>Tìm hiểu về sản phẩm</h4>
                    <div className="row">
                        {/* Đoạn render sử dụng mảng, lấy dữ liệu từ state listTimHieuSanPham */}
                        {
                            listTimHieuSanPham.map((item) => {
                                console.log(item)
                                return (
                                    <div className="col-6">
                                        <div className="card">
                                            <img
                                                className="d-block"
                                                src={item.Image}
                                                alt="First slide"
                                                style={{ maxHeight: '300px' }}
                                            />
                                            <div className="card-body">
                                                <div dangerouslySetInnerHTML={{ __html: item.Content }}></div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </section>
                <section id="Bài viết mới">
                    <h4>Bài viết mới</h4>
                    <div className="row">
                        {/* Đoạn render sử dụng mảng, lấy dữ liệu từ state listBaiVietMoi */}
                        {
                            listBaiVietMoi.map((item) => {
                                console.log(item)
                                return (
                                    <div className="col-6">
                                        <div className="card">
                                            <img
                                                className="d-block"
                                                src={item.Image}
                                                alt="First slide"
                                                style={{ maxHeight: '300px' }}
                                            />
                                            <div className="card-body">
                                                <div dangerouslySetInnerHTML={{ __html: item.Content }}></div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </section>
            </>
        )
    }
}
