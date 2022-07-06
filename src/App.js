import React, {useState} from 'react'
import './App.css';

function App() {
  const [list, setList] = useState([]);
  const [str, setStr] = useState("");

  function handleAddItem() {
    const newList = [...list, {title: str}];
    setList(newList)
    setStr('')
  }
  function handleRemoveItem(index) {
    const newList = [];
    for(let i =0; i< list.length; i++){
      if(index != i){
        newList.push(list[i]);
      }
    }
    setList(newList);
  }
  return (
    <div className="App">
      <h1>This is my grocery list</h1>
      <div className="inputItem">
        <input type="text" value={str} onChange={(event) => setStr(event.target.value)}></input>
        <input type="button" value="Add Item" onClick={() => handleAddItem()}></input>
      </div>
      <div className="listOfItems">
        {list.map((item, index) => {
          return (
            <div className="removeItem">
              <p>{item.title}<input className="removeMe" type="button" value="Delete Item" onClick={() => handleRemoveItem(index)}></input></p>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
