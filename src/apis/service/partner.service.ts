import { getApi } from "../common/api"
import type { PartnerPageRequest } from "../types/partner.types";

const getPartnerList = async (params:PartnerPageRequest) => {
    return await getApi('/api/admin/partner',params);
}

export default {
    getPartnerList
}