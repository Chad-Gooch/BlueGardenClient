import React, {useState, useEffect} from 'react';
import {Outlet, Link} from "react-router-dom";
import {Container, Col, Row, Button} from 'reactstrap';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
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
            <Navbar className='navbar' expand="md">
                <NavbarBrand className='brand' href="/Welcome">BlueGarden</NavbarBrand>
                <Nav className="ml-auto" navbar>
                    <NavItem><Link className='navitem' to='/Welcome'>Home</Link></NavItem>
                    <NavItem><Link className='navitem' to='/GardenIndex'>My Garden</Link></NavItem>
                    <NavItem><Link className='navitem' to='/SearchPlant'>Search</Link></NavItem>
                    <NavItem >{(settingOne)?<Button className='signinbutton' href='/SignIn'>Sign In</Button>:<Button onClick={props.clearToken}>Logout</Button>}</NavItem>
                </Nav>
            </Navbar>

            <Outlet />
        </div>
    );
}

export default Sitenav;