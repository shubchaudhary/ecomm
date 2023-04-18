import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import styled from "styled-components";

const CartItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 20px;
    padding: 10px;
    border: 1px solid #ddd;

    @media (min-width: 768px) {
        flex-direction: row;
    }
`;

const ImageWrapper = styled.div`
    width: 100%;
    margin-bottom: 10px;

    img {
        width: 100%;
    }

    @media (min-width: 768px) {
        width: 30%;
        margin-right: 20px;
        margin-bottom: 0;

        img {
            width: 100%;
        }
    }
`;

const DescriptionWrapper = styled.div`
    width: 100%;

    p {
        margin: 0;
        font-size: 1.2rem;
    }

    @media (min-width: 768px) {
        width: 70%;
    }
`;

const CountHandlerWrapper = styled.div`
    display: flex;
    align-items: center;

    button {
        background-color: #ddd;
        border: none;
        color: #333;
        font-size: 1.2rem;
        cursor: pointer;
        padding: 5px 10px;
        margin-right: 10px;
    }

    input {
        width: 30px;
        text-align: center;
        font-size: 1.2rem;
        border: none;
        border-bottom: 1px solid #ddd;
        margin-right: 10px;
    }

    @media (min-width: 768px) {
        justify-content: flex-end;
    }
`;

export const CartItem = (props) => {
    const { id, productName, price, productImage } = props.data;
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);

    return (
        <CartItemWrapper>
            <ImageWrapper>
                <img src={productImage} alt={productName} />
            </ImageWrapper>
            <DescriptionWrapper>
                <p>
                    <b>{productName}</b>
                </p>
                <p>Price: Rs.{price}</p>
            </DescriptionWrapper>
            <CountHandlerWrapper>
                <button onClick={() => removeFromCart(id)}> - </button>
                <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)} />
                <button onClick={() => addToCart(id)}> + </button>
            </CountHandlerWrapper>
        </CartItemWrapper>
    );
};
