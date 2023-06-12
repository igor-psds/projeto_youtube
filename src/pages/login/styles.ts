import styled from "styled-components";

interface Valid {
    valid: boolean
}

export const Container = styled.div`
    width: 100%;
    max-width: 1600px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`;

export const DivLoginContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const LoginContainer = styled.div`
    width: 400px;
    height: 500px;
    padding: 20px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    background-color: #fff;
`;

export const LoginTexts = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

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
    width: 100%;
    min-width: 100%;
    border: medium none;
    padding: 0;
    margin: 0 0 15px;
    display: flex;
    flex-direction: column;
`;

export const Inputs = styled.input<Valid>`
    width: 100%;
    height: 45px;
    padding: 0px 3px;
    border: ${({valid}) => valid? "1px solid #000" : "1px solid red"};
    border-radius: 5px;
    display: block;
`;

export const InvalidMessage = styled.span<Valid>`
    display: ${({valid}) => valid? 'none' : 'block'};
    font-size: 14px;
    color: red;
`;

export const ForgotSpan = styled.span`
    width: 152px;
    font-weight: 400;
    font-size: 16px;
    margin: 2px 0px 0px 0px;
    color: #005ce6;
    cursor: pointer;
`;

export const CheckBoxContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    column-gap: 5px;
    margin-top: 5px;
`;

export const Button = styled.button`
    width: 100%;
    padding: 8px 12px;
    border: none;
    border-radius: 15px;
    color: black;
    font-size: 18px;
    background-color: #f6f6f6;
    cursor: pointer;

    :hover {
        background-color: #f0f0f0;
    }
`;

export const SignUpContainer = styled.div`
    width: 400px;
    margin: 0px 5px 0px 5px;
    padding: 0px 5px 0px 5px;
    display: flex;
    justify-content: space-between;

    span {
        font-weight: 400;
        font-size: 16px;
        margin: 0px 0px 0px 0px;
    }
`;

export const SignUpButton = styled.button`
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