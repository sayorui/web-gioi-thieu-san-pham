import React, { Component } from 'react'
import Header from './Header'
import Body from './Body'
import { Carousel } from 'react-bootstrap'
import Footer from './Footer'

export default class Main extends Component {
    render() {
        return (
            <div id="main-wrapper" data-theme="light" data-layout="vertical"
                data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed"
                data-header-position="fixed" data-boxed-layout="full" className=""
            >
                <Header />
                <Body />
                <Footer />
            </div>
        )
    }
}
