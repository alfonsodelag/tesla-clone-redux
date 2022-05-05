import React from 'react';
import styled from "styled-components";
import Section from './Section';


function Home() {
    return (
        <Container>
            <Section
                title="Model S"
                description="Order Online for Touchless Delivery"
                backgroundImage="model-s.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"
            />
            <Section
                title="Model Y"
                description="Order Online for Touchless Delivery"
                backgroundImage="model-y.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"
            />
            <Section
                title="Model 3"
                description="Order Online for Touchless Delivery"
                backgroundImage="model-3.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"
            />
            <Section
                title="Model X"
                description="Order Online for Touchless Delivery"
                backgroundImage="model-x.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"
            />
            <Section
                title="Lowest Cost Solar Panels in America"
                description="Money-back guarantee"
                backgroundImage="solar-panel.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"
            />
            <Section
                title="Accesories"
                description=""
                backgroundImage="accessories.jpg"
                leftBtnText="Shop now"
            />
        </Container>
    )
}

export default Home;

const Container = styled.div`
height: 100vh;
`