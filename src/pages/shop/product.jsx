import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import styled from "styled-components";

const ProductContainer = styled.div`
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: all 0.3s ease;
    width: 28%;
    margin-right: 5%;
    margin-bottom: 30px;
    display: inline-block;

    /* Add media query for smaller screens */
    @media (max-width: 768px) {
        width: 45%;
    }

    /* Add media query for even smaller screens */
    @media (max-width: 480px) {
        width: 100%;
        margin-right: 0;
    }

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
    }

    &:last-child {
        margin-right: 0;
    }
`;

const ProductImage = styled.img`
    width: 100%;
    height: auto;
`;

const ProductDescription = styled.div`
    padding: 20px;
    text-align: center;
`;

const ProductTitle = styled.p`
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 10px;
`;

const ProductPrice = styled.p`
    font-size: 16px;
    margin-bottom: 20px;
`;

const AddToCartButton = styled.button`
    display: block;
    width: 100%;
    padding: 10px;
    background-color: #000;
    color: #fff;
    border: none;
    border-radius: 0px 0px 10px 10px;
    font-size: 16px;
    cursor: pointer;

    &:hover {
        background-color: #222;
    }
`;

export const Product = (props) => {
    const { id, productName, price, productImage } = props.data;
    const { addToCart, cartItems } = useContext(ShopContext);

    const cartItemCount = cartItems[id];

    return (
        <ProductContainer>
            <ProductImage src={productImage} />
            <ProductDescription>
                <ProductTitle>{productName}</ProductTitle>
                <ProductPrice>Rs.{price}</ProductPrice>
                <AddToCartButton onClick={() => addToCart(id)}>
                    Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
                </AddToCartButton>
            </ProductDescription>
        </ProductContainer>
    );
};
