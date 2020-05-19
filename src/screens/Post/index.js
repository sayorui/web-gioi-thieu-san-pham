import React, { Component } from 'react'
import CKEditor from 'ckeditor4-react';
import API from '../../api';
import { withRouter } from 'react-router-dom'
import { getTitleRouteName } from '../../utility/function';

// import '../node_modules/ckeditor-youtube-plugin/youtube';

// CKEditor.editorConfig = function (config) {
//   config.language = 'es';
//   config.uiColor = 'black';
//   config.height = 800;
//   config.toolbarCanCollapse = true;
// };
// CKEditor.addExternal('youtube');
// CKEditor.editorUrl = require('./ckeditor/ckeditor');
// CKEditor.editorUrl = 'https://cdn.ckeditor.com/4.14.0/standard-all/ckeditor.js';

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: "<p>Hello from CKEditor 4!</p>",
            title: ''
        }
        this.html = React.createRef()
    }

    savePost() {
        const { title, data } = this.state;
        console.log(30, data)
        // console.log(this.html.)
        var list = this.html.getElementsByTagName("iframe")[0];
        if (list) {
            console.log(34, list)
            var iframe_src = list.src;
            var youtube_video_id = iframe_src.match(/youtube\.com.*(\?v=|\/embed\/)(.{11})/).pop();
            console.log(38, youtube_video_id)
            console.log(`https://img.youtube.com/vi/${youtube_video_id}/0.jpg`)
        }
        // API.savePost({ title, content: data }).then(res => {
        //     console.log(31, res)
        //     if (res) {
        //         let titleRoute = res.unsignedTitle;
        //         // console.log(34, titleRoute)
        //         this.props.history.push(`../${titleRoute}`)
        //     }
        // }).catch(err => {
        //     console.log(38, err)
        // })
    }

    render() {
        const { data, title } = this.state;

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
                                        <button type="submit" className="btn btn-success" style={{ marginLeft: 20 }} onClick={() => this.savePost()}> <i className="fa fa-check"></i> Save</button>
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

export default withRouter(Post);