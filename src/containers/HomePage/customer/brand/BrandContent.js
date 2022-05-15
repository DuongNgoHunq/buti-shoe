import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { FormattedMessage } from 'react-intl';
import * as actions from '../../../../store/actions';
import { LANGUAGES } from '../../../../utils/constant';

class BrandContent extends Component {

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
                <h3 className='content-title'>
                    Thương hiệu
                </h3>
                <div className='brand-content row'>
                    {arrBrand && arrBrand.length > 0 &&
                        arrBrand.map((item, index) => {

                            let nameVi = `Thương hiệu nổi bật ${item.name}`;
                            let nameEn = `Outstanding brand ${item.name}`;

                            let imageBase64 = '';
                            if (item.image) {
                                imageBase64 = new Buffer(item.image, 'base64').toString('binary')
                            }
                            return (
                                <div className='brand-content-child col-md-4 col-sm-12 ' key={index}>
                                    <div className='brand-content-img-lg'
                                        style={{ backgroundImage: `url(${imageBase64})` }}

                                    ></div>
                                    <div className='news-content-description shadow'>
                                        <div className='news-content-title'>
                                            {language === LANGUAGES.VI ? nameVi : nameEn}

                                        </div>
                                        <div className='news-content-date'>
                                            2020-11-18
                                        </div>
                                        <div className='description-news'>
                                            Theo nhận định từ nhiều khía cạnh, Nike Air Jordan 1 không chỉ là một huyền thoại có tên tuổi trong các loại giày Sneaker nổi tiếng trên thị trường, mà còn là tiền đề giúp cho nhà Nike mở rộng khuếch tán thương hiệu của mình trong lĩnh vực giày thể thao sneaker.
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

        brandList: state.admin.allBrand,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        brandListRedux: () => dispatch(actions.fetchAllBrand())
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BrandContent));
