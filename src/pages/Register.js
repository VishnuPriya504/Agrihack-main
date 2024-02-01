// import "./log.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import axios from 'axios';
function Register (){
  
const [user,setUser]=useState({
  name:"",
  email:"",
  password:"",
  confirmpassword:""
})

const handleChange = e =>{
  const {name,value} = e.target
  setUser({
    ...user,
    [name]:value
  })
}


// const handlesubmit=()=>{
//    // console.log(username+" "+password+" "+email);
//     axios.post("http://localhost:4000/register",{
//         username:username,
//         password:password,
//         email:email,
//         confirmpassword:confirmpassword
//     })
// }


 return(
<div class="row">
            <div className="col-md-3 center">
    {console.log(user)}
    <Form>  
      <h1>Sign up</h1>
      <Form.Group className="mb-3" controlId="formBasicname">
        <Form.Label>Full Name:</Form.Label>
        <Form.Control type="text" name="Fullname" placeholder="Enter Full name" value={user.name} required 
        onChange={handleChange}
        />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email:</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter email" required value={user.email}
         onChange={handleChange}
        />
        
      </Form.Group>

      {/* <Form.Group className="mb-3" controlId="formBasicmobile">
        <Form.Label>Contact no:</Form.Label>
        <Form.Control type="tel" placeholder="Enter mobile number"  required />
        
      </Form.Group> */}

<Form.Group className="mb-3" controlId="formBasiccreatePassword">
        <Form.Label>Create Password</Form.Label>
        <Form.Control type="password" placeholder="Create Password" name="create" required value={user.password}
         onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicconfirmPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Confirm Password" name="confirm" required 
        value={user.confirmpassword}
        onChange={handleChange}
        />
      </Form.Group>
      <Button variant="success" >
        Submit
      </Button><br/><br/>
      

      
    </Form>
    </div>
    </div>
  );
      }
export default Register;