// import { dblClick } from "@testing-library/user-event/dist/click";
import { collection, onSnapshot, doc, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { firestore } from "../firebaseConfig";
import Header from "./Header";
import History from "./History";
import ReadList from "./ReadList";

import { TodoList } from "./TodoList";

export default function Todo() {
  const [input, setInput] = useState([]);
  const collectionRef = collection(firestore, "todoList");

  useEffect(() => {
    const unsubcribe = onSnapshot(collection(firestore, "todoList"), {
      next: ({ docs }) => {
        const data = docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setInput(data);
      },
    });
    return () => unsubcribe();
  }, []);

  function readDate({ id, ...restProps }) {
    let dateNow = new Date();
    const docRef = doc(firestore, collectionRef.path, id);
    updateDoc(docRef, {
      ...restProps,
      readDate: `${dateNow.toLocaleDateString()} ${dateNow.toLocaleTimeString()}`,
      isRead: true,
    }).then(() => {
      console.log("updated");
    });
  }

  return (
    <div className="containerDiv">
      <Header collectionRef={collectionRef} />

      <TodoList
        input={input}
        collectionRef={collectionRef}
        readDate={readDate}
      />
      <History input={input} collectionRef={collectionRef} />

      <ReadList
        input={input}
        collectionRef={collectionRef}
        readDate={readDate}
      />
    </div>
  );
}
