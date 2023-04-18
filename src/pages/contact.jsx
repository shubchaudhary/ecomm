import React from "react";
import styled from "styled-components";
import aboutImage from "../assets/about-image.jpg";

const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
`;

const AboutHeader = styled.h1`
    font-size: 48px;
    font-weight: bold;
    margin-bottom: 32px;
`;

const AboutImage = styled.img`
    width: 100%;
    max-width: 400px;
    margin-bottom: 64px;
`;

const AboutText = styled.p`
    font-size: 24px;
    line-height: 1.5;
    text-align: center;
    max-width: 800px;
    margin-bottom: 64px;
`;

export const Contact = () => {
    return (
        <AboutContainer>
            <AboutHeader>About E-comm</AboutHeader>
            <AboutImage src={aboutImage} />
            <AboutText>
                E-comm is a premier online retailer offering a wide range of products from the world's leading brands.
                We pride ourselves on providing exceptional customer service and an unparalleled shopping experience.
            </AboutText>
        </AboutContainer>
    );
};
