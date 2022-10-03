import React from "react";
const List = ({
  value,
  deleteItem = () => {},
  readDate = () => {},
  revertMessage = () => {},
  deleted = () => {},
}) => {
  return (
    <>
      {!value?.isRead && (
        <div className="lists">
          {
            <li>
              {
                <p className="head4">
                  <span className="list--Head">Message:</span>
                  <span className="list--msg">{value?.message}</span>
                  <span className="time--msg">
                    Message receive: {value?.date}
                  </span>
                </p>
              }
            </li>
          }
          <div className="buttons">
            {value?.isActive && (
              <button className="read-btn" onClick={readDate}>
                Read
              </button>
            )}

            {!value?.isActive && (
              <button className="revert-btn" onClick={revertMessage}>
                Revert
              </button>
            )}

            {value?.isActive ? (
              <button className="list-btn" onClick={deleteItem}>
                Delete
              </button>
            ) : (
              <button className="list-btn" onClick={deleted}>
                Delete
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default List;
