import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeFooter.scss'

class HomeFooter extends Component {

    render() {

        return (
            <div className='home-footer container-fludi'>
                <div className='footer-content row'>
                    <div className='infor-shop col-md-3 col-sm-6'>
                        <div href="#">
                            <div className='footer-logo'>
                                <span> Buti</span> <span className='logo-footer'> Shoe</span>
                            </div>
                            <p className='description-footer'>Hệ thống giày thể thao số 1 Hà Nội</p>
                            <p className='description-footer'>Hotline <span>&nbsp;033.538.1286</span></p>
                            <p className='description-footer'>Store 1: <span>&nbsp;57 Quan Hoa, Cầu Giấy, HN</span></p>
                            <p className='description-footer'>Store 2: <span>&nbsp;29 Trần Đại Nghĩa, Hai Bà Trưng, HN</span></p>
                        </div>
                    </div>
                    <div className='infor-shop col-md-3 col-sm-6'>
                        <div href="#">
                            <div className='footer-logo'>
                                Hỗ trợ
                            </div>
                            <p className='description-footer'>Hệ thống giày thể thao số 1 Hà Nội</p>
                            <p className='description-footer'>7 cách bảo quản giày thể thao tốt nhất</p>
                            <p className='description-footer'>Giữ “phong độ” cho Sneaker trắng ra sao</p>
                            <p className='description-footer'>9 kỹ thuật làm đẹp dành cho U30</p>
                        </div>
                    </div>
                    <div className='infor-shop col-md-3 col-sm-6'>
                        <div href="#">
                            <div className='footer-logo'>
                                <span> DỊCH VỤ KHÁC HÀNG</span>
                            </div>
                            <p className='description-footer'>Giới thiệu XSHOP</p>
                            <p className='description-footer'>Hướng dẫn đặt hàng</p>
                            <p className='description-footer'>Chính sách đổi trả và bảo hành</p>
                            <p className='description-footer'>Chính sách bảo mật</p>
                            <p className='description-footer'>Liên hệ XSHOP</p>
                            <p className='description-footer'>Hệ thống cửa hàng</p>
                        </div>
                    </div>
                    <div className='infor-shop col-md-3 col-sm-6'>
                        <div href="#">
                            <div className='footer-logo'>
                                <span> BUTI SHOE TRÊN YOUTUBE</span>
                            </div>
                            <iframe src="https://www.youtube.com/embed/N0zuXD-6pUs" title="Iframe-Example" />
                            <iframe src="https://www.youtube.com/embed/QOCx_7Npub0" title="Iframe-Example" />

                        </div>
                    </div>



                </div>
                <div className='footer-end-game row'>
                    <div className='col-sm-6'>
                        &copy; 2022 Dương Ngô Hùng. More information, please visit my store

                        <a href='https://www.facebook.com/DuongNgoHung1118/'>
                            &nbsp; &#8594; Click here! &#8592;
                        </a>
                    </div>
                    <div className='col-sm-6'>
                        <span>ATM VISA PAYPAL </span>
                    </div>
                </div>
            </div >
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
