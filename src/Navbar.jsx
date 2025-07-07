import React from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import AccountIcon from './Icons/AccountIcon';
import BagIcon from './Icons/BagIcon';
import { useDispatch } from 'react-redux';
import ClothesIcon from './Icons/ClothesIcon';

const NavbarContainer = styled.div`
    background-color: white;
    color: black;
    padding: 10px 20px;
    display: flex;
    align-items: center;
`;

const Logo = styled.div`
    font-size: 2.8em;
    padding: 0 2rem 0 2rem;
    font-weight: bold;
    display: flex;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;

    &:hover {
        cursor: pointer;
    }
`;

const NavLinks = styled.div`
    display: flex;
    gap: 2.5rem;
`;

const NavLink = styled.a`
    color: ${props => props.color || 'black'};
    text-decoration: none;
    font-weight: 700;
    font-size: 1.2em;

    &:hover {
        color: ${props => props.color ? 'darkred' : 'lightgray'};
        cursor: pointer;
    }
`;

const IconsContainer = styled.div`
    display: flex;
    gap: 1rem;
`;  

const Navbar = () => {
    const dispatch = useDispatch();
    const handleonClickLogo = () => {
        dispatch({ type: 'GO_TO_CHECKOUT', payload: false });
        dispatch({ type: "CLEAR_ITEM_IN_VIEW" });
        dispatch({ type: "GO_TO_PAYMENT", payload: false });
    }

    const handleOnClickBag=()=>{
        dispatch({ type: 'GO_TO_CHECKOUT', payload: true });
        dispatch({ type: "CLEAR_ITEM_IN_VIEW" });
        dispatch({ type: "GO_TO_PAYMENT", payload: false });
    }

    return (
        <NavbarContainer>
            <Logo
            onClick={handleonClickLogo}
            >
                <ClothesIcon/>
                ReWear
            </Logo>
            <NavLinks>
                <NavLink onClick={handleonClickLogo}>Women</NavLink>
                <NavLink onClick={handleonClickLogo}>Men</NavLink>
                <NavLink onClick={handleonClickLogo}>Sale</NavLink>
                <NavLink onClick={handleonClickLogo} color='#ff4500'>What's New</NavLink>
            </NavLinks>
            <SearchBar />
            <IconsContainer>
                <AccountIcon/>
                <BagIcon onClick={handleOnClickBag}/>
            </IconsContainer>
        </NavbarContainer>
    );
};

export default Navbar;