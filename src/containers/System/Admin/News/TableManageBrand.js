import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import * as actions from "../../../../store/actions";
import 'react-markdown-editor-lite/lib/index.css';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
// import style manually
import 'react-markdown-editor-lite/lib/index.css';

// Register plugins if required
// MdEditor.use(YOUR_PLUGINS_HERE);

// Initialize a markdown parser
const mdParser = new MarkdownIt(/* Markdown-it options */);

// Finish!
function handleEditorChange({ html, text }) {
    console.log('handleEditorChange', html, text);
}



class TableManageBrand extends Component {

    constructor(props) {
        super(props);
        this.state = {
            brandRedux: []
        }
    }

    componentDidMount() {
        this.props.fetchAllBrandRedux();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.listBrand !== this.props.listBrand) {
            this.setState({
                brandRedux: this.props.listBrand
            })
        }
    }

    handleDeleteBrand = (brand) => {
        console.log('Check: ', brand.id);

        this.props.deleteBrandRedux(brand.id);
    }

    handleEditBrand = (brand) => {
        this.props.handleEditBrandFromParet(brand);
    }
    // 
    render() {
        console.log('Check state: ', this.state);
        let arrBrand = this.state.brandRedux;
        console.log('Check ar brand: ', arrBrand);
        console.log('Check props: ', this.props.listBrand);
        return (
            <>
                <table id="tablemanageuser">
                    <tbody>
                        <tr>
                            <th>News's title</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                        {arrBrand && arrBrand.length > 0 &&

                            arrBrand.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.name}</td>
                                        <td>{item.description}</td>
                                        <td>

                                            <button className='btn-edit'
                                                onClick={() => this.handleEditBrand(item)}
                                            >
                                                <i className="fas fa-pencil-alt"></i>
                                            </button>

                                            <button className='btn-delete'
                                                onClick={() => this.handleDeleteBrand(item)}

                                            >
                                                <i className="fas fa-trash"></i>
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })

                        }
                    </tbody>
                </table>

                <MdEditor style={{ height: '500px' }} renderHTML={text => mdParser.render(text)} onChange={handleEditorChange} />

            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        listBrand: state.admin.allBrand
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchAllBrandRedux: () => dispatch(actions.fetchAllBrand()),
        deleteBrandRedux: (id) => dispatch(actions.deleteABrand(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableManageBrand);
