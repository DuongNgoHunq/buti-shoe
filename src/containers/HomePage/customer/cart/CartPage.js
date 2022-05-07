import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import HomeHeader from '../../HomeHeader';
import HomeFooter from '../../Section/HomeFooter';
import { Link } from 'react-router-dom';
import image from '../../../../assets/new-product/nike-do.jpg'
import './CartPage.scss'

class CartPage extends Component {

    render() {

        return (
            <div>
                <HomeHeader isShowSlider={false} />
                <div className='cart-container container-xl my-5'>
                    <div className='title-cart'>Giỏ hàng của bạn</div>

                    <table className="table caption-top">
                        <thead>
                            <tr>
                                <th scope="col">Ảnh</th>
                                <th scope="col">Tên sản phẩm</th>
                                <th scope="col">Giá</th>
                                <th scope="col">Số lượng</th>
                                <th scope="col">Tổng tiền</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">
                                    <img src={image} />
                                </th>
                                <td>Nike 1</td>
                                <td className='price'>400000 đ</td>
                                <td>
                                    <button>-</button>
                                    <button>1</button>
                                    <button>+</button>

                                </td>
                                <td>
                                    <span className='price'>  400000 đ &nbsp;</span>
                                    <i className="fas fa-trash-alt"></i>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <img src={image} />

                                </th>
                                <td>Nike 1</td>
                                <td className='price'>400000 đ</td>
                                <td>
                                    <button>-</button>
                                    <button>1</button>
                                    <button>+</button>
                                </td>
                                <td>
                                    <span className='price'>  400000 đ &nbsp;</span>
                                    <i className="fas fa-trash-alt"></i>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                    <div className="cartBuy">
                        <div>
                            <Link to="/product">
                                <button className='btn btn-outline-dark px-4 py-2'>Tiếp tục mua hàng</button>
                            </Link>
                        </div>
                        <div>
                            <button className='btn btn-outline-dark px-4 py-2'>Mua ngay</button>&nbsp;
                            <span className="pricesTotal">8000000 đ</span>
                        </div>
                    </div>

                </div>
                <HomeFooter />

            </div>
        );
    }

}

const mapStateToProps = state => {
    return {

    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartPage));
