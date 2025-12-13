export interface PageRequest {
    page : number
    pageSize : number;   
}

export interface PageResponse<T> {
    pageInfo: PageInfo;
    list: T[];
}

export interface PageInfo {
    page: number;
    pageSize: number;
    totCnt: number;
    totPageCnt: number;
}