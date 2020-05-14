import React, { Component, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import API from '../../api';
import { getTitleToSearch } from '../../utility/function';

const Detail = (props) => {
    const params = useParams();
    const [data, setData] = useState(null);

    useEffect(() => {
        let title = getTitleToSearch(params.title);
        console.log(11, title)
        API.getPostDetail(title).then(res => {
            if (res && res.length > 0) {
                setData(res[0])
            }
        })
    }, [])

    return (
        <>
            <div className="card">
                <div className="card-body">
                    {data ? data.title : ''}
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