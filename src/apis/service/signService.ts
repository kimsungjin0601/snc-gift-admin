import { getApi, postApi } from "../common/api"

interface SignInParams {
    loginId : string;
    password : string;   
}

const signIn = (params:SignInParams) => {
    return postApi('/api/auth/admin/sign-in', params);
}

const signOut = (params:{}) => {
    return postApi('/api/auth/sign-out', params);
}

const getUserInfo = () => {
    return getApi('/api/user-info',{});
}

export default {
    signIn,
    signOut,
    getUserInfo
}