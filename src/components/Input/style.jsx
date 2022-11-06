import styled from "styled-components";

export const InputContainer = styled.div`
    width: 100%;
    height: 75px;
    background-color: #2e2e2f;

    display: flex;
    align-items: center;
    justify-content: flex-end;

    font-size: 24px;
    font-family: 'roboto';
    
    input{
        width: 100%;
        height: 75px;
        background-color: #545456;
        border: 0;
        display: block;
        flex-direction: column;
        text-align: end;
        align-items: flex-end;
        padding: 0 10px;

        font-size: 24px;
        font-family: 'roboto';
        color: #fff;
    }
`;