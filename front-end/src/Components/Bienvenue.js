import React from 'react';
import {Card} from 'react-bootstrap'; 
class Bienvenue extends React.Component { 
    render() { 
        const marginTop = {
            marginTop:"20px"
          }
        return ( 
            <Card className="bg-dark text-white" style={marginTop}>
            <Card.Body>
            <Card.Title>Bienvenue au Magasin des Voitures</Card.Title>
            <Card.Text>
            <blockquote className="blockquote mb-0"> 
            <p>Le meilleur de nos voitures est exposé près de chez vous</p> 
            <footer className="blockquote-footer">Master MIOLA</footer>
            </blockquote>
            </Card.Text>
            </Card.Body>
            </Card>
        ); 
    } 
} 
export default Bienvenue;