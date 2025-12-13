import { postApi } from "../common/api"

const issueToken = async(request:{}) => {
    return await postApi('/api/auth/token', request);
}

export default {
    issueToken
}