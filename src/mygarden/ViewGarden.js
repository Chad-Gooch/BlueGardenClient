import React, {useState, useEffect} from 'react';
import {Table} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ViewGarden.css';
import AddPlant from './AddPlant';
import ChangePlant from './ChangePlant';

const ViewGarden = props => {

    const [settingOne, setSettingOne] = useState('');

    useEffect(()=>{
    },[])

    return (
        <Table>
            ViewGarden{settingOne}
            <AddPlant />
            <ChangePlant />    
        </Table>
        
    );
}

export default ViewGarden;