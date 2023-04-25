import { useContext } from 'react';
import VideosSearch from "../../components/videosSearch/videosSearch";
import FilterIcon from '../../assets/icons/icon_filter.png';
import { 
    Container,
    ContainerVideos,
    Divisor,
    FilterContainer,
    FilterButton,
    ButtonIcon
} from "./styles";
import { UserContext } from "../../contexts/userContext";

const video = [
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

function SearchResults(){

    const { videos } = useContext(UserContext);

    return (
        <Container>
            <FilterContainer>
                <FilterButton>
                    <ButtonIcon alt='' src={FilterIcon} />
                    <span>Filtros</span>
                </FilterButton>
            </FilterContainer>
            <Divisor margin='0px 0px 10px 0px' />
            <ContainerVideos>
                {videos.map((videos: any) => (
                    <VideosSearch video={videos} />
                ))}
            </ContainerVideos>
        </Container>
    )
}

export default SearchResults;