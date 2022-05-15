import { toLength } from 'lodash';
import React, { Component } from 'react';
// import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

class ModalBuyProduct extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
        // this.listenToEmitter();
    }
    componentDidMount() { }
    toggle = () => {
        this.props.toggleFromparent()
    }
    handleBuyProduct = () => {
        this.props.handleClearCart()
        this.props.toggleFromparent()
        alert('Mua hàng thành công')

    }

    render() {

        let { arrItems, totalMoney } = this.props

        return (

            <div>
                <Modal
                    isOpen={this.props.isOpen}
                    toggle={() => { this.toggle() }}
                    size="xl"
                    className='modal-buy-product'
                >
                    <ModalHeader toggle={() => { this.toggle() }}>
                        <p className='modal-title'>Thong tin dat hang</p>
                    </ModalHeader>
                    <ModalBody>
                        <div className='row'>
                            <div className='col-6 modal-left'>
                                <p className='infor-title'> Thong tin lien he</p>
                                <div className='input-container'>
                                    <label className='col-4 text-center'>Ho va ten</label>
                                    <input
                                        className='col-8' type='text'
                                        placeholder='họ tên của bạn'
                                    />
                                </div>
                                <div className='input-container'>
                                    <label className='col-4 text-center'>So dien thoại</label>
                                    <input
                                        className='col-8' type='text'
                                        placeholder='Số điện thoại của bạn'

                                    />
                                </div>
                                <div className='input-container'>
                                    <label className='col-4 text-center'>Dia chi email</label>
                                    <input
                                        className='col-8' type='text'
                                        placeholder='email của bạn'
                                    />
                                </div>
                                <div className='input-container'>
                                    <label className='col-4 text-center'>Tinh/ thanh pho</label>
                                    <input
                                        className='col-8' type='text'
                                        placeholder='chọn thành phố'

                                    />
                                </div>
                                <div className='input-container'>
                                    <label className='col-4 text-center'>Quan huyen</label>
                                    <input
                                        className='col-8' type='text'
                                        placeholder='Chọn quận huyện'
                                    />
                                </div>
                                <div className='input-container'>
                                    <label className='col-4 text-center'>Xa/phuong</label>
                                    <input
                                        className='col-8' type='text'
                                        placeholder='Chọn xã phường'

                                    />
                                </div>
                                <div className='input-container'>
                                    <label className='col-4 text-center'>Dia chi</label>
                                    <input
                                        className='col-8' type='text'
                                        placeholder='Ví dụ: Số nhà 45, ngõ 5 ngọa long'

                                    />
                                </div>
                            </div>
                            <div
                                className='col-6 infor-title modal-right'
                            >
                                Don hang cua ban

                                {arrItems &&
                                    arrItems.map((item, index) => {
                                        console.log('Check image item: ', item.image);
                                        return (
                                            <div className='item-cart' key={index}>
                                                <img src={item.image} width={90} height={90} />
                                                <div className='description-item-cart'>
                                                    {item.name}
                                                </div>
                                                <div className='count-item-cart'>
                                                    X {item.count}
                                                </div>
                                                <div className='price-item-cart'>
                                                    {item.price} đ
                                                </div>
                                            </div>
                                        )
                                    })

                                }


                                <div className='cart-subtotal'>
                                    <p>
                                        <span className='col-8'>Tạm tính</span>
                                        <span className='col-4 price'>{totalMoney} đ</span>
                                    </p>
                                    <p>
                                        <span className='col-8'>Phí ship</span>
                                        <span className='col-4 price'>30.000 đ</span>
                                    </p>
                                    <p>
                                        <span className='col-8'>Tổng tiền</span>
                                        <span className='col-4 price'>{totalMoney} đ</span>
                                    </p>
                                </div>
                                <div className='payment-cart'>
                                    <div className='payment-after-recieve'>
                                        <input type='checkbox' />
                                        <label>Thanh toán khi nhận hàng</label>
                                    </div>
                                    <div className='payment-by-banking'>
                                        <input type='checkbox' />
                                        <label>Chuyển khoản ngân hàng</label>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={() => { this.handleBuyProduct() }}>Mua hàng</Button>{' '}
                        <Button color="secondary" onClick={() => { this.toggle() }}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalBuyProduct);



