import React from 'react';
import styled from 'styled-components';

const StyledInputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 10px 0;
`;

const Label = styled.label`
    font-size: 14px;
    margin-bottom: 5px;
    color: #333;
`;

const Input = styled.input`
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 14px;
`;

const StyledInput = ({ label }) => {
    return (
        <StyledInputWrapper>
            <Label>{label}</Label>
            <Input />
        </StyledInputWrapper>
    );
};

export default StyledInput;