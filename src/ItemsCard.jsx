import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import PurchaseButton from './PurchaseButton';

const Card = styled.div`
    max-width: 300px;
    border: 1px solid #ddd;
    padding: 16px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    background-color: #fff;
    text-align: center;

    &: hover {
        cursor: pointer;
    }
`;

const Image = styled.img`
    width: 100%;
    height: auto;
`;

const Title = styled.h2`
    font-size: 1.5rem;
    margin: 16px 0 8px;
    color: #333;
`;

const Price = styled.p`
    font-size: 1.2rem;
    color: #666;
    margin-bottom: 16px;
`;

const ItemsCard = ({ imageSrc, productName, productPrice }) => {
    const dispatch = useDispatch();

    const handleOnClick = () => {
        dispatch({type: "SET_ITEM_IN_VIEW", payload: { productName, productPrice, imageSrc }});
    }
    return (
        <Card onClick={handleOnClick}>
            <Image src={imageSrc} alt={productName} />
            <Title>{productName}</Title>
            <Price>${productPrice} CAD</Price>
            <PurchaseButton itemInView={{ imageSrc, productName, productPrice }} />
        </Card>
    );
};

export default ItemsCard;