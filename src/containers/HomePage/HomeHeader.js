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
            autoplaySpeed: 2000
        };
        return (
            <>
                <div className='home-header-container'>
                    <div className='home-header-content '>
                        <div className='left-content'>
                            <i className="fas fa-bars"></i>
                            <div className='header-logo' onClick={() => this.returnToHome()}>
                                <span> Buti</span>
                                <span className='logo'> Shoe</span>
                            </div>
                        </div>
                        <div className='center-content'>
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
                        <div className='right-content'>

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
                </div>
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
