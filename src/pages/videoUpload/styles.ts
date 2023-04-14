import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 1600px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`;

export const UploadContainer = styled.div`
    width: 800px;
    height: 600px;
    padding: 20px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    background-color: #fff;
`;

export const UploadTitle = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

export const VideoInputs = styled.div`
    width: 100%;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`;

export const Fieldsets = styled.fieldset`
    width: 95%;
    min-width: 90%;
    border: medium none;
    padding: 0;
    margin: 0 0 15px;
    display: flex;
    flex-direction: column;

    span {
        width: 152px;
        font-weight: 400;
        font-size: 16px;
        margin: 2px 0px 0px 0px;
        color: #005ce6;
        cursor: pointer;
    }
`;

export const TextAreaTitle = styled.textarea`
    width: 100%;
    max-width: 100%;
    min-width: 100%;
    height: 80px;
    min-height: 80px;
    max-height: 80px;
    padding: 5px;
    border-radius: 8px;
    display: block;
`;

export const TextAreaDescription = styled.textarea`
    width: 100%;
    max-width: 100%;
    min-width: 100%;
    height: 300px;
    min-height: 300px;
    max-height: 300px;
    padding: 5px;
    border-radius: 8px;
    display: block;
`;

export const ButtonsContainer = styled.div`
    width: 100%;
    padding: 0px 0px 0px 0px;
    display: flex;
    justify-content: space-around;
`;

export const Button = styled.button`
    width: 115px;
    padding: 8px 12px;
    border: none;
    border-radius: 5px;
    color: #fff;
    font-size: 18px;
    background-color: #005ce6;
    cursor: pointer;

    :hover {
        background-color: #0047b3;
    }
`;