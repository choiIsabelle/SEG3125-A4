const CardsIcon = ({ width = 48, height = 32, fill = "currentColor" }) => (
    <svg
        height={height}
        width={width}
        viewBox="0 0 48 32"
        xmlns="http://www.w3.org/2000/svg"
        focusable="false"
        role="img"
        aria-labelledby="icon-title"
        aria-hidden="false"
    >
        <title id="icon-title">Credit card</title>
        <g fill="none" fillRule="evenodd">
            <g stroke={fill} strokeWidth="1.5">
                <rect height="20" width="30" rx=".75" x="1" y="11"></rect>
                <rect height="4" width="6" rx=".75" x="5" y="16"></rect>
                <path d="M17 10.742V1.91c0-.502.448-.909 1-.909h28c.552 0 1 .407 1 .91v18.18c0 .503-.448.91-1 .91H31"></path>
                <path d="M17.5 4h28v3h-28z" fill={fill}></path>
            </g>
            <path
                d="M27.25 23.5H13V23c0-.552.336-1 .75-1H28v.5c0 .552-.336 1-.75 1m.167 3H21V26c0-.274.062-.53.173-.71a.8.8 0 0 1 .145-.182.4.4 0 0 1 .227-.108H28v.5c0 .268-.061.546-.178.726a.8.8 0 0 1-.156.18.4.4 0 0 1-.25.094z"
                fill={fill}
                fillRule="nonzero"
            ></path>
        </g>
    </svg>
);

export default CardsIcon;