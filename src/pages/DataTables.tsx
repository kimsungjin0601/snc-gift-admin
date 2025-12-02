import PageHeading from "../components/layer/Header";
import { useState } from "react";

const DataTables = () => {
    const [fromDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("");
    const [productType, setProductType] = useState("");
    const [keyword, setKeyword] = useState("");

    const handleSearch = () => {
        console.log("검색조건:");
        console.log({ fromDate, toDate, productType, keyword });
    };

    return (
        <>
            <PageHeading
                title="Data Tables"
                breadcrumbs={[
                    { label: "Home", path: "/" },
                    { label: "Tables" },
                    { label: "Data Tables" },
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
                        <h5>Basic Data Table</h5>

                        {/* 오른쪽 버튼 영역 */}
                        <div className="ibox-tools">
                            <button
                                className="btn btn-success btn-xs"
                                style={{ marginRight: "5px" }}   // 버튼 사이 여백
                                onClick={() => console.log("등록 버튼 클릭")}
                            >
                                <i className="fa fa-plus"></i> 등록
                            </button>
                            <button
                                className="btn btn-primary btn-xs"
                                onClick={() => console.log("엑셀 다운로드")}
                            >
                                <i className="fa fa-file-excel-o"></i> Excel
                            </button>
                        </div>
                    </div>

                    <div className="ibox-content">
                        <div className="table-responsive">
                            <table className="table table-striped table-bordered">
                                <thead>
                                    <tr>
                                        <th>Rendering engine</th>
                                        <th>Browser</th>
                                        <th>Platform(s)</th>
                                        <th>Engine version</th>
                                        <th>CSS grade</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr className="gradeX">
                                        <td>Trident</td>
                                        <td>Internet Explorer 4.0</td>
                                        <td>Win 95+</td>
                                        <td className="center">4</td>
                                        <td className="center">X</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div style={{ width: "100%", display: "flex", justifyContent: "center", marginTop: "-20px" }}>
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

export default DataTables;
