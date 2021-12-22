import React from 'react';
import {Button} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './DeletePlant.css';
import APIURL from '../helpers/environment';

const DeletePlant = props => {
    
    
    let berryDelete = (id) => {

        fetch(`${APIURL}/remove/${id}`, {
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
            Delete from My Garden
        </Button>
    )
}

export default DeletePlant;