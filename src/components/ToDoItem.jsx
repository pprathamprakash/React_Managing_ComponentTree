import React, { useState } from "react";

function List(props) {
  return (
    <li
      onClick={() => {
        props.onChecked(props.id); // here you can give props.onChecked(props.id) because this is inside a callback
        // func. which is only going to be triggered when a click happens on certain list item, so then you obviously want
        // to call delete item func. in App.jsx passing the index of this item as id to delete it.
      }}
    >
      {" "}
      {props.item}{" "}
    </li>
  );
  // return <li onClick={props.onChecked(props.id)} > {props.item} </li>;
  // don't give parenthesis on props.onChecked() like this, because it means you are calling
  // delete item func. passed to List(), so this will delete the item as soon as this item is created
  // and without even clicking on the list item

  // const [initial, setInitial] = useState(false);

  // function changeState() {
  //   setInitial(!initial);
  // }

  // return <li onClick={changeState} style={{textDecoration: initial ? "line-through" : null}}> {props.item} </li>;

  // You can also do as below, and should use textDecoration : "none", in case if false because
  // that is what is used in css instead of null.

  // function changeState() {
  //   setInitial((previous) => {
  //     return !previous;
  //   });
  // }

  // return <li onClick={changeState} style={{textDecoration: initial ? "line-through" : "none"}}> {props.item} </li>;
}

export default List;
