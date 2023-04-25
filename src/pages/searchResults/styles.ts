import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 1600px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const FilterContainer = styled.div`
    width: 100%;
`;

export const FilterButton = styled.div`
    width: 95px;
    height: 35px;
    border-radius: 15px;
    cursor: pointer;
    padding: 2px 15px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;

    span {
        font-weight: 400;
        margin-left: 7px;
        font-size: 15px;
    }

    :hover {
        background-color: #f2f2f2;
    }
`;

export const ButtonIcon = styled.img`
    width: 20px;
`;

export const Divisor = styled.hr<{ margin?: string }>`
    width: 100%;
    margin: ${({ margin }) => margin? margin : 0};
    border-top: 1px solid #bbb;
`;

export const ContainerVideos = styled.div`
    width: 100%;
    max-width: 1600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 15px;
`;