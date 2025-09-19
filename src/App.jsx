import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AdminPanel from "./Pages/AdminPanel/AdminPanel.jsx";
import Home from "./Pages/Home/Home.jsx";

function App() {
    return (
        <div className="app">
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home/>}/>
                    <Route path={"admin-panel"} element={<AdminPanel/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
