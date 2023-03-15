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

    :hover {
        background-color: #f1f1f1;
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

export const Divisor = styled.hr`
    width: 100%;
    margin: 35px 0px 5px 0px;
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

export const ContainerShorts = styled.div<{ openMenu: boolean }>`
    width: 100%;
    max-width: 1600px;
    padding: 0px 0px 0px 13px;
    display: grid;
    grid-template-columns: ${({ openMenu}) => openMenu? 'repeat(6, 1fr)' : 'repeat(7, 1fr)'};
    column-gap: 20px;
    row-gap: 50px;
`;