import React, {useState, useEffect} from 'react';
import {Button} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ChangePlant.css';

const ChangePlant = props => {
    const [editPlantName, setEditPlantName] = useState(props);
    const [editSpecies, setEditSpecies] = useState(props);
    const [editSeason, setEditSeason] = useState(props);

    const changePlantUpdate = (event, plant) => {
        event.preventDefault();
        fetch('http://localhost:5000/change', {
            method: "PUT",
            body: JSON.stringify({
                plant: { plantName: editPlantName, species: editSpecies, season: editSeason },
            }),
            headers: new Headers({
                "Content-Type": "application/json",
                Authorization: props.token,
            }),
        }).then((plant) => {
            props.fetchPlantUpdate();
        });
    };

    return (
        <Button className="updateToGarden" onClick={() => berryUpdate(props.berryToUpdate)}>
            Update Plant
        </Button>
    )
}

export default ChangePlant;