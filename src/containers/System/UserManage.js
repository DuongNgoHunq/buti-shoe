import React, { Component } from 'react';
// import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserManage.scss';
import { getAllUser, createNewUserService, deleteUserService, editUserService } from '../../services/userService';
import ModalUser from './ModalUser';
import ModelEditUser from './ModelEditUser';
import { emitter } from '../../utils/emitter';

class UserManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arrUsers: [],
            isOpenModalUser: false,
            isOpenModalEditUser: false,
            userEdit: {},
        }
    }

    async componentDidMount() {
        let response = await getAllUser('ALL');
        if (response && response.errCode === 0) {
            this.setState({
                arrUsers: response.users
            })
        }
    }
    getAllusrFromReact = async () => {
        let response = await getAllUser('ALL');
        console.log(response.errCode);
        if (response && response.errCode === 0) {
            this.setState({
                // isOpenModalUser: true
                arrUsers: response.users
            })
        }
    }
    handleAddNewUser = () => {
        this.setState({
            isOpenModalUser: true
        })
    }
    toggleUserModal = () => {
        this.setState({
            isOpenModalUser: !this.state.isOpenModalUser,
        })
    }
    toggleEditUserModal = () => {
        this.setState({
            isOpenModalEditUser: !this.state.isOpenModalEditUser,
        })
    }
    createNewUser = async (data) => {
        try {
            let response = await createNewUserService(data)
            // this.getAllusrFromReact()
            if (response && response.errCode !== 0) {
                alert(response.errMessage)
            }
            else {
                await this.getAllusrFromReact();
                this.setState({
                    isOpenModalUser: false
                })
                emitter.emit('EVENT_CLEAR_MODAL_DATA')
            }
        } catch (e) {
            console.log(e);
        }
    }

    handleDeleteUser = async (user) => {
        console.log(user);
        try {
            let response = await deleteUserService(user.id);
            console.log('check errcode:', response.errCode);
            if (response && response.errCode === 0) {
                await this.getAllusrFromReact();
            }
            else {
                alert(response.errMessage);
            }
            alert(response.errMessage);
        } catch (e) {
            console.log(e);
        }
    }

    handleEditUser = (user) => {
        console.log('check edit user ', user);
        this.setState({
            isOpenModalEditUser: true,
            userEdit: user
        })
    }
    doEditUser = async (user) => {

        try {
            let res = await editUserService(user)
            if (res && res.errCode === 0) {
                this.setState({
                    isOpenModalEditUser: false
                })
                await this.getAllusrFromReact()
            }
        } catch (e) {
            console.log(e);
        }

    }
    render() {
        let arrUsers = this.state.arrUsers;
        return (
            <div className="user-container">

                <ModalUser
                    isOpen={this.state.isOpenModalUser}
                    toggleFromparent={this.toggleUserModal}
                    createNewUser={this.createNewUser}
                />
                {this.state.isOpenModalEditUser &&
                    <ModelEditUser
                        isOpen={this.state.isOpenModalEditUser}
                        toggleFromparent={this.toggleEditUserModal}
                        handleEditUser={this.handleEditUser}
                        currentUser={this.state.userEdit}
                        editUser={this.doEditUser}

                    />
                }

                <div className='title text-center'>Manage users with DNH</div>
                <div className='user-table  mx-1'>
                    <div className='mx-1 w-25'>
                        <button className='btn btn-primary px-3'
                            onClick={() => this.handleAddNewUser()}

                        >
                            <i className="fas fa-plus mx-1"></i>
                            Add new user
                        </button>
                    </div>
                    <table id="customers">
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th>Phone Number</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        {arrUsers && arrUsers.length > 0 &&
                            arrUsers.map((item, index) => {
                                return (
                                    <tbody key={index} >
                                        <tr >
                                            <td>{item.firstName}</td>
                                            <td>{item.lastName}</td>
                                            <td>{item.email}</td>
                                            <td>{item.address}</td>
                                            <td>{item.phoneNumber}</td>
                                            <td>
                                                <button className='btn-edit'>
                                                    <i className="fas fa-pencil-alt"
                                                        onClick={() => this.handleEditUser(item)}
                                                    ></i>
                                                </button>

                                                <button className='btn-delete'
                                                    onClick={() => this.handleDeleteUser(item)}
                                                >
                                                    <i className="fas fa-trash"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                )
                            })

                        }

                    </table>

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

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
