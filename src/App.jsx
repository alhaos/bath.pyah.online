import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AdminPanel from "./Pages/AdminPanel/AdminPanel.jsx";
import UnderConstruction from "./Pages/UnderConstruction/UnderConstruction.jsx";
import Home from "./Pages/Home/Home.jsx";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<UnderConstruction/>}/>
                    <Route path={"home"} element={<Home/>}/>
                    <Route path={"admin-panel"} element={<AdminPanel/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
