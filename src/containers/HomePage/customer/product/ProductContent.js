import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import imgProduct from '../../../../assets/new-product/nike-do.jpg';

class ProductContent extends Component {

    render() {

        return (
            <div className='product-container container-xl'>
                <h3 className='content-title'>
                    Sản phẩm mới nhất
                </h3>
                <div className='row product-container-body'>
                    <div className='col-md-3 col-sm-6'>
                        <div className="card " >
                            <img src={imgProduct} className="card-img-top" alt="..." />
                            <div className="card-body text-center">
                                <p className="card-title">Giày Thể Thao XSPORT Ni.ke Jordan 1 High Hồng trắng REP</p>
                                <p className="card-price lead fw-bold">1,490,000  VND</p>
                                <a href="#" className="btn btn-outline-dark">Buy now </a>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3 col-sm-6'>
                        <div className="card " >

                            <img src={imgProduct} className="card-img-top" alt="..." />
                            <div className="card-body text-center">
                                <h5 className="card-title">Giày Thể Thao XSPORT Ni.ke Jordan 1 High Hồng trắng REP</h5>
                                <p className="card-price lead fw-bold">1,490,000  VND</p>
                                <a href="#" className="btn btn-outline-dark">Buy now </a>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3 col-sm-6'>
                        <div className="card " >

                            <img src={imgProduct} className="card-img-top" alt="..." />
                            <div className="card-body text-center">
                                <h5 className="card-title">Giày Thể Thao XSPORT Ni.ke Jordan 1 High Hồng trắng REP</h5>
                                <p className="card-price lead fw-bold">1,490,000  VND</p>
                                <a href="#" className="btn btn-outline-dark">Buy now </a>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3 col-sm-6'>
                        <div className="card " >

                            <img src={imgProduct} className="card-img-top" alt="..." />
                            <div className="card-body text-center">
                                <h5 className="card-title">Giày Thể Thao XSPORT Ni.ke Jordan 1 High Hồng trắng REP</h5>
                                <p className="card-price lead fw-bold">1,490,000  VND</p>
                                <a href="#" className="btn btn-outline-dark">Buy now </a>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3 col-sm-6'>
                        <div className="card " >

                            <img src={imgProduct} className="card-img-top" alt="..." />
                            <div className="card-body text-center">
                                <h5 className="card-title">Giày Thể Thao XSPORT Ni.ke Jordan 1 High Hồng trắng REP</h5>
                                <p className="card-price lead fw-bold">1,490,000  VND</p>
                                <a href="#" className="btn btn-outline-dark">Buy now </a>
                            </div>
                        </div>
                    </div>
                </div>

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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductContent));
