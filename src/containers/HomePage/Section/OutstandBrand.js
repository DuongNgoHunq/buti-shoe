import React, { Component } from 'react';
import { connect } from 'react-redux';
import './OutstandBrand.scss';
import Slider from "react-slick";
import { FormattedMessage } from 'react-intl';
import { LANGUAGES } from '../../../utils/constant';
import { withRouter } from 'react-router';

import * as actions from '../../../store/actions'



class OutstandBrand extends Component {
    constructor(props) {
        super(props)
        this.state = {
            arrBrands: [],
        }
    }
    componentDidMount() {
        this.props.allBrand();
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.brandList !== this.props.brandList) {
            this.setState({
                arrBrands: this.props.brandList
            })
        }
    }
    gotoBrand = () => {
        if (this.props.history) {
            this.props.history.push(`/brand`)
        }
    }
    render() {
        let settings = this.props.settings;
        let arrBrands = this.state.arrBrands;
        let { language } = this.props;


        return (
            <div className='section-share section-brand container-fluid'>
                <div className='section-container container-xl'>
                    <div className='section-header'>
                        <span className='title-section'>
                            <FormattedMessage id="homepage.brand" />
                        </span>
                        <button className="btn-section"
                            onClick={() => this.gotoBrand()}
                        >
                            <FormattedMessage id="homepage.more-infor" />

                        </button>
                    </div>
                    <div className='section-body container-xl'>
                        <Slider {...settings}>
                            {arrBrands && arrBrands.length > 0 &&
                                arrBrands.map((item, index) => {
                                    let nameVi = `Thương hiệu nổi bật `;
                                    let nameEn = `Outstanding brand `;

                                    let imageBase64 = '';
                                    if (item.image) {
                                        imageBase64 = new Buffer(item.image, 'base64').toString('binary')
                                    }
                                    return (
                                        <div className="section-child section-outstand-brand " key={index}>
                                            <div className="bg-image section-outstand-brand"
                                                style={{ backgroundImage: `url(${imageBase64})` }}

                                            ></div>
                                            <div className='description fw-bold'>
                                                <p>
                                                    {language === LANGUAGES.VI ? nameVi : nameEn}
                                                    <span className='name-product'>{item.name}</span>
                                                </p>
                                            </div>

                                        </div>
                                    )
                                })

                            }



                        </Slider>
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

        brandList: state.admin.allBrand
    };
};

const mapDispatchToProps = dispatch => {
    return {
        allBrand: () => dispatch(actions.fetchAllBrand())
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(OutstandBrand));
