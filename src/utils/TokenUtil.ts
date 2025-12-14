const setAccessToken = (token) => {
    localStorage.setItem('sncat', token);
}

const getAccessToken = () => {
    return localStorage.getItem('sncat');
}

const removeAccessToken = () => {
    localStorage.removeItem('sncat');
}

export default {
    setAccessToken,
    getAccessToken,
    removeAccessToken
};