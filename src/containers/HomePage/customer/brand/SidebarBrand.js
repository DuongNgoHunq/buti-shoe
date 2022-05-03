import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { FormattedMessage } from 'react-intl';
import * as actions from '../../../../store/actions';
import { LANGUAGES } from '../../../../utils/constant';



class SidebarBrand extends Component {

    constructor(props) {
        super(props)
        this.state = {
            arrBrand: [],
        }
    }
    componentDidMount() {
        this.props.brandListRedux();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.brandList !== this.props.brandList) {
            this.setState({
                arrBrand: this.props.brandList
            })
        }
    }
    render() {

        let arrBrand = this.state.arrBrand;
        let { language } = this.props;

        return (
            <div className='sidebar-blog'>
                <h3 className='sidebar-title'>
                    Thương hiệu nổi bật 2022
                </h3>
                {
                    arrBrand && arrBrand.length > 0 &&
                    arrBrand.map((item, index) => {

                        let nameVi = `Thương hiệu nổi bật ${item.name}`;
                        let nameEn = `Outstanding brand ${item.name}`;

                        let imageBase64 = '';
                        if (item.image) {
                            imageBase64 = new Buffer(item.image, 'base64').toString('binary')
                        }

                        return (
                            <div className='side-bar-content' key={index}>
                                <div className='sidebar-brand-child'>
                                    <div className='brand-img-sm'
                                        style={{ backgroundImage: `url(${imageBase64})` }}

                                    ></div>
                                    <div className='sidebar-brand-text'>
                                        <p className='description'>
                                            {language === LANGUAGES.VI ? nameVi : nameEn}
                                        </p>
                                        <p className='date'>
                                            2020-11-18
                                        </p>
                                    </div>
                                </div>

                            </div>
                        )
                    })
                }

            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,

        brandList: state.admin.allBrand,
        language: state.app.language,

    };
};

const mapDispatchToProps = dispatch => {
    return {
        brandListRedux: () => dispatch(actions.fetchAllBrand())
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SidebarBrand));
