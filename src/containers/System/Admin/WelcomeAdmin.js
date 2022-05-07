import React, { Component } from 'react';
import { connect } from 'react-redux';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./WelcomeAdmin.scss"



class WelcomeAdmin extends Component {

    render() {

        return (
            <div>
                <div className='welcome-admin-container'>
                    <div className='container'>
                        <div className="title mt-5" >
                            Welcome to system Buti Shoe
                        </div>
                        <div className="my-5 welcome-admin-body">
                            <div className="row">
                                <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
                                    <div
                                        className="bg-image card shadow-1-strong"

                                        style={{ backgroundImage: `url("https://mdbootstrap.com/img/new/slides/003.jpg")` }}
                                    >
                                        <div className="card-body text-white">
                                            <h5 className="card-title">9 Users</h5>
                                            <p className="card-text">
                                                You have 9 users. Click the button below to see all users.
                                            </p>
                                            <a href="#!" className="btn btn-outline-light">All users</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 mb-4 col-md-12 mb-lg-0">
                                    <div
                                        className="bg-image card shadow-1-strong"

                                        style={{ backgroundImage: `url("https://raw.githubusercontent.com/DuongNgoHunq/hosting-image-free/master/detail-product/background-shoe.webp")` }}
                                    >
                                        <div className="card-body text-white">
                                            <h5 className="card-title">18 Products</h5>
                                            <p className="card-text">
                                                You have 17 products. Click the button below to see all products.
                                            </p>
                                            <a href="#!" className="btn btn-outline-light">All products</a>
                                        </div>
                                    </div>

                                </div>

                                <div className="col-lg-6 mb-4 col-md-12 mb-lg-0 my-5">

                                    <div
                                        className="bg-image card shadow-1-strong"
                                        style={{ backgroundImage: `url("https://mdbootstrap.com/img/new/slides/033.jpg")` }}
                                    >
                                        <div className="card-body text-white">
                                            <h5 className="card-title">5 news post </h5>
                                            <p className="card-text">
                                                You have 5 news post. Click the button below to see all news post.

                                            </p>
                                            <a href="#!" className="btn btn-outline-light">All post</a>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-lg-6 mb-4 col-md-12 mb-lg-0 my-5">
                                    <div
                                        className="bg-image card shadow-1-strong"

                                        style={{ backgroundImage: `url("https://mdbootstrap.com/img/new/slides/028.jpg")` }}
                                    >
                                        <div className="card-body text-white">
                                            <h5 className="card-title">5 brands</h5>
                                            <p className="card-text">
                                                You have 17 brands. Click the button below to see all brands.
                                            </p>
                                            <a href="#!" className="btn btn-outline-light">All brands</a>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>


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

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeAdmin);
