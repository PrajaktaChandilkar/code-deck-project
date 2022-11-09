import React, { useContext, useState } from "react";
import styled from "styled-components";
import LeftPane from "./LeftPane";
import RightPane from "./RightPane";
import GlobalStyles from "../../styles/global";
import Modal from "../../components/Modal";
import { ModalContext } from "../../context/ModalContext";

const HomeScreenContainer = styled.div`
    // display: grid;
    // grid-template-columns: 1fr 1.5fr;
    position: relative;
    width: 100%;
    height: 100vh;
`;

const HomeScreen = () => {
    // const [isOpen, setIsOpen]  =useState(false) //local accesing the data
    //globally accesing the data from contexrapi

    const ModalParameter = useContext(ModalContext);
    const isOpen = ModalParameter?.isOpen
    return (
        <HomeScreenContainer>
            <GlobalStyles />
            <LeftPane />
            <RightPane />
            {isOpen === true ? <Modal /> : <></>}
            
        </HomeScreenContainer>
    )
}

export default HomeScreen