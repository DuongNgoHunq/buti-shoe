import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import HomeHeader from '../../HomeHeader';
import SidebarBrand from './SidebarBrand';
import './AllBrand.scss';
import BrandContent from './BrandContent';
import HomeFooter from '../../Section/HomeFooter';

class AllBrand extends Component {

    render() {

        return (
            <div>
                <HomeHeader isShowSlider={false} />
                <div className='brand-container container-xl'>
                    <div className='row flex-row-reverse'>
                        <div className='col-xl-9 col-md-12 col-sm-12 brand-right justify-content-sm-center'>
                            <BrandContent />

                        </div>
                        <div className='col-xl-3 col-md-12 col-sm-12 brand-left justify-content-sm-center'>
                            <SidebarBrand />
                        </div>

                    </div>
                </div>
                <HomeFooter />

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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AllBrand));
