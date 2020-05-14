const API_ROUTE = 'https://localhost:44344'

var API = {
    // GET tìm kiếm theo tiêu đề
    getPostDetail(title) {
        console.log(5, API_ROUTE + '/api/Posts/title')
        return fetch(API_ROUTE + '/api/Posts/title', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify('title:' + title),
        })
            .then(res => {
                return res.json()
            })
            .catch(err => {
                console.log(err);
            })
    },
    // GET EXAMPLE
    getSomeThing(id) {
        return fetch(API_ROUTE + id, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
            })
            .catch(err => {
                console.log(err);
            })
    },
    // POST EXAMPLE
    postSomeThing(data) {
        return fetch(API_ROUTE + '/api/Posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
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
    getPaging(page) {
        return fetch(API_ROUTE + '/api/Posts/page/' + page, {
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