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

        }
    }
    async componentDidMount() {

    }
    handleChangeLanguage = (language) => {
        this.props.changeLanguageAppRedux(language)

    }

    handleOnchangeImage = (event) => {
        let data = event.target.files;
        let file = data[0];
        if (file) {
            let objectUrl = URL.createObjectURL(file);
            this.setState({
                previewImgURL: objectUrl,
                image: file,
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

        //fire redux actions
        this.props.createNewProductRedux({
            name: this.state.name,
            brandId: this.state.brandId,
            quanlity: this.state.quanlity,
            description: this.state.description,
            price: this.state.price,
        })
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

                                />
                            </div>
                            <div className='col-6 my-2'>
                                <label>
                                    <FormattedMessage id="manage-product.brand-id" />

                                </label>
                                <input className='form-control'
                                    value={brandId}
                                    onChange={(event) => { this.handleOnchangeInput(event, 'brandId') }}

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
                                    >Tải ảnh
                                        <i className='fas fa-upload mx-2'></i>
                                    </label>
                                    <div className='preview-image'
                                        style={{ backgroundImage: `url(${this.state.previewImgURL})` }}
                                        onClick={() => this.handleOpenPreviewImg()}
                                    ></div>
                                </div>

                            </div>
                        </div>
                        <button className='btn btn-primary my-3'
                            onClick={() => this.handleCreateProduct()}
                        >
                            <FormattedMessage id="manage-product.save" />

                        </button>
                    </div>

                    <TableManageProduct />
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

    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeLanguageAppRedux: (language) => dispatch(actions.changeLanguageApp(language)),
        fetchProductRedux: () => dispatch(actions.fetchAllProduct()),
        createNewProductRedux: (data) => dispatch(actions.createNewProduct(data)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductManage);
