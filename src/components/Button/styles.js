import { styled } from "styled-components";

export const ButtonContainer = styled.button`
    padding: 16px;
    border: 1px solid #444;
    background-color: #fff;
    color: #444;

    flex: 1;

    font-weight: 700;
    font-size: 24px;
    border-radius: 6px;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }
`;
