import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
// import './TableManageProduct.scss';
import * as actions from "../../../store/actions";


class TableManageProduct extends Component {

    constructor(props) {
        super(props);
        this.state = {
            productRedux: []
        }
    }

    componentDidMount() {
        this.props.fetchAllProductRedux();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.listProducts !== this.props.listProducts) {
            this.setState({
                productRedux: this.props.listProducts
            })
        }
    }
    render() {
        console.log('Check all product: ', this.props.listProducts);
        console.log('Check state: ', this.state.productRedux);
        let arrProducts = this.state.productRedux;
        return (

            <table id="tablemanageuser">
                <tbody>
                    <tr>
                        <th>Product Name</th>
                        <th>Brand ID</th>
                        <th>Description</th>
                        <th>Quanlity</th>
                        <th>price</th>
                        <th>Action</th>
                    </tr>
                    {arrProducts && arrProducts.length > 0 &&

                        arrProducts.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.brandId}</td>
                                    <td>{item.description}</td>
                                    <td>{item.quanlity}</td>
                                    <td>{item.price}</td>
                                    <td>

                                        <button className='btn-edit'
                                        >
                                            <i className="fas fa-pencil-alt"></i>
                                        </button>

                                        <button className='btn-delete'
                                        >
                                            <i className="fas fa-trash"></i>
                                        </button>
                                    </td>
                                </tr>
                            )
                        })

                    }
                </tbody>
            </table>

        );
    }
}

const mapStateToProps = state => {
    return {
        listProducts: state.admin.products
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchAllProductRedux: () => dispatch(actions.fetchAllProduct()),
        deleteAUserRedux: (id) => dispatch(actions.deleteAUser(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableManageProduct);
