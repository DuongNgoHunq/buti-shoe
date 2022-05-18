import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import { verifyEmailOrder } from "../../../services/userService";
import HomeHeader from '../HomeHeader';

class VerifyEmailOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            statusVerify: false,
            errCode: 0
        }

    }

    async componentDidMount() {
        if (this.props.location && this.props.location.search) {
            const urlParams = new URLSearchParams(this.props.location.search);
            const token = urlParams.get('token');
            const productId = urlParams.get('productId');
            let res = await verifyEmailOrder({
                token: token,
                productId: productId
            })

            if (res && res.errCode === 0) {
                this.setState({
                    statusVerify: true,
                    errCode: res.errCode
                })
            }
            else {
                this.setState({
                    statusVerify: true,
                    errCode: res && res.errCode ? res.errCode : -1
                })
            }
        }

    }

    render() {
        let { statusVerify, errCode } = this.state;

        return (
            <>
                <HomeHeader isShowSlider={false} />
                {statusVerify === false ?
                    <div>Loading data...</div>
                    :
                    <div>
                        {errCode === 0 ?
                            <h3 className='text-center mt-5 color-red'>Xác nhận lịch hẹn thành công</h3>
                            :
                            <h3 className='text-center mt-5 color-red'>Lịch hẹn không tồn tại hoặc đã được xác nhận</h3>
                        }
                    </div>

                }
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        lang: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(VerifyEmailOrder);
