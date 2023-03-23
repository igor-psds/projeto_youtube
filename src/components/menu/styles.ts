import styled from "styled-components";

export const Container = styled.div<{ openMenu: boolean }>`
    width: ${({ openMenu }) => openMenu? '250px' : '100px'};
    height: calc(100vh - 55px);
    box-sizing: border-box;
    padding: 10px 10px 10px 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow-y: auto;
    overflow-x: hidden;
    position: sticky;
    top: 55px;
`;

export const MenuItem = styled.div<{ openMenu: boolean }>`
    width: 100%;
    min-height: ${({ openMenu }) => openMenu? '45px' : '70px'};
    border-radius: 10px;
    cursor: pointer;
    padding: 2px 15px;
    box-sizing: border-box;
    display: flex;
    flex-direction: ${({ openMenu }) => openMenu? 'row' : 'column'};
    align-items: center;
    justify-content: ${({ openMenu }) => openMenu? 'none' : 'center'};

    span {
        font-weight: ${({ openMenu }) => openMenu? '600' : '400'};
        margin-left: ${({ openMenu }) => openMenu? '20px' : 'none'};
        font-size: ${({ openMenu }) => openMenu? '16px' : '12px'};
    }

    :hover {
        background-color: #f2f2f2;
    }
`;

export const ButtonIcon = styled.img`
    width: 25px;
`;

export const Divisor = styled.hr<{ openMenu: boolean }>`
    width: 100%;
    border-top: 1px solid #bbb;
    display: ${({ openMenu }) => openMenu? '' : 'none'};
`;

export const ItemContainerSumir = styled.div<{ openMenu: boolean }>`
    width: 100%;
    display: ${({ openMenu }) => openMenu? '' : 'none'};

    span.login-texto {
        display: flex;
        padding: 6px 12px 4px;
        margin: 0px 0px 5px 0px;
        font-size: 15px;
        line-height: 100%;
        font-weight: 400;
    };

    h3 {
        display: flex;
        padding: 6px 12px 4px;
        margin: 0px 0px 11px 0px;
        font-size: 18px;
        line-height: 90%;
        font-weight: 650px;
    };
`;