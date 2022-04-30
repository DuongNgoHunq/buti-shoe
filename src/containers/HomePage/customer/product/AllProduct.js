import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import HomeHeader from '../../HomeHeader';
import * as actions from '../../../../store/actions';

// import './AllProduct.scss';

class AllProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrNewProduct: [],

        }
    }
    componentDidMount() {
        this.props.loadNewProductRedux();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.newProductRedux !== this.props.newProductRedux) {
            this.setState({
                arrNewProduct: this.props.newProductRedux
            })
        }
    }
    handleViewDetailProduct = (product) => {
        this.props.history.push(`/detail-product/${product.id}`)

    }

    render() {
        let arrNewProduct = this.state.arrNewProduct;
        let { language } = this.props;
        console.log('Check arr product: ', arrNewProduct);
        return (
            <div>
                <HomeHeader isShowSlider={false} />
                <div className='container-xl'>
                    <div className='row'>

                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        newProductRedux: state.admin.newProducts,

    };
};

const mapDispatchToProps = dispatch => {
    return {
        // fetchAllProductRedux: () => dispatch(actions.fetchAllProduct())
        loadNewProductRedux: () => dispatch(actions.fetchNewProduct())

    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AllProduct));
