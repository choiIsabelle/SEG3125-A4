import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

const Button = styled.button`
    background-color: #ff6347; /* Tomato color */
    color: white;
    font-weight: bold;
    border-radius: 8px;
    &:hover {
        background-color: #ff4500; /* Darker shade on hover */
    }
`;

const CheckoutPage = () => {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const handleCheckout = () => {
        dispatch({ type: 'GO_TO_PAYMENT', payload: true });
    }

    const handleGoToShop = () =>{
        dispatch({ type: 'GO_TO_CHECKOUT', payload: false });
        dispatch({ type: "CLEAR_ITEM_IN_VIEW" });
        dispatch({ type: "GO_TO_PAYMENT", payload: false });    
    }

    const calculateTotal = () => {
        return cart.reduce((total, item) => total + Number(item.productPrice) * 1, 0).toFixed(2);
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>My Cart</h2>
            {cart.length === 0 ? (
                <div>
                    <p>Your cart is empty.</p>
                    <Button onClick={handleGoToShop}>SHOP NEW ARRIVALS</Button>
                </div>
            ) : (
                <div>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr>
                                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Item</th>
                                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Quantity</th>
                                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Price</th>
                                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item, index) => (
                                <tr key={index}>
                                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.productName}</td>
                                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>1</td>
                                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>${Number(item.productPrice).toFixed(2)}</td>
                                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                                        ${Number((item.productPrice * 1)).toFixed(2)}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <h2 style={{ marginTop: '20px' }}>Total: ${calculateTotal()} CAD</h2>
                    <Button 
                        onClick={handleCheckout}
                    >
                        PROCEED TO PAYMENT
                    </Button>
                </div>
            )}
        </div>
    );
};

export default CheckoutPage;