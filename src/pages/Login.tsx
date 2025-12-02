const Login = () => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                background: "#f3f3f4",
            }}
        >
            <div className="loginscreen text-center animated fadeInDown">

                {/* 로고 또는 제목 */}
                <h2 style={{ fontWeight: 700, marginBottom: "25px" }}>
                    상품권 관리시스템
                </h2>

                <div
                    className="ibox-content"
                    style={{
                        padding: "30px",
                        background: "#ffffff",
                        borderRadius: "8px",
                        boxShadow: "0px 0px 15px rgba(0,0,0,0.07)",
                        width: "400px"  // 입력 박스 전체 가로폭 증가
                    }}
                >
                    <form className="m-t" role="form">
                        <div className="form-group">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Username"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Password"
                            />
                        </div>
                        <button
                            type="submit"
                            className="btn btn-primary block full-width m-b"
                            style={{ padding: "10px 0", fontSize: "15px"}}
                        >
                            Login
                        </button>
                    </form>
                </div>

                {/* Footer */}
                <p className="m-t" style={{ marginTop: "20px", color: "#777" }}>
                    <small>© 2025 상품권 관리 시스템</small>
                </p>
            </div>
        </div>
    );
};

export default Login;
