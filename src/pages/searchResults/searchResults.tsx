import { useContext, useEffect, useState } from 'react';
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
import { useSearchContext } from '../../contexts/searchContext';
import axios from 'axios';
import moment from 'moment';

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

    const { videosS } = useContext(UserContext);

    interface Videos {
        id: {
            videoId: string;
        }
        snippet: {
            title: string;
            thumbnails: {
                high: {
                    url: string
                }
            }
            channelTitle: string;
            publishedAt: string;
            description: string;
        }
    }

    const {search} = useSearchContext();

    useEffect(() => {
        if (search !== '') {
            load()
        }
    }, [search])

    const [videos, setVideosApi] = useState<Videos[]>([]);
    const KEY_API = 'AIzaSyA04r8wgiuig4kn7_OFhhaRkaU1xsQqRW0'
    const urlApi = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${search}&maxResults=48&&key=${KEY_API}`
    async function load() {
        if (search !== '') {
            try {
                const resposta = await axios.get(urlApi)
                setVideosApi(resposta.data.items)
            }
            catch(erro){
                console.log(erro)
            }
        }
    }

    function getPublishedTime(publishedAt: string) {
        const now = moment();
        const publishedTime = moment(publishedAt);
        const diffDays = now.diff(publishedTime, 'days');

        if (diffDays <= 0) {
            return 'hoje';
        } else if (diffDays === 1) {
            return 'há 1 dia';
        } else if (diffDays <= 7) {
            return `há ${diffDays} dias`;
        } else if (diffDays <= 30) {
            const diffWeeks = Math.floor(diffDays / 7);
            if (diffWeeks === 1) {
                return 'há 1 semana';
            } else {
                return `há ${diffWeeks} semanas`;
            }
        } else if (diffDays <= 365) {
            const diffMonths = Math.floor(diffDays / 30);
            if (diffMonths === 1) {
                return 'há 1 mês';
            } else {
                return `há ${diffMonths} meses`;
            }
        } else {
            const diffYears = Math.floor(diffDays / 365);
            if (diffYears === 1) {
                return 'há 1 ano';
            } else {
                return `há ${diffYears} anos`;
            }
        }
    }

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
                {videos.map((video, index) => (
                    <VideosSearch 
                        title={video.snippet.title}
                        thumbnail={video.snippet.thumbnails.high?.url}
                        channelImage={video.snippet.channelTitle.charAt(0).toLocaleUpperCase()}
                        channelName={video.snippet.channelTitle}
                        details={`10 mi visualizações - ${getPublishedTime(video.snippet.publishedAt)}`}
                        description={video.snippet.description}
                        key={index}
                    />
                ))}
            </ContainerVideos>
        </Container>
    )
}

export default SearchResults;