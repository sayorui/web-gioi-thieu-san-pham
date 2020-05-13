import React, { Component, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import API from '../../api';

const Detail = (props) => {
    const params = useParams();
    const [data, setData] = useState(null);

    useEffect(() => {
        console.log(8, params)
        API.getPostDetail(params.title).then(res => {
            if (res && res.length > 0) {
                setData(res[0])
            }
        })
    }, [])

    console.log(18, data)

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