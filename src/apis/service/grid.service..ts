import type { GridState } from "@/types/grid.types";
import { getApi } from "../common/api";

export const fetchGridData = async (
    gridKey: string,
    params: GridState & { sortQuery?: string }
) => {
    // console.log("fetchGridData 호출...", gridKey, params);
    const { page, pageSize, searchParams, sortQuery } = params;
    const query = {
        page: String(page),
        size: String(pageSize),
        sort: sortQuery || '',
        ...searchParams,
    }

    console.log("쿼리스트링:", query);
    console.log("API 경로:", `/api/admin/${gridKey}?${query}`);

    const res = await getApi(`/api/admin/${gridKey}`, query);
    return await res.data;
};

// export const fetchGridData = async (
//     gridKey: string,
//     params: GridState & { sortQuery?: string }
// ) => {
//     const { page, pageSize, searchParams, sortQuery } = params;
//     const query = new URLSearchParams({
//         page: String(page),
//         size: String(pageSize),
//         sort: sortQuery || '',
//         ...searchParams,
//     }).toString();

//     const res = await fetch(`/api/admin/${gridKey}?${query}`);
//     return await res.json();
// };



