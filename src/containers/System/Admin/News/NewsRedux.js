import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'react-image-lightbox/style.css';
import Lightbox from 'react-image-lightbox';
import './NewsRedux.scss'
import * as actions from "../../../../store/actions";
import { LANGUAGES, CRUD_Actions, CommonUtils } from "../../../../utils";

import { FormattedMessage } from 'react-intl';
import { flatMap } from 'lodash';
import TableManageNews from './TableManageNews';
import { createNewUser } from '../../../../store/actions';



class NewsManage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newsArr: [],
            previewImgURL: '',
            isOpen: false,

            newsId: '',
            title: '',
            description: '',
            image: '',
            action: '',
        }
    }
    async componentDidMount() {
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.news !== this.props.news) {
            this.setState({
                newsId: '',
                title: '',
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
            let objectUrl = URL.createObjectURL(file)
            this.setState({
                previewImgURL: objectUrl,
                image: base64
            })
            console.log('Check imge: ', this.state.image);
        }
        console.log('Check url img: ', this.state.previewImgURL);
    }

    handlePreviewImg = () => {
        if (!this.state.previewImgURL) return;
        this.setState({
            isOpen: true
        })
    }

    handleSaveNews = () => {
        let isValid = this.checkValidateInput();
        if (isValid === false) return;
        let { action } = this.state;

        if (action === CRUD_Actions.CREATE) {
            this.props.createNewsRedux({
                title: this.state.title,
                description: this.state.description,
                image: this.state.image,
            })
        }
        if (action === CRUD_Actions.EDIT) {
            this.props.editNewsRedux({
                id: this.state.newsId,
                title: this.state.title,
                description: this.state.description,
                image: this.state.image,
            })
        }

        //fire redux action
    }

    checkValidateInput = () => {
        let isValid = true;
        let arrCheck = ['title', 'description'];
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

    handleEditNewsFromParet = (news) => {
        let imageBase64 = '';
        if (news.image) {
            imageBase64 = new Buffer(news.image, 'base64').toString('binary')
        }
        this.setState({
            newsId: news.id,
            title: news.title,
            description: news.description,
            image: news.image,
            previewImgURL: imageBase64,

            action: CRUD_Actions.EDIT
        })
    }
    render() {

        let { title, description, image } = this.state;
        const { language } = this.props;
        return (
            <div className='news-redux-container container-xl'>
                <div className='title'><FormattedMessage id="manage-news.title" /></div>
                <div className='new-redux-body'>
                    <div className='container'>
                        <div className='row'>
                            <div className="row mb-3">
                                <div className='col-6'>
                                    <label htmlFor="news-title" className="form-label">
                                        <FormattedMessage id="manage-news.news-title" />
                                    </label>
                                    <input type="text" className="form-control" id="news-title" placeholder="news title ..."
                                        value={title}
                                        onChange={(event) => this.onChangeInput(event, 'title')}
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
                                        <div className='preview-image img-thumbnail'
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
                                    onClick={() => this.handleSaveNews()}
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
                <TableManageNews
                    handleEditNewsFromParet={this.handleEditNewsFromParet}
                    action={this.state.action}
                />

                {this.state.isOpen === true &&
                    <Lightbox
                        mainSrc={this.state.previewImgURL}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                    />
                }
                <div className='news-footer'> </div>

            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        news: state.admin.allNews

        // listProducts: state.admin.products
    };
};

const mapDispatchToProps = dispatch => {
    return {
        // changeLanguageAppRedux: (language) => dispatch(actions.changeLanguageApp(language)),
        createNewsRedux: (data) => dispatch(actions.createNewNews(data)),
        editNewsRedux: (data) => dispatch(actions.editNews(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsManage);
