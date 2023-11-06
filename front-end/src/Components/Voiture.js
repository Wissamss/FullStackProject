import { Form, Button, Col, Row, Card} from 'react-bootstrap';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlusSquare , faSave, faUndo} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import MyToastt from './MyToastt';


class Voiture extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.initialState;
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

    initialState = {
      marque: '',
      modele: '',
      couleur: '',
      immatricule: '',
      prix: '',
      annee: ''
    };

    resetVoiture = () =>{
      this.setState(() => this.initialState);
    }
  
  handleInputChange = (event) => {
    this.setState({ 
      [event.target.name]: event.target.value
    });
  }
  
  handleSubmit = (event) => {
    event.preventDefault();
    const voiture = {
      marque : this.state.marque,
      modele : this.state.modele,
      couleur : this.state.couleur,
      immatricule : this.state.immatricule,
      annee : this.state.annee,
      prix : this.state.prix
    };

    axios.post("http://localhost:8080/voitures", voiture,  {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(response => {
      console.log(response);
      if(response.data != null){
        this.setState(this.initialState);
        this.setState({"show":true}); 
        setTimeout(() => this.setState({"show":false}), 3000);
      }
    })

 
  }
  render(){
  return (
    <div>
      <div style={{"display":this.state.show ? "block" : "none"}}>
        <MyToastt children={{show:this.state.show, message:"Voiture enrigistree avec succes", type:"success"}} />
      </div>
    <Card className={'border border-dark bg-dark text-white'}>
    <Card.Header>
        <h2><FontAwesomeIcon icon={faPlusSquare} />Ajouter Voiture</h2>
    </Card.Header>
    <Form onReset={this.resetVoiture} onSubmit={this.handleSubmit}>
    <Card.Body>
    <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridMarque">
        <Form.Label className={"text-white"}>Marque</Form.Label>
        <Form.Control required type="text" name="marque"  value={this.state.marque} autoComplete="off" onChange={this.handleInputChange} className={"bg-dark text-white"} placeholder= "Entrez Marque Voiture" />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridModele">
        <Form.Label className={"text-white"}>Modele</Form.Label>
        <Form.Control required type="text" name="modele"  value={this.state.modele} autoComplete="off" onChange={this.handleInputChange} className={"bg-dark text-white"} placeholder= "Entrez Modele Voiture" />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridCouleur">
        <Form.Label className={"text-white"}>Couleur</Form.Label>
        <Form.Control required type="text" name="couleur"  value={this.state.couleur} autoComplete="off" onChange={this.handleInputChange} className={"bg-dark text-white"} placeholder= "Entrez Couleur Voiture" />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridImmatricule">
        <Form.Label className={"text-white"}>Immatricule</Form.Label>
        <Form.Control required type="text" name="immatricule"  value={this.state.immatricule} autoComplete="off" onChange={this.handleInputChange} className={"bg-dark text-white"} placeholder= "Entrez Immatricule Voiture" />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridPrix">
        <Form.Label className={"text-white"}>Prix</Form.Label>
        <Form.Control required type="text" name="prix"  value={this.state.prix} autoComplete="off" onChange={this.handleInputChange} className={"bg-dark text-white"} placeholder= "Entrez Prix Voiture" />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridAnnee">
        <Form.Label className={"text-white"}>Annee</Form.Label>
        <Form.Control required type="text" name="annee"  value={this.state.annee} autoComplete="off" onChange={this.handleInputChange} className={"bg-dark text-white"} placeholder= "Entrez Annee Voiture" />
      </Form.Group>

      </Row>
      <Card.Footer style={{"textAlign":"right"}}>
      <Button size="sm" variant="success" type="submit"><FontAwesomeIcon icon={faSave} />Submit</Button>{' '}
      <Button size="sm" variant="info" type="reset"><FontAwesomeIcon icon={faUndo} />Reset</Button>
      </Card.Footer>
    </Card.Body>
    </Form>
    </Card>
    </div>
  );
  }
}

export default Voiture;