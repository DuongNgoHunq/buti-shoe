import React, { Component } from 'react';
import { connect } from 'react-redux';
import './OutstandBrand.scss';
import Slider from "react-slick";


class OutstandBrand extends Component {

    render() {

        return (
            <div className='section-share section-brand'>
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='title-section'>Thương hiệu nổi bật</span>
                        <button className='btn-section'>Xem thêm</button>
                    </div>
                    <div className='section-body'>
                        <Slider {...this.props.settings}>
                            <div className="section-child">
                                <div className="bg-image section-outstand-brand" />
                                <div className='description'>
                                    <p>Adidas thương hiệu nổi bật 2022 </p>
                                </div>

                            </div>
                            <div className="section-child">
                                <div className="bg-image section-outstand-brand" />
                                <div className='description'>
                                    <p>Adidas thương hiệu nổi bật 2022 </p>
                                </div>
                            </div>
                            <div className="section-child">
                                <div className="bg-image section-outstand-brand" />
                                <div className='description'>
                                    <p>Adidas thương hiệu nổi bật 2022 </p>
                                </div>
                            </div>
                            <div className="section-child">
                                <div className="bg-image section-outstand-brand" />
                                <div className='description'>
                                    <p>Adidas thương hiệu nổi bật 2022 </p>
                                </div>

                            </div>
                            <div className="section-child">
                                <div className="bg-image section-outstand-brand" />
                                <div className='description'>
                                    <p>Adidas thương hiệu nổi bật 2022 </p>
                                </div>
                            </div>
                            <div className="section-child">
                                <div className="bg-image section-outstand-brand" />
                                <div className='description'>
                                    <p>Adidas thương hiệu nổi bật 2022 </p>
                                </div>
                            </div>
                            <div className="section-child">
                                <div className="bg-image section-outstand-brand" />
                                <div className='description'>
                                    <p>Adidas thương hiệu nổi bật 2022 </p>
                                </div>
                            </div>
                            <div className="section-child">
                                <div className="bg-image section-outstand-brand" />
                                <div className='description'>
                                    <p>Adidas thương hiệu nổi bật 2022 </p>
                                </div>
                            </div>
                            <div className="section-child">
                                <div className="bg-image section-outstand-brand" />
                                <div className='description'>
                                    <p>Adidas thương hiệu nổi bật 2022 </p>
                                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(OutstandBrand);
