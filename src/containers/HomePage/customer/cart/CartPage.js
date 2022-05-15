import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import HomeHeader from '../../HomeHeader';
import HomeFooter from '../../Section/HomeFooter';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import ModalBuyProduct from './ModalBuyProduct';
import './CartPage.scss'

class CartPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arrItems: JSON.parse(localStorage.getItem("product")),
            totalPrice: 0,
            isOpenModal: false,

        }
    }

    componentDidMount() {
        this.handleTotalMoney();
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.arrItems !== this.state.arrItems) {
            this.handleTotalMoney();

        }
    }
    handleAddItem = (index) => {
        let copyArr = [...this.state.arrItems]
        copyArr[index].count = copyArr[index].count + 1;
        localStorage.setItem("product", JSON.stringify(copyArr));
        this.setState({

        })
        this.handleTotalMoney()

    }

    handleSubItem = (index) => {

        if (this.state.arrItems && this.state.arrItems.length > 0) {
            let copyArr = [...this.state.arrItems]
            if (copyArr[index].count > 1) {
                copyArr[index].count = copyArr[index].count - 1;
            }
            localStorage.setItem("product", JSON.stringify(copyArr));

            this.setState({
                arrItems: copyArr
            })
            this.handleTotalMoney()
        }

    }

    handleTotalMoney = () => {
        let totalMoney = 0;
        if (this.state.arrItems && this.state.arrItems.length > 0) {
            let copyArr = [...this.state.arrItems]
            for (let i = 0; i < copyArr.length; i++) {
                totalMoney = totalMoney + copyArr[i].count * copyArr[i].price;
            }
            this.setState({
                totalPrice: totalMoney

            })
        }
    }

    handleDeleteProduct = (id) => {
        toast.success("Delete product from cart success!")

        this.handleTotalMoney()
        let items = JSON.parse(localStorage.getItem("product"));
        items = items.filter((item) => item.id !== id);
        localStorage.setItem("product", JSON.stringify(items));
        if (items.length === 0) {
            // localStorage.removeItem("product");
            this.setState({
                totalPrice: 0
            })
        }
        this.setState({
            arrItems: JSON.parse(localStorage.getItem("product")),

        })
    }
    handleClearCart = () => {
        // localStorage.removeItem("product");
        this.setState({
            arrItems: []
        })
    }

    handleBuyProduct = () => {
        this.setState({
            isOpenModal: true,

        })
    }
    toggleBuyProductModal = () => {
        this.setState({
            isOpenModal: !this.state.isOpenModal
        })
    }

    render() {
        let { arrItems, totalPrice } = this.state
        return (
            <div>
                <ModalBuyProduct
                    isOpen={this.state.isOpenModal}
                    arrItems={this.state.arrItems}
                    totalMoney={this.state.totalPrice}
                    toggleFromparent={this.toggleBuyProductModal}
                    handleClearCart={this.handleClearCart}
                />

                <HomeHeader isShowSlider={false} />

                <div className='cart-container container-xl my-5'>

                    <div className='title-cart'>Giỏ hàng của bạn</div>
                    <table className="table caption-top">
                        <thead>
                            <tr>
                                <th scope="col">Ảnh</th>
                                <th scope="col">Tên sản phẩm</th>
                                <th scope="col">Giá</th>
                                <th scope="col">Số lượng</th>
                                <th scope="col">Tổng tiền</th>

                            </tr>
                        </thead>
                        <tbody>
                            {arrItems && arrItems.length > 0 &&
                                arrItems.map((item, key) => {
                                    let priceProduct = item.count * item.price;
                                    return (
                                        <tr key={key}>
                                            <td scope="row">
                                                <img src={item.image} />
                                            </td>
                                            <td> {item.name}</td>
                                            <td className='price'>{item.price} đ</td>
                                            <td>
                                                <button
                                                    onClick={() => this.handleSubItem(key)}
                                                >-</button>
                                                <button>{item.count}</button>
                                                <button
                                                    onClick={() => this.handleAddItem(key)}
                                                >+</button>

                                            </td>
                                            <td>
                                                <span className='price'>{priceProduct} đ &nbsp;</span>

                                                <i className="fas fa-trash-alt"
                                                    onClick={() => this.handleDeleteProduct(item.id)}
                                                ></i>
                                            </td>
                                        </tr>

                                    )
                                }

                                )}


                        </tbody>

                    </table>

                    {
                        arrItems.length === 0 &&
                        <div className='message-empty-cart'>
                            <p> Giỏ hàng trống</p>
                        </div>
                    }

                    <div className="cartBuy">
                        <div>
                            <Link to="/product">
                                <button className='btn btn-outline-dark px-4 py-2'>Tiếp tục mua hàng</button>
                            </Link>
                        </div>
                        <div>
                            <button
                                className='btn btn-outline-dark px-4 py-2'
                                onClick={() => this.handleBuyProduct()}
                            >Mua ngay</button>&nbsp;
                            <span className="pricesTotal">{totalPrice} đ</span>
                        </div>
                    </div>

                </div>

                <HomeFooter />

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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartPage));
