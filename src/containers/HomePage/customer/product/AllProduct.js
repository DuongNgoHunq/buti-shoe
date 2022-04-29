import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import HomeHeader from '../../HomeHeader';


// import './AllProduct.scss';

class AllProduct extends Component {

    render() {

        return (
            <div>
                <HomeHeader isShowSlider={false} />
                <div className='container-xl'>
                    hello from all product
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AllProduct));
