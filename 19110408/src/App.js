import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './Pages/Home';
import UpdateFrom from './Pages/UpdateFrom';
import CreateFrom from './Pages/CreateFrom';
import View from './Pages/View';
function App() {
  return (
    <Router>
        <Routes>/blog/delete
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/createForm' element={<CreateFrom></CreateFrom>}></Route>
          <Route path='/blog/:id/updateFrom' element={<UpdateFrom></UpdateFrom>}></Route>
          <Route path='/blog/:id' element={<View></View>}></Route>
        </Routes>
    </Router>
    );
}

export default App;
