
import { loginCheckState, logoutState } from "@/states/atoms/loginState";
import { type User, userState } from "@/states/atoms/userState";
import { userInfo } from "@/states/selectors/userSelector";
import { createContext, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValueLoadable } from "recoil";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useRecoilState(userState)
    // const setSendbirdConnect = useSetRecoilState(sendbirdState)
    const loginUser = useRecoilValueLoadable(userInfo)
    const [isLoginCheck] = useRecoilState(loginCheckState);
    const [, setIsLogout] = useRecoilState(logoutState);
    const navigate = useNavigate()
    
    useEffect(() => {
        // const unsubscribe = auth.onIdTokenChanged((user) => {
        //     // console.log('Token changed:', user);
        //     if (user) {
        //         user.getIdToken().then((idToken) => {
        //             // console.log('isLoginCheck ==== ',isLoginCheck)
        //             if(isLoginCheck){
        //                 localStorage.setItem('token', idToken);
        //             } else {
        //                 sessionStorage.setItem('token', idToken);
        //             }                    
        //         })
        //     }
        // })
        // return () => unsubscribe()
    }, [isLoginCheck, setUser]);

    // useEffect(() => {
    //     // Fetch user data and set it in Recoil state
    //     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    //         if(currentUser){
    //              if(!user){
    //                 if(loginUser.contents){
    //                     loginUser.contents.then((data: User)=>{
    //                         setUser(data);
    //                     })        
    //                 } else {
    //                     setUser({
    //                         userId: currentUser.uid,
    //                         email: currentUser.email,
    //                         userName: currentUser.displayName,
    //                     });
    //                 }
    //             }
    //             // console.log('로그인 상태 :', user)
    //         } else {
    //             // console.log('로그아웃 Action', isLogout)
    //             // console.log('isLoginCheck = ', isLoginCheck)
    //             // console.log('isLogout = ', isLogout)
    //             //if(!isLoginCheck || isLogout){
    //                 // console.log('로그아웃 상태', user)
                    
    //                 //disconnectSendbird(setSendbirdConnect) // sendbird 연결 해제
                    
    //                 setUser(null)
    //                 setIsLogout(false)
    //                 localStorage.removeItem("token")        // 로컬 토큰 삭제
    //                 localStorage.removeItem("sbt")

    //                 // 팝업창 한꺼번에 전부 닫기
    //                 navigate('/sign-in?action=')    // 로그인 페이지로 이동
    //             //}
    //         }
    //     });
  
    //     return () => unsubscribe();
    // }, [setUser]);
  
    return (
        <AuthContext.Provider value={{ user, loginUser }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)

