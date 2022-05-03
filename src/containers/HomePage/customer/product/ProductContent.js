import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import imgProduct from '../../../../assets/new-product/nike-do.jpg';
import { FormattedMessage } from 'react-intl';
import "slick-carousel/slick/slick-theme.css";
import * as actions from '../../../../store/actions';
import { LANGUAGES } from '../../../../utils/constant';

class ProductContent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            arrAllProduct: [],
        }
    }
    componentDidMount() {
        this.props.fetchAllProductRedux();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.listProduct !== this.props.listProduct) {
            this.setState({
                arrAllProduct: this.props.listProduct
            })
        }
    }
    handleViewDetailProduct = (product) => {
        this.props.history.push(`/detail-product/${product.id}`)

    }
    render() {
        let arrAllProduct = this.state.arrAllProduct;
        let { language } = this.props;
        console.log('Check arr product: ', arrAllProduct);
        return (
            <div className='product-container container-xl'>
                <h3 className='content-title'>
                    Sản phẩm mới nhất
                </h3>
                <div className='row product-container-body'>
                    {arrAllProduct && arrAllProduct.length &&
                        arrAllProduct.map((item, index) => {
                            let imageBase64 = '';
                            if (item.image) {
                                imageBase64 = new Buffer(item.image, 'base64').toString('binary')
                            }
                            console.log('Check img base 64: ', imageBase64);
                            return (
                                <div className='col-xl-3 col-md-4 col-sm-6'
                                    onClick={() => this.handleViewDetailProduct(item)}
                                >
                                    <div className="card" >

                                        <img src={imageBase64} className="card-img-top" alt="..." />
                                        <div className="card-body text-center">
                                            <p className="card-title">Giày Thể Thao XSPORT Ni.ke Jordan 1 High Hồng trắng REP</p>
                                            <p className="card-price lead fw-bold">1,490,000  VND</p>
                                            <a href="#" className="btn btn-outline-dark">Buy now </a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>

            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
        listProduct: state.admin.products,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchAllProductRedux: () => dispatch(actions.fetchAllProduct())
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductContent));
