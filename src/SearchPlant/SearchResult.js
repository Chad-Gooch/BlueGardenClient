import React, {useState} from 'react';
import {Button, Card, Row, Col} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SearchResult.css';

const SearchResult = props => {

    const [plant, setPlant]=useState([]);

    function combine() {
        let img = props.item;
        let berry = props.berryHolder
        let showBerries = [];
        
        for (let i=0; i < berry.length; i++) {
            berry[i].image = img[i].sprites.default;
            berry[i].descript = img[i].flavor_text_entries[0].text;
            showBerries.push(berry[i])
        };
        setPlant(showBerries);
    };

    
    return (
        <div>
            <Button  onClick={()=>combine()}>Show all</Button>
            <br />
            <Row>
            {plant.map(result => {
                return ( 
                    <Col>
                    <Card className="card" key={result.id}>
                        <img src={result.image} />
                        <div>
                            <h2>{result.name}</h2>
                            <p>{result.descript}</p>
                            <p>{result.growth_time}</p>
                        </div>
                    </Card>
                    </Col>
                )}
            )}
            </Row>
        </div>
    );
}

export default SearchResult;