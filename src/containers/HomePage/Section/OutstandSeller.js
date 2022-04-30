import React, { Component } from 'react';
import { connect } from 'react-redux';
import './OustandSeller.scss';
import Slider from "react-slick";
import * as actions from '../../../store/actions';
// import { LANGUAGE } from '../../../utils'
import { LANGUAGES } from '../../../utils/constant';


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

        arrSellers = arrSellers.concat(arrSellers).concat(arrSellers)
        console.log('Check array seller: ', arrSellers);
        return (
            <div className='container-fluid section-outstand-seller'>
                <div className='section-share  container-xl '>
                    <div className='section-container section-body-seller'>
                        <div className='section-header'>
                            <span className='title-section'>Nhan vien nổi bật</span>
                            <button className='btn-section'>Xem thêm</button>
                        </div>
                        <div className='section-body '>
                            <Slider {...this.props.settings}>

                                {arrSellers && arrSellers.length > 0 &&
                                    arrSellers.map((item, index) => {

                                        let imageBase64 = '';
                                        if (item.image) {
                                            imageBase64 = new Buffer(item.image, 'base64').toString('binary')
                                            console.log('Check seller img: ', imageBase64);
                                        }

                                        let nameVi = `Nhân viên xuất sắc - ${item.firstName} ${item.lastName}`;
                                        let nameEn = `excellent staff - ${item.firstName} ${item.lastName}`
                                        console.log('Check image url: ', item);
                                        return (
                                            <div className="section-child" key={index}>
                                                <div className="bg-image section-outstand-seller"
                                                    style={{ backgroundImage: `url(${imageBase64})` }}
                                                />
                                                <div>
                                                    <p>{language === LANGUAGES.VI ? nameVi : nameEn} </p>
                                                    <p>Buti - 1</p>
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
