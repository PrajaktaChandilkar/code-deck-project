import React from "react";
import styled from "styled-components";
import LeftPane from "./LeftPane";
import RightPane from "./RightPane";
import GlobalStyles from "../../styles/global";

const HomeScreenContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1.5fr;
`;

const HomeScreen = () => {
    return (
        <HomeScreenContainer>
            <GlobalStyles />
            <LeftPane />
            <RightPane />
        </HomeScreenContainer>
    )
}

export default HomeScreen