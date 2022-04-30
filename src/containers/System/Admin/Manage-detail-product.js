import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './ManageDetailProduct.scss';
import * as actions from "../../../store/actions";
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';
import Select from 'react-select';
import { getdetailInforProduct } from '../../../services/productService';
import { CRUD_Actions } from '../../../utils/constant';

const mdParser = new MarkdownIt(/* Markdown-it options */);

class ManageDetailProduct extends Component {

    constructor(props) {
        super(props);
        this.state = {
            contentMarkdown: '',
            contentHTML: '',
            selectedProduct: '',
            description: '',
            listAllProduct: [],
            hasMarkdownData: false,
            actions: '',
        }
    }

    componentDidMount() {
        this.props.fetchAllProductRedux()
    }

    buildDataInputSelect = (inputData) => {
        let result = [];
        console.log('Check list product: ', inputData);

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

        if (prevProps.listProducts !== this.props.listProducts) {
            let dataSelect = this.buildDataInputSelect(this.props.listProducts)
            console.log('Check data select: ', dataSelect);
            this.setState({
                listAllProduct: dataSelect,
            })
        }
    }
    // Finish!
    handleEditorChange = ({ html, text }) => {
        this.setState({
            contentMarkdown: text,
            contentHTML: html,
        })
    }

    handleSaveContentMarkdown = () => {
        let { hasMarkdownData } = this.state;
        this.props.saveproductInforredux({
            contentHTML: this.state.contentHTML,
            contentMarkdown: this.state.contentMarkdown,
            productId: this.state.selectedProduct.value,
            description: this.state.description,
            price: this.state.price,
            image: this.state.image,
            actions: hasMarkdownData === true ? CRUD_Actions.EDIT : CRUD_Actions.CREATE
        })

    }

    handleChangeSelect = async (selectedProduct) => {
        this.setState({ selectedProduct });
        let res = await getdetailInforProduct(selectedProduct.value);
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
            description: event.target.value,
        })
    }

    render() {
        let { hasMarkdownData } = this.state;

        return (
            <div className='manage-product-container container-xl'>
                <div className='manage-product-title title my-3'>
                    Tao them thong tin chi tiet san pham
                </div>
                <div className='more-infor'>
                    <div className='content-left'>
                        <label>Chon san pham</label>
                        <Select
                            value={this.state.selectedProduct}
                            onChange={this.handleChangeSelect}
                            options={this.state.listAllProduct}
                        />

                    </div>
                    <div className='content-right'>
                        <label>Thong tin  gioi thieu</label>
                        <textarea className='form-control' rows="4"
                            onChange={(event) => this.handleChangeDescription(event)}
                            value={this.state.description}
                        >
                            abacasasd
                        </textarea>
                    </div>

                </div>
                <div className='manage-product-editor'>
                    <MdEditor
                        style={{ height: '500px' }}
                        renderHTML={text => mdParser.render(text)}
                        onChange={this.handleEditorChange}
                        value={this.state.contentMarkdown}
                    />
                </div>
                <div className="btn-save-infor-product">
                    <button
                        onClick={() => this.handleSaveContentMarkdown()}

                        className={hasMarkdownData === true ? "save-content-product" : "create-content-product"}
                    >
                        {hasMarkdownData === true ? <span>Luu thong tin </span> : <span>Tao thong tin</span>}
                    </button>
                </div>

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        listProducts: state.admin.products,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchAllProductRedux: () => dispatch(actions.fetchAllProduct()),
        deleteAUserRedux: (id) => dispatch(actions.deleteAProduct(id)),
        saveproductInforredux: (data) => dispatch(actions.saveProductInfor(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageDetailProduct);
