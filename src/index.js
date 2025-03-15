import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IntlProvider } from 'react-intl';
import localeEsMessages from "./locales/es";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
 <React.StrictMode>
  
   <Container style={{ maxWidth: "100%" , width:"100%"}}>
     <Row xs={1}>
       <Col>
       <IntlProvider locale="es-ES" messages= {localeEsMessages}>
          <App />

       </IntlProvider>
       
       </Col>
     </Row>
   </Container>
 </React.StrictMode>
);