import styled from "styled-components";

export const Container = styled.div<{ openMenu: boolean }>`
    width: ${({openMenu}) => openMenu? '86%' : '94%'};
    height: 56px;
    display: flex;
    align-items: center;
    background-color: #fff;
    position: fixed;
    top: 55px;
    right: 0;
    margin-right: ${({openMenu}) => openMenu? '0' : '0px'};
    z-index: 1;
`;

export const SliderButton = styled.div`
    min-width: 40px;
    max-width: 40px;
    min-height: 40px;
    max-height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 5px;
    margin-right: 5px;
    cursor: pointer;
    
    :hover{
        background-color: #f0f0f0;
    }
`;

export const SliderButtonIcon = styled.img`
    width: 25px;
    height: 25px;
    border-radius: 50%;
`;

export const Slider = styled.div`
    height: 70%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: nowrap;
    column-gap: 20px;
    overflow-x: hidden;
`;

export const SliderContent = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    column-gap: 20px;
`;

export const Button = styled.button`
    min-width: 60px;
    min-height: 90%;
    max-height: 90%;
    display: inline-block;
    align-items: center;
    white-space: nowrap;
    padding: 10px;
    box-sizing: border-box;
    border: none;
    border-radius: 8px;
    outline: none;
    font-size: 14px;
    font-weight: 400;
    color: black;
    background-color: #f4f4f4;
    cursor: pointer;

    :hover{
        background-color: #f0f0f0;
    }
`;