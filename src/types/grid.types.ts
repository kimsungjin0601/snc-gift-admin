import type { ColDef,  SortModelItem} from "ag-grid-community";

export type SortModel = SortModelItem[]; // Alias 정의

export interface GridState {
    page: number;
    pageSize: number;
    sortModel?: SortModel;
    searchParams?: Record<string, any>;
}

export interface ApiAgGridRecoilProps<T> {
    gridKey: string;
    columnDefs: ColDef<T>[];
}