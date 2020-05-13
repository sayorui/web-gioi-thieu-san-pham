import React, { Component } from 'react'
import CKEditor from 'ckeditor4-react';

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

export default class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: "<p>Hello from CKEditor 4!</p>",
        }
    }

    render() {
        const { data } = this.state;

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
                                    <h4 class="card-title">Tiêu đề bài viết</h4>
                                    <div className="form-group" style={{ display: 'flex' }}>
                                        <input type="text" class="form-control" />
                                        <button type="submit" class="btn btn-success" style={{ marginLeft: 20 }}> <i class="fa fa-check"></i> Save</button>
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
                                    <div dangerouslySetInnerHTML={{ __html: data }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
