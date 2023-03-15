import VideoComponent from "../../components/videoComponent/videoComponent";
import { Container,HeaderHome, NavMenu, NavMenuItem, ContainerVideos } from "./styles";

const items = [
    {name: 'Tudo', link: '/'},
    {name: 'Ao vivo', link: '/'},
    {name: 'Música', link: '/'},
    {name: 'Jogos', link: '/'},
    {name: 'Chill out', link: '/'},
    {name: 'Comédia de esquetes', link: '/'},
    {name: 'Piano', link: '/'},
    {name: 'Jogos de ação e aventura', link: '/'},
    {name: 'Filmes de comédia', link: '/'},
    {name: 'Natureza', link: '/'},
    {name: 'Conversas', link: '/'}
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