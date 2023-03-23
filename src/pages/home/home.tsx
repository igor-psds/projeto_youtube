import { useState } from 'react';
import VideoComponent from "../../components/videoComponent/videoComponent";
import ShortsComponent from "../../components/shortsComponent/shortsComponent";
import ShortsIcon from '../..//assets/icons/icon_cellphone.png';
import ArrowDownIcon from '../../assets/icons/icon_down.png';
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
        image: 'https://i.ytimg.com/vi/N73Ue9HXQuY/hq720.jpg?sqp=-oaymwExCNAFEJQDSFryq4qpAyMIARUAAIhCGAHwAQH4AdQGgALgA4oCDAgAEAEYOyBZKGUwDw==&rs=AOn4CLC0iQDZ1nEy3AgsanyJJ5vpcWPnmw',
        title: 'Low Roar - "Everything To Lose"',
        channel: 'LOWROARMUSIC',
        views: '148 mil',
        time: ' 1 ano'
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
                    <ArrowDown alt="" src={ArrowDownIcon} />
                </ButtonShorts>
            <Divisor margin='1px 0px 5px 0px' />
        </Container>
    )
}

export default Home;