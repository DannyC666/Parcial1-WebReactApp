import React, { useState } from 'react';
import styles from './InputCard.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Card, FormGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import { FormattedMessage } from 'react-intl';
import { useIntl } from "react-intl";


export function InputCard() {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({email:"", password:"", favClass:"1"})
  const [validationStates, setValidationStates] = useState({ passwordState: false });
  const intl = useIntl(); 


  const handlePasswordChange = ((e) => {
    setFormValues({...formValues, password: e.target.value})
    console.log(formValues.password)
    if (  formValues.password.length >= 5   && formValues.password.length < 8 ){
      setValidationStates({passwordState:true})
    }else{
      setValidationStates({passwordState:false})

    }
  });

  const handleSubmit = ((e) => {
    e.preventDefault();
    navigate("/home", { state: formValues });
  
  });
  

  return (
    <div>
      <Card className='p-5 card-form-styles'>
      <Form>

          <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder={intl.formatMessage({ id: "login" })} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>    
          </Form.Label>
            <Form.Control type="password" placeholder={intl.formatMessage({ id: "password" })} onChange={handlePasswordChange} value={formValues.password} />{!validationStates.passwordState && <Form.Text className="text-password-warning">Ingrese una contrasena entre 5 y 8 caraceteres </Form.Text>}
          </Form.Group>
          
          <FormGroup>
          <a href="#" className="forgot-password">
          <FormattedMessage id="forgot_password"/>
            
          </a>

          </FormGroup>
          
          <Button className="mt-4 login-btn"variant="primary" type="submit" onClick={handleSubmit}>
              <FormattedMessage id="login"/>
          </Button>

        </Form>
      </Card>
    </div>
    
  );
}

export default InputCard;