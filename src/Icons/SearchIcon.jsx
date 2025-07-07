import React from 'react';

const SearchIcon = ({ width = 20, height = 20, fill = 'currentColor' }) => {
    return (
        <svg
            viewBox="0 0 20 20"
            className="Icon_Icon__uZZKy"
            style={{ width: `${width}px`, height: `${height}px` }}
        >
            <path
                fillRule="evenodd"
                d="M12.323 13.383a5.5 5.5 0 1 1 1.06-1.06l2.897 2.897a.75.75 0 1 1-1.06 1.06l-2.897-2.897Zm.677-4.383a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
                fill={fill}
            ></path>
        </svg>
    );
};

export default SearchIcon;