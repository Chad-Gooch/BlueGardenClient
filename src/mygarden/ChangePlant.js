import React, {useState, useEffect} from 'react';
import {Table} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ChangePlant.css';

const ChangePlant = props => {

    const [settingOne, setSettingOne] = useState('');

    useEffect(()=>{
    },[])

    return (
        <Table>ChangePlant{settingOne}</Table>
    );
}

export default ChangePlant;