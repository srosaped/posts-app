import React, { useState } from 'react';
import './App.scss';
import { Container, Row, Col } from 'react-bootstrap';

import Header from './components/Header/Header';
import Addpost from './components/AddPost/Addpost';
import Editpost from './components/EditPost/Editpost';
import Listview from './components/ListView/Listview';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const App: React.FC = () => {

  return (
    <>
    
      <Container className='main-container'>
        <Header />
        <Row className="main-row">
          <Col sm={5} className="p-3 h-100 pt-0" style={{
            overflowY: "scroll"
          }}>
            <Listview />
          </Col>
          <Col sm={7} className="p-3">
            <Routes>
              <Route path="/addpost" element={<Addpost />} />
              <Route path="/editpost/:id" element={<Editpost />} />
            </Routes>
          </Col>
        </Row>
      </Container>
      
    </>
  );
}

export default App;
