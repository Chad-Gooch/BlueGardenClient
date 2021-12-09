import React, {useState, useEffect} from 'react';
import {Table} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';

const Login = props => {

    const [settingOne, setSettingOne] = useState('');

    useEffect(()=>{
    },[])

    return (
        <Table>
            Login{settingOne}
        </Table>
    );
}

export default Login;