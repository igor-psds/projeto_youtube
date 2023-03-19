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

const items1 = [
    {name: 'Início', link: '/', src: HomeIcon},
    {name: 'Shorts', link: '/shorts', src: ShortsIcon},
    {name: 'Inscrições', link: '/subscription', src: SubscriptionIcon}
];
const items2 = [
    {name: 'Biblioteca', link: '/library', src: LibraryIcon},
    {name: 'Histórico', link: '/history', src: HistoryIcon}
];
const items3 = [{name: 'Fazer Login', link: '/sign-in', src: LoginIcon}];
const items4 = [
    {name: 'Em alta', link: '/trending', src: TrendingIcon},
    {name: 'Música', link: '/music', src: MusicIcon},
    {name: 'Filmes e TV', link: '/movies&tv', src: MoviesIcon},
    {name: 'Ao vivo', link: '/live', src: LiveIcon},
    {name: 'Jogos', link: '/gaming', src: GamesIcon},
    {name: 'Notícias', link: '/news', src: NewsIcon},
    {name: 'Esportes', link: '/sports', src: SportsIcon},
    {name: 'Aprender', link: '/learning', src: LearningIcon},
    {name: 'Moda e beleza', link: '/fashion&beauty', src: FashionIcon}
];
const items5 = [{name: 'Procurar canais', link: '/channels', src: ChannelsIcon}];
const items6 = [
    {name: 'YouTube Premium', link: '/yt_premium', src: YtPremiumIcon},
    {name: 'YouTube Music', link: '/yt_music', src: YtMusicIcon},
    {name: 'YouTube Kids', link: '/yt_kids', src: YtKidsIcon},
    {name: 'YouTube TV', link: '/yt_tv', src: YtTvIcon}
];
const items7 = [
    {name: 'Configurações', link: '/library', src: SettingsIcon},
    {name: 'Histórico de denúncia', link: '/reporthistory', src: ReportIcon},
    {name: 'Ajuda', link: '/help', src: HelpIcon},
    {name: 'Enviar feedback', link: '/feedback', src: FeedbackIcon}
];

interface IProps {
    openMenu: boolean;
}

function Menu({ openMenu }: IProps){
    const navigate = useNavigate();

    return (
        <Container openMenu={openMenu}>
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
                <span className="login-texto">Faça login para curtir vídeos, comentar e se inscrever.</span>
                {items3.map((item) => (
                    <MenuItem openMenu={openMenu} onClick={() => navigate(item.link)}>
                        <ButtonIcon alt="" src={item.src} />
                        <span>{item.name}</span>
                    </MenuItem>
                ))}
                <Divisor openMenu={openMenu}/>
                <h3>Explorar</h3>
                {items4.map((item) => (
                    <MenuItem openMenu={openMenu} onClick={() => navigate(item.link)}>
                        <ButtonIcon alt="" src={item.src} />
                        <span>{item.name}</span>
                    </MenuItem>
                ))}
                <Divisor openMenu={openMenu}/>
                {items5.map((item) => (
                    <MenuItem openMenu={openMenu} onClick={() => navigate(item.link)}>
                        <ButtonIcon alt="" src={item.src} />
                        <span>{item.name}</span>
                    </MenuItem>
                ))}
                <Divisor openMenu={openMenu}/>
                <h3>Mais do YouTube</h3>
                {items6.map((item) => (
                    <MenuItem openMenu={openMenu} onClick={() => navigate(item.link)}>
                        <ButtonIcon alt="" src={item.src} />
                        <span>{item.name}</span>
                    </MenuItem>
                ))}
                <Divisor openMenu={openMenu}/>
                {items7.map((item) => (
                    <MenuItem openMenu={openMenu} onClick={() => navigate(item.link)}>
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