import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

class NewsContent extends Component {

    render() {

        return (
            <div className='sidebar-blog'>
                <h3 className='content-title'>
                    Tin tức
                </h3>
                <div className='news-content row'>
                    <div className='news-content-child col-md-4 col-sm-12 '>
                        <div className='parent'>
                            <div className='news-content-img-lg'>

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
                    <div className='news-content-child col-md-4 col-sm-12 '>
                        <div className='parent'>
                            <div className='news-content-img-lg'>

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
                    <div className='news-content-child col-md-4 col-sm-12 '>
                        <div className='parent'>
                            <div className='news-content-img-lg'>

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
                    <div className='news-content-child col-md-4 col-sm-12 '>
                        <div className='parent'>
                            <div className='news-content-img-lg'>

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
                    <div className='news-content-child col-md-4 col-sm-12 '>
                        <div className='parent'>
                            <div className='news-content-img-lg'>

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

                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {

    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewsContent));
