import { configureStore } from '@reduxjs/toolkit';

const reducerFn = (state=
    {
        currentQuery: "", 
        purchasedItems: [],
        itemInView: null,
        cart: [],
        isCheckout: false,
        isSurvey: false,
        items: [
            { id: 1, name: "Crewneck sweater", price: "98", imageSrc: "./image.png", color: "White", size: "S" },
            { id: 2, name: "Linen shorts", price: "128", imageSrc: "./linen.png", color: "White", size: "S" },
            { id: 3, name: "Denim jacket", price: "100.5", imageSrc: "./denim_jacket.png", color: "Grey", size: "S" },
            { id: 4, name: "Straight leg jeans", price: "128", imageSrc: "./jeans.png", color: "Blue", size: "L" },
            { id: 5, name: "Corduroy pants", price: "130", imageSrc: "./corduroy_pants.png", color: "White", size: "M" },
            { id: 6, name: "Navy sweater", price: "60", imageSrc: "./sweater.png", color: "Navy", size: "S" },
            { id: 7, name: "Slouchy bag", price: "128", imageSrc: "./bag.png", color: "Brown", size: "One Size" },
            { id: 8, name: "Cargo pants", price: "64", imageSrc: "./cargo.png", color: "Brown", size: "L" },
        ],
        itemsToShow: [
            { id: 1, name: "Crewneck sweater", price: "98", imageSrc: "./image.png", color: "White", size: "S" },
            { id: 2, name: "Linen shorts", price: "128", imageSrc: "./linen.png", color: "White", size: "S" },
            { id: 3, name: "Denim jacket", price: "100.5", imageSrc: "./denim_jacket.png", color: "Grey", size: "S" },
            { id: 4, name: "Straight leg jeans", price: "128", imageSrc: "./jeans.png", color: "Blue", size: "L" },
            { id: 5, name: "Corduroy pants", price: "130", imageSrc: "./corduroy_pants.png", color: "White", size: "M" },
            { id: 6, name: "Navy sweater", price: "60", imageSrc: "./sweater.png", color: "Navy", size: "S" },
            { id: 7, name: "Slouchy bag", price: "128", imageSrc: "./bag.png", color: "Brown", size: "One Size" },
            { id: 8, name: "Cargo pants", price: "64", imageSrc: "./cargo.png", color: "Brown", size: "L" },
        ]
    }, action) => {

    // Synchronous function
    // We should not mutate the state directly 
    if(action.type == 'SET_CURRENT_QUERY') {
        return {
            ...state,
            currentQuery: action.payload
        };
    }
    if(action.type == 'PURCHASE_ITEM') {
        return {
            ...state,
            purchasedItems: [...state.purchasedItems, action.payload]
        }
    } 
    if(action.type == 'SET_ITEM_IN_VIEW') {
        return {
            ...state,
            itemInView: action.payload 
        };
    }
    if(action.type == 'CLEAR_ITEM_IN_VIEW') {
        return {
            ...state,
            itemInView: null
        };
    }
    if(action.type == 'ADD_TO_CART') {
        return {
            ...state,
            cart: [...state.cart, action.payload]
        };
    }
    if(action.type == "GO_TO_CHECKOUT") {
        return {
            ...state,
            isCheckout: action.payload
        };
    }
    if(action.type == "GO_TO_PAYMENT") {
        return {
            ...state,
            isPayment: action.payload
        };
    }
    if(action.type == "GO_TO_SURVEY"){
        return {
            ...state,
            isSurvey: action.payload
        }
    }
    if(action.type =="APPLY_QUERY"){
        return {
            ...state,
            itemsToShow: action.payload
        }
    }
    return state;  
};

const store = configureStore({
    reducer: reducerFn
});

export default store;