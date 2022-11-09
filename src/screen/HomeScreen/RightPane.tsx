import React from "react";
import styled from "styled-components";

const StyledRightPane = styled.div`
    padding: 2rem;
    background:#fafafa;
`;

const Header = styled.div`
    display: flex;
    align-items:center;
    justify-content: space-between;
    position: relative;

    &:: after{
        position: absolute;
        content:"";
        bottom: 0.6rem;
        width: 100%;
        height: 2px;
        background:rgba(0,0,0,0.25);
    }
`;

const Heading = styled.h3`
    font-weight:400;
    font-size:1.8rem;
    span{
        font-weight:800;
    }

`;

const AddButton = styled.button`
    display: flex;
    gap: 0.5rem;
    align-items: center;
    background: transparent;
    border:0;
    outline: 0;
    cursor:pointer;
    font-size: 1.1rem;
    span{
        font-weight: 700;
        font-size: 1.5rem;
    }

    transition: all 0.25s ease;
    &:hover{
        opacity: 0.75;
        scale:1.1;
    }
`;
const RightPane = () => {
    return (
        <StyledRightPane>
            <Header>
                <Heading>My <span>PlayGround</span></Heading>
                <AddButton> <span>+</span>New Folder</AddButton>
            </Header>
        </StyledRightPane>
    )
}

export default RightPane