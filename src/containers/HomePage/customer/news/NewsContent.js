import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { FormattedMessage } from 'react-intl';
import * as actions from '../../../../store/actions';

class NewsContent extends Component {
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
                <h3 className='content-title'>
                    Tin tức
                </h3>
                <div className='news-content row'>
                    {arrNews && arrNews.length > 0 &&
                        arrNews.map((item, index) => {
                            let imageBase64 = '';
                            if (item.image) {
                                imageBase64 = new Buffer(item.image, 'base64').toString('binary')
                            }
                            return (
                                <div className='news-content-child col-md-4 col-sm-12 '
                                    onClick={() => this.handleViewDetailNews(item)}

                                >
                                    <div className='parent'>
                                        <div className='news-content-img-lg'
                                            style={{ backgroundImage: `url(${imageBase64})` }}

                                        >
                                        </div>
                                        <div className='news-content-description shadow'>
                                            <div className='news-content-title'>
                                                10 đôi giày nhất định phải có trong tủ của bạn 2022
                                            </div>
                                            <div className='news-content-date'>
                                                2020-11-18
                                            </div>
                                            <div className='description-news'>
                                                Theo nhận định từ nhiều khía cạnh, Nike Air Jordan 1 không chỉ là một huyền thoại có tên tuổi trong các loại giày Sneaker nổi tiếng trên thị trường, mà còn là tiền đề giúp cho nhà Nike mở rộng khuếch tán thương hiệu của mình trong lĩnh vực giày thể thao sneaker.
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            )
                        })
                    }


                </div>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewsContent));
