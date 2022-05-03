import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import HomeHeader from '../../HomeHeader';
import SidebarNews from './SidebarNews';
import './NewsPage.scss';
import NewsContent from './NewsContent';

class NewsPage extends Component {

    render() {

        return (
            <div>
                <HomeHeader isShowSlider={false} />
                <div className='new-container flex-md-row-reverse container-xl'>
                    <div className='row'>

                        <div className='col-xl-3 col-md-12 col-sm-12 new-left justify-content-sm-center'>
                            <SidebarNews />
                        </div>
                        <div className='col-xl-9 col-md-12 col-sm-12 new-right justify-content-sm-center'>
                            <NewsContent />

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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewsPage));