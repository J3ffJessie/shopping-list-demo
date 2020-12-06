import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import "./App.css";

const removeLastItem = (list) =>
  list.filter((_, index) => index !== list.length - 1);

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
      <button onClick={() => setList(removeLastItem)}>Delete Last Item</button>
      <ul className="ShoppingList-list">
        {list.map((listItem) => {
          return (
            <li key={listItem.key} className="ShoppingList-item">
              {listItem.name}{" "}
              {/* <button onClick={() => setList(removeLastItem)}>X</button> */}
              <button onClick={() => setList(deleteItem(listItem.key))}>X</button>
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
      <ShoppingList listName="First List for HEB" />

      <ShoppingList listName="Second List for Whole Foods" />
    </div>
  );
}

export default App;
