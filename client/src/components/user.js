import React, { useState, useEffect } from "react";
import Axios from "axios";

const User = () =>{
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [confirmPassword, setconfirmPassword] = useState("")

    const [ listofusers, setlistofusers] = useState([])

    // useEffect(()=>{
    //     Axios.get('http://localhost:5000/api/v1/users/allUsers').then((response)=>{    
    //     setlistofusers(response.data)
    //     })
    // }, [])

    const onsubmit = () => {
        Axios.post('http://localhost:5000/api/v1/users/register', {name, email, password, confirmPassword}).then(()=>{
            alert('user saved')
        }).catch((err)=>{
            console.log(err)
        })
        setname("")
        setemail("")
        setpassword("")
        setconfirmPassword("")
    }

    return (
        <div className="container" >
            <h3>Register</h3>
            <form onSubmit={onsubmit}>
                <div className="form-group">
                    <label>Name:</label>
                    <input type="text" required className="form-control" value={name} placeholder="name..." onChange={(e)=>{setname(e.target.value)}}/>
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" required className="form-control" value={email} placeholder="email..." onChange={(e)=>{setemail(e.target.value)}}/>
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input type="password" required className="form-control" value={password} placeholder="password..." onChange={(e)=>{setpassword(e.target.value)}}/>
                </div>
                <div className="form-group">
                    <label>Confirm Password:</label>
                    <input type="password" required className="form-control" value={confirmPassword} placeholder="re-enter password..." onChange={(e)=>{setconfirmPassword(e.target.value)}}/>
                </div>
                <div className="form-group">
                <button type="submit" className="btn btn-primary">Register</button>
                </div>
            </form>

            {/* <div>
                {listofusers.map((user)=>{
                    return(
                        <div>
                            <h4>Name: {user.name}</h4>
                        </div>
                    )
                })}
            </div> */}

        </div>
    )
}

export default User;