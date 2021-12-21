import React, {useState} from 'react';
import {Button, Input} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ChangePlant.css';


const ChangePlant = props => {
    const [berryNumber, setBerryNumber] = useState();

    const berryUpdateSubmit = (berrySubmit) => {

        let arrayId = berrySubmit - 1;
        let plant = props.berryHolder[arrayId];
        let plantName = plant.name;
        let species = plant.natural_gift_type.name;
        let plantImage = plant.image;
        let season = plant.descript;
        const idNumber = props.token;
        console.log(plant, plantName, species, season, idNumber);
        console.log(berrySubmit);
        fetch(`http://localhost:5000/change/da0f2925-5448-4c78-baad-6267ed4697d6`, {
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
                'Authorization': 'Bearer ' + idNumber,
            })
        }).then(
            (response) => response.json()
        ).then(
            (data) => console.log(data)
        )
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