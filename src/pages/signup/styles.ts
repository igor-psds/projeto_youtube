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

export const DivSignUpContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const SignUpContainer = styled.div`
    width: 800px;
    height: 600px;
    padding: 20px;
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    background-color: #fff;
`;

export const InputsContainer = styled.div`
    width: 500px;
    height: 600px;
    padding: 0px 5px 0px 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`;

export const SignUpTexts = styled.div`
    width: 100%;
    padding: 0px 0px 0px 30px;
    display: flex;
    flex-direction: column;
    align-items: left;

    h3 {
        position: relative;
        display: block;
        font-size: 25px;
        font-weight: 500;
        line-height: 10px;
    }

    span {
        font-weight: 400;
        font-size: 16px;
    }
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

export const Inputs = styled.input`
    width: 400px;
    height: 45px;
    padding: 0px 3px;
    border-radius: 5px;
    display: block;
`;

export const ButtonsContainer = styled.div`
    width: 100%;
    padding: 0px 60px 0px 0px;
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

export const LoginButton = styled.button`
    padding: 8px 8px;
    border: none;
    border-radius: 5px;
    color: #005ce6;
    font-size: 16px;
    background-color: #fff;
    cursor: pointer;

    :hover {
        background-color: #f0f0f0;
    }
`;

export const ImageContainer = styled.div`
    width: 300px;
    height: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`;