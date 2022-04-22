import React, { Component } from 'react';
import { connect } from 'react-redux';
// import './News.scss';
import Slider from "react-slick";


class News extends Component {

    render() {

        return (
            <div className='section-share section-news'>
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='title-section'>Tin tức</span>
                        <button className='btn-section'>Xem thêm</button>
                    </div>
                    <div className='section-body'>
                        <Slider {...this.props.settings}>
                            <div className="section-child">
                                <div className="bg-image section-news" />

                            </div>
                            <div className="section-child">
                                <div className="bg-image section-news" />

                            </div>
                            <div className="section-child">
                                <div className="bg-image section-news" />

                            </div>
                            <div className="section-child">
                                <div className="bg-image section-news" />

                            </div>
                            <div className="section-child">
                                <div className="bg-image section-news" />

                            </div>
                            <div className="section-child">
                                <div className="bg-image section-news" />

                            </div>
                            <div className="section-child">
                                <div className="bg-image section-news" />

                            </div>
                            <div className="section-child">
                                <div className="bg-image section-news" />

                            </div>
                            <div className="section-child">
                                <div className="bg-image section-news" />

                            </div>

                        </Slider>
                    </div>

                </div>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(News);
