import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
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
        return (
            <div className='product-container container-xl'>
                <h3 className='content-title'>
                    <FormattedMessage id="homepage.newest-product" />
                </h3>
                <div className='row product-container-body'>
                    {arrAllProduct && arrAllProduct.length &&
                        arrAllProduct.map((item, index) => {
                            let imageBase64 = '';
                            if (item.image) {
                                imageBase64 = new Buffer(item.image, 'base64').toString('binary')
                            }
                            return (
                                <div className='col-xl-3 col-md-4 col-sm-6'
                                    key={index}
                                    onClick={() => this.handleViewDetailProduct(item)}
                                >
                                    <div className="card" >

                                        <img src={imageBase64} className="card-img-top" alt="..." />
                                        <div className="card-body text-center">
                                            <p className="card-title">{item.name}</p>
                                            <p className="card-price lead fw-bold">{item.price}  VND</p>
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
