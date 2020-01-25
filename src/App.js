import React, { useState } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Person from "./Person/Person";

const app = props => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [personState, setPersopnState] = useState({
    persons: [
      { name: "Takuya", age: 26 },
      { name: "Akiko", age: 25 }
    ]
  });

  const swithNameHandler = () => {
    setPersopnState({
      persons: [{ name: "Akiko", age: 25 }]
    });
  };

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
  return (
    <div className="App">
      <h1>Hi,there!</h1>
      <button onClick={swithNameHandler}>Swith Name</button>
      <Person
        name={personState.persons[0].name}
        age={personState.persons[0].age}
      >
        My Hobbies : Nothing
      </Person>
    </div>
  );
};
export default app;

// state = {
//   persons: [{ name: "Takuya", age: 26 }]
// };
