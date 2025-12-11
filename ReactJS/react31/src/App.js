import NavBar from './NavBar/NavBar';
import {BrowserRouter as Rounter,Routes,Route} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"; 
import Home from './ContactApp/Home';
import ContactApp from './ContactApp/ContactApp';
import ContactDetails from './ContactApp/ContactDetails';
let App =()=>{
    return <div>
                <Rounter>
                    <NavBar/>
                    <Routes>
                        <Route path="/"  element={<Home/>}/>
                        <Route path="/home"  element={<Home/>}/>
                        <Route path="/contactApp"  element={<ContactApp/>}/>
                        <Route path="/ContactDetails"  element={<ContactDetails/>}/>
                    </Routes>

                </Rounter>
            </div>
}
export default App;