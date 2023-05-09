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

export const HeaderHome = styled.header`
    width: 100%;
    height: 45px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 20px;
    background-color: #fff;
    position: sticky;
    top: 6.8%;
`;

export const NavMenu = styled.nav`
    width: 100%;
    height: 100%;
    border-radius: 20px;
    padding: 5px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow: auto;
    overflow-y: hidden;
    overflow-x: scroll;
    white-space: pre-line;
    background-color: #fff;

    ::-webkit-scrollbar {
        height: 4px;
    }
`;

export const NavMenuItem = styled.li`
    min-width: 90px;
    width: auto;
    height: auto;
    padding: 1px 5px 3px 5px;
    margin: 5px;
    border-radius: 5px;
    cursor: pointer;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-color: #f4f4f4;
    flex: none;

    :hover {
        background-color: #f0f0f0;
    }
`;

export const ContainerVideos = styled.div<{ openMenu: boolean }>`
    width: 100%;
    max-width: 1600px;
    display: grid;
    grid-template-columns: ${({ openMenu}) => openMenu? 'repeat(4, 1fr)' : 'repeat(5, 1fr)'};
    column-gap: 20px;
    row-gap: 50px;
`;

export const Divisor = styled.hr<{ margin?: string }>`
    width: 100%;
    margin: ${({ margin }) => margin? margin : 0};
    border-top: 5px solid #bbb;
`;

export const ShortsContainerTitle = styled.div`
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 15px;
    display: flex;
    flex-direction: row;
`;

export const ShortsTitleImage = styled.img`
    width: 25px;
    object-fit: contain;
    margin-right: 5px;
    box-sizing: border-box;
`;

export const ContainerShorts = styled.div<{ openMenu: boolean, openShorts: boolean }>`
    width: 100%;
    max-width: 1600px;
    height: ${({ openShorts}) => openShorts? '750px' : '345px'};
    box-sizing: border-box;
    padding: 0px 13px 0px 13px;
    display: grid;
    grid-template-columns: ${({ openMenu}) => openMenu? 'repeat(7, 1fr)' : 'repeat(8, 1fr)'};
    overflow-y: hidden;
    overflow-x: hidden;
    column-gap: 10px;
    row-gap: 50px;
`;

export const ButtonShorts = styled.button`
    width: 100%;
    height: 45px;
    margin-top: 10px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: #fff;

    :hover {
        background-color: #f2f2f2;
    }
`;

export const ArrowDown = styled.img`
    width: 25px;
`;