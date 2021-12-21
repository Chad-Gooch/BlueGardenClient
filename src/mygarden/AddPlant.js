import React from 'react';
import {Button} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AddPlant.css';

const AddPlant = props => {
    
    let berryAdd = (id) => {
        let arrayId = id - 1;
        let plant = props.berryHolder[arrayId];
        let plantName = plant.name;
        let species = plant.natural_gift_type.name;
        let plantImage = plant.image;
        let season = plant.descript;
        console.log(plant);
        console.log(plantName, species, plantImage, season, props.token);

        
        fetch('http://localhost:5000/add/', {
            method: 'POST',
            body: JSON.stringify({
                garden:{
                    plantName:plantName,
                    species:species,
                    plantImage:plantImage,
                    season:season
            }}),
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + props.token,
            })
        }).then((response) => response.json())
    }


    return (
        <Button className="addToGarden" onClick={() => berryAdd(props.berryToAdd)}>
            Add to My Garden
        </Button>
    )
}

export default AddPlant;