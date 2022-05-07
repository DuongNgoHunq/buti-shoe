import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import './Register.scss';
// import { FormattedMessage } from 'react-intl';
// import { handleRegisterAPI } from '../../services/userService'
// import { userRegisterSuccess } from '../../store/actions';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            phoneNumber: '',
            password: '',
            confirmPassword: '',
            isShowPassword: false,
            errMessage: '',
        }

    }
    handleOnchangeUsename = (event) => {
        this.setState({
            username: event.target.value,
        })
    }
    handleOnchangeEmail = (event) => {
        this.setState({
            email: event.target.value
        })
    }
    handleOnchangePhoneNumber = (event) => {
        this.setState({
            phoneNumber: event.target.value
        })
    }
    handleOnchangePassword = (event) => {
        this.setState({
            password: event.target.value,
        })
    }
    handleOnchangeConfirmPassword = (event) => {
        this.setState({
            confirmPassword: event.target.value,
        })
    }
    handleRegister = async () => {
        console.log('Check state: ', this.state);
        this.setState({
            errMessage: ''
        })

        try {

        } catch (error) {
            if (error.response) {
                if (error.response.data) {
                    this.setState({
                        errMessage: error.response.data.message
                    })
                }
            }
        }

    }
    handleShowHidePassword = () => {
        this.setState({
            isShowPassword: !this.state.isShowPassword
        })
    }
    render() {

        return (
            <div className='Register-background'>
                <div className='Register-containner'>
                    <div className='Register-content'>
                        <div className='col-12 text-center text-Register '>Register </div>
                        <div className='col-12 form-group'>
                            <label>Username</label>
                            <input type='text'
                                className='form-control'
                                placeholder='Enter your username'
                                value={this.state.username}
                                onChange={(event) => this.handleOnchangeUsename(event)}
                            />
                        </div>
                        <div className='col-12 form-group'>
                            <label>Email</label>
                            <input type='text'
                                className='form-control'
                                placeholder='Enter your email'
                                value={this.state.email}
                                onChange={(event) => this.handleOnchangeEmail(event)}
                            />
                        </div>
                        <div className='col-12 form-group'>
                            <label>Phone number</label>
                            <input type='text'
                                className='form-control'
                                placeholder='Enter your phone number'
                                value={this.state.phoneNumber}
                                onChange={(event) => this.handleOnchangePhoneNumber(event)}
                            />
                        </div>
                        <div className='col-12 form-group Register-input' >
                            <label>Password</label>
                            <div className='custom-input-password'>
                                <input
                                    type={this.state.isShowPassword ? 'text' : 'password'}
                                    className='form-control'
                                    placeholder='Enter your password'
                                    value={this.state.password}
                                    onChange={(event) => this.handleOnchangePassword(event)}
                                />
                                <span
                                    onClick={() => { this.handleShowHidePassword() }}
                                >
                                    <i className={this.state.isShowPassword ? "far fa-eye-slash" : "far fa-eye"}></i>
                                </span>
                            </div>
                            <label>Confirm password</label>
                            <div className='custom-input-password'>
                                <input
                                    type={this.state.isShowPassword ? 'text' : 'password'}
                                    className='form-control'
                                    placeholder='Enter your password'
                                    value={this.state.confirmPassword}
                                    onChange={(event) => this.handleOnchangeConfirmPassword(event)}
                                />
                                <span
                                    onClick={() => { this.handleShowHidePassword() }}
                                >
                                    <i className={this.state.isShowPassword ? "far fa-eye-slash" : "far fa-eye"}></i>
                                </span>
                            </div>

                        </div>
                        <div className='col-12 text-danger'>
                            {this.state.errMessage}
                        </div>
                        <div>
                            <button
                                className='btn-Register'
                                onClick={() => this.handleRegister()}
                            >Register
                            </button>
                        </div>

                        <div className='col-12 text-center mt-3'>
                            <span className='text-other-Register'>Or Register with:</span>
                        </div>
                        <div className='col-12 social-Register'>
                            <i className="fab fa-google-plus-g google"></i>
                            <i className="fab fa-facebook facebook"></i>
                        </div>
                    </div>
                </div>
            </div>
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
        // adminRegisterSuccess: (adminInfo) => dispatch(actions.adminRegisterSuccess(adminInfo)),
        // userRegisterFail: () => dispatch(actions.userRegisterFail()),
        // userRegisterSuccess: (userInfo) => dispatch(actions.userRegisterSuccess(userInfo))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
