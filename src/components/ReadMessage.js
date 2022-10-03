import React from "react";
// import { updateDoc, doc } from "firebase/firestore";
// import { firestore } from "../firebaseConfig";

const ReadMessage = ({ value, deleteItem = () => {}, readDate = () => {} }) => {
  let difference = new Date(value?.readDate) - new Date(value?.date);

  function renderTime(diff) {
    let hour = Math.floor(diff / 1000 / 60 / 60);
    let min = Math.floor((diff / 1000 / 60) << 0);
    let sec = Math.floor((diff / 1000) % 60);
    let str = "";
    if (hour > 0) {
      str += `${hour} hours `;
    }
    if (min > 0) {
      str += `${min} minutes `;
    }
    if (sec > 0) {
      str += `${sec} seconds`;
    }
    return str;
  }

  return (
    <>
      <div className="rlists">
        {
          <li>
            {value?.isRead && (
              <p className="Readhead4">
                <span className="list--Head">Message:</span>
                <span className="list--msg">{value?.message}</span>
                <span className="time--msg">
                  Message receive: {value?.date}
                </span>
                <span className="time--msg" onClick={readDate}>
                  Message seen: {value?.readDate}
                </span>
                <span className="time--msg" onClick={readDate}>
                  Difference Time: {renderTime(difference)}
                </span>
              </p>
            )}
          </li>
        }

        {
          <button className="list-btn" onClick={deleteItem}>
            Delete
          </button>
        }
      </div>
    </>
  );
};

export default ReadMessage;
