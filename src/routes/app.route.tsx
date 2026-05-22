import { Route, Routes } from "react-router-dom"
import Home from "../pages/home"

export default function AppRoutes() {
    return (
        <div>
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
        </div>
    )
}
