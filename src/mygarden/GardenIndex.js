import React, {useState, useEffect} from 'react';
import {Table} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './GardenIndex.css';
import ViewGarden from './ViewGarden';

const GardenIndex = props => {

    const [settingOne, setSettingOne] = useState('');

    useEffect(()=>{
    },[])

    return (
        <Table>
            GardenIndex{settingOne}
            <ViewGarden />
        </Table>
    );
}

export default GardenIndex;