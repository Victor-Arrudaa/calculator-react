import { styled } from "styled-components";

export const InputContainer = styled.div`
    max-width: 100%;
    height: 75px;
    background-color: #444;

    display: flex;
    align-items: center;
    justify-content: flex-end;

    font-size: 24px;
    font-family: "Roboto";

    input {
        width: 100%;
        height: 70px;
        background-color: #fff;
        color: #333;
        border: 0;
        border-radius: 8px;
        outline: none;

        font-size: 30px;
        font-family: "Roboto";
        text-align: right;
        padding: 0 8px;
    }
`;
