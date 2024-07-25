import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from '../App'
import Main from '../components/Main'
import BigCard from '../components/BigCard'
import BChart from '../components/BChart';




const Router = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />}>
                        <Route index element={<Main />} />
                        <Route exact path="/" component={BigCard} />
                        <Route path="/bchart" element={<BChart />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Router