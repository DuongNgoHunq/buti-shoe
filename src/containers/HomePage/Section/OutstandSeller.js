import React, { Component } from 'react';
import { connect } from 'react-redux';
import './OustandSeller.scss';
import Slider from "react-slick";
import * as actions from '../../../store/actions';
import { LANGUAGES } from '../../../utils/constant';
import { FormattedMessage } from 'react-intl';


class OustandSeller extends Component {

    constructor(props) {
        super(props)
        this.state = {
            arrSellers: []
        }
    }

    componentDidMount() {
        this.props.loadTopSellers();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.topSellersRedux !== this.props.topSellersRedux) {
            this.setState({
                arrSellers: this.props.topSellersRedux
            })
        }
    }
    render() {

        let { arrSellers } = this.state;
        let { language } = this.props;
        return (
            <div className='container-fluid section-outstand-seller'>
                <div className='section-share  container-xl '>
                    <div className='section-container section-body-seller'>
                        <div className='section-header'>
                            <span className='title-section'>
                                <FormattedMessage id="homepage.outstand-seller" />

                            </span>
                            <button className='btn-section'>
                                <FormattedMessage id="homepage.more-infor" />

                            </button>
                        </div>
                        <div className='section-body '>
                            <Slider {...this.props.settings}>

                                {arrSellers && arrSellers.length > 0 &&
                                    arrSellers.map((item, index) => {

                                        let imageBase64 = '';
                                        if (item.image) {
                                            imageBase64 = new Buffer(item.image, 'base64').toString('binary')
                                        }

                                        let nameVi = `Nhân viên xuất sắc - ${item.firstName} ${item.lastName}`;
                                        let nameEn = `excellent staff - ${item.firstName} ${item.lastName}`
                                        return (
                                            <div className="section-child" key={index}>
                                                <div className="bg-image section-outstand-seller "
                                                    style={{ backgroundImage: `url(${imageBase64})` }}
                                                />
                                                <div >
                                                    <p className='fw-bold'>{language === LANGUAGES.VI ? nameVi : nameEn} </p>
                                                    <div className='fw-bold'>Cửa hàng {index + 1}</div>
                                                </div>

                                            </div>
                                        )
                                    })
                                }
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
        topSellersRedux: state.admin.topSellers,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loadTopSellers: () => dispatch(actions.fetchTopSellerStart())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(OustandSeller);
