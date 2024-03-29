import { useContext, useState, useRef } from 'react';
import { 
    Container,
    LogoContainer,
    ButtonContainer,
    ButtonContainerProfile,
    ButtonIcon,
    SearchContainer,
    SearchInputContainer,
    SearchInput,
    SearchButton,
    HeaderButton,
    SignInButton,
    SignInButtonIcon,
    DropdownProfile,
    InfoSection,
    ProfileImage,
    Info,
    Divisor,
    DropdownItem,
    DropdownIcon,
    ArrowRight
 } from "./styles";
import HamburgerIcon from '../../assets/hamburger_yt_project.png';
import Logo from '../../assets/yt-logo_yt_project.png';
import SearchIcon from '../../assets/search_yt_project.png';
import MicIcon from '../../assets/microfone_yt_project.png';
import VideoIcon from '../../assets/camera_yt_project.png';
import NotificationIcon from '../../assets/sino_yt_project.png';
import LoginIcon from '../../assets/icons/icon_user.png';
import { useGlobalMenuContext } from "../../contexts/menuContext";
import ChannelIcon from '../../assets/icons/icon_channel.png';
import CamIcon from '../../assets/icons/icon_camcorder.png';
import SwitchAccountIcon from '../../assets/icons/icon_user-account.png';
import LogOutIcon from '../../assets/icons/icon_logout.png';
import CoinIcon from '../../assets/icons/icon_coin.png';
import InformationIcon from '../../assets/icons/icon_personal-information.png';
import ThemeIcon from '../../assets/icons/icon_theme.png';
import LanguageIcon from '../../assets/icons/icon_language.png';
import ShieldIcon from '../../assets/icons/icon_shield.png';
import GlobeIcon from '../../assets/icons/icon_globe.png';
import KeyboardIcon from '../../assets/icons/icon_keyboard.png';
import SettingsIcon from '../../assets/icons/icon_settings.png';
import HelpIcon from '../../assets/icons/icon_question.png';
import ArrowRightIcon from '../../assets/icons/icon_right.png';
import FeedbackIcon from '../../assets/icons/icon_feedback.png';
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";
import { useSearchContext } from '../../contexts/searchContext';
import { useCategoryContext } from '../../contexts/searchCategories';

interface IProps {
    openDropdown: boolean
    setOpenDropdown: (openDropdown: boolean) => void
}

function Header({ openDropdown, setOpenDropdown}: IProps){
    const { login, logOut, user, searchVideo } = useContext(UserContext);
    const [search, setSearch2] = useState('');

    const { openMenu, setOpenMenu } = useGlobalMenuContext();
    const navigate = useNavigate();

    function videoSearch(){
        searchVideo(search);
        navigate('/search-results')

    }

    const [clearButton, setClearButton] = useState(false);

    const [openSearch, setOpenSearch] = useState(false);
    
    const inputRef = useRef<HTMLInputElement>(null);

    const Search = () => {
        setOpenSearch(true)
        if(inputRef.current) {
            inputRef.current.focus()
        }
    }

    const {setSearch} = useSearchContext()

    const [inputValue, setInputValue] = useState('');

    function handleInput(inputValue: string) {
        setInputValue(inputValue)
        if(inputValue === '') {
            setClearButton(false)
        } else {
            setClearButton(true)
        }
    }

    const clearInput = () => {
        setInputValue('')
        setClearButton(false)
        if (inputRef.current) {
            inputRef.current.focus()
        }
    }

    const {setCategoryId} = useCategoryContext()

    return (
        <Container>
            <LogoContainer onClick={() => setOpenDropdown(false)} >
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
            
            <SearchContainer onClick={() => setOpenDropdown(false)}>
                <SearchInputContainer>
                    <SearchInput
                     ref={inputRef}
                     value={inputValue} 
                     placeholder="Pesquisar" 
                     onChange={(e) => {
                        handleInput(e.target.value)
                     }} 
                     onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            setSearch(inputValue)
                            navigate('/search-results')
                            setOpenSearch(false)
                        }
                     }}
                    />
                </SearchInputContainer>
                    <SearchButton onClick={() => {
                        if (inputValue.trim() === '') {
                            alert('Pesquisa vazia')
                            return;
                        }
                        setSearch(inputValue)
                        navigate('/search-results')
                    }}>
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
                        <ButtonContainerProfile onClick={() => setOpenDropdown(!openDropdown)} >
                            {user.nome?.charAt(0)}
                        </ButtonContainerProfile>
                        <DropdownProfile openDropdown={openDropdown}  onClick={() => setOpenDropdown(false)}>
                            <InfoSection>
                                <ProfileImage>
                                    {user.nome?.charAt(0)}
                                </ProfileImage>
                                <Info>
                                    <span>
                                        {user.nome}
                                    </span>
                                    <span>
                                        {user.email}
                                    </span>
                                </Info>
                            </InfoSection>
                            <Divisor />
                            <DropdownItem>
                                <DropdownIcon alt="" src={ChannelIcon} />
                                <span>Seu canal</span>
                            </DropdownItem>
                            <DropdownItem onClick={() => navigate('/upload')} >
                                <DropdownIcon alt="" src={CamIcon} />
                                <span>YouTube Studio</span>
                            </DropdownItem>
                            <DropdownItem>
                                <DropdownIcon alt="" src={SwitchAccountIcon} />
                                <span>Alternar conta</span>
                                <ArrowRight margin='0 0 0 99px' alt="" src={ArrowRightIcon} />
                            </DropdownItem>
                            <DropdownItem onClick={() => logOut()} >
                                <DropdownIcon alt="" src={LogOutIcon} />
                                <span>Sair</span>
                            </DropdownItem>
                            <Divisor />
                            <DropdownItem>
                                <DropdownIcon alt="" src={CoinIcon} />
                                <span>Compras e assinaturas</span>
                            </DropdownItem>
                            <DropdownItem>
                                <DropdownIcon alt="" src={InformationIcon} />
                                <span>Seus dados no YouTube</span>
                            </DropdownItem>
                            <Divisor />
                            <DropdownItem>
                                <DropdownIcon alt="" src={ThemeIcon} />
                                <span>Aparência: Tema claro</span>
                                <ArrowRight margin='0 0 0 44px' alt="" src={ArrowRightIcon} />
                            </DropdownItem>
                            <DropdownItem>
                                <DropdownIcon alt="" src={LanguageIcon} />
                                <span>Idioma: Português</span>
                                <ArrowRight margin='0 0 0 69px' alt="" src={ArrowRightIcon} />
                            </DropdownItem>
                            <DropdownItem>
                                <DropdownIcon alt="" src={ShieldIcon} />
                                <span>Modo restrito: desativado</span>
                                <ArrowRight margin='0 0 0 15px' alt="" src={ArrowRightIcon} />
                            </DropdownItem>
                            <DropdownItem>
                                <DropdownIcon alt="" src={GlobeIcon} />
                                <span>Local: Brasil</span>
                                <ArrowRight margin='0 0 0 117px' alt="" src={ArrowRightIcon} />
                            </DropdownItem>
                            <DropdownItem>
                                <DropdownIcon alt="" src={KeyboardIcon} />
                                <span>Atalhos do teclado</span>
                            </DropdownItem>
                            <Divisor />
                            <DropdownItem  onClick={() => navigate('/settings')} >
                                <DropdownIcon alt="" src={SettingsIcon} />
                                <span>Configurações</span>
                            </DropdownItem>
                            <Divisor />
                            <DropdownItem  onClick={() => navigate('/help')} >
                                <DropdownIcon alt="" src={HelpIcon} />
                                <span>Ajuda</span>
                            </DropdownItem>
                            <DropdownItem  onClick={() => navigate('/feedback')} >
                                <DropdownIcon alt="" src={FeedbackIcon} />
                                <span>Enviar feedback</span>
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