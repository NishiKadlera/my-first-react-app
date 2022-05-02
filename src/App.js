import logo from "./assets/react.jpg";
import "./App.css";
import Functioncomponent from "./components/Functioncomponent";
import ClassCompBasic from "./components/classcomponent";
import Details from "./components/nestedcomp";
import emp from "./Data/EmpDetails.json";
import Comp from "./components/Comp";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 id="react">
          <img></img> REACT
        </h1>
        <br></br>
        <br></br>
        <br></br>
        <img src={logo} className="App-logo" alt="logo" />
        <br></br>
        <br></br>
        <br></br>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello Everyone! Welcome to React.
        </a>
      </header>

      <div className="wrapper">
        <h1>Welcome to Functional Component</h1>
        <Functioncomponent />
        <h1>Welcome to className Component</h1>
        <ClassCompBasic />
        <h1>Welcome to Nested component</h1>
        <Details />
        <h1>Welcome to Comp</h1>
        <Comp></Comp>
        <h3>List of Employees</h3>
        <hr></hr>
        {/* <table className="table">
          <thead>
           <tr>
             <th>Photo</th>
             <th>ID</th>
             <th>Name</th>
             <th>Designation</th>
             <th>Age</th>
             <th>Score</th>
          </tr>

          </thead>

        </table> */}
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <h3>Photo</h3>
            </div>
            <div className="col-md-2">
              <h3>ID</h3>
            </div>
            <div className="col-md-2">
              <h3>Name</h3>
            </div>
            <div className="col-md-2">
              <h3>Designation</h3>
            </div>
            <div className="col-md-2">
              <h3>Age</h3>
            </div>
            <div className="col-md-2">
              <h3>Score</h3>
            </div>
          </div>
        </div>
        <hr></hr>
        {emp.map((record, i) => (
          <div key={i}>
            {/* <img src={record.path}  /> */}
            <div className="container">
              <div className="row">
                <div className="col-md-2">
                  <img src={record.icon} width="50px" height="50px" />
                </div>
                <br></br>
                <div className="col-md-2">{record.id}</div>
                <div className="col-md-2">{record.Name}</div>
                <div className="col-md-2">{record.Designation}</div>
                <div className="col-md-2">{record.Age}</div>
                <div className="col-md-2">{record.Score}</div>
              </div>
              <hr></hr>
            </div>

            {/* <table className="table">
              
              <tbody> 
                <tr>
                  <td><img src={record.icon} width="30px" height="30px"/> </td>
                  <td>{record.id}</td>
                  <td>{record.Name}</td>
                  <td>{record.Designation}</td>
                  <td>{record.Age}</td>
                  <td>{record.Score}</td>
                </tr>
              </tbody>
          
            </table> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
