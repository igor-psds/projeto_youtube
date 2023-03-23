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
    SignInButtonIcon,
    DropdownProfile,
    Divisor,
    DropdownItem,
    DropdownIcon
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
import SettingsIcon from '../../assets/icons/icon_settings.png';
import HelpIcon from '../../assets/icons/icon_question.png';
import FeedbackIcon from '../../assets/icons/icon_feedback.png';

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
                onClick={() => navigate('/')}
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
                        <DropdownProfile>
                            <DropdownItem>
                                <span>Your Channel</span>
                            </DropdownItem>
                            <DropdownItem onClick={() => navigate('/')} >
                                <span>YouTube Studio</span>
                            </DropdownItem>
                            <DropdownItem>
                                <span>Switch account</span>
                            </DropdownItem>
                            <DropdownItem onClick={() => logOut()} >
                                <span>Sair</span>
                            </DropdownItem>
                            <Divisor />
                            <DropdownItem>
                                <span>Purchases and memberships</span>
                            </DropdownItem>
                            <DropdownItem>
                                <span>Your data in YouTube</span>
                            </DropdownItem>
                            <Divisor />
                            <DropdownItem>
                                <span>Appearence: Light theme</span>
                            </DropdownItem>
                            <DropdownItem>
                                <span>Language: English</span>
                            </DropdownItem>
                            <DropdownItem>
                                <span>Restricted Mode: Off</span>
                            </DropdownItem>
                            <DropdownItem>
                                <span>Location: United States</span>
                            </DropdownItem>
                            <DropdownItem>
                                <span>Keyboard shortcuts</span>
                            </DropdownItem>
                            <Divisor />
                            <DropdownItem  onClick={() => navigate('/settings')} >
                                <DropdownIcon alt="" src={SettingsIcon} />
                                <span>Settings</span>
                            </DropdownItem>
                            <Divisor />
                            <DropdownItem  onClick={() => navigate('/help')} >
                                <DropdownIcon alt="" src={HelpIcon} />
                                <span>Help</span>
                            </DropdownItem>
                            <DropdownItem  onClick={() => navigate('/feedback')} >
                                <DropdownIcon alt="" src={FeedbackIcon} />
                                <span>Send feedback</span>
                            </DropdownItem>
                        </DropdownProfile>
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