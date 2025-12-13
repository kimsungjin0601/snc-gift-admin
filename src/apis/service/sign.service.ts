import { getApi, postApi } from "../common/api"
import type { SignInRequest } from "../types/sign.types";

const signIn = async (request:SignInRequest) => {
    return await postApi('/api/auth/admin/sign-in', request);
}

const signOut = async(request:{}) => {
    return await postApi('/api/auth/sign-out', request);
}

const getUserInfo = async(params:{}) => {
    return await getApi('/api/user-info', params);
}

export default {
    signIn,
    signOut,
    getUserInfo
}