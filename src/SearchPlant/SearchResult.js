import React, {useEffect} from 'react';
import {Card, Row, Col} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SearchResult.css';
import AddPlant from '../mygarden/AddPlant';

const SearchResult = props => {

    useEffect(()=>{},[props.berryHolder])
 
    return (
        <div>
            <br />
            <Row>
            {props.berryHolder.map(result => {
                return ( 
                    <Col>
                    <Card style={{width:"160px"}} key={result.id}>

                        <img src={result.image} alt="Berry Sprite" />

                        <div>
                            <h2>{result.name}</h2>
                            <p>{result.descript}</p>
                            <AddPlant berryHolder = {props.berryHolder} token={props.token} berryToAdd = {result.id} />
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