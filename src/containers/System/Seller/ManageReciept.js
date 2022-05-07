import React, { Component } from 'react';
import { connect } from 'react-redux';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FormattedMessage } from 'react-intl';
import TableManageReciept from './TableManageReciept';



class ManageReciept extends Component {

    render() {

        return (
            <div>
                <div className='product-redux-container'>
                    <div className='container'>
                        <div className="title" >
                            Manage receipt
                        </div>
                        <div className='row'>
                            <div className='col-6 my-2'>
                                <label>
                                    Orderer
                                </label>
                                <input className='form-control'
                                />
                            </div>
                            <div className='col-6 my-2'>
                                <label>
                                    Address
                                </label>
                                <input className='form-control'

                                />
                            </div>
                            <div className='col-6 my-2'>
                                <label>
                                    Phone number
                                </label>
                                <input className='form-control'
                                />
                            </div>
                            <div className='col-6 my-2'>
                                <label>
                                    Receiver
                                </label>
                                <input className='form-control'

                                />
                            </div>
                            <div className='my-3'>
                                <button className='btn btn-primary'>
                                    Save receipt
                                </button>
                            </div>
                        </div>
                        <TableManageReciept />

                    </div>
                </div>
            </div >
        )
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageReciept);
