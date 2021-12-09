import React, {useState, useEffect} from 'react';
import {Table} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import SignIn from '../login/SignIn';
import GardenIndex from '../mygarden/GardenIndex';
import ViewPublic from '../publicgarden/ViewPublic';

const Navbar = props => {

    const [settingOne, setSettingOne] = useState('');

    useEffect(()=>{
    },[])

    return (
        <Table>
            Navbar{settingOne}
            <SignIn />
            <GardenIndex />
            <ViewPublic />
        </Table>
    );
}

export default Navbar;