import React, { Component, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import API from '../../api';
import { getTitleToSearch } from '../../utility/function';

const Detail = (props) => {
    const params = useParams();
    const [data, setData] = useState(null);

    useEffect(() => {
        console.log(11, params.title)
        let title = getTitleToSearch(params.title);
        console.log(11, title)
        API.getPostDetail(title).then(res => {
            if (res && res.length > 0) {
                setData(res[0])
            }
        }).catch(err => {
            console.log(18, err)
        })
    }, [params])

    useEffect(() => {
        // Scroll về đầu trang 
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            <div className="card">
                <div className="card-body">
                    <h3 style={{ textTransform: 'uppercase' }}>{data ? data.title : ''}</h3>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <div dangerouslySetInnerHTML={{ __html: data ? data.content : '' }}></div>
                </div>
            </div>
        </>
    )
}

export default Detail