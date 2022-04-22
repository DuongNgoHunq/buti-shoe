import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeHeader from './HomeHeader';
import NewProducts from './Section/NewProducts';
import OutstandProduct from './Section/OutstandProduct';
import './HomPage.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OutstandBrand from './Section/OutstandBrand';
import News from './Section/News';


class HomePage extends Component {

    render() {
        const settings = {

            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            // autoplay: true,
            speed: 2000,
            // autoplaySpeed: 2000,
        };
        return (
            <div>
                <HomeHeader />
                <NewProducts settings={settings} />
                <OutstandBrand settings={settings} />
                <OutstandProduct settings={settings} />
                <News settings={settings} />
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
