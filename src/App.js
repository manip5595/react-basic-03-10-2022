// import logo from './logo.svg';
// import './App.css';

import FunctComp from './Components/FunctComp';
import ClassComp from './Components/ClassComp';





function App() {
  return (
    <div className="App">
     
     <h1>welcome</h1>
     <FunctComp name="react" duration="3 months" />
     <ClassComp location="bangalore" />
      
      
      
      {/* testing */}
       {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h2>welcome to react js </h2>
      </header>   */}


    </div>
  );
}

export default App;
