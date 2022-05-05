import React, { useState } from 'react';
import styled from "styled-components";
import { selectCars } from "../features/car/carSlice";
import { useSelector } from 'react-redux';

function Header() {

    const [burgerStatus, setBurgerStatus] = useState(true);
    const cars = useSelector(selectCars);

    console.log("cars", cars);

    console.log("burgerStatus: ", burgerStatus);

    return (
        <Container>
            <a>
                <img src="/images/logo.svg" alt="" />
            </a>
            <Menu>
                {cars && cars.map((car, index) =>
                    <a key={index} href="#">{car}</a>
                )}
            </Menu>
            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Tesla Account</a>
                <CustomMenu onClick={() => setBurgerStatus(true)}>Menu</CustomMenu>
            </RightMenu>
            <BurgerNav show={burgerStatus}>
                <CloseWrapper>
                    <CustomClose onClick={() => setBurgerStatus(false)}>X</CustomClose>
                </CloseWrapper>
                {cars && cars.map((car, index) =>
                    <li>
                        <a key={index} href="#">{car}</a>
                    </li>
                )}
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Used Inventory</a></li>
                <li><a href="#">Trade-in</a></li>
                <li><a href="#">Cybertruck</a></li>
                <li><a href="#">Roadaster</a></li>
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Existing Inventory</a></li>
            </BurgerNav>
        </Container>
    )
}

export default Header;

const Container = styled.div`
min-height: 60px;
position: fixed;
display: flex;
align-items: center;
top: 0;
left: 0;
right: 0;
z-index: 1;
list-style: none;
padding: 20px;
display: flex;
flex-direction: row;
justify-content: flex-start;
text-align: start;
`

const Menu = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex: 1;

a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: no-wrap;
}

@media(max-width: 768px) {
    display: none;
}
`

const RightMenu = styled.div`
display: flex;
flex-direction: row;
align-items: center;
a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
    flex-wrap: no-wrap;
}
`
const CustomMenu = styled.div`
cursor: pointer;
`

const BurgerNav = styled.div`
position: fixed;
top: 0;
bottom: 0;
right: 0;
background: white;
width: 300px;
z-index: 100;
list-style: none;
padding: 20px;
display: flex;
flex-direction: column;
text-align: start;
transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
transition: transform 0.2s ease-in;

li {
    padding: 15px 0px;
    border-bottom: 1px solid rgba(0, 0, 0, .2);

    a{ 
        font-weight: 600;
    }
}
`

const CustomClose = styled.p`
color: black;
cursor: pointer;
`

const CloseWrapper = styled.div`
display: flex;
justify-content: flex-end;

`