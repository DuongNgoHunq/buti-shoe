import React, { Component } from 'react';
import { connect } from "react-redux";
import HomeHeader from '../../HomeHeader';
import './DetailProduct.scss';
import { getdetailInforProduct } from '../../../../services/productService';
import { NavLink } from 'react-router-dom';

class DetailProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            detailProduct: {}
        }
    }

    async componentDidMount() {
        if (this.props.match && this.props.match.params && this.props.match.params.id) {
            let id = this.props.match.params.id;
            let res = await getdetailInforProduct(id);
            if (res && res.errCode === 0) {
                this.setState({
                    detailProduct: res.data
                })
            }

        }
    }
    render() {

        let { detailProduct } = this.state;
        console.log("Check state: ", detailProduct);
        return (
            <>
                <HomeHeader isShowSlider={false} />
                <div className='doctor-detail-container container-xl'>
                    <div className='intro-product row '>
                        <div
                            className='content-left col-md-5 col-sm-12 image-detail'
                            style={{ backgroundImage: `url(${detailProduct.image})` }}
                        >

                        </div>
                        <div className='content-right col-md-7 col-sm-12'>
                            <div className='name-product'>
                                {detailProduct.name}
                            </div>
                            <div className='desciption-product'>
                                {detailProduct.description}
                            </div>
                            <div className='price-product'>
                                {detailProduct.price} .vnd
                            </div>
                            <div className='delivery-return '>CHÍNH SÁCH GIAO HÀNG &amp; ĐỔI TRẢ</div>
                            <div className='delivery-return '>HƯỚNG DẪN BẢO QUẢN</div>
                            <div className='contact'>
                                <p>Tổng đài bán hàng: <span className='phone-number'>097.567.1080</span></p>
                            </div>
                            <button className='btn btn-outline-dark px-4 py-2 '>
                                Add to Cart
                            </button>
                            <NavLink to="/cart" className="btn btn-dark ms-2 px-3 py-2">
                                Go to Cart
                            </NavLink>
                        </div>
                    </div>
                    <div className='intro-markdown-product'>
                        {detailProduct.Markdown && detailProduct.Markdown.contentHTML
                            && <div dangerouslySetInnerHTML={{ __html: detailProduct.Markdown.contentHTML }}>

                            </div>
                        }
                    </div>
                    <div className='detail-infor-product'>

                    </div>
                    <div className='comment-product'></div>
                </div>
            </>

        );
    }
}

const mapStateToProps = state => {
    return {
        systemMenuPath: state.app.systemMenuPath,
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailProduct);
