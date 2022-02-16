import React from 'react';
import './App.scss';
import Formview from './components/Formview';
import Listview from './components/Listview';
import {Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <Container className='main-container'>
      <Row className="main-row">
        <Col sm={5} className="p-0">
          <Listview />
        </Col>
        <Col sm={7}>
          <Formview />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
