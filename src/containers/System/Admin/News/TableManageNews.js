import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import * as actions from "../../../../store/actions";
import 'react-markdown-editor-lite/lib/index.css';
// const mdParser = new MarkdownIt(/* Markdown-it options */);

class TableManageNews extends Component {

    constructor(props) {
        super(props);
        this.state = {
            newsRedux: []
        }
    }

    componentDidMount() {
        this.props.fetchAllNewsRedux();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.news !== this.props.news) {
            this.setState({
                newsRedux: this.props.news
            })
        }
    }



    render() {
        console.log('Check state: ', this.state);
        let arrNews = this.state.newsRedux;
        return (
            <>
                <table id="tablemanageuser">
                    <tbody>
                        <tr className='row'>
                            <th className='col-4'>News's title</th>
                            <th className='col-6'>Description</th>
                            <th className='col-2'>Action</th>
                        </tr>
                        {arrNews && arrNews.length > 0 &&

                            arrNews.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.title}</td>
                                        <td>{item.description}</td>
                                        <td>

                                            <button className='btn-edit'

                                            >
                                                <i className="fas fa-pencil-alt"></i>
                                            </button>

                                            <button className='btn-delete'
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
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        news: state.admin.allNews
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchAllNewsRedux: () => dispatch(actions.fetchAllNews()),

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableManageNews);
