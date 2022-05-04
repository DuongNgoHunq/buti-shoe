import React, { Component } from 'react';
import { connect } from 'react-redux';
import './NewProducts.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { FormattedMessage } from 'react-intl';
import "slick-carousel/slick/slick-theme.css";
import * as actions from '../../../store/actions';
import { LANGUAGES } from '../../../utils/constant';
import { withRouter } from 'react-router';


class NewProducts extends Component {

    constructor(props) {
        super(props)
        this.state = {
            arrNewProduct: [],
        }
    }
    componentDidMount() {
        this.props.loadNewProductRedux();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.newProductRedux !== this.props.newProductRedux) {
            this.setState({
                arrNewProduct: this.props.newProductRedux
            })
        }
    }

    handleViewDetailProduct = (product) => {
        this.props.history.push(`/detail-product/${product.id}`)

    }

    gotoProduct = () => {
        if (this.props.history) {
            this.props.history.push(`/product`)
        }
    }

    render() {
        let settings = this.props.settings;
        let arrNewProduct = this.state.arrNewProduct;
        let { language } = this.props;
        return (
            <div className='section-share container-xl'>
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='title-section'>
                            <FormattedMessage id="homepage.new-product" />
                        </span>
                        <button className='btn-section'
                            onClick={() => this.gotoProduct()}
                        >
                            <FormattedMessage id="homepage.more-infor" />

                        </button>
                    </div>
                    <div className='section-body row'>
                        <Slider {...settings}>

                            {arrNewProduct && arrNewProduct.length &&
                                arrNewProduct.map((item, index) => {
                                    let nameVi = `Giày cao cấp ${item.name}`;
                                    let nameEn = `Luxury shoes ${item.name}`;
                                    let priceVi = `Giá: `;
                                    let priceEn = `Price: `;

                                    let imageBase64 = '';
                                    if (item.image) {
                                        imageBase64 = new Buffer(item.image, 'base64').toString('binary')
                                    }
                                    return (
                                        <div div className="section-child col-md-4 col-sm-4 col-xs-12" key={index}
                                            onClick={() => this.handleViewDetailProduct(item)}
                                        >
                                            <div className="bg-image section-new-product"
                                                style={{ backgroundImage: `url(${imageBase64})` }}
                                            />

                                            <div className='price-new-productprice-new-product'>
                                                <div className='name-product fw-bold'>{language === LANGUAGES.VI ? nameVi : nameEn}</div>
                                                <div className='price-detail-product fw-bold'>
                                                    {language === LANGUAGES.VI ? priceVi : priceEn} <span>{item.price} VND</span>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </Slider>
                    </div>
                </div >
            </div >
        )
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
        newProductRedux: state.admin.newProducts,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loadNewProductRedux: () => dispatch(actions.fetchNewProduct())
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewProducts));
