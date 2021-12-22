import React from 'react';
import {Button} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './DeletePlant.css';

const DeletePlant = props => {
    
    
    let berryDelete = (id) => {

        fetch(`http://localhost:5000/remove/${id}`, {
            method: 'DELETE',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + props.token
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            console.log(data)
        })
        .then(() => props.getPlants())
    }


    return (
        <Button className="deleteFromGarden" onClick={() => berryDelete(props.berryToDelete)}>
            Delete Plant
        </Button>
    )
}

export default DeletePlant;