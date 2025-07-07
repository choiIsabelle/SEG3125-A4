import React from 'react';
import styled from 'styled-components';
import SearchIcon from './Icons/SearchIcon';
import {useSelector, useDispatch} from "react-redux"

const SearchBarContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px;
`;

const InputWrapper = styled.div`
    position: relative;
    width: 300px;
`;

const Input = styled.input`
    width: 90%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
`;

const IconWrapper = styled.div`
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    pointer-events: none; /* Prevent the icon from blocking input interactions */
`;

const SearchBar = () => {
    const currentQuery = useSelector((state) => state.currentQuery);
    const dispatch = useDispatch();

    const handleSearchChange = (event) => {
        const query = event.target.value;
        dispatch({ type: 'SET_CURRENT_QUERY', payload: query });
    }

    return (
        <SearchBarContainer>
            <InputWrapper>
                <Input 
                    type="text" 
                    placeholder="Search"
                    value={currentQuery} 
                    onChange={handleSearchChange}
                    />
                <IconWrapper>
                    <SearchIcon width={24} height={24} fill="#000" />
                </IconWrapper>
            </InputWrapper>
        </SearchBarContainer>
    );
};

export default SearchBar;