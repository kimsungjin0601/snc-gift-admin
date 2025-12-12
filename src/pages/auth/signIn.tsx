import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { loginCheckState } from '@/states/atoms/loginState';
import { useRecoilState, useSetRecoilState } from "recoil";
import { userState } from "@/states/atoms/userState";
import signService from "@/apis/service/signService";
import TokenUtil from "@/utils/TokenUtil";

const SignIn = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const setUser = useSetRecoilState(userState)
    const [, setIsLoginCheck] = useRecoilState(loginCheckState)
    const [loginId, setLoginId] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        if(location.search){
            window.history.pushState({}, '', '/sign-in')
        } 
    }, []);

    const signIn = async (loginId:string, password:string) => {
        try {
            // 로그인 후 서버에 필요한 데이터 전송
            const response = await signService.signIn({loginId, password});
            TokenUtil.setAccessToken(response.data.accessToken);  // 토큰 저장
            console.log('로그인 성공 !!', response)
            
            // 로그인 성공 시 사용자 정보 가져오기
            const userResponse = await signService.getUserInfo();
            setUser(userResponse.data)  // Recoil 상태에 사용자 정보 저장
            setIsLoginCheck(true)   // 로그인 상태 업데이트

            // 로그인 성공시 홈으로 이동
            navigate('/')
        }
        catch (error) {
            console.log('로그인 실패 !!')
        }
    }

    const handleSingIn = () => {
        signIn(loginId, password);
    } 

    const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>): void => {
        if (e.key === "Enter") {    
            signIn(loginId, password);
        }
    }

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
                            <input type="text" className="form-control" placeholder="Username"
                                value={loginId} onChange={(e) => setLoginId(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" placeholder="Password"
                                value={password} onChange={(e) => setPassword(e.target.value) } 
                            />
                        </div>
                        <button type="button" className="btn btn-primary block full-width m-b" style={{ padding: "10px 0", fontSize: "15px"}}
                                onClick={handleSingIn} onKeyDown={handleKeyDown}>
                            로그인
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

export default SignIn;
