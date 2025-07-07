import React from "react";
import {useSelector} from "react-redux"
import styled from "styled-components";
import ItemsCard from "./ItemsCard";


const ProductsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    padding: 16px;
`;

const ProductsPage = () => {
    const currentQuery = useSelector((state) => state.currentQuery);
    const items = useSelector((state) => state.items);
    const itemsToShow = useSelector((state) => state.itemsToShow);

    // const filteredItems = items.filter((item) =>
    //     item.name.toLowerCase().includes(currentQuery.toLowerCase())
    // );

    const getItems = () => {
        if (!currentQuery || currentQuery.trim() === "") {
            return itemsToShow;
        }
        return items.filter((item) =>
            item.name.toLowerCase().includes(currentQuery.toLowerCase())
        );
    };
    

    return (
        <ProductsGrid>
            {getItems().map((item) => (
                <ItemsCard 
                    key={item.id} 
                    productName={item.name} 
                    productPrice={item.price} 
                    imageSrc={item.imageSrc}
                    
                    />
            ))}
        </ProductsGrid>
    );
};

export default ProductsPage;