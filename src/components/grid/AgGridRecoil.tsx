import type { GridApi, GridReadyEvent } from "ag-grid-community";
import { gridState } from "@/states/atoms/gridState";
import { gridDataQuery } from "@/states/selectors/gridSelector";
import type { ApiAgGridRecoilProps, SortModel } from "@/types/grid.types";
import { AgGridReact } from "ag-grid-react";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import { useRef } from "react";

export function AgGridRecoil<T>({ gridKey, columnDefs }: ApiAgGridRecoilProps<T>) {
    const gridApiRef = useRef<GridApi | null>(null);
    const [state, setState] = useRecoilState(gridState(gridKey));
    const resultLoadable = useRecoilValueLoadable(gridDataQuery(gridKey));
    console.log("현재 resultLoadable:", resultLoadable)

    const totalCount = resultLoadable.state === "hasValue" ? resultLoadable.contents.pageInfo.totCnt : 0;
    const totalPages = resultLoadable.state === "hasValue" ? resultLoadable.contents.pageInfo.totPageCnt : 0;
    const rowData = resultLoadable.state === "hasValue" ? resultLoadable.contents.list : [];
    // const totalPages = Math.ceil(totalCount / state.pageSize);

    const onSortChanged = (sortModel: SortModel) => {
        setState(prev => ({ ...prev, sortModel, page: 1 }));
    };

    const onGridReady = (params: GridReadyEvent) => {
        gridApiRef.current = params.api;
    };

    return (
        <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 5 }}>
                <select 
                    className="form-control input-sm"
                    style={{ width: 80 }}
                    value={state.pageSize}
                    onChange={e => setState({ ...state, page: 1, pageSize: Number(e.target.value) })}
                    >
                    {[30, 50, 100].map(size => (
                        <option key={size} value={size}>{size}</option>
                    ))}
                </select>
                <div>총 {totalCount}건</div>
            </div>
            <div className="ag-theme-bootstrap" style={{ height: 550, width: "100%" }}>
                <AgGridReact
                    onGridReady={onGridReady}
                    theme="legacy" // 레거시 테마 사용 alpine이 기본
                    rowData={rowData}
                    columnDefs={columnDefs as any}
                    defaultColDef={{ resizable: true, sortable: false }}
                    suppressPaginationPanel={true}
                    onSortChanged={e => {
                        const sortModel = (e.api as any).getSortModel() as SortModel;
                        onSortChanged(sortModel);
                    }}
                    loading={resultLoadable.state === "loading"}
                    noRowsOverlayComponentParams={{
                        noRowsMessageFunc: () => '검색 결과가 없습니다.'
                    }}
                />
            </div>

            <div style={{ width: "100%", display: "flex", justifyContent: "center", marginTop: 12 }}>
                <ul className="pagination">
                    <li className={`paginate_button previous ${state.page === 1 ? "disabled" : ""}`}>
                        <a href="#" onClick={e => { e.preventDefault(); if(state.page > 1) setState(prev => ({ ...prev, page: prev.page - 1 })); }}>Previous</a>
                    </li>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(pageNum => (
                        <li key={pageNum} className={`paginate_button ${state.page === pageNum ? "active" : ""}`}>
                        <a href="#" onClick={e => { e.preventDefault(); setState(prev => ({ ...prev, page: pageNum })); }}>{pageNum}</a>
                        </li>
                    ))}
                    <li className={`paginate_button next ${state.page === totalPages ? "disabled" : ""}`}>
                        <a href="#" onClick={e => { e.preventDefault(); if(state.page < totalPages) setState(prev => ({ ...prev, page: prev.page + 1 })); }}>Next</a>
                    </li>
                </ul>
            </div>
        </div>  
    );
}