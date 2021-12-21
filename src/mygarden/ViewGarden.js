import React, {useState, useEffect} from 'react';
import {Table, Button, Card, Col, Row} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ViewGarden.css';
import AddPlant from './AddPlant';
import DeletePlant from './DeletePlant';
import ChangePlant from './ChangePlant';

const ViewGarden = props => {

    const [myPlants, setMyPlants] = useState([]);

    useEffect(()=>{getPlants()
    },[])



    const getPlants = () => {
        const token = localStorage.getItem('SessionToken');

        fetch(`http://localhost:5000/my`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type':'application/JSON',
                'Authorization':`Bearer `+props.token
            })
        })
        .then(response => response.json())
        .then(data => setMyPlants(data))
    }

    return (
        <div>
            <Row>
            {myPlants.map(result => {
                return ( 
                    <Col>
                    <Card key={result.idNumber}>
                        <img src={result.plantImage} />
                        <div>
                            <h2>{result.plantName}</h2>
                            <p>{result.season}</p>
                            <p>{result.species}</p>
                            <DeletePlant berryToDelete = {result.idNumber} getPlants = {getPlants} token = {props.token} />
                        </div>
                    </Card>
                    </Col>
                )}
                )}
            </Row>  
        </div>
        
    );
}

export default ViewGarden;