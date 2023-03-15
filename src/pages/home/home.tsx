import VideoComponent from "../../components/videoComponent/videoComponent";
import { Container,HeaderHome, NavMenu, NavMenuItem, ContainerVideos } from "./styles";

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

interface IProps {
    openMenu: boolean;
}

function Home({ openMenu }: IProps){
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
                <VideoComponent />
                <VideoComponent />
                <VideoComponent />
                <VideoComponent />
                <VideoComponent />
                <VideoComponent />
                <VideoComponent />
                <VideoComponent />
                <VideoComponent />
                <VideoComponent />
                <VideoComponent />
                <VideoComponent />
                <VideoComponent />
                <VideoComponent />
                <VideoComponent />
                <VideoComponent />
                <VideoComponent />
            </ContainerVideos>
        </Container>
    )
}

export default Home;