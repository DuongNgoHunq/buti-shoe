import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect, Route, Switch } from 'react-router-dom';
import UserManage from '../containers/System/UserManage';
import UserRedux from '../containers/System/Admin/userRedux';
import ProductManage from '../containers/System/Admin/ProductRedux';
import Header from '../containers/Header/Header';
import ManageDetailProduct from '../containers/System/Admin/Manage-detail-product';
import ManageReciept from '../containers/System/Seller/ManageReciept';
import NewsManage from '../containers/System/Admin/News/NewsRedux';
import BrandManage from '../containers/System/Admin/News/BrandRedux';
import ManageDetailNews from '../containers/System/Admin/News/ManageDetailNews';
import ManageDetailBrand from '../containers/System/Admin/News/ManageDetailBrand';
import WelcomeAdmin from '../containers/System/Admin/WelcomeAdmin';

class System extends Component {
    render() {
        const { systemMenuPath, isLoggedIn } = this.props;
        return (
            <>
                {isLoggedIn && <Header />}
                <div className="system-container">
                    <div className="system-list">
                        <Switch>
                            <Route path="/system/welcome-admin" component={WelcomeAdmin} />

                            <Route path="/system/user-manage" component={UserManage} />

                            <Route path="/system/user-redux" component={UserRedux} />

                            <Route path='/system/product-manager' component={ProductManage} />

                            <Route path='/system/product-detaile-manager' component={ManageDetailProduct} />
                            <Route path='/system/manage-recipte' component={ManageReciept} />

                            <Route path='/system/news-manager' component={NewsManage} />
                            <Route path='/system/news-detail' component={ManageDetailNews} />

                            <Route path='/system/brand-manager' component={BrandManage} />
                            <Route path='/system/brand-detail' component={ManageDetailBrand} />


                            {/*  */}
                            <Route component={() => { return (<Redirect to={systemMenuPath} />) }} />
                        </Switch>
                    </div>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(System);
