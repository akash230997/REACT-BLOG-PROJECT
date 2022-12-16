import React,{useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const LoginForm = () => {
    const [Data, setData] = useState({
        email: "",
        password: "",
    });
    const handler = (e) => {
        const { name, value } = e.target
        console.log(name, value)
        setData({
            ...Data,
            [name]: value
        })
    }
    const login_btn = () => {
        axios.post('http://localhost:3020/login', Data).then((res)=>alert(res.data.message))
    }
    return (
        <div>
            {console.log("Data " , Data)}
            <form action="">
                <h1>LOGIN</h1>
                <br />
                
                <label htmlFor="" className="field">
                    Email <span style={{ color: "red" }}>*</span> : {"  "}
                </label>
                <input type="email" class="enjoy-css" onChange={handler} name='email' value={Data.email} placeholder="Your Email" />
                <label htmlFor="" className="field">
                    Password <span style={{ color: "red" }}>*</span> : {"  "}
                </label>
                <input type="password" onChange={handler} name='password' value={Data.password} class="enjoy-css" placeholder="Password" />

                <div class="button" style={{ backgroundColor: "green"}} onClick={login_btn}>
                    SIGNIN<i class="fa fa-user-circle"></i>
                </div>
                
                
                <Link to="/register">
                    <div class="button" style={{ backgroundColor: "#47c", marginLeft: "40%" }} >
                        SIGNUP<i class="fa fa-check"></i>
                    </div>
                </Link>
                
                
            </form>
        </div>
    )
}

export default LoginForm
