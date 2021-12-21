import React, {useEffect} from 'react';
//import {Table} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './GardenIndex.css';
import ViewGarden from './ViewGarden';


const GardenIndex = props => {

    useEffect(()=>{
    },[])

    return (
        <div>
           <ViewGarden token={props.token} berryHolder={props.berryHolder}/>
        </div>
    );
}

export default GardenIndex;