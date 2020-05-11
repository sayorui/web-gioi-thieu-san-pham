import React, { Component } from 'react'
import { useParams } from 'react-router-dom'

const Detail = (props) => {
    const params = useParams();
    console.log(6, params)

    return (
        <div>
            Chi tiết Post
        </div>
    )
}

export default Detail