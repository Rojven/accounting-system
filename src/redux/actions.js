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

const requestFunction = async (url, method = 'GET', body = null, headers = {'Content-Type': 'application/json'}) => {
    try {
        const response = await fetch(url, {method, body, headers});
        if (!response.ok) {
            throw new Error(`Could not fetch ${url}, status: ${response.status}`);
        }

        const data = await response.json();

        return data;

    } catch(e) {
        throw e;
    }
}


export const loadUsers = () => (
    (dispatch) => {
        requestFunction(`${process.env.REACT_APP_USERS}`)
            .then((data) => dispatch(getUsers(data)))
            .catch((err) => console.log(err))
    }
)        

export const deletedUser = (id) => (
    (dispatch) => {
        requestFunction(`${process.env.REACT_APP_USERS}/${id}`, 'DELETE')
            .then(() => {
                dispatch(deleteUser());
                dispatch(loadUsers());
            })
            .catch((err) => console.log(err))
    }
)

export const addedUser = (user) => (
    (dispatch) => {
        requestFunction(`${process.env.REACT_APP_USERS}`, 'POST', JSON.stringify(user))
            .then(() => {
                dispatch(addUser());
                dispatch(loadUsers());
            })
            .catch((err) => console.log(err))
    }
)

export const getSingleUser = (id) => (
    (dispatch) => {
        requestFunction(`${process.env.REACT_APP_USERS}/${id}`)
            .then((data) => dispatch(getUser(data)))
            .catch((err) => console.log(err))
    }
)

export const updatedUser = (user, id) => (
    (dispatch) => {
        requestFunction(`${process.env.REACT_APP_USERS}/${id}`, 'PUT', JSON.stringify(user))
            .then(() => {
                dispatch(updateUser());
                dispatch(loadUsers());
            })
            .catch((err) => console.log(err))
    }
)

export const searchUsers = (value) => (
    (dispatch) => {
        requestFunction(`${process.env.REACT_APP_USERS}?q=${value}`)
            .then((data) => dispatch(searchedUsers(data)))
            .catch((err) => console.log(err))
    }
)

export const adminLoading = () => (
    (dispatch) => {
        
        requestFunction(`${process.env.REACT_APP_ADMIN}`)
            .then((data) => dispatch(loginStart(data)))
            .catch((err) => console.log(err))
    }
)