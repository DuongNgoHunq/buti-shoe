import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

class Sidebar extends Component {

    render() {

        return (
            <div className='sidebar-blog'>
                <h3 className='sidebar-title'>
                    Bài viết mới nhất
                </h3>
                <div className='side-bar-content'>
                    <div className='sidebar-child'>
                        <div className='new-img-sm'></div>
                        <div className='sidebar-text'>
                            <p className='description'>
                                10 đôi giày nhất định phải có trong tủ của bạn 2022
                            </p>
                            <p className='date'>
                                2020-11-18
                            </p>
                        </div>
                    </div>
                    <div className='sidebar-child'>
                        <div className='new-img-sm'></div>
                        <div className='sidebar-text'>
                            <p className='description'>
                                10 đôi giày nhất định phải có trong tủ của bạn 2022
                            </p>
                            <p className='date'>
                                2020-11-18
                            </p>
                        </div>
                    </div>
                    <div className='sidebar-child'>
                        <div className='new-img-sm'></div>
                        <div className='sidebar-text'>
                            <p className='description'>
                                10 đôi giày nhất định phải có trong tủ của bạn 2022
                            </p>
                            <p className='date'>
                                2020-11-18
                            </p>
                        </div>
                    </div>
                    <div className='sidebar-child'>
                        <div className='new-img-sm'></div>
                        <div className='sidebar-text'>
                            <p className='description'>
                                10 đôi giày nhất định phải có trong tủ của bạn 2022
                            </p>
                            <p className='date'>
                                2020-11-18
                            </p>
                        </div>
                    </div>
                    <div className='sidebar-child'>
                        <div className='new-img-sm'></div>
                        <div className='sidebar-text'>
                            <p className='description'>
                                10 đôi giày nhất định phải có trong tủ của bạn 2022
                            </p>
                            <p className='date'>
                                2020-11-18
                            </p>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Sidebar));
