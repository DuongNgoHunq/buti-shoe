import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter as Router } from 'connected-react-router';
import { history } from '../redux'
import { ToastContainer } from 'react-toastify';
import { userIsAuthenticated, userIsNotAuthenticated } from '../hoc/authentication';
import { path } from '../utils'
import Home from '../routes/Home';
import Login from './Auth/Login';
import System from '../routes/System';
import HomePage from './HomePage/HomePage';
import { CustomToastCloseButton } from '../components/CustomToast';
import CustomScrollbars from '../components/CustomScrollbars';
import DetailProduct from './HomePage/customer/product/DetailProduct';
import AllProduct from './HomePage/customer/product/AllProduct';
import AllBrand from './HomePage/customer/brand/AllBrand';
import NewsPage from './HomePage/customer/news/NewsPage';
import Contact from './HomePage/customer/news/Contact';
import CartPage from './HomePage/customer/cart/CartPage';

class App extends Component {

    handlePersistorState = () => {
        const { persistor } = this.props;
        let { bootstrapped } = persistor.getState();
        if (bootstrapped) {
            if (this.props.onBeforeLift) {
                Promise.resolve(this.props.onBeforeLift())
                    .then(() => this.setState({ bootstrapped: true }))
                    .catch(() => this.setState({ bootstrapped: true }));
            } else {
                this.setState({ bootstrapped: true });
            }
        }
    };

    componentDidMount() {
        this.handlePersistorState();
    }

    render() {
        return (
            <Fragment>

                <Router history={history}>
                    <div className="main-container">

                        <span className="content-container">
                            <CustomScrollbars style={{ height: '110vh', with: '100%' }}>
                                <Switch>
                                    <Route path={path.HOME} exact component={(Home)} />
                                    <Route path={path.LOGIN} component={userIsNotAuthenticated(Login)} />
                                    <Route path={path.SYSTEM} component={userIsAuthenticated(System)} />
                                    <Route path={path.HOMEPAGE} component={HomePage} />
                                    <Route path={path.DETAIL_PRODUCT} component={DetailProduct} />
                                    <Route path={path.ALL_PRODUCT} component={AllProduct} />
                                    <Route path={path.BRAND} component={AllBrand} />
                                    <Route path={path.NEWSPAGE} component={NewsPage} />
                                    <Route path={path.CONTACT} component={Contact} />
                                    <Route path={path.CART} component={CartPage} />






                                </Switch>
                            </CustomScrollbars>
                        </span>

                        {/* <ToastContainer
                            className="toast-container" toastClassName="toast-item" bodyClassName="toast-item-body"
                            autoClose={false} hideProgressBar={true} pauseOnHover={false}
                            pauseOnFocusLoss={true} closeOnClick={false} draggable={false}
                            closeButton={<CustomToastCloseButton />}
                        /> */}
                        <ToastContainer
                            position="top-right"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                        />
                    </div>
                </Router>
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        started: state.app.started,
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);