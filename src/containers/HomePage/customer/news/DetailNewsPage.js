import React, { Component } from 'react';
import { connect } from "react-redux";
import HomeHeader from '../../HomeHeader';
import './DetailNews.scss';
import HomeFooter from '../../Section/HomeFooter';
import Sidebar from './Sidebar';
import DetailNews from './DetailNews';

class DetailNewsPage extends Component {

    render() {
        return (
            <>
                <HomeHeader isShowSlider={false} />
                <div className='news-detail-container container-xl '>
                    <div className='flex-row-reverse row'>
                        <div className='row col-xl-9 col-md-12 col-sm-12 new-detail-right'>
                            <DetailNews />
                        </div>

                        <div className='col-xl-3 col-md-12 col-sm-12 new-left '>
                            <Sidebar />
                        </div>
                    </div>
                </div>
                <HomeFooter className="footer-detail-news" />
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        systemMenuPath: state.app.systemMenuPath,
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailNewsPage);
