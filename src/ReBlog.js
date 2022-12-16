import React from 'react';
import { useState } from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';

const ReBlog = () => {
    const [Data, setData] = useState({
        name:"",
        email:"",
        password:"",
        rePassword:"",
    });
    const handler = (e) => {
        const {name , value} = e.target
        console.log(name, value)
        setData({
            ...Data,
            [name]:value
        })
    }
    const actionHandle = () =>{
        const { name, email, password, rePassword } = Data;
        if(name&&email&&password&&(password===rePassword)){
            console.log('Successfull')
            axios.post("http://localhost:3020/register", Data)
            .then((res)=>{
                alert(res.data.message)
            })
        }else{
            alert('Failed');
        }
    }
  return (
    <div>
          <form action="">
              {console.log("Data ", Data)}
              <h1>REGISTRATION FORM</h1>
              <br />
              <label htmlFor="" className="field">
                  Name <span style={{ color: "red" }}>*</span> : {"  "}
              </label>
              <input type="text" class="enjoy-css" onChange={handler} name='name' value={Data.name} placeholder="Your Name" />
              <label htmlFor="" className="field">
                  Email <span style={{ color: "red" }}>*</span> : {"  "}
              </label>
              <input type="email" class="enjoy-css" onChange={handler} name='email' value={Data.email} placeholder="Your Email" />
              <label htmlFor="" className="field">
                  Password <span style={{ color: "red" }}>*</span> : {"  "}
              </label>
              <input type="password" n onChange={handler} name='password' value={Data.password}class="enjoy-css" placeholder="Password" />
              <label htmlFor="" className="field">
                  Re-Password <span style={{ color: "red" }}>*</span> : {"  "}
              </label>
              <input type="password" class="enjoy-css" onChange={handler} name='rePassword' value={Data.rePassword} placeholder="Re-Password" />

{/* ============================================================================ */}

              {/* <Link to="/login"> */}
                  <div class="button" style={{ backgroundColor: "#47c" }} onClick={actionHandle}>
                      SIGNUP<i class="fa fa-check"></i>
                  </div>
              {/* </Link> */}

              {/* <Link to="/register">
                  <div class="button" style={{ backgroundColor: "green", marginLeft: "40%" }}>
                      SIGNIN<i class="fa fa-user-circle"></i>
                  </div>
              </Link> */}

              
          </form>
    </div>
  )
}

export default ReBlog;
