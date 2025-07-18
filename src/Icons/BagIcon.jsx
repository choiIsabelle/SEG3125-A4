import React from 'react';
import styled from 'styled-components';

const StyledIconContainer = styled.div`
    &:hover {
        cursor: pointer;
    }
    `;

const BagIcon = ({ width = 24, height = 24, fill = 'currentColor', onClick }) => (
    <StyledIconContainer>
    <svg
        height={height}
        width={width}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        focusable="false"
        role="img"
        aria-labelledby="icon_bag"
        aria-hidden="false"
        onClick={onClick}
    >
        <title id="icon_bag">bagIcon</title>
        <path
            d="M20 6.25h-3.25c-.68-3.62-2.53-6-4.75-6s-4.07 2.38-4.75 6H4a.76.76 0 0 0-.75.75v12A4.75 4.75 0 0 0 8 23.75h8A4.75 4.75 0 0 0 20.75 19V7a.76.76 0 0 0-.75-.75m-8-4.5c1.38 0 2.66 1.84 3.22 4.5H8.78c.56-2.66 1.84-4.5 3.22-4.5M19.25 19A3.26 3.26 0 0 1 16 22.25H8A3.26 3.26 0 0 1 4.75 19V7.75H7l-.24 2.16.49.06a1 1 0 0 0 1.12-.87l.17-1.35h6.92l.17 1.35a1 1 0 0 0 1.12.87l.49-.06L17 7.75h2.28z"
            fill={fill}
            fillRule="evenodd"
        ></path>
    </svg>
    </StyledIconContainer>
);

export default BagIcon;