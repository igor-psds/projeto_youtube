import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    height: 55px;
    background-color: #fff;
    padding: 0 16px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;
    z-index: 1;
`;

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const ButtonContainer = styled.div<{ margin?: string }>`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: ${({ margin }) => margin? margin : 0};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    :hover {
        background-color: #f2f2f2;
    }
`;

export const ButtonContainerProfile = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: 0 0 0 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    :hover {
        background-color: #f2f2f2;
    }
`;

export const ButtonIcon = styled.img`
    width: 20px;
`;

export const SearchContainer = styled.div`
    display: flex;
`;

export const SearchInputContainer = styled.div`
    width: 450px;
    height: 35px;
    border: 1px solid #d3d3d3;
    border-radius: 40px 0 0 40px;
    display: flex;
    align-items: center;
    padding: 0 16px;
`;

export const SearchInput = styled.input`
    width: 100%;
    height: 25px;
    outline: none;
    border: none;
`;

export const SearchButton = styled.div`
    border-radius: 0 40px 40px 0;
    width: 70px;
    height: 35px;
    background-color: #f8f8f8;
    border: 1px solid #d3d3d3;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export const HeaderButton = styled.div`
    width: 220px;
    display: flex;
`;

export const SignInButton = styled.button`
    width: 110px;
    display: flex;
    align-items: center;
    border: 1px solid #f1f1f1;
    border-radius: 18px;
    background-color: #fff;
    padding: 2px 0px;
    margin-left: 10px;
    font-weight: 600;
    font-size: 13px;
    cursor: pointer;

    :hover {
        background-color: #f2f2f2;
    }
`;

export const SignInButtonIcon = styled.img`
    width: 25px;
    margin-right: 7px;
`;

export const DropdownProfile = styled.div<{ openDropdown: boolean }>`
    min-width: 250px;
    position: absolute;
    top: 47.6px;
    right: 70px;
    padding: 0px 0px 5px 0px;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    display: flex;
    display: ${({ openDropdown }) => openDropdown? 'flex' : 'none'};
    flex-direction: column;
    overflow: auto;
    z-index: 2;
    overflow-x: hidden;
`;

export const Divisor = styled.hr`
    width: 100%;
    border-top: 1px solid #bbb;
`;

export const DropdownItem = styled.div`
    width: 100%;
    min-height: 45px;
    cursor: pointer;
    padding: 2px 15px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;

    span {
        font-weight: 600;
        margin-left: 20px;
        font-size: 16px;
    }

    :hover {
        background-color: #f2f2f2;
    }
`;

export const DropdownIcon = styled.img`
    width: 25px;
`;

export const ArrowRight = styled.img<{ margin?: string }>`
    width: 18px;
    margin: ${({ margin }) => margin? margin : 0};
`;