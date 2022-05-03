import React, { Component } from 'react';
import { connect } from 'react-redux';
// import './News.scss';
import Slider from "react-slick";
import { FormattedMessage } from 'react-intl';
import { withRouter } from 'react-router';

import * as actions from '../../../store/actions'

class News extends Component {
    constructor(props) {
        super(props)
        this.state = {
            arrNews: [],
        }
    }
    componentDidMount() {
        this.props.allNews();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.newsList !== this.props.newsList) {
            this.setState({
                arrNews: this.props.newsList
            })
        }
    }

    gotoNews = () => {
        console.log('Check click');
        if (this.props.history) {
            this.props.history.push(`/news-page`)
        }
    }

    render() {

        let settings = this.props.settings;
        let arrNews = this.state.arrNews;
        let { language } = this.props;

        return (
            <div className='section-news section-share container-fluid'>
                <div className=' container-xl'>
                    <div className='section-container'>
                        <div className='section-header'>
                            <span className='title-section'>
                                <FormattedMessage id="homepage.news" />
                            </span>
                            <button className='btn-section'
                                onClick={() => this.gotoNews()}

                            >
                                <FormattedMessage id="homepage.more-infor" />

                            </button>
                        </div>
                        <div className='section-body'>
                            <Slider {...settings}>

                                {arrNews && arrNews.length > 0 &&
                                    arrNews.map((item, index) => {

                                        let imageBase64 = '';
                                        if (item.image) {
                                            imageBase64 = new Buffer(item.image, 'base64').toString('binary')
                                        }
                                        return (
                                            <div className="section-child section-news" key={index}>
                                                <div className="bg-image section-news"
                                                    style={{ backgroundImage: `url(${imageBase64})` }}
                                                />
                                                <div className='new-title mt-3 fw-bold'>
                                                    {item.title}
                                                </div>

                                            </div>
                                        )

                                    })
                                }



                            </Slider>
                        </div>

                    </div>
                </div>

            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        newsList: state.admin.allNews,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        allNews: () => dispatch(actions.fetchAllNews())
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(News));
