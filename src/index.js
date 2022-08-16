import React from "react";
import ReactDOM from "react-dom";


function Cart(props){
  return (
    <div>
      <h2>{props.setha}</h2>
      <img
      src={props.img}
      alt="avatar_img"
      />
      <p>{props.phone}</p>
      <p>{props.email}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>

    <Cart
      setha="Lay Chansetha Girl Friend"
      img = "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      phone = "123-456-7890"
      email = "abc@gmail.com"
    />

    <Cart
      setha="Lay Chansetha Girl Friend"
      img = "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      phone = "123-456-7890"
      email = "abc@gmail.com"
    />

    <Cart
      setha="Lay Chansetha Girl Friend"
      img = "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      phone = "123-456-7890"
      email = "abc@gmail.com"
    />

  </div>,
  document.getElementById("root")
);
