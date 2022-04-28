import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './ManageDetailProduct.scss';
import * as actions from "../../../store/actions";

import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';

import Select from 'react-select';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];

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
        this.props.saveproductInforredux({
            contentHTML: this.state.contentHTML,
            contentMarkdown: this.state.contentMarkdown,
            productId: this.state.selectedProduct.value,
            description: this.state.description,
            price: this.state.price,
            image: this.state.image
        })

    }

    handleChange = (selectedProduct) => {
        this.setState({ selectedProduct });
    };

    handleChangeDescription = (event) => {
        this.setState({
            description: event.target.value,
        })
    }

    render() {
        console.log('Check state: ', this.state);
        return (
            <div className='manage-product-container'>
                <div className='manage-product-title title my-3'>
                    Tao them thong tin chi tiet san pham
                </div>
                <div className='more-infor'>
                    <div className='content-left'>
                        <label>Chon san pham</label>
                        <Select
                            value={this.state.selectedProduct}
                            onChange={this.handleChange}
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
                    />
                </div>
                <button
                    className='btn btn-warning save-content-product m-3'
                    onClick={() => this.handleSaveContentMarkdown()}
                >
                    Luu thong tin
                </button>
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
