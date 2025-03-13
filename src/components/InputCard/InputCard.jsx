import React, { useState } from 'react';
import styles from './InputCard.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";


export function InputCard() {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({email:"", password:"", favClass:"1"})
  const [validationStates, setValidationStates] = useState({ passwordState: true });
  const [stepForm,  setStepForm] = useState(1);

  // email.includes("@") && email.includes(".com")
  const handleEmailChange = ((e) => {
    setFormValues({...formValues, email: e.target.value})
  });
 
  const handlePasswordChange = ((e) => {
    setFormValues({...formValues, password: e.target.value})
    console.log(formValues.password)
    if (formValues.password.length < 8){
      setValidationStates({passwordState:false})
    }else{
      setValidationStates({passwordState:true})

    }
  });

  const handleSubmit = ((e) => {
    e.preventDefault();
    navigate("/", { state: formValues });
  
  });
  

  return (
    <div>
      <Card className='p-5'>
      <Form>
  
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={handlePasswordChange} value={formValues.password} />{!validationStates.passwordState && <Form.Text className="text-muted">Your password should be have numbers and letters and should be at least 9 char long</Form.Text>}
          </Form.Group>

       <Button variant="primary" type="submit" onClick={handleSubmit}>
            Submit
          </Button>

        </Form>
      </Card>
    </div>
    
  );
}

export default InputCard;