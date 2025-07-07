import React, { useState } from 'react';
import {useDispatch, useSelector} from "react-redux"
import styled from 'styled-components';

const SidebarContainer = styled.div`
    width: 250px;
    padding: 20px;
    background-color: #f4f4f4;
    border-right: 1px solid #ddd;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    font-family: Arial, sans-serif;
`;

const Section = styled.div`
    display: flex;
    flex-direction: column;
`;

const Label = styled.label`
    margin-bottom: 0.5rem;
    font-weight: bold;
`;

const RadioGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
`;

const RangeInput = styled.input`
    width: 100%;
`;

const PriceLabel = styled.span`
    margin-top: 0.25rem;
    font-size: 0.9rem;
    color: #555;
`;

const Button = styled.button`
    padding: 10px;
    background-color: #ff6347;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
        background-color: #e5533c;
    }
`;

const FilterBar = () => {
    const [color, setColor] = useState('');
    const [size, setSize] = useState('');
    const [price, setPrice] = useState(100);
    const items = useSelector(state => state.items);
    const dispatch = useDispatch();

    console.log("What is the current query: color: ", color, " size: ", size, " price: ", price)

    const handleFilter = () => {
        const filteredItems = items.filter(item => {
            const matchesColor = color ? item.color.toLowerCase() === color.toLowerCase() : true;
            const matchesSize = size ? item.size.toLowerCase() === size.toLowerCase() : true;
            const matchesPrice = parseFloat(Number(item.price)) <= parseFloat(price);
            return matchesColor && matchesSize && matchesPrice;
        });
        dispatch({type: "APPLY_QUERY", payload: filteredItems})
    };

    return (
        <SidebarContainer>
            <Section>
                <Label>Color</Label>
                <RadioGroup>
                    {['Blue', 'Grey', 'Black', 'White', 'Brown'].map((option) => (
                        <label key={option}>
                            <input
                                type="radio"
                                name="color"
                                value={option}
                                checked={color === option}
                                onChange={() => setColor(option)}
                            />{' '}
                            {option}
                        </label>
                    ))}
                </RadioGroup>
            </Section>

            <Section>
                <Label>Size</Label>
                <RadioGroup>
                    {['S', 'M', 'L'].map((option) => (
                        <label key={option}>
                            <input
                                type="radio"
                                name="size"
                                value={option}
                                checked={size === option}
                                onChange={() => setSize(option)}
                            />{' '}
                            {option}
                        </label>
                    ))}
                </RadioGroup>
            </Section>

            <Section>
                <Label>Max Price: ${price}</Label>
                <RangeInput
                    type="range"
                    min="0"
                    max="500"
                    step="10"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                <PriceLabel>0 - 500</PriceLabel>
            </Section>

            <Button onClick={handleFilter}>Apply Filters</Button>
        </SidebarContainer>
    );
};

export default FilterBar;
