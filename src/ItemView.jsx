import React from 'react'
import styled from 'styled-components';
import PurchaseButton from './PurchaseButton';

const Card = styled.div`
    width: 300px;
    height: 400px;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    margin-left: 10rem;
    background-color: #fff;
    text-align: center;
    
    &: hover {
        cursor: pointer;
        }
`;

const ItemContainer = styled.div`
    flex-direction: row;
    display: flex;
    `

const Title = styled.h2`
    font-size: 2rem;
    margin: 16px 0 8px;
    font-weight: bold;
    `
const Price = styled.p`
    font-size: 1.2rem;
    color: black;
    font-weight: 600;
    margin-bottom: 16px;
`;


const InfosContainer = styled.div`
    display: flex;
    padding: 16px;
    flex-direction: column;
    justify-content: left;
    align-items: flex-start;
    `

const DetailsContainer = styled.div`
    align-items: baseline;
    display: flex;
    gap: 0.75rem;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
`;


const ItemView = ({itemInView}) => {
    console.log("Are these undefined or something: ", itemInView);
    const { productName, productPrice, imageSrc } = itemInView;
  return (
    <ItemContainer>
    <Card>
        <Image src={imageSrc} />
    </Card>
    <InfosContainer>
        <Title>{productName}</Title>
        <DetailsContainer><Price>${productPrice}</Price>CAD</DetailsContainer>
        <p>Description: Pre-owned fashion piece that is certified by ReWear.</p>
    <PurchaseButton 
        itemInView={{ imageSrc, productName, productPrice }}
    />
    </InfosContainer>
    </ItemContainer>
  )
}

export default ItemView