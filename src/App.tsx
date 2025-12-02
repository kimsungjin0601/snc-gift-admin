import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminLayout from './layouts/AdminLayout'
import DataTables from './pages/DataTables'
import Login from './pages/Login'
import DataGrid from './pages/DataGrid'

import { ModuleRegistry, AllCommunityModule } from 'ag-grid-community';

// AG Grid의 기본 구조 CSS (필수)
import 'ag-grid-community/styles/ag-grid.css'; 

// 선택한 테마 CSS (예: alpine 테마)
import 'ag-grid-community/styles/ag-theme-alpine.css';

// 커스텀 테마 CSS
import "@assets/css/ag-theme-bootstrap.css";

ModuleRegistry.registerModules([ AllCommunityModule ]);

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/data/table" element={<AdminLayout><DataTables /></AdminLayout>}/>
        <Route path="/data/grid" element={<AdminLayout><DataGrid /></AdminLayout>}/>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
