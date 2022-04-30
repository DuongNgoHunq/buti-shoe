import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import HomeHeader from '../../HomeHeader';

class NewsPage extends Component {

    render() {

        return (
            <div>
                <HomeHeader isShowSlider={false} />
                <div>new</div>
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
