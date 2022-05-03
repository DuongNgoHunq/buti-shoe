import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import * as actions from "../../../../store/actions";
import 'react-markdown-editor-lite/lib/index.css';

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

    handleDeleteNews = (news) => {
        console.log('check news before delete: ', news.id);
        this.props.deleteNewsRedux(news.id);
    }
    handleEditNews = (news) => {
        this.props.handleEditNewsFromParet(news)
    }

    render() {
        console.log('Check state: ', this.state);
        let arrNews = this.state.newsRedux;
        return (
            <div>
                <table id="tablemanageuser" className=''>
                    <tbody>
                        <tr>
                            <th>News's title</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                        {arrNews && arrNews.length > 0 &&

                            arrNews.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.title}</td>
                                        <td>{item.description}</td>
                                        <td>

                                            <button className='btn-edit'
                                                onClick={() => this.handleEditNews(item)}

                                            >
                                                <i className="fas fa-pencil-alt"></i>
                                            </button>

                                            <button className='btn-delete'
                                                onClick={() => this.handleDeleteNews(item)}

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
            </div>
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
        deleteNewsRedux: (id) => dispatch(actions.deleteANews(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableManageNews);