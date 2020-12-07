import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import "./App.css";

// for deleting the last item added to the list if wanted
// const removeLastItem = (list) =>
//   list.filter((_, index) => index !== list.length - 1);
// const deleteItem = (list, itemKey) => list.filter((item) => item.key !== itemKey)

//currying
const deleteItem = (itemKey) => (list) =>
  list.filter((item) => item.key !== itemKey);

const addItem = (itemData) => (list) => 
  list.concat(itemData)

function ShoppingList(props) {
  const [list, setList] = React.useState([]);
  const [itemName, setItemName] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    // setList((previousListState) =>
    //   previousListState.concat({ key: uuid(), name: itemName })
    // );
    setList(addItem({ key: uuid(), name: itemName }));
    setItemName("");
  }
  

  return (
    <div className= "lists">
      <h1>{props.listName}</h1>
      <form>
        <label>
          Item Name
          <input
            type="text"
            value={itemName}
            onChange={(e) => setItemName(e.target.value.toUpperCase())}
          />
        </label>
        <button className="inputButton" onClick={handleSubmit}>Add Item</button>
      </form>

      {/* delete the last item from the list */}
      {/* <button className="inputButton" onClick={() => setList(removeLastItem)}>Delete Last Item</button> */}
      
      <ul className="ShoppingList-list">
        {list.map((listItem) => {
          return (
            <li key={listItem.key} className="ShoppingList-item">
              {listItem.name}{" "}
              {/* <button onClick={() => setList(removeLastItem)}>X</button> */}
              <button className="deleteItem" onClick={() => setList(deleteItem(listItem.key))}>🗑️</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function App() {
  const [list, setList] = useState([]);

  return (
    <div className="main-div">
      <ShoppingList listName="Shopping List" />
    </div>
  );
}

export default App;
