const API_ROUTE = 'https://localhost:44344'
// const API_ROUTE = 'https://giangwebapi.azurewebsites.net';

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
    savePost(title, content, type, coverImage) {
        return fetch(API_ROUTE + '/api/Posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ Title: title, Content: content, Type: type, CoverImage: coverImage })
        })
            .then(res => {
                return res.json()
            })
            .catch(err => {
                console.log(err);
            })
    },

    updatePost(id, title, content, type, coverImage) {
        return fetch(API_ROUTE + '/api/Posts', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ID: id, Title: title, Content: content, Type: type, CoverImage: coverImage })
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
    },

    // Upload Image
    uploadImage(formData) {
        return fetch(API_ROUTE + '/api/Posts/image', {
            method: 'POST',
            headers: {
                // Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: formData
        })
            .then(res => {
                if (res.ok) {
                    console.log(88, res)
                    return res.json()
                }
                // return res?.json()
            })
            .catch(err => {
                console.log(err);
            })
    }
}

export default API;