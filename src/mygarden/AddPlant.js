import React from 'react';
import {Button} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AddPlant.css';

const AddPlant = props => {
    
    let berryAdd = (id) => {
        let arrayId = id - 1;
        let detail = props.item[arrayId];
        let plant = props.berryHolder[arrayId];
        console.log(detail, plant)
        // fetch method
        fetch('http://localhost:5000/add/', {
            method: 'POST',
            body: JSON.stringify({
                plantName:plantName,
                species:species,
                plantImage:plantImage,
                season:season,
                owner_id: idNumber
            }),
            headers: new Headers ({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            props.berryToAdd(data.berryHolder);
            console.log(data.berryHolder)
        })
    }


    return (
        <Button className="addToGarden" onClick={() => berryAdd(props.berryToAdd)}>
            Add to My Garden
        </Button>
    )
}

export default AddPlant;