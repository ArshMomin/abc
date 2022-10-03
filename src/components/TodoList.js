import React from "react";
import List from "./List";
import { updateDoc, doc } from "firebase/firestore";
import { firestore } from "../firebaseConfig";

export const TodoList = (props) => {
  function deleteItems({ id, ...restProps }) {
    // alert("are you sure?");
    const docRef = doc(firestore, props.collectionRef.path, id);
    updateDoc(docRef, { ...restProps, isActive: false }).then(() => {
      console.log("");
    });
  }

  return (
    <div>
      <div className="container--todoList">
        <div className="container--heading">
          {/* {props.input ? (
            <h1 className="container--heading">
              {props.input.length} Messages Available:
            </h1>
          ) : (
            <h1 className="container--heading">No Message Available: </h1>
          )} */}
          <h1>Message Available:</h1>
        </div>

        <ul>
          {props.input
            .filter((item) => item.isActive === true)
            .sort((a, b) => new Date(a.date) - new Date(b.date))
            .map((dataObj) => {
              return (
                <List
                  value={dataObj}
                  deleteItem={() => deleteItems(dataObj)}
                  readDate={() => props.readDate(dataObj)}
                  key={dataObj.id}
                />
              );
            })}
        </ul>
      </div>
    </div>
  );
};
