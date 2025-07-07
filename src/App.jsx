import './App.css'
import React from 'react'
import {useSelector} from "react-redux"
import Navbar from './Navbar';
import ProductsPage from './ProductsPage';
import ItemView from './ItemView';
import CheckoutPage from './CheckoutPage';
import PaymentPage from './PaymentPage'; // Assuming you have a PaymentPage component
import FilterBar from './FilterBar';
import styled from 'styled-components';

const StyledPageContainer = styled.div`
  flex-direction: row;
  display: flex;
  margin: 0 auto;
`

function App() {
  const query = useSelector((state) => state.currentQuery);
  const itemInView = useSelector((state) => state.itemInView);
  const isCheckout = useSelector((state) => state.isCheckout);
  const isPayment = useSelector((state) => state.isPayment);

  return (
    <>
    <div>
      <Navbar/>
      <StyledPageContainer>
      {!itemInView && !isCheckout && !isPayment && <FilterBar />}
      {
        isPayment ? (
          <PaymentPage />
        ) : (
          !isCheckout && (
            itemInView ? <ItemView itemInView={itemInView}/> 
            : <ProductsPage currentQuery={query} />
          )
        )
      }
      {isCheckout && !isPayment && <CheckoutPage />}
      </StyledPageContainer>
    </div>
    </>
  )
}

export default App
