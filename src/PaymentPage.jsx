import React, { useState } from 'react';
import styled from 'styled-components';
import StyledInput from './StyledInput';
import CardsIcon from './Icons/CardsIcon';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import SurveyPage from './SurveyPage';

const PaymentContainer = styled.div`
    background-color: #f2f2f2;
    margin: 0 auto;
    width: 100vw;
    height: 100vh;
`;

const PayPortalContainer = styled.div`
    width: 50%;
    gap: 1rem;
    max-height: 100vh;
    overflow-y: auto;
    margin: 0 auto;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    background-color: white;
`;

const Title = styled.h1`
    padding: 1rem;
    font-size: 2.5rem;
    color: black;
`;

const SectionContainer = styled.div`
    display: flex;
    align-items: left;
    flex-direction: column;
`;

const SectionTitle = styled.h2`
    font-size: 1.5rem;
    margin: 0;
    align-self: flex-start;
    color: black;
`;

const Button = styled.button`
    background-color: #ff6347;
    color: white;
    font-weight: bold;
    border-radius: 8px;
    &:hover {
        background-color: #ff4500;
    }
`;

const Modal = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 1000;
`;

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
`;

const PaymentPage = () => {
    const dispatch = useDispatch();
    const openSurvey = useSelector((state) => state.isSurvey);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handlePlaceOrder = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleOpenSurvey = () => {
        dispatch({type: "GO_TO_SURVEY", payload: true});
    }

    const handleGoToShop = () =>{
        dispatch({ type: 'GO_TO_CHECKOUT', payload: false });
        dispatch({ type: "CLEAR_ITEM_IN_VIEW" });
        dispatch({ type: "GO_TO_PAYMENT", payload: false });    
    }

    if (openSurvey) {
        return <SurveyPage />;
    }

    return (
        <PaymentContainer>
            <Title>Checkout</Title>
            <PayPortalContainer>
                <SectionContainer>
                    <SectionTitle>Contact information</SectionTitle>
                    <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
                        <StyledInput label="Email address" />
                        <StyledInput label="Phone number" />
                    </div>
                    <StyledInput label="Enter a street address" />
                </SectionContainer>
                <SectionContainer>
                    <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
                        <CardsIcon />
                        <SectionTitle>Pay With Credit Card</SectionTitle>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
                        <StyledInput label="Credit card number" />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
                        <StyledInput label="Expiration date (MONTH/YEAR)" />
                        <StyledInput label="Security code" />
                    </div>
                    <StyledInput label="Name on card" />
                </SectionContainer>
                <Button onClick={handlePlaceOrder}>PLACE ORDER</Button>
            </PayPortalContainer>

            {isModalOpen && (
                <>
                    <Overlay onClick={handleCloseModal} />
                    <Modal>
                        <h2>Order Confirmed!</h2>
                        <p>Your order has been successfully placed.</p>
                        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                            <Button onClick={handleOpenSurvey}>Take Survey</Button>
                            <Button onClick={handleGoToShop}>Go to Main Page</Button>
                        </div>
                    </Modal>
                </>
            )}
        </PaymentContainer>
    );
};

export default PaymentPage;