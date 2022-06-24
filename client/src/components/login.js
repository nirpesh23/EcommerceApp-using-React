import React, {useState} from "react";
import Axios from "axios";

const LoginUser = () =>{
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    const loginsubmit = () =>{
        try{
            const res  = Axios.post('http://localhost:5000/api/v1/users/login', {email, password}).then(()=>{
            }) 
            console.log(res)
        }catch(err){console.log(err)}
        
    }

    return(
        <div className="container">
            <form onSubmit={loginsubmit}>
                <div className='form-group'>
                    <label>Email</label>
                    <input className='form-control' type="email" required value={email} placeholder="email..." onChange={(e)=>{ setemail(e.target.value)}}/>
                </div>
                <div className='form-group'>
                    <label>Password</label>
                    <input className='form-control' type="password" required value={password} placeholder="password..." onChange={(e)=>{ setpassword(e.target.value)}}/>
                </div>
                <div className="form-group">
                    <button className='btn btn-primary'>Login</button>
                </div>
            </form>
        </div>
    )
}

export default LoginUser;
