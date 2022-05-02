import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'react-image-lightbox/style.css';
import Lightbox from 'react-image-lightbox';

import { LANGUAGES, CRUD_Actions, CommonUtils } from "../../../utils";
import * as actions from "../../../store/actions";
import { FormattedMessage } from 'react-intl';
import TableManageProduct from './TableManageProduct';
import './ProductRedux.scss'



class ProductManage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            previewImgURL: '',
            isOpen: false,

            name: '',
            brandId: '',
            description: '',
            quanlity: '',
            price: '',
            image: '',

            action: '',
            productId: '',

        }
    }
    async componentDidMount() {
        this.props.fetchAllProductRedux()
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.listProducts !== this.props.listProducts) {
            this.setState({
                name: '',
                brandId: '',
                description: '',
                quanlity: '',
                price: '',
                image: '',
                action: CRUD_Actions.CREATE,
                previewImgURL: '',
            })
        }
    }
    handleChangeLanguage = (language) => {
        this.props.changeLanguageAppRedux(language)

    }

    handleOnchangeImage = async (event) => {
        let data = event.target.files;
        let file = data[0];
        if (file) {
            let base64 = await CommonUtils.getBase64(file)
            console.log('Check image: ', base64);

            let objectUrl = URL.createObjectURL(file);
            this.setState({
                previewImgURL: objectUrl,
                image: base64,

            })
        }
    }

    handleOpenPreviewImg = () => {
        if (!this.state.previewImgURL) return;
        this.setState({
            isOpen: true
        })
    }
    handleCreateProduct = () => {
        let isValid = this.checkValidateInput();
        if (isValid === false) return;
        let { action } = this.state;

        if (action === CRUD_Actions.CREATE) {
            //fire redux create product
            this.props.createNewProductRedux({
                name: this.state.name,
                brandId: this.state.brandId,
                quanlity: this.state.quanlity,
                description: this.state.description,
                price: this.state.price,
                image: this.state.image,

            })
        }
        if (action === CRUD_Actions.EDIT) {
            //fire redux edit product
            this.props.editAProductRedux({
                id: this.state.productId,
                name: this.state.name,
                brandId: this.state.brandId,
                quanlity: this.state.quanlity,
                description: this.state.description,
                price: this.state.price,
                image: this.state.image
            })
        }

    }

    checkValidateInput = () => {
        let isValid = true;
        let arrCheck = ['name', 'brandId', 'description', 'quanlity', 'price'];
        for (let i = 0; i < arrCheck.length; i++) {
            if (!this.state[arrCheck[i]]) {
                isValid = 0;
                alert('This input is required: ' + arrCheck[i])
                break;
            }
        }
        return isValid;
    }

    handleOnchangeInput = (event, id) => {
        let copyState = { ...this.state }
        copyState[id] = event.target.value;
        this.setState({
            ...copyState
        })

    }

    handleEditProductFromParent = (product) => {
        let imageBase64 = '';
        if (product.image) {
            imageBase64 = new Buffer(product.image, 'base64').toString('binary')
        }
        this.setState({
            productId: product.id,
            name: product.name,
            brandId: product.brandId,
            description: product.description,
            quanlity: product.quanlity,
            price: product.price,
            image: '',
            previewImgURL: imageBase64,

            action: CRUD_Actions.EDIT,
        })
    }

    render() {
        const { language } = this.props;
        let { name, brandId,
            description, quanlity,
            price, image } = this.state;


        return (
            <div className='product-redux-container'>
                <div className='container'>
                    <div className="title" >
                        <FormattedMessage id="manage-product.title" />
                    </div>
                    <div className='product-redux-body'>
                        <div className='row'>
                            <div className='col-6 my-2'>
                                <label>
                                    <FormattedMessage id="manage-product.name" />
                                </label>
                                <input className='form-control'
                                    value={name}
                                    onChange={(event) => { this.handleOnchangeInput(event, 'name') }}
                                    disabled={this.state.action === CRUD_Actions.EDIT ? true : false}
                                />
                            </div>
                            <div className='col-6 my-2'>
                                <label>
                                    <FormattedMessage id="manage-product.brand-id" />

                                </label>
                                <input className='form-control'
                                    value={brandId}
                                    onChange={(event) => { this.handleOnchangeInput(event, 'brandId') }}
                                    disabled={this.state.action === CRUD_Actions.EDIT ? true : false}

                                />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-12 my-2'>
                                <label>
                                    <FormattedMessage id="manage-product.description" />
                                </label>
                                <input className='form-control'
                                    value={description}
                                    onChange={(event) => { this.handleOnchangeInput(event, 'description') }}
                                />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-4 my-2'>
                                <label>
                                    <FormattedMessage id="manage-product.quanlity" />

                                </label>
                                <input className='form-control'
                                    value={quanlity}
                                    onChange={(event) => { this.handleOnchangeInput(event, 'quanlity') }}
                                />
                            </div>
                            <div className='col-4 my-2'>
                                <label>
                                    <FormattedMessage id="manage-product.price"

                                    />
                                </label>
                                <input className='form-control'
                                    value={price}
                                    onChange={(event) => { this.handleOnchangeInput(event, 'price') }}
                                />
                            </div>
                            <div className='col-4 my-3'>
                                <label>
                                    <FormattedMessage id="manage-product.image" />
                                </label>
                                <div className='preview-img-container'>
                                    <input type='file' id='previewImg' hidden
                                        onChange={(event) => this.handleOnchangeImage(event)}

                                    />
                                    <label htmlFor='previewImg'
                                        className='lable-upload mx-2'
                                    >
                                        <FormattedMessage id="manage-product.upload-image" />

                                        <i className='fas fa-upload mx-2'></i>
                                    </label>
                                    <div className='preview-image'
                                        style={{ backgroundImage: `url(${this.state.previewImgURL})` }}
                                        onClick={() => this.handleOpenPreviewImg()}
                                    ></div>
                                </div>

                            </div>
                        </div>
                        <div className='my-3'>
                            <button className={this.state.action === CRUD_Actions.EDIT ? 'btn btn-warning' : 'btn btn-primary'}
                                onClick={() => this.handleCreateProduct()}
                            >
                                {this.state.action === CRUD_Actions.EDIT ?
                                    <FormattedMessage id="manage-product.edit" />
                                    :
                                    <FormattedMessage id="manage-product.save" />
                                }
                            </button>
                        </div>

                    </div>

                    <TableManageProduct
                        handleEditProductFromParent={this.handleEditProductFromParent}
                        action={this.state.action}
                    />
                    {this.state.isOpen === true &&
                        <Lightbox
                            mainSrc={this.state.previewImgURL}
                            onCloseRequest={() => this.setState({ isOpenImg: false })}
                        />
                    }
                </div>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        listProducts: state.admin.products
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeLanguageAppRedux: (language) => dispatch(actions.changeLanguageApp(language)),
        fetchAllProductRedux: () => dispatch(actions.fetchAllProduct()),
        createNewProductRedux: (data) => dispatch(actions.createNewProduct(data)),
        editAProductRedux: (data) => dispatch(actions.editAProduct(data)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductManage);
