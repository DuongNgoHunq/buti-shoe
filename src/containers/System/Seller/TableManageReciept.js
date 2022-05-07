import React, { Component } from 'react';
import { connect } from 'react-redux';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FormattedMessage } from 'react-intl';
import TableManageProduct from '../Admin/TableManageProduct';



class TableManageReciept extends Component {

    render() {

        return (
            <div>
                <div className='product-redux-container'>
                    <div className='container'>

                        <table id="tablemanageuser" className='my-3'>
                            <tbody>
                                <tr>
                                    <th>Người nhận</th>
                                    <th>Địa chỉ</th>
                                    <th>Số điện thoại</th>
                                    <th>Thời gian đặt</th>
                                    <th>Người đặt</th>
                                    <th>Action</th>
                                </tr>

                                <tr>
                                    <td>Dương Ngô Hùng</td>
                                    <td>Bắc Giang</td>
                                    <td>0335381286</td>
                                    <td>10/05/2022</td>
                                    <td>Dương Ngô Hùng</td>
                                    <td>

                                        <button className='btn-edit'>
                                            <i class="far fa-edit"></i>
                                        </button>

                                        <button className='btn-delete' >
                                            <i className="fas fa-trash"></i>
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Dương Văn Tiến</td>
                                    <td>Hà Nội</td>
                                    <td>0335381286</td>
                                    <td>11/05/2022</td>
                                    <td>Dương Văn Toản</td>
                                    <td>

                                        <button className='btn-edit'>
                                            <i class="far fa-edit"></i>
                                        </button>

                                        <button className='btn-delete' >
                                            <i className="fas fa-trash"></i>
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Phạm Huy Nam</td>
                                    <td>Hà Nội</td>
                                    <td>0335381286</td>
                                    <td>12/05/2022</td>
                                    <td>Bùi Xuân Phương</td>
                                    <td>

                                        <button className='btn-edit'>
                                            <i class="far fa-edit"></i>
                                        </button>

                                        <button className='btn-delete' >
                                            <i className="fas fa-trash"></i>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(TableManageReciept);
