import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'react-image-lightbox/style.css';
import Lightbox from 'react-image-lightbox';
import './BrandRedux.scss'
import * as actions from "../../../../store/actions";

import { FormattedMessage } from 'react-intl';



class BrandManage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newsArr: [],
            previewImgURL: '',
            isOpen: false,

            name: '',
            description: '',
            image: ''
        }
    }
    async componentDidMount() {
        this.props.fetchAllNewsRedux();
    }


    handleOnchangeImg = (event) => {
        let data = event.target.files;
        let file = data[0];
        if (file) {
            let objectUrl = URL.createObjectURL(file)
            this.setState({
                previewImgURL: objectUrl,
                image: file
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
        if (isValid === false) {
            return;
        }

        //fire redux action
        this.props.createNewBrand({
            name: this.state.name,
            description: this.state.description,
            image: this.state.image,
        })
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
    render() {

        let { name, description, image } = this.state;
        const { language } = this.props;
        return (
            <div className='news-redux-container'>
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
                            <div className='col-12'>
                                <button className='btn btn-primary'
                                    onClick={() => this.handleSaveBrand()}
                                >
                                    <FormattedMessage id="manage-news.save"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
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
        // listProducts: state.admin.products
    };
};

const mapDispatchToProps = dispatch => {
    return {
        // changeLanguageAppRedux: (language) => dispatch(actions.changeLanguageApp(language)),
        fetchAllNewsRedux: () => dispatch(actions.fetchAllNews()),
        createNewBrand: (data) => dispatch(actions.createNewBrand(data)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BrandManage);
