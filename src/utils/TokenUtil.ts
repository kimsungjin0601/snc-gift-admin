const setAccessToken = (token) => {
    localStorage.setItem('token', token);
}

const getAccessToken = () => {
    return localStorage.getItem('token');
}

const removeAccessToken = () => {
    localStorage.removeItem('token');
}

export default {
    setAccessToken,
    getAccessToken,
    removeAccessToken
};