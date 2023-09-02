import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/NavBar";

import Home from "./screens/Home"
import Register from "./screens/Register"

import {ROUTES} from "./constants"

const Router = () => {
    return(
        <BrowserRouter>
        <Navbar/>
        <Routes>

        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.AUTH.REGISTER} element={<Register/>} />
        
        </Routes>
        </BrowserRouter>
    )
}
export default Router
