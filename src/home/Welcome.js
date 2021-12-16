import React from 'react';
import {Card, CardBody, CardSubtitle, CardTitle, CardText} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Welcome.css';
import PokeGarden1 from '../assets/PokeGarden1.png'

const Welcome = props => {

    return (
        <div>
            <Card className="welcomeCard">
                <CardBody>
                    <CardTitle className="header">
                        Welcome to your own Garden!
                    </CardTitle>
                    <CardSubtitle
                    className="mb-2 text-muted">
                         Tend to it and nuture the berries.
                    </CardSubtitle>
                </CardBody>
                    <img className="welcomeImage"
                    alt="Welcome Page Garden"
                    src={PokeGarden1}
                    />
                <CardBody>
                    <CardText className="subText">
                        Find all the berries you could ask for. Create a garden using the berries you search for, and grow!
                    </CardText>
                     <div className="centerButton">
                        <button className="viewGardenButton" href="#">
                             View My Garden
                        </button>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
}

export default Welcome;