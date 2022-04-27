import React, { Component } from 'react';
import { connect } from 'react-redux';
import './NewProducts.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class NewProducts extends Component {

    render() {
        let settings = this.props.settings;
        return (
            <div className='section-share'>
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='title-section'>Sản Phẩm Mới</span>
                        <button className='btn-section'>Xem thêm</button>
                    </div>
                    <div className='section-body'>
                        <Slider {...settings}>
                            <div className="section-child">
                                <div className="bg-image section-new-product" />
                                <div className='price-new-product'>
                                    <div>Giày thể thao cao cấp</div>
                                    <div className='price-detail-product'><span className='old-price'>560,000đ</span>420,000đ</div>
                                </div>
                            </div>
                            <div className="section-child">
                                <div className="bg-image section-new-product" />
                                <div className='price-new-product'>
                                    <div>Giày thể thao cao cấp</div>
                                    <div className='price-detail-product'><span className='old-price'>560,000đ</span>420,000đ</div>
                                </div>
                            </div>
                            <div className="section-child">
                                <div className="bg-image section-new-product" />
                                <div className='price-new-product'>
                                    <div>Giày thể thao cao cấp</div>
                                    <div className='price-detail-product'><span className='old-price'>560,000đ</span>420,000đ</div>
                                </div>
                            </div>
                            <div className="section-child">
                                <div className="bg-image section-new-product" />
                                <div className='price-new-product'>
                                    <div>Giày thể thao cao cấp</div>
                                    <div className='price-detail-product'><span className='old-price'>560,000đ</span>420,000đ</div>
                                </div>
                            </div>
                            <div className="section-child">
                                <div className="bg-image section-new-product" />
                                <div className='price-new-product'>
                                    <div>Giày thể thao cao cấp</div>
                                    <div className='price-detail-product'><span className='old-price'>560,000đ</span>420,000đ</div>
                                </div>
                            </div>
                            <div className="section-child">
                                <div className="bg-image section-new-product" />
                                <div className='price-new-product'>
                                    <div>Giày thể thao cao cấp</div>
                                    <div className='price-detail-product'><span className='old-price'>560,000đ</span>420,000đ</div>
                                </div>
                            </div>
                            <div className="section-child">
                                <div className="bg-image section-new-product" />
                                <div className='price-new-product'>
                                    <div>Giày thể thao cao cấp</div>
                                    <div className='price-detail-product'><span className='old-price'>560,000đ</span>420,000đ</div>
                                </div>
                            </div>
                            <div className="section-child">
                                <div className="bg-image section-new-product" />
                                <div className='price-new-product'>
                                    <div>Giày thể thao cao cấp</div>
                                    <div className='price-detail-product'><span className='old-price'>560,000đ</span>420,000đ</div>
                                </div>
                            </div>
                            <div className="section-child">
                                <div className="bg-image section-new-product" />
                                <div className='price-new-product'>
                                    <div>Giày thể thao cao cấp</div>
                                    <div className='price-detail-product'><span className='old-price'>560,000đ</span>420,000đ</div>
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
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,

    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewProducts);
