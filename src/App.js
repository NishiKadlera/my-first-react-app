import "./App.css";
import Functioncomponent from "./components/Functioncomponent";
import ClassCompBasic from "./components/Classcomponent";
import Details from "./components/nestedcomp";
import HomeCompBasic from "./components/HomeComponent";
import SCart from "./components/SCart";
import Employee from "./components/Employee"
import { BrowserRouter as Router, Route ,Link, Routes} from "react-router-dom";

function App() {
  return (

      <div className="wrapper">


      <div className="list">
  <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="Functioncomponent">Functioncomponent</Link></li>
    <li><Link to="ClassCompBasic">ClassComponent</Link></li>
    <li><Link to="Employee">EmpDetails</Link></li>
    <li><Link to="NestedComponent">NestedComponenet</Link></li>
    <li><Link to="Props">PropsConcept</Link></li>
    <li><Link to="useState">UseState</Link></li>

  </ul>
</div>
  <Routes>
  <Route exact path="/" element={<h1>REACT</h1>} />
    <Route exact path="Functioncomponent" element={<Functioncomponent />} />
    <Route exact path="ClassCompBasic" element={<ClassCompBasic />} />
    <Route exact path="Employee" element={<Employee />} />
    <Route exact path="NestedComponent" element={<Details />} />
    <Route exact path="Props" element={<HomeCompBasic name="Nischitha" Department="IT"/>} />
    <Route exact path="useState" element={<SCart />} />

  </Routes>
        
      
    </div>
  );
}

export default App;
