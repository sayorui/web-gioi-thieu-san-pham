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

const coverImage = [
    { url: 'http://nuocizumio.com/wp-content/uploads/2020/04/02823fdddeb224ec7da3.jpg' },
    { url: 'http://nuocizumio.com/wp-content/uploads/2020/04/784b9014717b8b25d26a.jpg' },
]

const listSP = [
    { title: 'izumio-la-gi-tai-sao-nuoc-giau-hydro-izumio-lai-chua-tri-duoc-hon-170-loai-benh-ly', urlImage: 'http://nuocizumio.com/wp-content/uploads/2016/12/izumio-1-1-150x150.jpg', description: 'IZUMIO Nhật Bản là một loại nước uống giàu hàm lượng Hydro cao nhất thế giới với 2,6 triệu phân tử hydro trong mỗi túi 200ml. Được sản xuất tại Nhật Bản. Tác dụng của nước Hydro là tiêu diệt các gốc tự do ( Nguyên nhân gây ra mọi loại bệnh tật trong cơ thể con người ). Nước IZUMIO Có khả năng tăng cường sức khỏe phòng chống ngăn ngừa bệnh tật, hỗ trợ điều trị hiệu quả hơn 170 loại bệnh lý thường gặp, hỗ trợ cho cả những bệnh nhân K đang trong quá trình điều trị cải thiện sức khỏe nhanh hơn . Hàng trăm bệnh nhân ung thư trước, trong và sau giai đoạn hóa xạ trị đang dùng IZUMIO mỗi ngày .' },
    { title: 'super-lutein-mirto+-naturally-plus,-vien-uong-bo-sung-toan-dien-voi-13-duong-chat-sac-mau-huu-co', urlImage: 'http://nuocizumio.com/wp-content/uploads/2016/12/mirtoplus-150x150.png', description: 'Super Lutein Mirto+ là thực phẩm chức năng dinh dưỡng cao cấp dạng viên nang mềm. Được nhập khẩu chính hãng từ Nhật Bản. Super Lutein Mirto + được sản xuất với 6 tinh chất carotenoids và 5 chất dinh dưỡng cần thiết từ Super Lutein. Đặc biệt trong viên Super Lutein Mirto + còn có Mirtogenol với 2 thành phần được cấp giấy chứng nhận độc quyền trên thế giới đó là Mirtoselect + Pycnogenol . Với tác dụng chống lão hóa da, tăng thị lực cho mắt hiệu quả gấp 4 lần .' },
    { title: 'super-lutein-san-pham-bo-sung-dinh-duong-da-carotenoid', urlImage: 'http://nuocizumio.com/wp-content/uploads/2016/12/super_lutein-150x150.png', description: 'Super Lutein là một sản phẩm bổ sung dinh dưỡng đa carotenoid được thiết kế đặc biệt để hỗ trợ mắt và sức khỏe tổng thể. Super Lutein chứa hỗn hợp chất chống oxy hóa và dinh dưỡng có nguồn gốc tự nhiên giúp bạn duy trì hiệu suất thị lực tối ưu, nhịp sinh học khỏe mạnh, hỗ trợ quá trình sinh học bình thường. Super Lutein được chứng thực bởi nhà khoa học và giáo sư nổi tiếng tại Đại học Maryland, Tiến sĩ Frederick Khachik, một cơ quan hàng đầu về carotenoids, và dựa trên nhiều năm nghiên cứu và nghiên cứu lâm sàng.' },
]

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listCarousal: [],
            listBaiVietMoi: [],
            bvPage: 0,
            bvTotalpage: 0,
            mobile: false,
        }
    }

    async componentDidMount() {
        // Gọi API ở đây
        // fetch('locahost:44/api/Posts').then(res => { console.log(res); this.setState({ listTimHieuSanPham: res.data || [] }) } )
        // Scroll về đầu trang 
        window.scrollTo(0, 0);
        this.calculateWindowWidth();
    }

    calculateWindowWidth = () => {
        if (window.innerWidth < 992) {
            this.setState({ mobile: true })
        } else {
            this.setState({ mobile: false })
        }
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
        const { listBaiVietMoi, listCarousal, mobile } = this.state;

        const review = this.state.listCarousal[0];
        console.log(123, review);
        let bvPageGroup = [];
        for (let i = 0; i < this.state.bvTotalpage; i++) {
            bvPageGroup.push(
                <li className="page-item"><a className="page-link" onClick={() => this.getPagingBaiViet(i + 1)}>{i + 1}</a></li>
            )
        }

        let mobileStyle = { height: 100, maxWidth: window.innerWidth - 40, }
        let webStyle = { width: '100%', height: 280 }

        return (
            <div id="Home">
                <section id="Carousel">
                    <div className="row" style={{ justifyContent: 'center' }}>
                        <Carousel >
                            {
                                coverImage.map((item, index) => {
                                    return (
                                        <Carousel.Item id="" key={index.toString()} style={{}}>
                                            <img
                                                src={item.url}
                                                alt={`${index} slide`}
                                                style={mobile ? mobileStyle : webStyle}
                                            />
                                        </Carousel.Item>
                                    )
                                })
                            }
                        </Carousel>
                    </div>
                </section>
                <section id="Giới thiệu sản phẩm">
                    <h2>Giới thiệu sản phẩm</h2>
                    <div className="row">
                        {
                            listSP.map((item, index) => {
                                return (
                                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12" key={index.toString()}>
                                        <div style={{ textAlign: 'center' }}>
                                            <img
                                                src={item.urlImage}
                                            />
                                            <div className="card-body">
                                                {item.description}
                                            </div>
                                            <div style={{ textAlign: 'right' }}>
                                                <Link to={`${item.title}`}>
                                                    Xem thêm...
                                            </Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </section>
            </div>
        )
    }
}

export default withRouter(Home);