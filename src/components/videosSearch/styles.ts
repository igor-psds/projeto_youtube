import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
`;

export const ImageBanner = styled.img`
    width: 350px;
    height: 210px;
    border-radius: 15px;
    cursor: pointer;
`;

export const TitleContainer = styled.div`
    width: 100%;
    height: 120px;
    display: flex;
    flex-direction: column;
    padding: 5px 0px 0px 15px;
    cursor: pointer;
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Title = styled.span`
    font-weight: 600;
    font-size: 20px;
    color: #0f0f0f;
`;

export const TextCard = styled.span`
    font-size: 14px;
    color: #8c8c8c;
`;

export const ChannelText = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;
`;

export const ChannelImage = styled.div`
    width: 25px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 10px;
    background-color: aqua;
`;