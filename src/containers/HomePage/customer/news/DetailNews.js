import React, { Component } from 'react';
import { connect } from "react-redux";
import HomeHeader from '../../HomeHeader';
import './DetailNews.scss';
import { NavLink } from 'react-router-dom';
import HomeFooter from '../../Section/HomeFooter';
import Sidebar from './Sidebar';
import { getDetailNews } from '../../../../services/newsService';

class DetailNews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            detailNews: {},
            image: '',
        }
    }

    async componentDidMount() {
        if (this.props.match && this.props.match.params && this.props.match.params.id) {
            let id = this.props.match.params.id;
            let res = await getDetailNews(id);

            if (res && res.errCode === 0) {
                this.setState({
                    detailNews: res.data,

                })

            }

        }
    }
    async componentDidUpdate(prevProps) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            let id = this.props.match.params.id;
            let res = await getDetailNews(id);
            if (res && res.errCode === 0) {
                this.setState({
                    detailNews: res.data
                })
            }
        }
    }
    render() {

        let { detailNews } = this.state;

        return (
            <>
                <HomeHeader isShowSlider={false} />
                <div className='news-detail-container container-xl '>
                    <div className='flex-row-reverse row'>

                        <div className='intro-product row col-xl-9 col-md-12 col-sm-12 new-detail-right'>
                            <div className='intro-news'>
                                <div className='title-news'>
                                    {detailNews.title}
                                </div>
                                <div className='description-news'>
                                    {detailNews.description}
                                </div>
                                <div className='image-detail-news'
                                    style={{ backgroundImage: `url(${detailNews.image})` }}
                                >
                                </div>
                                <div className='intro-markdown-news '>
                                    {detailNews.NewsMarkdown && detailNews.NewsMarkdown.contentHTML
                                        && <div dangerouslySetInnerHTML={{ __html: detailNews.NewsMarkdown.contentHTML }}>

                                        </div>
                                    }
                                </div>
                            </div>
                        </div>

                        <div className='col-xl-3 col-md-12 col-sm-12 new-left '>
                            <Sidebar />
                        </div>
                    </div>
                </div>
                <HomeFooter className="footer-detail-news" />
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        systemMenuPath: state.app.systemMenuPath,
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailNews);
