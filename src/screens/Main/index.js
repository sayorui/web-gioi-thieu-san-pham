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
                {/* <Header /> */}
                <Body />
                {/* <Footer /> */}
                <a href="tel:0982.877.559" title="Call Now" className="btn-float">
                    <div className="float">
                        <i class="fas fa-phone-alt my-float"></i>
                    </div>
                    <div className="call-float">0982.877.559</div>
                </a>
            </div>
        )
    }
}
