import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from "react-slick";
import './OutstandProduct.scss';

class OutstandProduct extends Component {

    render() {

        return (
            <div className='section-share section-outstand-product'>
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='title-section'>Sản phẩm nổi bật tuần qua</span>
                        <button className='btn-section'>Xem thêm</button>
                    </div>
                    <div className='section-body'>
                        <Slider {...this.props.settings}>
                            <div className="section-child">
                                <div className="bg-image section-outstand-product" />
                                <div className='description'>
                                    <div>Giày sneaker Adidas - EQT basketball ADV - <span>Adidas</span></div>

                                </div>
                            </div>
                            <div className="section-child">
                                <div className="bg-image section-outstand-product" />
                                <div className='description'>
                                    <div>Giày sneaker Adidas - EQT basketball ADV - <span>Adidas</span></div>

                                </div>

                            </div>
                            <div className="section-child">
                                <div className="bg-image section-outstand-product" />
                                <div className='description'>
                                    <div>Giày sneaker Adidas - EQT basketball ADV - <span>Adidas</span></div>

                                </div>
                            </div>
                            <div className="section-child">
                                <div className="bg-image section-outstand-product" />
                                <div className='description'>
                                    <div>Giày sneaker Adidas - EQT basketball ADV - <span>Adidas</span></div>

                                </div>
                            </div>
                            <div className="section-child">
                                <div className="bg-image section-outstand-product" />
                                <div className='description'>
                                    <div>Giày sneaker Adidas - EQT basketball ADV - <span>Adidas</span></div>

                                </div>
                            </div>
                            <div className="section-child">
                                <div className="bg-image section-outstand-product" />
                                <div className='description'>
                                    <div>Giày sneaker Adidas - EQT basketball ADV - <span>Adidas</span></div>

                                </div>
                            </div>
                            <div className="section-child">
                                <div className="bg-image section-outstand-product" />
                                <div className='description'>
                                    <div>Giày sneaker Adidas - EQT basketball ADV - <span>Adidas</span></div>

                                </div>
                            </div>
                            <div className="section-child">
                                <div className="bg-image section-outstand-product" />
                                <div className='description'>
                                    <div>Giày sneaker Adidas - EQT basketball ADV - <span>Adidas</span></div>

                                </div>
                            </div>
                            <div className="section-child">
                                <div className="bg-image section-outstand-product" />
                                <div className='description'>
                                    <div>Giày sneaker Adidas - EQT basketball ADV - <span>Adidas</span> </div>

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

export default connect(mapStateToProps, mapDispatchToProps)(OutstandProduct);
