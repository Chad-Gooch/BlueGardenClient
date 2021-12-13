import React, {useState, useEffect} from 'react';
//import {Table} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SignIn.css';
import Login from './Login';
import CreateLogin from './CreateLogin';

const SignIn = props => {

    const [settingOne, setSettingOne] = useState(true);

    useEffect(()=>{
    },[]);

    return (
        <div>            
            {settingOne ? <Login updateToken={props.updateToken} setSettingOne={setSettingOne} current={settingOne}/> : <CreateLogin updateToken={props.updateToken} setSettingOne={setSettingOne} current={settingOne}/>}
        </div>
    );
}

export default SignIn;