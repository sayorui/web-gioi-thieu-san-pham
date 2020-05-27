const API_ROUTE = 'https://localhost:44344'
//const API_ROUTE = 'https://giangwebapi.azurewebsites.net';

var API = {
    // GET tìm kiếm theo tiêu đề
    getPostDetail(title) {
        return fetch(API_ROUTE + '/api/Posts/title', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(title),
        })
            .then(res => {
                return res.json()
            })
            .catch(err => {
                console.log(err);
            })
    },
    // GET post bằng id
    getPostById(id) {
        return fetch(API_ROUTE + '/api/Posts/' + id, {
            method: 'GET',
        })
            .then(res => {
                return res.json();
            })
            .catch(err => {
                console.log(err);
            })
    },
    // POST EXAMPLE
    savePost({ title, content, type, coverImage }) {
        var postType = parseInt(type);
            return fetch(API_ROUTE + '/api/Posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ Title: title, Content: content, Type: postType, CoverImage: coverImage })
        })
            .then(res => {
                return res.json()
            })
            .catch(err => {
                console.log(err);
            })
    },

    //GET 5 latest
    getLatest() {
        return fetch(API_ROUTE + '/api/Posts/Latest', {
            method: 'GET'
        })
            .then(res => {
                return res.json()
            })
            .catch(err => {
                console.log(err);
            })
    },

    //GET phân trang
    getPaging(page, type) {
        return fetch(API_ROUTE + '/api/Posts/page/' + type + '/' + page, {
            method: 'GET'
        })
            .then(res => {
                return res.json()
            })
            .catch(err => {
                console.log(err);
            })
    }
}

export default API;