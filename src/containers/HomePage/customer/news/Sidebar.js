import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { FormattedMessage } from 'react-intl';
import * as actions from '../../../../store/actions';

class Sidebar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            arrNews: [],
        }
    }
    componentDidMount() {
        this.props.getAllNewsRedux();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.newsList !== this.props.newsList) {
            this.setState({
                arrNews: this.props.newsList
            })
        }
    }
    handleViewDetailNews = (news) => {
        this.props.history.push(`/detail-news/${news.id}`)

    }

    render() {
        let arrNews = this.state.arrNews;
        let { language } = this.props;
        return (
            <div className='sidebar-blog'>
                <h3 className='sidebar-title'>
                    Bài viết mới nhất
                </h3>
                {arrNews && arrNews.length > 0 &&
                    arrNews.map((item, index) => {
                        let imageBase64 = '';
                        if (item.image) {
                            imageBase64 = new Buffer(item.image, 'base64').toString('binary')
                        }
                        return (
                            <div className='side-bar-content'
                                onClick={() => this.handleViewDetailNews(item)}

                            >
                                <div className='sidebar-child'>
                                    <div className='new-img-sm'
                                        style={{ backgroundImage: `url(${imageBase64})` }}
                                    ></div>
                                    <div className='sidebar-text'>
                                        <p className='description'>
                                            {item.title}
                                        </p>
                                        <p className='date'>
                                            2020-11-18
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        newsList: state.admin.allNews
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getAllNewsRedux: () => dispatch(actions.fetchAllNews())
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Sidebar));
