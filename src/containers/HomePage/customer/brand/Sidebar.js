import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

class SidebarBrand extends Component {

    render() {

        return (
            <div className='sidebar-blog'>
                <h3 className='sidebar-title'>
                    Thương hiệu nổi bật 2022
                </h3>
                <div className='side-bar-content'>
                    <div className='sidebar-brand-child'>
                        <div className='brand-img-sm'></div>
                        <div className='sidebar-brand-text'>
                            <p className='description'>
                                Adidas tự hào thương hiệu 70 năm
                            </p>
                            <p className='date'>
                                2020-11-18
                            </p>
                        </div>
                    </div>
                    <div className='sidebar-brand-child'>
                        <div className='brand-img-sm'></div>
                        <div className='sidebar-brand-text'>
                            <p className='description'>
                                Adidas tự hào thương hiệu 70 năm
                            </p>
                            <p className='date'>
                                2020-11-18
                            </p>
                        </div>
                    </div>
                    <div className='sidebar-brand-child'>
                        <div className='brand-img-sm'></div>
                        <div className='sidebar-brand-text'>
                            <p className='description'>
                                Adidas tự hào thương hiệu 70 năm
                            </p>
                            <p className='date'>
                                2020-11-18
                            </p>
                        </div>
                    </div>
                    <div className='sidebar-brand-child'>
                        <div className='brand-img-sm'></div>
                        <div className='sidebar-brand-text'>
                            <p className='description'>
                                Adidas tự hào thương hiệu 70 năm
                            </p>
                            <p className='date'>
                                2020-11-18
                            </p>
                        </div>
                    </div>
                    <div className='sidebar-brand-child'>
                        <div className='brand-img-sm'></div>
                        <div className='sidebar-brand-text'>
                            <p className='description'>
                                Adidas tự hào thương hiệu 70 năm
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SidebarBrand));
