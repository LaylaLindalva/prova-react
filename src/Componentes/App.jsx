import {BrowserRouter, Routes, Route} from "react-router-dom"
import ControleLimpeza from "./ControleDeLimpeza"
import Header from "./Header"
import Home from "./Home"


const App = ()=>{
    return( 
    <BrowserRouter>
    <Header/>
    <Routes>
        <Route  path="/" element={<Home/>}/>
        <Route  path="/ControleLimpeza" element={<ControleLimpeza/>} />
    </Routes>
    </BrowserRouter>
    )
}
export default App;