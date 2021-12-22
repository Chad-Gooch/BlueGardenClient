import React, {useState} from 'react';
import {Button, Input} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ChangePlant.css';
import APIURL from '../helpers/environment';


const ChangePlant = props => {
    const [berryNumber, setBerryNumber] = useState();

    const berryUpdateSubmit = (berrySubmit) => {

        let arrayId = berrySubmit - 1;
        let plant = props.berryHolder[arrayId];
        let plantName = plant.name;
        let species = plant.natural_gift_type.name;
        let plantImage = plant.image;
        let season = plant.descript;
        console.log(plant, plantName, species, season, props.token, props.item);
        console.log(berrySubmit);

        fetch(`${APIURL}/change/${props.item}`, {
            method: "PUT",
            body: JSON.stringify({
                garden:{
                    plantName:plantName,
                    species:species,
                    plantImage:plantImage,
                    season:season
                }
            }),
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + props.token,
            })
        }).then(
            (response) => response.json()
        ).then(() => props.getPlants())
    }

    return (
    
        <div className="updatedForm">
            <form>
                <label>
                    Enter a number:
                    <Input type='number' onChange={(e) => setBerryNumber(e.target.value)} value={berryNumber} />
                </label>
            </form>
            <Button className="updateToGarden" onClick={() => berryUpdateSubmit(berryNumber)}>
                Update Plant
            </Button>
        </div>
    )
}

export default ChangePlant;