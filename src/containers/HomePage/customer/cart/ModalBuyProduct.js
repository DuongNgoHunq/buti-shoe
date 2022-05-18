import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import * as actions from '../../../../store/actions';
import { LANGUAGES } from '../../../../utils'
import Select from 'react-select';
import { postCustomerOder } from '../../../../services/userService';
import { toast } from 'react-toastify';

class ModalBuyProduct extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // arrItems: JSON.parse(localStorage.getItem("product")),
            name: '',
            productId: '',
            productName: '',
            price: '',
            quantity: '',
            unitPrice: '',

            phoneNumber: '',
            email: '',
            size: '',
            homeNumber: '',
            selectedGender: '',
            genders: '',

        }
    }
    componentDidMount() {
        this.props.fetchGender();
        let { arrItems, totalMoney } = this.props

        this.setState({
            unitPrice: this.props.totalMoney
        })
        console.log('Check total money: ', this.props.totalMoney, this.state.unitPrice);

        if (arrItems.length > 0) {

            this.setState({
                productId: arrItems[0].id,
                productName: arrItems[0].name,
                price: arrItems[0].price,
                quantity: arrItems[0].count,
            })
            console.log('Check props from parent: ', totalMoney, totalMoney);

        }

    }

    handleTotalMoney = () => {
        let totalMoney = 0;
        if (this.state.arrItems && this.state.arrItems.length >= 0) {
            let copyArr = [...this.state.arrItems]
            for (let i = 0; i < copyArr.length; i++) {
                totalMoney = totalMoney + copyArr[i].count * copyArr[i].price;
            }

        }
    }

    buidDataGender = (data) => {
        let result = [];
        let language = this.props.language;

        if (data && data.length > 0) {
            data.map(item => {
                let object = {};
                object.label = language === LANGUAGES.VI ? item.valueVi : item.valueEn;
                object.value = item.keyMap;
                result.push(object)
            })
        }
        return result;
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.language !== prevProps.language) {
            this.setState({
                genders: this.buidDataGender(this.props.genders)

            })
        }
        if (prevProps.genders !== this.props.genders) {
            this.setState({
                genders: this.buidDataGender(this.props.genders)
            })
        }
    }

    toggle = () => {
        this.props.toggleFromparent()
    }
    handleBuyProduct = async () => {
        console.log('Check state before send email: ', this.state);
        let res = await postCustomerOder({
            productId: this.state.productId,
            productName: this.state.productName,
            quantity: this.state.quantity,
            price: this.state.price,
            unitPrice: this.state.unitPrice,
            PhoneNumber: this.state.phoneNumber,
            Address: this.state.homeNumber,
            size: this.state.size,
            name: this.state.name,
            email: this.state.email,
            gender: this.state.selectedGender.value,
            language: this.props.language,
        })
        if (res && res.errCode === 0) {
            toast.success('You are order success!')
            this.props.handleClearCart()
            this.props.toggleFromparent()

        }
        else {
            toast.error('You are order faile!')
        }


    }

    handleInputOnchange = (event, id) => {
        let valueInput = event.target.value;
        let stateCopy = { ...this.state };
        stateCopy[id] = valueInput;
        this.setState({
            ...stateCopy
        })
    }

    handleChangeSelect = (selectedOption) => {
        this.setState({ selectedGender: selectedOption })
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
                        <p className='modal-title'>Thông tin đặt hàng</p>
                    </ModalHeader>
                    <ModalBody>
                        <div className='row'>
                            <div className='col-6 modal-left'>
                                <p className='infor-title'>Thông tin liên hệ </p>
                                <div className='input-container'>
                                    <label className='col-4 text-center'>Họ và tên</label>
                                    <input
                                        className='col-8' type='text'
                                        placeholder='họ tên của bạn'
                                        value={this.state.name}
                                        onChange={(event) => this.handleInputOnchange(event, 'name')}
                                    />
                                </div>
                                <div className='input-container d-flex'>
                                    <label className='col-4 text-center'>Giới tính</label>
                                    <Select
                                        className='col-8' type='text'
                                        value={this.state.selectedGender}
                                        onChange={this.handleChangeSelect}
                                        options={this.state.genders}
                                    />
                                </div>
                                <div className='input-container'>
                                    <label className='col-4 text-center'>Size</label>
                                    <input
                                        className='col-8' type='text'
                                        placeholder='Size giay cua ban'
                                        value={this.state.size}
                                        onChange={(event) => this.handleInputOnchange(event, 'size')}
                                    />
                                </div>
                                <div className='input-container'>
                                    <label className='col-4 text-center'>Số điện thoại</label>
                                    <input
                                        className='col-8' type='text'
                                        placeholder='Số điện thoại của bạn'
                                        value={this.state.phoneNumber}
                                        onChange={(event) => this.handleInputOnchange(event, 'phoneNumber')}
                                    />
                                </div>
                                <div className='input-container'>
                                    <label className='col-4 text-center'>Địa chỉ email</label>
                                    <input
                                        className='col-8' type='text'
                                        placeholder='email của bạn'
                                        value={this.state.email}
                                        onChange={(event) => this.handleInputOnchange(event, 'email')}
                                    />
                                </div>

                                <div className='input-container'>
                                    <label className='col-4 text-center'>Dia chi</label>
                                    <input
                                        className='col-8' type='text'
                                        placeholder='Ví dụ: Số nhà 45, ngõ 5 ngọa long'
                                        value={this.state.homeNumber}
                                        onChange={(event) => this.handleInputOnchange(event, 'homeNumber')}
                                    />
                                </div>
                            </div>
                            <div
                                className='col-6 infor-title modal-right'
                            >
                                Đơn hàng của bạn

                                {arrItems &&
                                    arrItems.map((item, index) => {
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
                                        <span className='col-4 price'>{totalMoney + 30000} đ</span>
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
        genders: state.admin.genders,
        language: state.app.language,

    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchGender: () => dispatch(actions.fetchGenderStart()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalBuyProduct);



