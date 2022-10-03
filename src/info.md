----Delete----
// setInput((oldVal) => {
// return oldVal.filter((arr, index) => {
// return index !== obj;
// });
// });

----DeleteALl----
// function deleteAll() {
// alert("Are you sure!");
// input
// .filter((item) => item.isActive === false)
// .forEach((item) => {
// const docRef = doc(firestore, collectionRef.path, item.id);
// deleteDoc(docRef).then(() => {
// console.log("deleted");
// });
// });
// }

----Handle and Enter----
// const handleClick = () => {
// if (text.length > 0) {
// let dateNow = new Date();
// addDoc(collectionRef, {
// message: text,
// date: `${dateNow.toLocaleDateString()} ${dateNow.toLocaleTimeString()}`,
// readDate: ``,
// isActive: true,
// isRead: false,
// }).then(() => {
// console.log("added successfully");
// });

// setText("");
// }
// };

// function onEnter(event) {
// if (event.key === "Enter") {
// if (text.length > 0) {
// let dateNow = new Date();
// addDoc(collectionRef, {
// message: text,
// date: `${dateNow.toLocaleDateString()} ${dateNow.toLocaleTimeString()}`,
// readDate: ``,
// isActive: true,
// isRead: false,
// }).then(() => {
// console.log("added successfully");
// });
// setText("");
// }
// }
// }

----HandleChange----
// function handleChange(event) {
// setText(event.target.value);
// }

----difference----

{/_ {hour > 0 && <span>{hour} hours</span>}{" "}
{min > 0 && <span>{min} minutes</span>}{" "}
{sec > 0 && <span>{sec} seconds</span>} _/}

----revert----
function revertMessage({ id, ...restProps }) {
// let dateNow = new Date();
const docRef = doc(firestore, props.collectionRef.path, id);
updateDoc(docRef, {
...restProps,
isRevert: true,
}).then(() => {
console.log("Reverted");
});
}
