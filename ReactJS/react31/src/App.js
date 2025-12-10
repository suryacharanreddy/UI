import Routing from './Routing/Routing'
import {BrowserRouter as Rounter,Routes,Route} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"; 
import Home from './Routing/Components/Home';
import Contact from './Routing/Components/Contact';
import Login from './Routing/Components/Login'
let App =()=>{
    return <div>
                <Rounter>
                    <Routing/>
                    <Routes>
                        <Route path="/"  element={<Home/>}/>
                        <Route path="/home"  element={<Home/>}/>
                        <Route path="/contact"  element={<Contact/>}/>
                        <Route path="/login"  element={<Login/>}/>
                    </Routes>

                </Rounter>
            </div>
}
export default App;