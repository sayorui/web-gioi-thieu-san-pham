import React, { Component } from 'react'
import CKEditor from 'ckeditor4-react';
import API from '../../../api';
import { withRouter } from 'react-router-dom'
import { getTitleRouteName } from '../../../utility/function';

class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            data: "<p>Hello from CKEditor 4!</p>",
            title: '',
            type: '1',
        }
        this.html = React.createRef()
    }

    async componentDidMount() {
        let id = parseInt(this.props.match.params.id);
        API.getPostById(id).then(res => {
        console.log(32, res)
        if (res) {
                this.setState({ 
                    id: res.id,
                    data: res.content,
                    title: res.title,
                    type: res.type,
                 })
            }
        }).catch(err => {
            console.log(18, err)
        })

    }

    updatePost() {
        const { id, title, data, type } = this.state;
        var postType = parseInt(type);
        var list = this.html.getElementsByTagName("iframe")[0];
        let coverImage = '';
        if (list) {
            console.log(34, list)
            var iframe_src = list.src.match(/youtube\.com.*(\?v=|\/embed\/)(.{11})/);
            var youtube_video_id = iframe_src ? iframe_src.pop() : null;
            if (youtube_video_id) {
                coverImage = `https://img.youtube.com/vi/${youtube_video_id}/0.jpg`;
            }
        }
        API.updatePost(id, title, data, postType, coverImage).then(res => {
            if (res) {
                let titleRoute = res.unsignedTitle;
                this.props.history.push(`../${titleRoute}`)
            }
        }).catch(err => {

        })
    }

    render() {
        const { id, data, title, type } = this.state;

        return (
            <>
                <div id="main-wrapper" data-theme="light" data-layout="vertical"
                    data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed"
                    data-header-position="fixed" data-boxed-layout="full" className=""
                >
                    <div className="page-wrapper" style={{ display: 'block', marginLeft: 0 }}>
                        <div className="container-fluid">
                            <div className="card">
                                <div className="card-header">
                                    <h4>
                                        Nhập nội dung của bài viết
                                    </h4>
                                </div>

                                <div className="card-body">
                                    <h4 className="card-title">Tiêu đề bài viết</h4>
                                    <div className="form-group" style={{ display: 'flex' }}>
                                        <input type="text" className="form-control" value={title} onChange={(event) => this.setState({ title: event.target.value })} />
                                        <select className="form-control" style={{ marginLeft: 20, width: '10%' }} value={type} onChange={(ev) => this.setState({ type: ev.target.value })}>
                                            <option value='1'>Bài viết mới</option>
                                            <option value='2'>Giới thiệu sản phẩm</option>
                                        </select>
                                        <button type="submit" className="btn btn-success" style={{ marginLeft: 20 }} onClick={() => this.updatePost()}> <i className="fa fa-check"></i> Save</button>
                                    </div>
                                    <CKEditor
                                        data={data}
                                        config={{
                                            // toolbar: [['Bold']]
                                            // extraPlugins: 'easyimage'
                                        }}
                                        onChange={(evt) => { console.log(evt.editor.getData()); this.setState({ data: evt.editor.getData() }) }}
                                    />
                                </div >

                            </div >
                            <div className="card">
                                <div className="card-header">
                                    <h4>
                                        Nội dung hiển thị trên trang chi tiết
                                    </h4>
                                </div>
                                <div className="card-body">
                                    <div dangerouslySetInnerHTML={{ __html: data }} ref={ref => this.html = ref}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default withRouter(Edit);