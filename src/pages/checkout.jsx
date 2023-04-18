import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CheckoutContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: all 0.3s ease;
    width: 100%;
    max-width: 500px;
    padding: 20px;
`;

const Input = styled.input`
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border: none;
    border-radius: 5px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
`;

const Button = styled.button`
    display: block;
    width: 100%;
    padding: 10px;
    background-color: #000;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;

    &:hover {
        background-color: #222;
    }
`;

export const Checkout = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post("/api/checkout", {
                name,
                email,
                phone,
                address,
            });
            console.log(response.data); // log the response from the server
        } catch (error) {
            console.error(error);
        }
    };

    const navigate = useNavigate();

    return (
        <CheckoutContainer>
            <Form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    required
                />
                <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                />
                <Input
                    type="tel"
                    placeholder="Phone number"
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                    required
                />
                <Input
                    type="text"
                    placeholder="Shipping address"
                    value={address}
                    onChange={(event) => setAddress(event.target.value)}
                    required
                />
                <Button type="submit" onClick={() => navigate("/")}>
                    Submit Order
                </Button>
            </Form>
        </CheckoutContainer>
    );
};
