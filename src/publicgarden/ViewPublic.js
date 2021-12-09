import React, {useState, useEffect} from 'react';
import {Table} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ViewPublic.css';

const ViewPublic = props => {

    const [settingOne, setSettingOne] = useState('');

    useEffect(()=>{
    },[])

    return (
        <Table>ViewPublic{settingOne}</Table>
    );
}

export default ViewPublic;