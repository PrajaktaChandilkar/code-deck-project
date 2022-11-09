import React from "react";
import styled from "styled-components";


const StyledLeftPane = styled.div`
    background:black;
    color:white;
    height: 100vh;
    top:0;
    left:0;
    display:flex;
    align-items:center;
    justify-content:center;
    position: fixed;
    width: 40%;
`;

const ContentContainer = styled.div`
    text-align:center;
`
const Logo = styled.img`
    width:160px;
`;

const MainHeading = styled.h1`
    weight: 400;

    span{
        // opacity:75%;
        weight:700;
    }
`;
const AddButton = styled.a`
    border-radious: 2px solid black;
    text-decoration:none;
    color:white;
`

const SubHeading = styled.h2`
    weight: 400;
`;
const Leftpane = () =>{
    return(
        <StyledLeftPane>
            <ContentContainer >
                <Logo src="./logo.png" alt="" />
                <MainHeading ><span>Code</span> Deck</MainHeading>     
                <SubHeading>Code. Compile. Debug</SubHeading> 
                <AddButton href=""> <span>+</span> PlayGround </AddButton> 
            </ContentContainer>
        </StyledLeftPane>
    )
}

export default Leftpane