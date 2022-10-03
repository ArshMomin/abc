import React, { useState } from "react";
import { addDoc } from "firebase/firestore";

const Header = (props) => {
  const [text, setText] = useState("");

  function handleChange(event) {
    setText(event.target.value);
  }

  const handleClick = () => {
    if (text.length > 0) {
      let dateNow = new Date();
      addDoc(props.collectionRef, {
        message: text,
        date: `${dateNow.toLocaleDateString()} ${dateNow.toLocaleTimeString()}`,
        readDate: ``,
        isActive: true,
        isRead: false,
        isRevert: false,
      }).then(() => {
        console.log("added successfully");
      });

      setText("");
    }
  };

  function onEnter(event) {
    if (event.key === "Enter") {
      if (text.length > 0) {
        let dateNow = new Date();
        addDoc(props.collectionRef, {
          message: text,
          date: `${dateNow.toLocaleDateString()} ${dateNow.toLocaleTimeString()}`,
          readDate: ``,
          isActive: true,
          isRead: false,
          isRevert: false,
        }).then(() => {
          console.log("added successfully");
        });
        setText("");
      }
    }
  }

  return (
    <div>
      <h1 className="todo--heading">Todo list</h1>
      <div className="container--input">
        <input
          onKeyPress={onEnter}
          className="todo--input"
          type="text"
          placeholder="Enter new Task"
          value={text}
          onChange={handleChange}
        />

        <button className="todo--btn" onClick={handleClick}>
          +
        </button>
      </div>
    </div>
  );
};

export default Header;
