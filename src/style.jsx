import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #0f0f0f;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.div`
background-color: #fff;
width: 20%;
min-height: 350px;
box-shadow: rgb(255, 255, 255) 0px 1px 5px 5px;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

