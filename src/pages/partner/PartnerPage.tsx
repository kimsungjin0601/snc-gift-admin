import { useEffect, useState } from "react";
import Header from "@/components/layer/Header";
import { AgGridRecoil } from "@/components/grid/AgGridRecoil";
import type { ColDef } from "ag-grid-community";
import { useSetRecoilState } from "recoil";
import { gridState } from "@/states/atoms/gridState";
import DateUtil from "@/utils/DateUtil";

const PartnerPage = () => {
    const gridKey:string = "partner";
    const setGridState = useSetRecoilState(gridState(gridKey));
    const [fromDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("");
    const [keyword, setKeyword] = useState("");

    useEffect(() => {
        handleSearch();
    }, []);

    const handleSearch = () => {
        const params = { fromDate, toDate, keyword };
        setGridState(prev => ({
            ...prev,
            page: 1,              
            searchParams: params, 
        }));
    };

    const DetailButton = ({ data }: any) => {
        const handleClick = (e: React.MouseEvent) => {
            e.stopPropagation();
            console.log("상세 버튼 클릭:", data);
        };
        return (
            <div style={{ display: "flex", gap: 8, justifyContent: "center" }}
                onClick={(e) => e.stopPropagation()} onMouseDown={(e) => e.stopPropagation()} >
                <button onClick={handleClick} className="btn btn-sm btn-success">상세</button>
            </div>
        );
    };

    const UpdateButton = ({ data }: any) => {
        const handleClick = (e: React.MouseEvent) => {
            e.stopPropagation();
            console.log("정보 수정 버튼 클릭:", data);
        };
        return (
            <div style={{ display: "flex", gap: 8, justifyContent: "center" }}
                onClick={(e) => e.stopPropagation()} onMouseDown={(e) => e.stopPropagation()} >
                <button onClick={handleClick} className="btn btn-sm btn-success">정보 수정</button>
            </div>
        );
    };

    const columnDefs: ColDef<any>[] = [
        { field: 'loginId', headerName: '아이디', width:130, sortable: false, cellStyle: { textAlign: "center" }, },
        { field: 'userName', headerName: '이름', width:150, sortable: false, cellStyle: { textAlign: "center" }, },
        { field: 'telegramId', headerName: '텔레그램 채널 ID', width:150, sortable: false },
        { field: 'partnerTypeName', headerName: '회원등급', width:100, sortable: false, cellStyle: { textAlign: "center" }, },
        { field: 'parentPartnerName', headerName: '본사', width:150, sortable: false, cellStyle: { textAlign: "center" }, },
        { field: 'ownPoint', headerName: '보유포인트', width:150, sortable: false, cellStyle: { textAlign: "right" }, },
        { field: 'charge', headerName: '수수료', width:150, sortable: false, cellStyle: { textAlign: "right" }, },
        { field: 'partnerNo', headerName: '배송기준일', width:100, sortable: false, cellStyle: { textAlign: "center" }, },
        { field: 'createdAt', headerName: '가입일', width:150, sortable: false, cellStyle: { textAlign: "center" }, 
                    valueFormatter: ({ value }) => DateUtil.formatDate(value)},
        { field: 'userStatusName', headerName: '가입상태', width:150, sortable: false, cellStyle: { textAlign: "center" }, },
        { field: 'price', headerName: '포인트', width:100, sortable: false, cellRenderer: DetailButton},
        { field: 'price', headerName: '포인트', width:100, sortable: false, cellRenderer: UpdateButton},
    ];

    return (
        <>
            <Header
                title="Data Tables"
                breadcrumbs={[{ label: "Home", path: "/" }, { label: "회원" }]}
            />
            <div className="wrapper wrapper-content">
                {/* 🔍 검색조건 영역 */}
                <div className="ibox">
                    <div className="ibox-content">
                        <div style={{display: "flex", alignItems: "flex-end", gap: "12px", flexWrap: "wrap"}}>
                            {/* From */}
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <input type="date" className="form-control input-sm" style={{ width: "120px" }}
                                    value={fromDate} onChange={(e) => setFromDate(e.target.value)} />
                            </div>
                            {/* To */}
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <input type="date" className="form-control input-sm" style={{ width: "120px" }}
                                    value={toDate} onChange={(e) => setToDate(e.target.value)} />
                            </div>
                            {/* Keyword */}
                            <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                                <input type="text" className="form-control input-sm" placeholder="검색어 입력"
                                    value={keyword} onChange={(e) => setKeyword(e.target.value)}
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
                        <h5>회원 목록</h5>
                        {/* 오른쪽 버튼 영역 */}
                        <div className="ibox-tools">
                            <button className="btn btn-success btn-xs" style={{ marginRight: "5px" }}
                                onClick={() => console.log("등록 버튼 클릭")} >
                                <i className="fa fa-plus"></i> 등록
                            </button>
                        </div>
                    </div>
                    <div className="ibox-content">
                        <AgGridRecoil gridKey={gridKey} columnDefs={columnDefs} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default PartnerPage;
