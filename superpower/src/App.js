import React, {useState} from "react";
import './App.css';

function App() {
const [name, setName] = useState('');
const [age, setAge] = useState(0);
const [height, setHeight] = useState(0);
const [superPower, setSuperPower] = useState('');
const [displayCharacter,setDisplayCharacter] = useState(false)

// const changeName = () => {
//   setSuperPower ('**Restricted**');
// };


  return (
    <div className="App">
      <h1>Hello React</h1>
      
      <div>
      <label>Name </label>
      <input type="text" style={{margin: 10}}onChange={(event) => { setName(event.target.value)}}></input>
      <label>Age </label>
      <input type="number" style={{margin: 10}} onChange={(event) => { setAge(event.target.value)}}></input>
      <label> Height </label>
      <input type="number" style={{margin: 10}} onChange={(event) => { setHeight(event.target.value)}}></input>
      <label>superPower </label>
      <input type="text" style={{margin: 10}} onChange={(event) => { setSuperPower(event.target.value)}}></input>
      </div>

      <button onClick={() => {setDisplayCharacter(true)}} > changeName </button>
     <div>
      <h1> Hero info</h1>
      {displayCharacter && (
        <ul>
          <li>{name}</li>
          <li>{age}</li>
          <li>{height}</li>
          <li>{superPower}</li>
          
        </ul>
      )}
      </div> 
    </div>
  );
}

export default App;
