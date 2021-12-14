import React, {useState, useEffect} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';

const Login = props => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    let handleSubmit = event => {
        event.preventDefault();
        fetch('http://localhost:5000/login/', {
           method: 'POST',
           body: JSON.stringify({user:{email:username, password:password}}),
           headers: new Headers ({
               'Content-Type':'application/json'
           })
        }).then(
           (response) => response.json()
        ) .then((data) => {
           props.updateToken(data.sessionToken);
           console.log(data.sessionToken)
        })
    }

    return(
        <div>
            <Button  onClick={()=>props.setSettingOne(!props.current)}>Create an account</Button>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor='username'>Username</Label>
                    <Input onChange={(e) => setUsername(e.target.value)} name='username' value={username} />
                </FormGroup>
                <FormGroup>
                <Label htmlFor='password'>Password</Label>
                    <Input onChange={(e) => setPassword(e.target.value)} name='password' value={password} />
                </FormGroup>
                <Button type='submit'>Login</Button>
            </Form>
        </div>
    )
}

export default Login;