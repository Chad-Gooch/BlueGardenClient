import React, {useState, useEffect} from 'react';
import {Table} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CreateLogin.css';

const CreateLogin = props => {

    const [settingOne, setSettingOne] = useState('CreateLogin');

    useEffect(()=>{
    },[])

    return (
        <Table>{settingOne}</Table>
    );
}

export default CreateLogin;