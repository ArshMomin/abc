import React from "react";
import List from "./List";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { firestore } from "../firebaseConfig";

const History = (props) => {
  function deleteAll() {
    alert("Are you sure!");
    props.input
      .filter((item) => item.isActive === false)
      .forEach((item) => {
        const docRef = doc(firestore, props.collectionRef.path, item.id);
        deleteDoc(docRef).then(() => {
          console.log("deleted");
        });
      });
  }

  function deleted(id) {
    const docRef = doc(firestore, props.collectionRef.path, id);
    deleteDoc(docRef).then(() => {
      console.log("deleted");
    });
  }

  function revertMessage({ id, ...restProps }) {
    // let dateNow = new Date();
    const docRef = doc(firestore, props.collectionRef.path, id);
    updateDoc(docRef, {
      ...restProps,
      isRevert: true,
      isActive: true,
    }).then(() => {
      console.log("Reverted");
    });
  }

  return (
    <div>
      <div className="history">
        <h1 className="container--heading">Delete Message History:</h1>
        {props.input
          .filter((item) => item.isActive === false)
          .map((dataObj) => {
            return (
              <List
                value={dataObj}
                key={dataObj.id}
                deleted={() => deleted(dataObj.id)}
                revertMessage={() => revertMessage(dataObj)}
              />
            );
          })}

        <button className="permanent" onClick={deleteAll}>
          Permanently Delete
        </button>
      </div>
    </div>
  );
};

export default History;
