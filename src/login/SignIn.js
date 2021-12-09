import React, {useState, useEffect} from 'react';
import {Table} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SignIn.css';
import Login from './Login';
import CreateLogin from './CreateLogin';

const SignIn = props => {

    const [settingOne, setSettingOne] = useState('');

    useEffect(()=>{
    },[])

    return (
        <Table>
            SignIn{settingOne}
            <Login />
            <CreateLogin />
        </Table>
    );
}

export default SignIn;