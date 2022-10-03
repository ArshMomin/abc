import React from "react";
import ReadMessage from "./ReadMessage";
import { updateDoc, doc } from "firebase/firestore";
import { firestore } from "../firebaseConfig";

const ReadList = (props) => {
  function deleteItems({ id, ...restProps }) {
    // alert("are you sure?");
    const docRef = doc(firestore, props.collectionRef.path, id);
    alert("are you sure");
    updateDoc(docRef, { ...restProps, isActive: false, isRead: false }).then(
      () => {
        console.log("deleted");
      }
    );
  }

  return (
    <div>
      <div className="readMsg">
        <h1 className="container--heading">Read Messages:</h1>
        {props.input
          .filter((item) => item.isActive === true && item.isRead === true)
          .sort((a, b) => new Date(a.date) - new Date(b.date))
          .map((dataObj) => {
            return (
              <ReadMessage
                value={dataObj}
                deleteItem={() => deleteItems(dataObj)}
                readDate={() => props.readDate(dataObj)}
                key={dataObj.id}
              />
            );
          })}
      </div>
    </div>
  );
};

export default ReadList;
