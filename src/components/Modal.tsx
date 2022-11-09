import React, { useContext } from "react";
import styled from "styled-components";
import { IoCloseOutline } from "react-icons/io5";
import { ModalContext } from "../context/ModalContext";

const ModalContainer = styled.div`
    background:rgba(0,0,0,0.4);
    position: fixed;
    width 100%;
    height: 100vh;
    z-index:2;
    display:flex;
    align-items:center;
    justify-content:center;
`;

const ModalContent = styled.div`
    background:white;
    width:30%;
    padding:20px;
    align-items: center;
    text-align:center;
    border-radius: 10px;
`;

const Header = styled.div`
    display: flex;
    justify-content:space-between;
`;

const Heading = styled.div`
    font-weight: bold;
`;

const CloseButton = styled.button`
    cursor:pointer;
    border:none;
    color:red;
    background: transparent;
    font-size:1rem;
    font-weight: 900;

    &:hover{
        scale:1.5;
    }
`;
const Modal = () => {
    const ModalParameter = useContext(ModalContext)
    const setIsOpen = ModalParameter?.setIsOpen

    return (
        <ModalContainer>
            <ModalContent>
                <Header>
                    <Heading>Update Folder Name</Heading>
                    <CloseButton onClick={()=>{
                        if(setIsOpen) setIsOpen(false)
                    }}>
                       <IoCloseOutline/>
                    </CloseButton>
                </Header>
            </ModalContent>
        </ModalContainer>
    )
}

export default Modal