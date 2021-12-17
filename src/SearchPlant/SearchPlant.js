import React, {useEffect} from 'react';
//import {Table} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SearchPlant.css';
import SearchResult from './SearchResult';

const SearchPlant = props => {

    let berryHolder = [];
    let item = [];

    async function fetchBerries(i) {
        const response = await fetch(`https://pokeapi.co/api/v2/berry/${i}`)
        .then((response) => response.json()) 
        .then((data) => {
            fetch(data.item.url)
            .then((res) => res.json())
            .then((itemItem)=> item.push(itemItem))
            berryHolder.push(data)}
        );
    };

    useEffect(()=>{
        for(let i = 1; i < 50; i++){
            fetchBerries(i);
        };
    },[]);

    return (
        <div>
            <p>test title</p>
            <SearchResult berryHolder ={berryHolder} item={item}/>
        </div>
    );
}

export default SearchPlant;