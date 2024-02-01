// import "./log.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Login.css';
 function Login (){
 return(
<div class="row">
            <div className="col-md-3 center f">
           
    
    <Form>
    New User?? <Button variant="success" >
        Signup
      </Button>
      <hr/>
      <h1>Sign in</h1>
      <Form.Group className="mb-3 " controlId="formBasicEmail">
        <Form.Label>Email:</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  required />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" required />
      </Form.Group>

      
        
      {['radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            inline
            label="Farmers"
            name="group1"
            type={type}
            id={`inline-${type}-1`}
          />
          <Form.Check
            inline
            label="Customers"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
          />
          <Form.Check
            inline
           
            label="Supplychain"
            name="group1"
            type={type}
            id={`inline-${type}-3`}
          />
        </div>
      ))}

      
      <Button variant="success" type="submit">
        Submit
      </Button><br/><br/>
      

      
    </Form>
    </div>
    </div>
  );
      }
   
export default Login;
