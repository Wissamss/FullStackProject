import React, { useEffect, useState } from 'react';
import { Form, Button, Col, Row, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave, faEdit } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import MyToastt from './MyToastt';


function EditVoiture() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [voiture, setVoiture] = useState({
    marque: '',
    modele: '',
    couleur: '',
    immatricule: '',
    prix: '',
    annee: '',
  });

  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:8080/voitures/${id}`)
      .then((response) => {
        if (response.data) {
          setVoiture(response.data);
        }
      });
  }, [id]);

  const handleInputChange = (event) => {
    setVoiture({
      ...voiture,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    axios.put(`http://localhost:8080/voitures/${id}`, voiture, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
        setShowToast(true);
        setTimeout(() => {
            setShowToast(false);
            navigate('/list');
        }
            ,2000);
    });
  };

  return (
    <div>
    <div style={{"display": showToast ? "block" : "none"}}>
        <MyToastt children={{show: showToast, message:"Voiture modifiee avec succes", type:"success"}} />
      </div>
    <Card className={'border border-dark bg-dark text-white'}>
      <Card.Header>
        <h2><FontAwesomeIcon icon={faEdit}/>Edit Voiture</h2>
      </Card.Header>
      <Form onSubmit={handleSubmit}>
    <Card.Body>
    <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridMarque">
        <Form.Label className={"text-white"}>Marque</Form.Label>
        <Form.Control required type="text" name="marque"  value={voiture.marque} autoComplete="off" onChange={handleInputChange} className={"bg-dark text-white"} placeholder= "Entrez Marque Voiture" />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridModele">
        <Form.Label className={"text-white"}>Modele</Form.Label>
        <Form.Control required type="text" name="modele"  value={voiture.modele} autoComplete="off" onChange={handleInputChange} className={"bg-dark text-white"} placeholder= "Entrez Modele Voiture" />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridCouleur">
        <Form.Label className={"text-white"}>Couleur</Form.Label>
        <Form.Control required type="text" name="couleur"  value={voiture.couleur} autoComplete="off" onChange={handleInputChange} className={"bg-dark text-white"} placeholder= "Entrez Couleur Voiture" />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridImmatricule">
        <Form.Label className={"text-white"}>Immatricule</Form.Label>
        <Form.Control required type="text" name="immatricule"  value={voiture.immatricule} autoComplete="off" onChange={handleInputChange} className={"bg-dark text-white"} placeholder= "Entrez Immatricule Voiture" />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridPrix">
        <Form.Label className={"text-white"}>Prix</Form.Label>
        <Form.Control required type="text" name="prix"  value={voiture.prix} autoComplete="off" onChange={handleInputChange} className={"bg-dark text-white"} placeholder= "Entrez Prix Voiture" />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridAnnee">
        <Form.Label className={"text-white"}>Annee</Form.Label>
        <Form.Control required type="text" name="annee"  value={voiture.annee} autoComplete="off" onChange={handleInputChange} className={"bg-dark text-white"} placeholder= "Entrez Annee Voiture" />
      </Form.Group>
      </Row>
      <Card.Footer style={{"textAlign":"right"}}>
      <Button size="sm" variant="success" type="submit"><FontAwesomeIcon icon={faSave} />Update</Button>
      </Card.Footer>
      </Card.Body>
      </Form>
    </Card>
    </div>
  );
}

export default EditVoiture;
