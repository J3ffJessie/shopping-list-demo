<<<<<<< main
import React, { useState } from "react"
import "./App.css"
=======
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
>>>>>>> origin/main

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
<<<<<<< main
  const [list, setList] = React.useState([]);
  const [itemName, setItemName] = React.useState("");
  const [list1, setList1] = useState([]);
  const [itemName1, setItemName1]= useState("");

  function handleAddItem() {
    setList((previousListState) => previousListState.concat(itemName))
    setItemName("")
  }
=======
  const [list, setList] = useState([]);
>>>>>>> origin/main

  function handleAddItem1() {
    setList1((previousListState) => previousListState.concat(itemName1))
    setItemName1("")
  }

  function handleDelete(i) {
   const newList = [...list]
   newList.splice(i, 1)
   setList(newList)
  }

  function handleDelete1(i) {
    const newList1 = [...list1]
    newList1.splice(i, 1)
    setList1(newList1)
   }

  return (
    <div className="main-div">
<<<<<<< main
      <ShoppingList
        listName="First List for HEB" list={list1} />
        <label>
        New Item Name
        <input
          type="text"
          value={itemName1}
          onChange={(e) => setItemName1(e.target.value.toUpperCase())}
        />
        </label>
        <button onClick={handleAddItem1}>Add Item</button>
        <button onClick={handleDelete1}>Delete Item</button>
      <ShoppingList listName="Second List for Whole Foods" list={list} />
      <label>
        New Item Name
        <input
          type="text"
          value={itemName}
          onChange={(e) => setItemName(e.target.value.toUpperCase())}
        />
      </label>
      <button onClick={handleAddItem}>Add Item</button>
      <button onClick={handleDelete}>Delete Item</button>
=======
      <ShoppingList listName="Shopping List" />
>>>>>>> origin/main
    </div>
  );
}

export default App;
