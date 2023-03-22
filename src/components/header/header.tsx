import { useContext } from 'react';
import { 
    Container,
    LogoContainer,
    ButtonContainer,
    ButtonIcon,
    SearchContainer,
    SearchInputContainer,
    SearchInput,
    SearchButton,
    HeaderButton,
    SignInButton,
    SignInButtonIcon
 } from "./styles";
import HamburgerIcon from '../../assets/hamburger_yt_project.png';
import Logo from '../../assets/yt-logo_yt_project.png';
import SearchIcon from '../../assets/search_yt_project.png';
import MicIcon from '../../assets/microfone_yt_project.png';
import VideoIcon from '../../assets/camera_yt_project.png';
import NotificationIcon from '../../assets/sino_yt_project.png';
import LoginIcon from '../../assets/icons/icon_user.png';
import { useGlobalMenuContext } from "../../contexts/menuContext";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";

function Header(){
    const { login, logOut } = useContext(UserContext);

    const { openMenu, setOpenMenu } = useGlobalMenuContext();
    const navigate = useNavigate();

    return (
        <Container>
            <LogoContainer>
                <ButtonContainer onClick={() => setOpenMenu(!openMenu)} margin='0 10px 0 0' >
                    <ButtonIcon alt="" src={HamburgerIcon} />
                </ButtonContainer>
                <img 
                style={{ cursor: 'pointer', width: '100px' }}
                alt=""
                src={Logo}
                />
            </LogoContainer>
            
            <SearchContainer>
                <SearchInputContainer>
                    <SearchInput placeholder="Pesquisar" />
                </SearchInputContainer>
                <SearchButton>
                    <ButtonIcon alt="" src={SearchIcon} />
                </SearchButton>
                <ButtonContainer margin='0 0 0 10px' >
                    <ButtonIcon alt="" src={MicIcon} />
                </ButtonContainer>
            </SearchContainer>

            <HeaderButton>
                <ButtonContainer margin='0 0 0 10px' >
                    <ButtonIcon alt="" src={VideoIcon} />
                </ButtonContainer>
                <ButtonContainer margin='0 0 0 10px' >
                    <ButtonIcon alt="" src={NotificationIcon} />
                </ButtonContainer>

                {login? 
                    <>
                        <ButtonContainer margin='0 0 0 20px' >
                            I
                        </ButtonContainer>
                        <span onClick={() => logOut()}>Sair</span>
                    </>
                :
                    <SignInButton  onClick={() => navigate('/login')} >
                        <SignInButtonIcon alt="" src={LoginIcon} />
                        Fazer Login
                    </SignInButton>
                }
            </HeaderButton>


        </Container>
    )
}

export default Header;