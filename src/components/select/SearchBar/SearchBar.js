import React, { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import './SearchBar.css';
import { useDispatch } from 'react-redux';
import { addPartyMember } from '../../../store/store';

const moogleAPI = "https://www.moogleapi.com/api/v1/characters/search?name=";

const SearchBar = () => {
    const [searchValue, setSearchValue] = useState('');
    const [listItems, setListItems] = useState([]);
    const firstUpdate = useRef(true);
    const dispatch = useDispatch();
    const party = useSelector(state => state.party.party)

    async function getCharacterData() {
        await axios.get(`${moogleAPI}` + searchValue, {
                headers: {'Access-Control-Allow-Origin': '*'}
            })
            .then(res => {
                setListItems(res.data);
            })
            .catch(error => {console.log(error)})
    }

    useEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false;
            return;
        }
        getCharacterData(searchValue);
    }, [searchValue])

    function addToParty(listItem) {
        if (party.length >= 5) {
            window.alert("Party cannot be larger than 5 members.");
        } else {
            dispatch(addPartyMember(listItem));
        }
    }

    return (
        <div className="window searchBar">
            <input 
                placeholder={'Search...'}
                onChange={(e) => {
                    if (e.target.value.length < 1) {
                        setListItems([]);
                    } else {
                    setSearchValue(e.target.value.replace(/\s/g, ''))
                }}}
            />
            {/* Unfortunately, the input can be super slow. Look into controlled vs uncontrolled components? or maybe useMemo?? */}
            <div>
                <ul>
                    {listItems.hasOwnProperty("message") ? (<div>Couldn't find that character.</div>) // API returns object with single property: "message" when it can't find a character
                        : listItems.map((listItem) => {
                            return (
                                <li className="searchBarResult" key={listItem.id} onClick={() => addToParty(listItem)}>
                                    {listItem.name} {listItem.job} {listItem.age} {listItem.origin}
                                </li>
                            )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default SearchBar;