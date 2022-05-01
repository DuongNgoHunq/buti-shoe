import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

class SidebarProduct extends Component {

    render() {

        return (
            <div className='sidebar-product-blog'>
                <h3 className='sidebar-title'>
                    Danh mục sản phẩm
                </h3>
                <div className='sidebar-product-content row'>
                    <div className='child-sidebar d-flex'>
                        <input type='checkbox' />
                        <div className='element-product'> Bộ sưu tập</div>
                        <span className='status-quanlity'>(59)</span>
                    </div>
                    <div className='child-sidebar d-flex '>
                        <input type='checkbox' />
                        <div className='element-product'>Adidas </div>
                        <span className='status-quanlity'>(10)</span>
                    </div>
                    <div className='child-sidebar d-flex '>
                        <input type='checkbox' />
                        <div className='element-product'>Nike</div>
                        <span className='status-quanlity'>(10)</span>
                    </div>
                    <div className='child-sidebar d-flex '>
                        <input type='checkbox' />
                        <div className='element-product'>Converse </div>
                        <span className='status-quanlity'>(10)</span>
                    </div>
                    <div className='child-sidebar d-flex '>
                        <input type='checkbox' />
                        <div className='element-product'>Puma </div>
                        <span className='status-quanlity'>(10)</span>
                    </div>
                    <div className='child-sidebar d-flex '>
                        <input type='checkbox' />
                        <div className='element-product'>Phụ kiện </div>
                        <span className='status-quanlity'>(10)</span>
                    </div>



                </div>
                <h3 className='sidebar-title'>
                    Lọc giá
                </h3>
                <div className='sidebar-product-content row'>
                    <div className='child-sidebar d-flex'>
                        <input type='checkbox' />
                        <div className='element-product'> Dưới 200,000đ </div>
                    </div>
                    <div className='child-sidebar d-flex '>
                        <input type='checkbox' />
                        <div className='element-product'> Dưới 300,000đ  </div>
                    </div>
                    <div className='child-sidebar d-flex '>
                        <input type='checkbox' />
                        <div className='element-product'>Dưới 500,000đ </div>
                    </div>
                    <div className='child-sidebar d-flex '>
                        <input type='checkbox' />
                        <div className='element-product'>Dưới 1,000,000đ </div>
                    </div>
                    <div className='child-sidebar d-flex '>
                        <input type='checkbox' />
                        <div className='element-product'>Dưới 2,000,000đ  </div>
                    </div>
                    <div className='child-sidebar d-flex '>
                        <input type='checkbox' />
                        <div className='element-product'>Dưới 5,000,000đ </div>
                    </div>
                </div>

                <h3 className='sidebar-title'>
                    Lọc theo size
                </h3>
                <div className='sidebar-product-content row'>

                    <div className='child-sidebar d-flex '>
                        <input type='checkbox' />
                        <div className='element-product'> 39 </div>
                    </div>
                    <div className='child-sidebar d-flex '>
                        <input type='checkbox' />
                        <div className='element-product'>40 </div>
                    </div>
                    <div className='child-sidebar d-flex '>
                        <input type='checkbox' />
                        <div className='element-product'>41 </div>
                    </div>
                    <div className='child-sidebar d-flex '>
                        <input type='checkbox' />
                        <div className='element-product'>42</div>
                    </div>
                    <div className='child-sidebar d-flex '>
                        <input type='checkbox' />
                        <div className='element-product'>43 </div>
                    </div>
                    <div className='child-sidebar d-flex '>
                        <input type='checkbox' />
                        <div className='element-product'>44</div>
                    </div>
                </div>
                <h3 className='sidebar-title'>
                    Loại sản phẩm
                </h3>
                <div className='sidebar-product-content row'>

                    <div className='child-sidebar d-flex '>
                        <input type='checkbox' />
                        <div className='element-product'> Women </div>
                    </div>
                    <div className='child-sidebar d-flex '>
                        <input type='checkbox' />
                        <div className='element-product'>Men</div>
                    </div>
                    <div className='child-sidebar d-flex '>
                        <input type='checkbox' />
                        <div className='element-product'>Unisex </div>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SidebarProduct));
