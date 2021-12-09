import React, {useState, useEffect} from 'react';
import {Table} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AddPlant.css';

const AddPlant = props => {

    const [settingOne, setSettingOne] = useState('');

    useEffect(()=>{
    },[])

    return (
        <Table>AddPlant{settingOne}
        </Table>
    );
}

export default AddPlant;