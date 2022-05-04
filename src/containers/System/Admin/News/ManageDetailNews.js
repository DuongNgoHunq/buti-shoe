import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import * as actions from "../../../../store/actions";
import 'react-markdown-editor-lite/lib/index.css';

import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';
import './ManageDetailNews.scss';
import Select from 'react-select';
import { getdetailInforProduct } from '../../../../services/productService';



const mdParser = new MarkdownIt(/* Markdown-it options */);


class ManageDetailNews extends Component {

    constructor(props) {
        super(props);
        this.state = {
            contentHTML: '',
            contentMarkdown: '',
            description: '',
            selectedNews: '',
            listNews: [],
        }
    }

    componentDidMount() {
        this.props.fetchAllNewsRedux()
    }

    buildDataInputSelect = (inputData) => {
        let result = [];

        // let { language } = this.props;
        if (inputData && inputData.length > 0) {
            inputData.map((item, index) => {
                let object = {};
                object.label = item.title;
                object.value = item.id;
                result.push(object)
            })

        }
        return result;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.newsList !== this.props.newsList) {
            let dataSelect = this.buildDataInputSelect(this.props.newsList)
            this.setState({
                listNews: dataSelect
            })
        }
    }

    handleEditorChange = ({ html, text }) => {
        this.setState({
            contentMarkdown: text,
            contentHTML: html,
        })
    }

    handleSaveContentMarkdown = () => {
        this.props.saveNewsDetailRedux({
            contentHTML: this.state.contentHTML,
            contentMarkdown: this.state.contentMarkdown,
            description: this.state.description,
            newsId: this.state.selectedNews.value
        })
    }

    handleChangeSelect = async (selectedNews) => {
        this.setState({ selectedNews });
        let res = await getdetailInforProduct(selectedNews.value);
        if (res && res.errCode === 0 && res.data && res.data.Markdown) {
            let markdown = res.data.Markdown;
            this.setState({
                contentHTML: markdown.contentHTML,
                contentMarkdown: markdown.contentMarkdown,
                description: markdown.description,
                hasMarkdownData: true,
            })
        }
        else {
            this.setState({
                contentHTML: "",
                contentMarkdown: "",
                description: "",
                hasMarkdownData: false,
            })
        }
    };



    handleChangeDescription = (event) => {
        this.setState({
            description: event.target.value
        })
    }


    render() {
        let arrNews = this.state.newsRedux;
        return (
            <div className='manage-news-container container-xl mb-5 '>
                <div className='title'>Manage detail news's information</div>


                <div className='more-infor row'>
                    <div className='content-left col-sm-5'>
                        <label>
                            <FormattedMessage id="manage-product.select-product" />

                        </label>
                        <Select
                            value={this.state.selectedNews}
                            onChange={this.handleChangeSelect}
                            options={this.state.listNews}
                        />

                    </div>
                    <div className='content-right col-sm-7'>
                        <label>
                            <FormattedMessage id="manage-product.intro-infor" />

                        </label>
                        <textarea className='form-control' rows="4"
                            onChange={(event) => this.handleChangeDescription(event)}
                            value={this.state.description}
                        >

                        </textarea>
                    </div>
                </div>
                <div className='manage-new-editor py-3'>
                    <MdEditor
                        style={{ height: '500px' }}
                        renderHTML={text => mdParser.render(text)}
                        onChange={this.handleEditorChange}
                    />

                </div>
                <button className='save-content-news btn-primary py-2 px-3 mb-5'
                    onClick={() => this.handleSaveContentMarkdown()}
                >
                    Luu thong tin
                </button>
                <div className=''></div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        newsList: state.admin.allNews,
        language: state.app.language,

    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchAllNewsRedux: () => dispatch(actions.fetchAllNews()),
        deleteNewsRedux: (id) => dispatch(actions.deleteANews(id)),
        saveNewsDetailRedux: (data) => dispatch(actions.saveNewsInfor(data)),

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageDetailNews);
