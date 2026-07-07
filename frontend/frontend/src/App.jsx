import {BrowseRouter,Routes,Route} from "react-router-dom";
import Login from "/pages/Login";
import Register from "/pages/Register";
import DashBoard from "/pages/Dashboard";
function App(){
    return(
        <BrowseRouter>
        <Routes>
            <Route path="/" element={<Login/>}
            />
             <Route path="/register" element={<Register/>}
            />
             <Route path="/dashboard" element={<DashBoard/>}
            />

        </Routes>
        </BrowseRouter>
    )}
    export default App;