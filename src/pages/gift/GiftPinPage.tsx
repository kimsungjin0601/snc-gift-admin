import { AgGridReact } from "ag-grid-react";
import { useState } from "react";
import Header from "@/components/layer/Header";

const GiftPinPage = () => {
    const [fromDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("");
    const [productType, setProductType] = useState("");
    const [keyword, setKeyword] = useState("");

    const handleSearch = () => {
        console.log("검색조건:");
        console.log({ fromDate, toDate, productType, keyword });
    };

    const [columnDefs] = useState([
        { field: 'make', headerName: '제조사', sortable: false },
        { field: 'model', headerName: '모델명', sortable: false },
        { field: 'price', headerName: '가격', sortable: false, filter: false },
    ])

    const [rowData] = useState([
        { make: 'Toyota', model: 'Celica', price: 35000 },
        { make: 'Ford', model: 'Mondeo', price: 32000 },
        { make: 'Porsche', model: 'Boxster', price: 72000 },
        // 실제 데이터는 API 호출을 통해 가져오는 경우가 일반적입니다.
    ]);

    return (
        <>
            <Header
                title="Data Tables"
                breadcrumbs={[
                    { label: "Home", path: "/" },
                    { label: "가상핀" },
                    { label: "가상핀 거래조회" },
                ]}
            />

            <div className="wrapper wrapper-content">

                {/* 🔍 검색조건 영역 */}
                <div className="ibox">
                    {/* <div className="ibox-title">
                        <h5>검색 조건</h5>
                    </div> */}

                    <div className="ibox-content">

                        {/* ==== 검색 조건 1줄 라인 ==== */}
                        <div
                            style={{
                                display: "flex",
                                alignItems: "flex-end",
                                gap: "12px",
                                flexWrap: "wrap",       // 화면 작으면 자동 줄바꿈
                            }}
                        >
                            {/* From */}
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                {/* <label>From</label> */}
                                <input
                                    type="date"
                                    className="form-control input-sm"
                                    value={fromDate}
                                    onChange={(e) => setFromDate(e.target.value)}
                                    style={{ width: "120px" }}
                                />
                            </div>

                            {/* To */}
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                {/* <label>To</label> */}
                                <input
                                    type="date"
                                    className="form-control input-sm"
                                    value={toDate}
                                    onChange={(e) => setToDate(e.target.value)}
                                    style={{ width: "120px" }}
                                />
                            </div>

                            {/* Select Box */}
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                {/* <label>상품 유형</label> */}
                                <select
                                    className="form-control input-sm"
                                    value={productType}
                                    onChange={(e) => setProductType(e.target.value)}
                                    style={{ width: "140px" }}
                                >
                                    <option value="">전체</option>
                                    <option value="type1">상품권</option>
                                    <option value="type2">디지털 코드</option>
                                    <option value="type3">전자쿠폰</option>
                                </select>
                            </div>

                            {/* Keyword */}
                            <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                                {/* <label>검색어</label> */}
                                <input
                                    type="text"
                                    className="form-control input-sm"
                                    placeholder="검색어 입력"
                                    value={keyword}
                                    onChange={(e) => setKeyword(e.target.value)}
                                />
                            </div>

                            {/* Search Button */}
                            <div style={{ display: "flex", alignItems: "flex-end" }}>
                                <button className="btn btn-primary btn-sm" onClick={handleSearch}>
                                    <i className="fa fa-search"></i> 검색
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 📊 데이터 테이블 */}
                <div className="ibox">
                    <div className="ibox-title">
                        <h5>가상핀 거래 목록</h5>

                        {/* 오른쪽 버튼 영역 */}
                        <div className="ibox-tools">
                            {/* <button
                                className="btn btn-success btn-xs"
                                style={{ marginRight: "5px" }}   // 버튼 사이 여백
                                onClick={() => console.log("등록 버튼 클릭")}
                            >
                                <i className="fa fa-plus"></i> 등록
                            </button> */}
                            <button
                                className="btn btn-primary btn-xs"
                                onClick={() => console.log("엑셀 다운로드")}
                            >
                                <i className="fa fa-file-excel-o"></i> Excel
                            </button>
                        </div>
                    </div>

                    <div className="ibox-content">
                        <div style={{display:"flex", justifyContent: "space-between", alignItems: "center"}}>
                            <select name="DataTables_Table_0_length" aria-controls="DataTables_Table_0" className="form-control input-sm" style={{width:80, marginBottom:5}}>
                                <option value="10">10</option>
                                <option value="25">25</option>
                                <option value="50">50</option>
                                <option value="100">100</option>
                            </select>
                            <div>총 10건</div>
                        </div>
                        <div 
                            className="ag-theme-bootstrap" // 테마 클래스 적용 (ag-theme-alpine, ag-theme-bootstrap)
                            style={{ height: 550, width: "100%" }} // 그리드 컨테이너 크기 지정
                            >
                            <AgGridReact
                                theme="legacy" // 레거시 테마 사용 alpine이 기본
                                suppressPaginationPanel={true}
                                rowData={rowData} // 행 데이터
                                columnDefs={columnDefs as any} // 컬럼 정의
                                defaultColDef={{ // 모든 컬럼에 적용할 기본 설정
                                    resizable: true, // 컬럼 크기 조절 허용
                                }}
                                pagination={true}
                                paginationPageSize={20}
                                // 기타 옵션 (예: rowSelection="multiple" 등)
                            />
                        </div>

                        <div style={{ width: "100%", display: "flex", justifyContent: "center"}}>
                            <ul className="pagination">
                                <li className="paginate_button previous" id="DataTables_Table_0_previous">
                                    <a href="#" aria-controls="DataTables_Table_0" data-dt-idx="0">Previous</a>
                                </li>
                                <li className="paginate_button ">
                                    <a href="#" aria-controls="DataTables_Table_0" data-dt-idx="1">1</a>
                                </li>
                                <li className="paginate_button ">
                                    <a href="#" aria-controls="DataTables_Table_0" data-dt-idx="2">2</a>
                                </li>
                                <li className="paginate_button active">
                                    <a href="#" aria-controls="DataTables_Table_0" data-dt-idx="3">3</a>
                                </li>
                                <li className="paginate_button next disabled" id="DataTables_Table_0_next">
                                    <a href="#" aria-controls="DataTables_Table_0" data-dt-idx="4">Next</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default GiftPinPage;
