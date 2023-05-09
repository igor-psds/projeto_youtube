import { useContext } from 'react';
import { 
    Container,
    MenuItem,
    ButtonIcon,
    Divisor,
    ItemContainerSumir
} from "./styles";
import HomeIcon from '../../assets/icons/icon_home-2.png';
import ShortsIcon from '../../assets/icons/icon_cellphone.png';
import SubscriptionIcon from '../../assets/icons/icon_subscription.png';
import LibraryIcon from '../../assets/icons/icon_library.png';
import HistoryIcon from '../../assets/icons/icon_history-2.png';
import LoginIcon from '../../assets/icons/icon_user.png';
import TrendingIcon from '../../assets/icons/icon_fire-2.png';
import MusicIcon from '../../assets/icons/icon_musical-note-3.png';
import MoviesIcon from '../../assets/icons/icon_movie-clapper-2.png';
import LiveIcon from '../../assets/icons/icon_live.png';
import GamesIcon from '../../assets/icons/icon_games-2.png';
import NewsIcon from '../../assets/icons/icon_newspaper.png';
import SportsIcon from '../../assets/icons/icon_running.png';
import LearningIcon from '../../assets/icons/icon_knowledge.png';
import FashionIcon from '../../assets/icons/icon_clothes.png';
import ChannelsIcon from '../../assets/icons/icon_plus.png';
import YtPremiumIcon from '../../assets/icons/icon_yt-premium.png';
import YtMusicIcon from '../../assets/icons/icon_yt-music.png';
import YtKidsIcon from '../../assets/icons/icon_yt-kids.png';
import YtTvIcon from '../../assets/icons/icon_yt-tv.png';
import SettingsIcon from '../../assets/icons/icon_settings.png';
import ReportIcon from '../../assets/icons/icon_flag.png';
import HelpIcon from '../../assets/icons/icon_question.png';
import FeedbackIcon from '../../assets/icons/icon_feedback.png';
import { useNavigate } from 'react-router-dom';
import { UserContext } from "../../contexts/userContext";

const items1 = [
    {name: 'Início', link: '/', src: HomeIcon},
    {name: 'Shorts', link: '/shorts', src: ShortsIcon},
    {name: 'Inscrições', link: '/subscription', src: SubscriptionIcon}
];
const items2 = [
    {name: 'Biblioteca', link: '/library', src: LibraryIcon},
    {name: 'Histórico', link: '/history', src: HistoryIcon}
];
const items3 = [{name: 'Fazer Login', link: '/login', src: LoginIcon}];
const items4 = [
    {name: 'Em alta', src: TrendingIcon},
    {name: 'Música', src: MusicIcon},
    {name: 'Filmes e TV', src: MoviesIcon},
    {name: 'Ao vivo', src: LiveIcon},
    {name: 'Jogos', src: GamesIcon},
    {name: 'Notícias', src: NewsIcon},
    {name: 'Esportes', src: SportsIcon},
    {name: 'Aprender', src: LearningIcon},
    {name: 'Moda e beleza', src: FashionIcon}
];
const items5 = [{name: 'Procurar canais', src: ChannelsIcon}];
const items6 = [
    {name: 'YouTube Premium', src: YtPremiumIcon},
    {name: 'YouTube Music', src: YtMusicIcon},
    {name: 'YouTube Kids', src: YtKidsIcon},
    {name: 'YouTube TV', src: YtTvIcon}
];
const items7 = [
    {name: 'Configurações', src: SettingsIcon},
    {name: 'Histórico de denúncia', src: ReportIcon},
    {name: 'Ajuda', src: HelpIcon},
    {name: 'Enviar feedback', src: FeedbackIcon}
];

interface IProps {
    openMenu: boolean;
}

interface IProps {
    openDropdown: boolean
    setOpenDropdown: (openDropdown: boolean) => void
}

function Menu({ openMenu, setOpenDropdown }: IProps){
    const navigate = useNavigate();

    const { login } = useContext(UserContext);

    return (
        <Container openMenu={openMenu} onClick={() => setOpenDropdown(false)}>
            <div style={{width: '100%'}}>
                {items1.map((item) => (
                    <MenuItem openMenu={openMenu} onClick={() => navigate(item.link)}>
                        <ButtonIcon alt="" src={item.src} />
                        <span>{item.name}</span>
                    </MenuItem>
                ))}
            </div>
            <Divisor openMenu={openMenu}/>
            <div style={{width: '100%'}}>
                {items2.map((item) => (
                    <MenuItem openMenu={openMenu} onClick={() => navigate(item.link)}>
                        <ButtonIcon alt="" src={item.src} />
                        <span>{item.name}</span>
                    </MenuItem>
                ))}
            </div>
            <Divisor openMenu={openMenu} />
            <ItemContainerSumir openMenu={openMenu}>
            {login? 
                    <>
                        <h3>Inscrições</h3>
                        <span className="login-texto">Você não se inscreveu a um canal ainda</span>
                        <Divisor openMenu={openMenu}/>
                    </>
                :
                    <>
                        <span className="login-texto">Faça login para curtir vídeos, comentar e se inscrever.</span>
                        {items3.map((item) => (
                            <MenuItem openMenu={openMenu} onClick={() => navigate(item.link)}>
                                <ButtonIcon alt="" src={item.src} />
                                <span>{item.name}</span>
                            </MenuItem>
                        ))}
                        <Divisor openMenu={openMenu}/>
                    </>
                    
                }
                <h3>Explorar</h3>
                {items4.map((item) => (
                    <MenuItem openMenu={openMenu}>
                        <ButtonIcon alt="" src={item.src} />
                        <span>{item.name}</span>
                    </MenuItem>
                ))}
                <Divisor openMenu={openMenu}/>
                {items5.map((item) => (
                    <MenuItem openMenu={openMenu}>
                        <ButtonIcon alt="" src={item.src} />
                        <span>{item.name}</span>
                    </MenuItem>
                ))}
                <Divisor openMenu={openMenu}/>
                <h3>Mais do YouTube</h3>
                {items6.map((item) => (
                    <MenuItem openMenu={openMenu}>
                        <ButtonIcon alt="" src={item.src} />
                        <span>{item.name}</span>
                    </MenuItem>
                ))}
                <Divisor openMenu={openMenu}/>
                {items7.map((item) => (
                    <MenuItem openMenu={openMenu}>
                        <ButtonIcon alt="" src={item.src} />
                        <span>{item.name}</span>
                    </MenuItem>
                ))}
                <Divisor openMenu={openMenu}/>
            </ItemContainerSumir>
        </Container>
    )
}

export default Menu;