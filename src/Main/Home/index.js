import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap'

export default class Home extends Component {
    render() {
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
                        <div className="col-6">
                            <div className="card">
                                <img
                                    className="d-block"
                                    src="../../assets/images/big/img6.jpg"
                                    alt="First slide"
                                    style={{ maxHeight: '300px' }}
                                />
                                <div className="card-body">
                                    <h4 class="card-title">Card title</h4>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="javascript:void(0)" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="card">
                                <img
                                    className="d-block"
                                    src="../../assets/images/big/img6.jpg"
                                    alt="First slide"
                                    style={{ maxHeight: '300px' }}
                                />
                                <div className="card-body">
                                    <h4 class="card-title">Card title</h4>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="javascript:void(0)" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="Bài viết mới">
                    <h4>Bài viết mới</h4>
                    <div className="row">
                        <div className="col-6">
                            <div className="card">
                                <img
                                    className="d-block"
                                    src="../../assets/images/big/img6.jpg"
                                    alt="First slide"
                                    style={{ maxHeight: '300px' }}
                                />
                                <div className="card-body">
                                    <h4 class="card-title">Card title</h4>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="javascript:void(0)" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="card">
                                <img
                                    className="d-block"
                                    src="../../assets/images/big/img6.jpg"
                                    alt="First slide"
                                    style={{ maxHeight: '300px' }}
                                />
                                <div className="card-body">
                                    <h4 class="card-title">Card title</h4>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="javascript:void(0)" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}
