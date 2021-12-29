import {Navigate, Route, Routes} from "react-router-dom";
import {WorkbenchLayout} from "./components/layout/WorkbenchLayout";
import {PortalLayout} from "./components/layout/PortalLayout";
import {PortalPage} from "./pages/portal-page/PortalPage";

export default function App() {
    return (
        <Routes>
            <Route path={'/'} element={<PortalLayout/>}>
                <Route index element={<PortalPage/>}/>
            </Route>
            <Route path={'/workbench'} element={<WorkbenchLayout/>}>
                <Route index element={<Navigate to='menu1'/>}/>
                <Route path={'menu1'} element={<div>Home Menu1</div>}/>
                <Route path={'menu2'} element={<div>Home Menu2</div>}/>
                <Route path={'m2'} element={<Navigate replace to='/workbench/menu2'/>}/>
            </Route>
        </Routes>
    );
}
