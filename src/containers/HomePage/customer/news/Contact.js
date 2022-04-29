import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import HomeHeader from '../../HomeHeader';


// import './Contact.scss';

class Contact extends Component {

    render() {

        return (
            <div>
                <HomeHeader isShowSlider={false} />
                <div className='container-xl'>
                    hello from Contact
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Contact));
