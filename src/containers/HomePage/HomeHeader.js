import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { LANGUAGES } from '../../utils/constant';
import { changeLanguageApp } from '../../store/actions/appActions';
import Slider from "react-slick";
import { withRouter } from 'react-router';
import './HomeHeader.scss';

class HomeHeader extends Component {

    changeLanguage = (language) => {
        //fire redux event: actions
        this.props.changeLanguageAppRedux(language)
    }

    returnToHome = () => {
        if (this.props.history) {
            this.props.history.push(`/home`)
        }
    }
    gotoProduct = () => {
        if (this.props.history) {
            this.props.history.push(`/product`)
        }
    }
    gotoBrand = () => {
        if (this.props.history) {
            this.props.history.push(`/brand`)
        }
    }
    gotoNews = () => {
        if (this.props.history) {
            this.props.history.push(`/news-page`)
        }
    }
    gotoContact = () => {
        if (this.props.history) {
            this.props.history.push(`/contact`)
        }
    }
    render() {
        let language = this.props.language;
        const settings = {
            infinite: true,
            speed: 2000,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000
        };
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-light bg-light home-header-container">
                    <div className="container-fluid home-header-content ">
                        <a className="navbar-brand header-logo " href="#" onClick={() => this.returnToHome()}>
                            <span> Buti</span>
                            <span className='logo'> Shoe</span>
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link" href="#"
                                        onClick={() => this.returnToHome()}
                                    >
                                        <FormattedMessage id="homeheader.homeindex" />
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"
                                        onClick={() => this.gotoProduct()}
                                    >
                                        <FormattedMessage id="homeheader.product" />
                                    </a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link" href="#" role="button" aria-expanded="false"
                                        onClick={() => this.gotoBrand()}
                                    >
                                        <FormattedMessage id="homeheader.brand" />
                                    </a>

                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"
                                        onClick={() => this.gotoNews()}
                                    >

                                        <FormattedMessage id="homeheader.new" />
                                    </a>
                                </li>
                            </ul>
                            <form className="d-flex">

                            </form>
                            <div className='right-content'>
                                <input className="form-control me-2" type="search" placeholder="Search ..." aria-label="Search" />
                                <i className="fas fa-search "></i>

                                <i className="fas fa-user"></i>
                                <div className={language === LANGUAGES.VI ? 'language-vi active' : 'language-vi'}><span
                                    onClick={() => this.changeLanguage(LANGUAGES.VI)}
                                >VN</span></div>
                                <div className={language === LANGUAGES.EN ? 'language-en active' : 'language-en'}><span
                                    onClick={() => this.changeLanguage(LANGUAGES.EN)}
                                >EN</span></div>
                            </div>
                        </div>
                    </div>
                </nav>
                {/* <div className='home-header-container container-fluid'>
                    <div className='home-header-content row'>
                        <div className='left-content col-md-4 d-flex col-sm-12 '>
                            <i className="fas fa-bars"></i>
                            <div className='header-logo' onClick={() => this.returnToHome()}>
                                <span> Buti</span>
                                <span className='logo'> Shoe</span>
                            </div>
                        </div>
                        <div className='center-content col-md-5 d-md-flex d-sm-none d-flex col-sm-1'>
                            <div className='child-content'>
                                <div onClick={() => this.returnToHome()}><FormattedMessage id="homeheader.homeindex" /></div>
                            </div>
                            <div className='child-content'>
                                <div onClick={() => this.gotoProduct()}><FormattedMessage id="homeheader.product" /></div>
                            </div>
                            <div className='child-content'>
                                <div onClick={() => this.gotoBrand()}><FormattedMessage id="homeheader.brand" /></div>
                            </div>
                            <div className='child-content'>
                                <div onClick={() => this.gotoNews()}><FormattedMessage id="homeheader.new" /></div>
                            </div>
                            <div className='child-content'>
                                <div onClick={() => this.gotoContact()}><FormattedMessage id="homeheader.contact" /></div>
                            </div>

                        </div>
                        <div className='right-content col-md-3 d-md-flex d-sm-none d-flex'>

                            <i className="fas fa-search "></i>
                            <i className="fas fa-user"></i>
                            <div className={language === LANGUAGES.VI ? 'language-vi active' : 'language-vi'}><span
                                onClick={() => this.changeLanguage(LANGUAGES.VI)}
                            >VN</span></div>
                            <div className={language === LANGUAGES.EN ? 'language-en active' : 'language-en'}><span
                                onClick={() => this.changeLanguage(LANGUAGES.EN)}
                            >EN</span></div>
                            <i className="fas fa-question"></i>
                        </div>
                    </div>
                </div> */}



                {this.props.isShowSlider === true &&
                    <div className='header-body'>
                        <Slider {...settings}>
                            <div className='home-header-slide1'>
                                <div className='title'><FormattedMessage id="banner.title1" /></div>
                                <div className='description'>
                                    <i>
                                        <FormattedMessage id="banner.description1" />
                                    </i>
                                </div>
                                <div className='btn-buy-now'>
                                    <button><FormattedMessage id="banner.btn" /></button>
                                </div>
                            </div>
                            <div className='home-header-slide2'>
                                <div className='title'><FormattedMessage id="banner.title3" /></div>
                                <div className='description'>
                                    <i>
                                        <FormattedMessage id="banner.description3" />
                                    </i>
                                </div>
                                <div className='btn-buy-now'>
                                    <button><FormattedMessage id="banner.btn" /></button>
                                </div>
                            </div>
                            <div className='home-header-slide3'>
                                <div className='title'><FormattedMessage id="banner.title1" /></div>
                                <div className='description'>
                                    <i>
                                        <FormattedMessage id="banner.description1" />
                                    </i>
                                </div>
                                <div className='btn-buy-now'>
                                    <button><FormattedMessage id="banner.btn" /></button>
                                </div>
                            </div>

                        </Slider>
                    </div>
                }
            </>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        userInfo: state.user.userInfo,
        language: state.app.language,

    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language))
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeHeader));
