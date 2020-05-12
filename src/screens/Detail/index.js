import React, { Component } from 'react'
import { useParams } from 'react-router-dom'

const Detail = (props) => {
    const params = useParams();
    console.log(6, params)

    return (
        <>
            <div className="card">
                <div className="card-body">
                    Tiêu đề
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    Chi tiết
                </div>
            </div>
        </>
    )
}

export default Detail