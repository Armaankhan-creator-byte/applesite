 import {BrowserRouter,Routes,Route} from "react-router-dom";
 import Store from "./components/Store";
 import Mac from "./components/Mac";
 import Ipad from "./components/Ipad";
import Navbar from "./Navbar";
 function App (){
    return(
        <>
<BrowserRouter>
<Navbar/>
<Routes>
    <Route path="/store" element={<Store/>}></Route>
    <Route path="/mac" element={<Mac/>}></Route>
    <Route path="/ipad" element={<Ipad/>}></Route>
    
</Routes>
</BrowserRouter>
        </>
    )
}
export default App