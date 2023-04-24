import { useState } from 'react';
import VideoComponent from "../../components/videoComponent/videoComponent";
import ShortsComponent from "../../components/shortsComponent/shortsComponent";
import ShortsIcon from '../..//assets/icons/icon_cellphone.png';
import ArrowDownIcon from '../../assets/icons/icon_down.png';
import ArrowUpIcon from '../../assets/icons/icon_up.png';
import { 
    Container,
    HeaderHome,
    NavMenu,
    NavMenuItem,
    ContainerVideos,
    Divisor,
    ShortsContainerTitle,
    ShortsTitleImage,
    ContainerShorts,
    ButtonShorts,
    ArrowDown
} from "./styles";

const items = [
    {name: 'Tudo', link: '/'},
    {name: 'Ao vivo', link: '/'},
    {name: 'Música', link: '/'},
    {name: 'Jogos', link: '/'},
    {name: 'Chill out', link: '/'},
    {name: 'K-Pop', link: '/'},
    {name: 'Piano', link: '/'},
    {name: 'Alimentação', link: '/'},
    {name: 'Peixes', link: '/'},
    {name: 'Natureza', link: '/'},
    {name: 'Conversas', link: '/'},
    {name: 'Basquete', link: '/'},
    {name: 'Notícias', link: '/'},
    {name: 'Podcast', link: '/'},
    {name: 'Animação', link: '/'}
];

const videos = [
    {
        image: 'https://i.ytimg.com/vi/N73Ue9HXQuY/hq720.jpg?sqp=-oaymwExCNAFEJQDSFryq4qpAyMIARUAAIhCGAHwAQH4AdQGgALgA4oCDAgAEAEYOyBZKGUwDw==&rs=AOn4CLC0iQDZ1nEy3AgsanyJJ5vpcWPnmw',
        title: 'Low Roar - "Everything To Lose"',
        channel: 'LOWROARMUSIC',
        views: '148 mil',
        time: ' 1 ano'
    },
    {
        image: 'https://i.ytimg.com/vi/N73Ue9HXQuY/hq720.jpg?sqp=-oaymwExCNAFEJQDSFryq4qpAyMIARUAAIhCGAHwAQH4AdQGgALgA4oCDAgAEAEYOyBZKGUwDw==&rs=AOn4CLC0iQDZ1nEy3AgsanyJJ5vpcWPnmw',
        title: 'Low Roar - "Everything To Lose"',
        channel: 'LOWROARMUSIC',
        views: '148 mil',
        time: ' 1 ano'
    },
    {
        image: 'https://i.ytimg.com/vi/N73Ue9HXQuY/hq720.jpg?sqp=-oaymwExCNAFEJQDSFryq4qpAyMIARUAAIhCGAHwAQH4AdQGgALgA4oCDAgAEAEYOyBZKGUwDw==&rs=AOn4CLC0iQDZ1nEy3AgsanyJJ5vpcWPnmw',
        title: 'Low Roar - "Everything To Lose"',
        channel: 'LOWROARMUSIC',
        views: '148 mil',
        time: ' 1 ano'
    },
    {
        image: 'https://i.ytimg.com/vi/N73Ue9HXQuY/hq720.jpg?sqp=-oaymwExCNAFEJQDSFryq4qpAyMIARUAAIhCGAHwAQH4AdQGgALgA4oCDAgAEAEYOyBZKGUwDw==&rs=AOn4CLC0iQDZ1nEy3AgsanyJJ5vpcWPnmw',
        title: 'Low Roar - "Everything To Lose"',
        channel: 'LOWROARMUSIC',
        views: '148 mil',
        time: ' 1 ano'
    },
    {
        image: 'https://i.ytimg.com/vi/N73Ue9HXQuY/hq720.jpg?sqp=-oaymwExCNAFEJQDSFryq4qpAyMIARUAAIhCGAHwAQH4AdQGgALgA4oCDAgAEAEYOyBZKGUwDw==&rs=AOn4CLC0iQDZ1nEy3AgsanyJJ5vpcWPnmw',
        title: 'Low Roar - "Everything To Lose"',
        channel: 'LOWROARMUSIC',
        views: '148 mil',
        time: ' 1 ano'
    },
    {
        image: 'https://i.ytimg.com/vi/N73Ue9HXQuY/hq720.jpg?sqp=-oaymwExCNAFEJQDSFryq4qpAyMIARUAAIhCGAHwAQH4AdQGgALgA4oCDAgAEAEYOyBZKGUwDw==&rs=AOn4CLC0iQDZ1nEy3AgsanyJJ5vpcWPnmw',
        title: 'Low Roar - "Everything To Lose"',
        channel: 'LOWROARMUSIC',
        views: '148 mil',
        time: ' 1 ano'
    },
    {
        image: 'https://i.ytimg.com/vi/N73Ue9HXQuY/hq720.jpg?sqp=-oaymwExCNAFEJQDSFryq4qpAyMIARUAAIhCGAHwAQH4AdQGgALgA4oCDAgAEAEYOyBZKGUwDw==&rs=AOn4CLC0iQDZ1nEy3AgsanyJJ5vpcWPnmw',
        title: 'Low Roar - "Everything To Lose"',
        channel: 'LOWROARMUSIC',
        views: '148 mil',
        time: ' 1 ano'
    },
    {
        image: 'https://i.ytimg.com/vi/yp5Pxo1n4Co/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAZusamOCp8mReUM5PXx3vRm6OmXQ',
        title: 'Barulho de Chuva para Dormir Profundamente e Relaxar - Som de Chuva',
        channel: 'Natureza Relaxante',
        views: '3,7 mil',
        time: ' 3 meses'
    },
];

interface IProps {
    openMenu: boolean;
}

function Home({ openMenu }: IProps){
    
    const [openShorts, setOpenShorts] = useState(false);

    return (
        <Container>
            <HeaderHome>
                <NavMenu>
                    {items.map((item) => (
                        <NavMenuItem>
                            <span>{item.name}</span>
                        </NavMenuItem>
                    ))}
                </NavMenu>
            </HeaderHome>
            <ContainerVideos openMenu={openMenu}>
                {videos.map((video) => (
                    <VideoComponent video={video} />
                ))}
            </ContainerVideos>
            <Divisor margin='35px 0px 5px 0px' />
            <ShortsContainerTitle>
                <ShortsTitleImage alt="" src= {ShortsIcon} />
                <h3>Shorts</h3>
            </ShortsContainerTitle>
            <ContainerShorts openMenu={openMenu} openShorts={openShorts} >
                <ShortsComponent />
                <ShortsComponent />
                <ShortsComponent />
                <ShortsComponent />
                <ShortsComponent />
                <ShortsComponent />
                <ShortsComponent />
                <ShortsComponent />
                <ShortsComponent />
            </ContainerShorts>
                <ButtonShorts onClick={() => setOpenShorts(!openShorts)}>
                    <ArrowDown alt="" src={`${openShorts? ArrowUpIcon : ArrowDownIcon}`} />
                </ButtonShorts>
            <Divisor margin='1px 0px 5px 0px' />
        </Container>
    )
}

export default Home;