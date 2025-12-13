import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminLayout from './layouts/AdminLayout'
import DataTables from './pages/DataTables'
import SignIn from './pages/auth/signIn'
import DataGrid from './pages/DataGrid'

import { ModuleRegistry, AllCommunityModule } from 'ag-grid-community';

// AG Grid의 기본 구조 CSS (필수)
import 'ag-grid-community/styles/ag-grid.css'; 

// 선택한 테마 CSS (예: alpine 테마)
import 'ag-grid-community/styles/ag-theme-alpine.css';

// 커스텀 테마 CSS
import "@assets/css/ag-theme-bootstrap.css";
import { RecoilRoot } from 'recoil'
import ScrollToTop from './components/scroll/ScrollToTop'
import { PopupProvider } from './components/popup/PopupContext'

import PublicRoute from './components/rount/PublicRoute'
import { AuthProvider } from './components/rount/AuthProvider'
import AuthRoute from './components/rount/AuthRoute'
import BlacklistPage from './pages/member/BlacklistPage'
import GiftPinPage from './pages/gift/GiftPinPage'
import GiftPinHighPage from './pages/gift/GiftPinHighPage'
import PointPage from './pages/point/PointPage'
import PointAgentPage from './pages/point/PointAgentPage'
import PointDayPage from './pages/point/PointDayPage'
import PointAgentBeforePage from './pages/point/PointAgentBeforePage'
import PointDayBeforePage from './pages/point/PointDayBeforePage'
import OrderPage from './pages/order/OrderPage'
import PartnerPage from './pages/partner/PartnerPage'

ModuleRegistry.registerModules([ AllCommunityModule ]);

const MainApp = () => {   
    return (
        <Routes>
            <Route path="/sign-in" element={<PublicRoute><SignIn/></PublicRoute>}></Route>

            <Route element={<AuthRoute><AdminLayout /></AuthRoute>}>
                <Route index path="/" element={<PartnerPage />}></Route>
                <Route path="/partner" element={<PartnerPage/>}></Route>
                <Route path="/blacklist" element={<BlacklistPage/>}></Route>
                <Route path="/gift-pin" element={<GiftPinPage/>}></Route>
                <Route path="/gift-pin-high" element={<GiftPinHighPage/>}></Route>
                <Route path="/point" element={<PointPage/>}></Route>
                <Route path="/point-agent" element={<PointAgentPage/>}></Route>
                <Route path="/point-day" element={<PointDayPage/>}></Route>
                <Route path="/point-agent/before" element={<PointAgentBeforePage/>}></Route>
                <Route path="/point-day/before" element={<PointDayBeforePage/>}></Route>
                <Route path="/order" element={<OrderPage/>}></Route>

                <Route path="/data/table" element={<DataTables />}></Route>
                <Route path="/data/grid" element={<DataGrid />}></Route>
            </Route>
        </Routes>
    )
}

const App = () => {
    return (
        <RecoilRoot>
            <BrowserRouter>
                <ScrollToTop /> 
                <PopupProvider>  
                    <AuthProvider>
                        <MainApp />    
                    </AuthProvider>                                                        
                </PopupProvider>                      
            </BrowserRouter>
        </RecoilRoot>
    )
}

export default App
