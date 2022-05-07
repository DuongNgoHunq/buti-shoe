import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { FormattedMessage } from 'react-intl';


class SidebarProduct extends Component {

    render() {

        return (
            <div className='sidebar-product-blog'>
                <h3 className='sidebar-title'>
                    <FormattedMessage id="homepage.product-categories" />
                </h3>
                <div className='sidebar-product-content row'>
                    <div className='child-sidebar d-flex'>
                        <input type='checkbox' />
                        <div className='element-product'>
                            <FormattedMessage id="homepage.collection" />
                        </div>
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
                        <div className='element-product'>
                            <FormattedMessage id="homepage.accessory" />
                        </div>
                        <span className='status-quanlity'>(10)</span>
                    </div>



                </div>
                <h3 className='sidebar-title'>
                    <FormattedMessage id="homepage.price-filter" />
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
                    <FormattedMessage id="homepage.size-filter" />
                </h3>
                <div className='sidebar-product-content row'>


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
                </div>
                <h3 className='sidebar-title'>
                    <FormattedMessage id="homepage.product-type" />
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
