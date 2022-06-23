import React from "react";
import Products from "./components/Products";
import AddProducts from "./components/AddProducts";
import User from "./components/user";
import LoginUser from "./components/login";
import Profile from "./components/Profile";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar";

function App(){
  return(
    <div>
      <NavBar />    
      <Routes>
      {/* <Switch> 1st route path will only load </Switch> */}
        <Route exact path='/' element={<Products/>} />
        <Route path='/add_products' element={ <AddProducts/>} />
        <Route exact path='/profile' element={<Profile/>} />
        <Route exact path='/user' element={<User/>} />
        <Route exact path='/login' element={<LoginUser/>} />
      </Routes>
      {/* 
      <Route path='/profile' component={Profile} /> */}
    </div>
  )
}

export default App; 



// const onclick = () => {
  //   console.log('Click')
  // }

// {/* <Button color = "green" text = "first_btn_component"/>

//         <Button Click={onclick} color = "red" text = "second_btn_component"/> */}
