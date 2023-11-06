import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import NavigationBar from './Components/NavigationBar';
import Bienvenue from './Components/Bienvenue';
import Footer from './Components/Footer';
import VoitureListe from './Components/VoitureListe';
import Voiture from './Components/Voiture';
import EditVoiture from './Components/EditVoiture';

function App() {
    const marginTop = {
      marginTop: "20px",
    };

    return (
      <Router>
        <NavigationBar />
        <Container>
          <Row>
            <Col lg={12} style={marginTop}>
              <Routes>
                <Route path="/" element={<Bienvenue />} />
                <Route path="/add" element={<Voiture />}/>
                <Route path="/edit/:id" element={<EditVoiture/>}/>
                <Route path="/list" element={<VoitureListe />} />
              </Routes>
            </Col>
          </Row>
        </Container>
        <Footer />
      </Router>
    );
}
export default App;
