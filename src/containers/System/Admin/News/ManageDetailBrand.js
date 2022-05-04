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


class ManageDetailBrand extends Component {

    constructor(props) {
        super(props);
        this.state = {
            contentHTML: '',
            contentMarkdown: '',
            description: '',
            selectedBrand: '',
            listBrand: [],
        }
    }

    componentDidMount() {
        this.props.fetchAllBrandRedux();
    }

    buildDataInputSelect = (inputData) => {
        let result = [];

        // let { language } = this.props;
        if (inputData && inputData.length > 0) {
            inputData.map((item, index) => {
                let object = {};
                object.label = item.name;
                object.value = item.id;
                result.push(object)
            })

        }
        return result;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.brandList !== this.props.brandList) {
            let dataSelect = this.buildDataInputSelect(this.props.brandList)
            this.setState({
                listBrand: dataSelect
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

        this.props.saveBrandInforRedux({
            contentHTML: this.state.contentHTML,
            contentMarkdown: this.state.contentMarkdown,
            description: this.state.description,
            brandId: this.state.selectedBrand.value
        })
    }

    handleChangeSelect = async (selectedBrand) => {
        this.setState({ selectedBrand });
        let res = await getdetailInforProduct(selectedBrand.value);
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
        console.log('Check state: ', this.state);
        let arrNews = this.state.newsRedux;
        return (
            <div className='manage-news-container container-xl mb-5 '>
                <div className='title'>Manage detail brand's information</div>


                <div className='more-infor row'>
                    <div className='content-left col-sm-5'>
                        <label>
                            <FormattedMessage id="manage-product.select-product" />

                        </label>
                        <Select
                            value={this.state.selectedBrand}
                            onChange={this.handleChangeSelect}
                            options={this.state.listBrand}
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
        brandList: state.admin.allBrand,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchAllBrandRedux: () => dispatch(actions.fetchAllBrand()),
        saveBrandInforRedux: (data) => dispatch(actions.saveBrandInfor(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageDetailBrand);
