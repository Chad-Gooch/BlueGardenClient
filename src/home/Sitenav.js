import React, {useState, useEffect} from 'react';
import {Outlet, Link} from "react-router-dom";
import {Container, Col, Row, Button} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Sitenav.css';

const Sitenav = props => {

    const [settingOne, setSettingOne] = useState(false);

    const toggle = (tokenHolder) => {
        if (tokenHolder !== '') {setSettingOne(false)
        } else {setSettingOne(true)}
    };

    useEffect(()=>{
        toggle(props.sessionToken);
    },[props.sessionToken])

    return (
        <div>
            <Container>
                <Row>
                    <h1>BlueGarden</h1>
                </Row>
                <Row>
                    <Col><Link to='/Welcome'>Home</Link></Col>
                    <Col><Link to='/GardenIndex'>My Garden</Link></Col>
                    <Col><Link to='/SearchPlant'>Search</Link></Col>
                    <Col>{(settingOne)?<Link to='/SignIn'>Sign In</Link>:<Button onClick={props.clearToken}>Logout</Button>}</Col>
                </Row>
            </Container>
            <Outlet />
        </div>
    );
}

export default Sitenav;