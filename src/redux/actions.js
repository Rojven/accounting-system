import axios from "axios";

const loginStart = (admin) => ({
    type: 'LOGIN_START',
    payload: admin
})

const getUsers = (users) => ({
    type: 'GET_USERS',
    payload: users
})

const deleteUser = () => ({
    type: 'DELETE_USER'
})

const addUser = () => ({
    type: 'ADD_USER'
})

const getUser = (user) => ({
    type: 'GET_USER',
    payload: user
})

const updateUser = () => ({
    type: 'UPDATE_USER',
})

const searchedUsers = (users) => ({
    type: 'SEARCH_USERS',
    payload: users
})

export const loadUsers = () => (
    (dispatch) => {
        axios
            .get(`${process.env.REACT_APP_USERS}`)
            .then((res) => {
                dispatch(getUsers(res.data));
            })
            .catch((err) => {
                console.log(err);
            })
    }
)

export const deletedUser = (id) => (
    (dispatch) => {
        axios
            .delete(`${process.env.REACT_APP_USERS}/${id}`)
            .then((res) => {
                dispatch(deleteUser());
                dispatch(loadUsers());
            })
            .catch((err) => {
                console.log(err);
            })
    }
)

export const addedUser = (user) => (
    (dispatch) => {
        axios
            .post(`${process.env.REACT_APP_USERS}`, user)
            .then((res) => {
                dispatch(addUser());
                dispatch(loadUsers());
            })
            .catch((err) => {
                console.log(err);
            })
    }
)

export const getSingleUser = (id) => (
    (dispatch) => {
        axios
            .get(`${process.env.REACT_APP_USERS}/${id}`)
            .then((res) => {
                dispatch(getUser(res.data));
            })
            .catch((err) => {
                console.log(err);
            })
    }
)

export const updatedUser = (user, id) => (
    (dispatch) => {
        axios
            .put(`${process.env.REACT_APP_USERS}/${id}`, user)
            .then((res) => {
                dispatch(updateUser());
                dispatch(loadUsers());
            })
            .catch((err) => {
                console.log(err);
            })
    }
)

export const searchUsers = (value) => (
    (dispatch) => {
        axios
            .get(`${process.env.REACT_APP_USERS}?q=${value}`)
            .then((res) => {
                dispatch(searchedUsers(res.data));
            })
            .catch((err) => {
                console.log(err);
            })
    }
)

export const adminLoading = () => (
    (dispatch) => {
        axios
            .get(`${process.env.REACT_APP_ADMIN}`)
            .then((res) => {
                dispatch(loginStart(res.data));  
            })
            .catch((err) => {
                console.log(err);
            })
    }
)