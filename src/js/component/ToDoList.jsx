import React, { useState } from "react";

const List = () => {
    const [items, setItems] = useState("");
    const [addToList, setAddToList] = useState([]);

    function addItemToList(e) {
        if (e.key === "Enter") {
            setAddToList(addToList.concat([items]));
            setItems("");
          }
    }
    
	return (
            <div className="list">
                <h1>To-Do List</h1>
                <ul>
                    <li><input value={items} type="text" className="form-control" placeholder="To-Do" onChange={(e) => {setItems(e.target.value)}} onKeyDown= {addItemToList}/></li>
                    {addToList.map ((a, index) => (<li>{a}{""}<button onClick={() => setAddToList(addToList.filter ((t, currentIndex) => index != currentIndex))}>X</button></li>))}
                </ul>
                <p>{addToList.length} items left</p>
            </div>
	);
};

export default List;