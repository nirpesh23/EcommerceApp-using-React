import React from "react";
import Button from "./components/Button";
import Products from "./components/Products";

function App(){

  const onclick = () => {
    console.log('Click')
  }

  return(
    <div>
      
      <Products/>
      <Button color = "green" text = "first_btn_component"/>

      <Button Click={onclick} color = "red" text = "second_btn_component"/>
    </div>
  )
}

export default App; 