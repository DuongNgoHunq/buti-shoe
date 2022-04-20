import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { emitter } from '../../utils/emitter';

class ModalUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: '',
            phoneNumber: ''
        }
        this.listenToEmitter();
    }
    listenToEmitter() {
        emitter.on('EVENT_CLEAR_MODAL_DATA', () => {
            this.setState({
                email: '',
                password: '',
                firstName: '',
                lastName: '',
                address: '',
                phoneNumber: ''
            })
        })
    }
    componentDidMount() {
        console.log('mounting data');
    }

    toggle = () => {
        this.props.toggleFromparent();
    }

    handleOnChangeInput = (event, id) => {
        let coppyState = { ...this.state };
        coppyState[id] = event.target.value;
        this.setState({
            ...coppyState
        }, () => {
        })

    }
    checkValideInput = () => {
        let isValid = true;
        let arrInput = ['email', 'password', 'firstName', 'lastName', 'address', 'phoneNumber']
        for (let i = 0; i < arrInput.length; i++) {
            if (!this.state[arrInput[i]]) {
                isValid = false;
                alert('Missing parameter: ' + arrInput[i])
                break;
            }
        }
        return isValid;
    }
    handleAddNewUser = () => {
        let isValid = this.checkValideInput();
        if (isValid === true) {
            //call api create modle
            this.props.createNewUser(this.state);
        }

    }
    render() {
        return (

            <Modal
                isOpen={this.props.isOpen}
                toggle={() => { this.toggle() }}
                className={"modal-container-user"}
                size="lg"
            >
                <ModalHeader
                    className='modal-title'
                    toggle={() => { this.toggle() }}>
                    Create a new user
                </ModalHeader>
                <ModalBody>
                    <div className='modal-user-body'>
                        <div className='input-container '>
                            <label>Email</label>
                            <input
                                type='text'
                                onChange={(event) => { this.handleOnChangeInput(event, "email") }}
                                value={this.state.value}
                            />
                        </div>
                        <div className='input-container '>
                            <label>Password</label>
                            <input
                                type='password'
                                onChange={(event) => { this.handleOnChangeInput(event, "password") }}
                                value={this.state.password}
                            />
                        </div>
                    </div>
                    <div className='modal-user-body'>
                        <div className='input-container '>
                            <label>First name</label>
                            <input
                                type='text'
                                onChange={(event) => { this.handleOnChangeInput(event, "firstName") }}
                                value={this.state.firstName}
                            />
                        </div>
                        <div className='input-container '>
                            <label>Last name</label>
                            <input
                                type='text'
                                onChange={(event) => { this.handleOnChangeInput(event, "lastName") }}
                                value={this.state.lastName}
                            />
                        </div>
                    </div>
                    <div className='modal-user-body'>
                        <div className='input-container max-width-input'>
                            <label>Address</label>
                            <input
                                type='text'
                                onChange={(event) => { this.handleOnChangeInput(event, "address") }}
                                value={this.state.address}
                            />
                        </div>
                        <div className='input-container min-width-input'>
                            <label>Phone number</label>
                            <input
                                type='text'
                                onChange={(event) => { this.handleOnChangeInput(event, "phoneNumber") }}
                                value={this.state.phoneNumber}
                            />
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button
                        color="primary"
                        className='px-3'
                        onClick={() => { this.handleAddNewUser() }}
                    >
                        Add new
                    </Button>
                    {' '}
                    <Button
                        className='px-3'
                        onClick={() => { this.toggle() }}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        )
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);



