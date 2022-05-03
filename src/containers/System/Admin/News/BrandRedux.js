import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'react-image-lightbox/style.css';
import Lightbox from 'react-image-lightbox';
import './BrandRedux.scss'
import * as actions from "../../../../store/actions";
import { LANGUAGES, CRUD_Actions, CommonUtils } from "../../../../utils";


import { FormattedMessage } from 'react-intl';
import TableManageBrand from './TableManageBrand';



class BrandManage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newsArr: [],
            previewImgURL: '',
            isOpen: false,

            brandId: '',
            name: '',
            description: '',
            image: '',
            action: '',

        }
    }
    async componentDidMount() {
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.listBrand !== this.props.listBrand) {
            this.setState({
                brandId: '',
                name: '',
                description: '',
                image: '',
                action: CRUD_Actions.CREATE,
                previewImgURL: ''
            })
        }
    }

    handleOnchangeImg = async (event) => {
        let data = event.target.files;
        let file = data[0];
        if (file) {
            let base64 = await CommonUtils.getBase64(file);
            console.log('Check base 64: ', base64);

            let objectUrl = URL.createObjectURL(file)
            this.setState({
                previewImgURL: objectUrl,
                image: base64
            })
        }
        console.log('Check url img: ', this.state.previewImgURL);
    }

    handlePreviewImg = () => {
        if (!this.state.previewImgURL) return;
        this.setState({
            isOpen: true
        })
    }

    handleSaveBrand = () => {
        let isValid = this.checkValidateInput();
        if (isValid === false) return;
        let { action } = this.state;
        if (action === CRUD_Actions.CREATE) {
            //fire redux action
            this.props.createNewBrand({
                name: this.state.name,
                description: this.state.description,
                image: this.state.image,
            })
        }
        if (action === CRUD_Actions.EDIT) {
            this.props.editBrandRedux({
                id: this.state.brandId,
                name: this.state.name,
                description: this.state.description,
                image: this.state.image,
            })
        }
    }

    checkValidateInput = () => {
        let isValid = true;
        let arrCheck = ['name', 'description'];
        for (let i = 0; i < arrCheck.length; i++) {
            if (!this.state[arrCheck[i]]) {
                isValid = false;
                alert('This input is required: ' + arrCheck[i])
                break;
            }
        }
        return isValid;
    }


    onChangeInput = (event, id) => {
        let copyState = { ...this.state }

        copyState[id] = event.target.value;
        this.setState({
            ...copyState
        })

    }

    handleEditBrandFromParet = (brand) => {
        let imageBase64 = '';
        if (brand.image) {
            imageBase64 = new Buffer(brand.image, 'base64').toString('binary')
        }
        console.log('Check handel edit news from parent: ', brand);
        this.setState({
            brandId: brand.id,
            name: brand.name,
            description: brand.description,
            image: brand.image,
            previewImgURL: imageBase64,

            action: CRUD_Actions.EDIT
        })
    }

    render() {

        let { name, description, image } = this.state;
        const { language } = this.props;
        return (
            <div className='news-redux-container container-xl'>
                <div className='title'><FormattedMessage id="manage-news.manage-brand" /></div>
                <div className='new-redux-body'>
                    <div className='container'>
                        <div className='row'>
                            <div className="row mb-3">
                                <div className='col-6'>
                                    <label htmlFor="news-title" className="form-label">
                                        <FormattedMessage id="manage-news.brand-name" />
                                    </label>
                                    <input type="text" className="form-control" id="news-title" placeholder="name's brand"
                                        value={name}
                                        onChange={(event) => this.onChangeInput(event, 'name')}
                                    />
                                </div>
                                <div className='col-6'>
                                    <label htmlFor="news-title" className="form-label">
                                        <FormattedMessage id="manage-news.image" />
                                    </label>
                                    <div className='preview-image-container'>
                                        <input type="file" id="news-image" hidden
                                            onChange={(event) => this.handleOnchangeImg(event)}
                                        />
                                        <label htmlFor='news-image' className='lable-upload'>
                                            <FormattedMessage id="manage-product.upload-image" />

                                            <i className="fas fa-upload"></i></label>
                                        <div className='preview-image'
                                            style={{ backgroundImage: `url(${this.state.previewImgURL})` }}
                                            onClick={() => this.handlePreviewImg()}
                                        ></div>
                                    </div>
                                </div>

                            </div>
                            <div className="mb-3">
                                <label htmlFor="news-description" className="form-label">
                                    <FormattedMessage id="manage-news.description" />
                                </label>
                                <textarea className="form-control" id="news-description" rows="3"
                                    value={description}
                                    onChange={(event) => this.onChangeInput(event, 'description')}

                                ></textarea>
                            </div>
                            <div className='col-12 my-3'>
                                <button className={this.state.action === CRUD_Actions.EDIT ? 'btn btn-warning' : 'btn btn-primary'}
                                    onClick={() => this.handleSaveBrand()}
                                >
                                    {this.state.action === CRUD_Actions.EDIT ?
                                        <FormattedMessage id="manage-news.edit" />
                                        :
                                        <FormattedMessage id="manage-news.save" />
                                    }
                                </button>
                            </div>
                        </div>

                    </div>

                </div>
                <TableManageBrand
                    handleEditBrandFromParet={this.handleEditBrandFromParet}
                    action={this.state.action}
                />
                {this.state.isOpen === true &&
                    <Lightbox
                        mainSrc={this.state.previewImgURL}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                    />
                }

            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        listBrand: state.admin.allBrand,
        // listProducts: state.admin.products
    };
};

const mapDispatchToProps = dispatch => {
    return {
        // changeLanguageAppRedux: (language) => dispatch(actions.changeLanguageApp(language)),
        createNewBrand: (data) => dispatch(actions.createNewBrand(data)),
        editBrandRedux: (data) => dispatch(actions.editBrand(data)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BrandManage);
