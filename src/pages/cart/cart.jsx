import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const CartContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;

    @media screen and (min-width: 768px) {
        padding: 4rem;
    }
`;

const CartItemsContainer = styled.div`
    width: 60%;
    margin-bottom: 2rem;

    @media screen and (min-width: 768px) {
        margin-bottom: 4rem;
    }
`;

const CartCheckoutContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const CartCheckoutButton = styled.button`
    background-color: #000;
    color: #fff;
    font-size: 1.2rem;
    font-weight: bold;
    padding: 1rem;
    border: none;
    margin: 1rem;
    cursor: pointer;

    &:hover {
        background-color: #fff;
        color: #000;
        border: 2px solid #000;
    }
`;

const CartEmptyContainer = styled.div`
    text-align: center;
`;

export const Cart = () => {
    const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();

    const navigate = useNavigate();

    return (
        <CartContainer>
            <h1>Your Cart Items</h1>
            <CartItemsContainer>
                {PRODUCTS.map((product) => {
                    if (cartItems[product.id] !== 0) {
                        return <CartItem key={product.id} data={product} />;
                    }
                })}
            </CartItemsContainer>

            {totalAmount > 0 ? (
                <CartCheckoutContainer>
                    <p> Subtotal: Rs.{totalAmount} </p>
                    <CartCheckoutButton onClick={() => navigate("/")}>Continue Shopping</CartCheckoutButton>
                    <CartCheckoutButton
                        onClick={() => {
                            checkout();
                            navigate("/checkout");
                        }}
                    >
                        Checkout
                    </CartCheckoutButton>
                </CartCheckoutContainer>
            ) : (
                <CartEmptyContainer>
                    <h1>Your Shopping Cart is Empty</h1>
                </CartEmptyContainer>
            )}
        </CartContainer>
    );
};
