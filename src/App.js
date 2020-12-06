import React, { useState } from "react"
import "./App.css"





const removeLastItem = list => list.filter((_, index) => index !== list.length -1)

function ShoppingList(props) {
  const [list, setList] = React.useState([]);
  const [itemName, setItemName] = React.useState("");


  function handleSubmit(event) {
    event.preventDefault()

    setList((previousListState) => previousListState.concat(itemName))
    setItemName("")
  }

  
  return (
    <div>
      <h1>{props.listName}</h1>
      <form>
      <label>
        New Item Name
        <input
          type="text"
          value={itemName}
          onChange={(e) => setItemName(e.target.value.toUpperCase())}
        />
        </label>
        <button onClick={handleSubmit}>Add Item</button>
      </form>
        <button onClick={() => setList(removeLastItem)}>Delete Item</button>
      <ul className="ShoppingList-list">
        {list.map((listItem) => {
          return (
            <li key={listItem} className="ShoppingList-item">
              {listItem}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

function App() {
  const [list, setList] = useState([]);

  return (
    <div className="main-div">
      <ShoppingList listName="First List for HEB"/>
      
      <ShoppingList listName="Second List for Whole Foods"/>
      </div>)};
     

export default App;