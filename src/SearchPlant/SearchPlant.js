import React, {useEffect} from 'react';
import {Button} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SearchPlant.css';
import SearchResult from './SearchResult';

const SearchPlant = props => {

    useEffect(()=>{
        props.combine();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    return (
        <div>
            {(props.berryHolder.length === 0) ? <Button onClick={() => props.combine()}>Show Berries</Button> : <SearchResult berryHolder={props.berryHolder} token={props.token} />}
        </div>
    );
}

export default SearchPlant;