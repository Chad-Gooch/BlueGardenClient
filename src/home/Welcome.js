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
                        Welcome to your Garden!
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
                        Berries are small fruits that are produced naturally. Create a garden using the search tool above, and grow!
                    </CardText>
                </CardBody>
            </Card>
        </div>
    );
}

export default Welcome;