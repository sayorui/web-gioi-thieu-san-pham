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
            <div>
                <div>
                    <CKEditor
                        data={data}
                        config={{
                            // toolbar: [['Bold']]
                            // extraPlugins: 'easyimage'
                        }}
                        onChange={(evt) => { console.log(evt.editor.getData()); this.setState({ data: evt.editor.getData() }) }}
                    />
                </div>
                <div dangerouslySetInnerHTML={{ __html: data }}></div>
            </div>
        )
    }
}
