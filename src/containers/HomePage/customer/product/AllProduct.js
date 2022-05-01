import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import HomeHeader from '../../HomeHeader';
import HomeFooter from '../../Section/HomeFooter';
import ProductContent from './ProductContent';
import SidebarProduct from './SidebarProduct';
import './AllProduct.scss'

class AllProduct extends Component {

    render() {

        return (
            <div>
                <HomeHeader isShowSlider={false} />
                <div className='new-container flex-md-row-reverse container-xl'>
                    <div className='row'>

                        <div className='col-xl-3 col-md-3 col-sm-12 new-left justify-content-sm-center'>
                            <SidebarProduct />
                        </div>
                        <div className='col-xl-9 col-md-9 col-sm-12 new-right justify-content-sm-center'>
                            <ProductContent />
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AllProduct));
