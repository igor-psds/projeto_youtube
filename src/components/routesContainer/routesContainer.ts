import styled from "styled-components";

export const RoutesContainer = styled.div<{ openMenu: boolean }>`
    width: 100%;
    max-width: ${({ openMenu }) => openMenu? 'calc(100% - 217px)' : 'calc(100% - 94.5px)'};
    padding: 0px 70px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
`;