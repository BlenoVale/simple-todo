import styled from "styled-components";

export const Container = styled.div`
    border: 1px solid #555;
    border-radius: 15px;
    padding: 5px 15px;
    margin: 20px 0;
    display: flex;
    align-items: center;


    .image {
        font-size: 35px;
        font-weight: bold;
        padding: 0;
        margin-right: 5px;
        margin-bottom: 5px;
    }

    input {
        border: 0px;
        background: transparent;
        outline: 0;
        color: #FFF;
        font-size: 18px;
        flex: 1;
        height: 100%;
    }
`;