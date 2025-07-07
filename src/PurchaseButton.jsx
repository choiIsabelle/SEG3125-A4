import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

const Button = styled.button`
    background-color: #ff6347; /* Tomato color */
    color: white;
    font-weight: bold;
    border-radius: 8px;
    &:hover {
        background-color: #ff4500; /* Darker shade on hover */
    }
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Modal = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 1000;
`;

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
`;

const PurchaseButton = ({ itemInView }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const handleOnClick = () => {
        dispatch({ type: 'ADD_TO_CART', payload: itemInView });
        console.log('Item added to cart:', itemInView);
        setIsModalOpen(true); // Open the modal
    };

    const closeModal = () => {
        setIsModalOpen(false); // Close the modal
    };

    const handleCheckout = () => {
        dispatch({ type: 'GO_TO_CHECKOUT', payload: true });
        dispatch({ type: "CLEAR_ITEM_IN_VIEW" }); // Clear the item in view
        console.log("What's in the cart:", cart);
        console.log('Proceeding to checkout');
        closeModal(); // Close the modal after proceeding to checkout
    }

    return (
        <>
            <ButtonContainer>
                <Button onClick={handleOnClick}>ADD TO CART</Button>
            </ButtonContainer>
            {isModalOpen && (
                <>
                    <Overlay onClick={closeModal} />
                    <Modal>
                        <p>Item successfully added to cart!</p>
                        <Button onClick={closeModal}>Continue shopping</Button>
                        <Button
                            onClick={handleCheckout}
                        >Go to checkout
                        </Button>
                    </Modal>
                </>
            )}
        </>
    );
};

export default PurchaseButton;