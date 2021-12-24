import {Route, Routes} from "react-router-dom";
import HomeLayout from "./components/layout/HomeLayout";
import PortalLayout from "./components/layout/PortalLayout";

export default function App() {
    return (
        <Routes>
            <Route path={'/'} element={<PortalLayout/>}>
                <Route index element={<h1>Index</h1>}/>
                <Route path={'portal'} element={<h1>Portal</h1>}/>
            </Route>
            <Route path={'/home'} element={<HomeLayout/>}>
                <Route path={'menu1'} element={<div>Home Menu1</div>}/>
                <Route path={'menu2'} element={<div>Home Menu2</div>}/>
            </Route>
        </Routes>
    );
}
