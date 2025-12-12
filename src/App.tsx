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
import AdminPage from './pages/admin/AdminPage'
import BlacklistPage from './pages/member/BlacklistPage'
import GiftPinPage from './pages/gift/GiftPinPage'
import GiftPinHighPage from './pages/gift/GiftPinHighPage'
import PointPage from './pages/point/PointPage'
import PointAgentPage from './pages/point/PointAgentPage'
import PointDayPage from './pages/point/PointDayPage'
import PointAgentBeforePage from './pages/point/PointAgentBeforePage'
import PointDayBeforePage from './pages/point/PointDayBeforePage'
import OrderPage from './pages/order/OrderPage'

ModuleRegistry.registerModules([ AllCommunityModule ]);

const MainApp = () => {   
    return (
        <Routes>
            <Route index path="/" element={<AuthRoute><AdminLayout><AdminPage /></AdminLayout></AuthRoute>}></Route>
            <Route path="/sign-in" element={<PublicRoute><SignIn/></PublicRoute>}></Route>
            <Route path="/partner" element={<AuthRoute><AdminLayout><AdminPage/></AdminLayout></AuthRoute>}></Route>
            <Route path="/blacklist" element={<AuthRoute><AdminLayout><BlacklistPage/></AdminLayout></AuthRoute>}></Route>
            <Route path="/gift-pin" element={<AuthRoute><AdminLayout><GiftPinPage/></AdminLayout></AuthRoute>}></Route>
            <Route path="/gift-pin-high" element={<AuthRoute><AdminLayout><GiftPinHighPage/></AdminLayout></AuthRoute>}></Route>
            <Route path="/point" element={<AuthRoute><AdminLayout><PointPage/></AdminLayout></AuthRoute>}></Route>
            <Route path="/point-agent" element={<AuthRoute><AdminLayout><PointAgentPage/></AdminLayout></AuthRoute>}></Route>
            <Route path="/point-day" element={<AuthRoute><AdminLayout><PointDayPage/></AdminLayout></AuthRoute>}></Route>
            <Route path="/point-agent/before" element={<AuthRoute><AdminLayout><PointAgentBeforePage/></AdminLayout></AuthRoute>}></Route>
            <Route path="/point-day/before" element={<AuthRoute><AdminLayout><PointDayBeforePage/></AdminLayout></AuthRoute>}></Route>
            <Route path="/order" element={<AuthRoute><AdminLayout><OrderPage/></AdminLayout></AuthRoute>}></Route>

            <Route path="/data/table" element={<AuthRoute><AdminLayout><DataTables /></AdminLayout></AuthRoute>}></Route>
            <Route path="/data/grid" element={<AuthRoute><AdminLayout><DataGrid /></AdminLayout></AuthRoute>}></Route>
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
