import { useEffect, useState } from 'react';
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
    ArrowDown,
} from "./styles";
import axios from 'axios';
import moment from 'moment';
import { useCategoryContext } from '../../contexts/searchCategories';
import CategoryBar from '../../components/navMenuHome/navMenuHome';

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

const video = [
    {
        image: 'https://i.ytimg.com/vi/QNTeq4QdOsQ/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBZ_trcdGx2MV3RHrm5zrY22l9UjQ',
        title: 'Top 20 CSS & Javascript Effects | March 2020',
        channel: 'Online Tutorials',
        views: '1,2 mi',
        time: ' 3 ano'
    },
    {
        image: 'https://i.ytimg.com/vi/68W5nx8yQZU/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCsiMoljKZgYYxDTH4nvzVPOo52uQ',
        title: 'O que é API? REST e RESTFUL? [Mestre das APIs] | Getting Started #14',
        channel: 'DIO',
        views: '15 mil',
        time: ' 1 ano'
    },
    {
        image: 'https://i.ytimg.com/vi/wHFflWvii3M/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCgTsZrVW3GkC0WTI-olUaS_5CwNg',
        title: 'How To Make Drop Down Menu Using HTML And CSS | HTML Website Tutorials',
        channel: 'Easy Tutorials',
        views: '3 mi',
        time: ' 4 anos'
    },
    {
        image: 'https://i.ytimg.com/vi/dqhVmYn4HF0/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLD-Vuy_zkAI_bN90XA6GADplsNwLw',
        title: '[NOVO] 11HRS Imagens + música subaquáticas impressionantes em 4K | Vida marinha rara e colorida',
        channel: 'Nature Relaxation Films',
        views: '3,2 mi',
        time: ' 1 ano'
    },
    {
        image: 'https://i.ytimg.com/vi/32dGIHCzbfE/hqdefault.jpg?sqp=-oaymwE9COADEI4CSFryq4qpAy8IARUAAAAAGAElAADIQj0AgKJDeAHwAQH4Af4JgALQBYoCDAgAEAEYEyA8KH8wDw==&rs=AOn4CLBdmNL0lz-StoPJaSxSpv1h7kdlDw',
        title: 'ＳＴＵＤＹ　ＴＩＭＥ ✍ Lofi Hip Hop | Study Music ✍ Lofi study, Relaxing Music',
        channel: 'Mimi Lofi Chill',
        views: '4,5 mi',
        time: ' 1 ano'
    },
    {
        image: 'https://i.ytimg.com/vi/8cj4btkOttk/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLB79Q5K2TfgsSiv1zrQlAvxk5QzAQ',
        title: 'Unsettling Sky Phenomena - HARD TO EXPLAIN!',
        channel: 'BE AMAZED',
        views: '5,2 mi',
        time: ' 1 ano'
    },
    {
        image: 'https://i.ytimg.com/vi/n_uFzLPYDd8/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLB2ytniZF6juKAwAnD7UzGL34vqbw',
        title: '[Lista de reprodução] Lista de reprodução 24 horas de jazz e sons de chuva para o trabalho ☕🎧',
        channel: 'In The Rain',
        views: '4,2 mi',
        time: ' 4 meses'
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

    interface Videos {
        id: string;
        snippet: {
            title: string;
            thumbnails: {
                high: {
                    url: string;
                }
                maxres: {
                    url: string;
                }
            }
            channelTitle: string;
            publishedAt: string;
        },
        statistics: {
            viewCount: string;
        }
    }

    const [videos, setVideos] = useState<Videos[]>([])
    const {categoryId} = useCategoryContext()
    
   useEffect(() => {
    load()
   }, [categoryId])

    const KEY_API = 'AIzaSyA04r8wgiuig4kn7_OFhhaRkaU1xsQqRW0'

    const urlApi = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&chart=mostPopular&
    hl=pt_BR&maxResults=20&regionCode=us&videoCategoryId=${categoryId}&key=${KEY_API}`

    async function load() {
        try {
            const resposta = await axios.get(urlApi)
            setVideos(resposta.data.items)
        }catch(erro){
            console.log(erro)
        }
    }

    function formatViewCount(viewCount: number): string {
        if (viewCount >= 1000000) {
            return `${(viewCount / 1000000).toFixed(0)} mi de visualizações`;
        }else if (viewCount >= 1000) {
            return `${(viewCount / 1000).toFixed(0)} mil visualizações`;
        }else {
            return`${viewCount} visualizações`;
        }
    }

    function getPublishedTime(publishedAt: string) {
        const now = moment();
        const publishedTime = moment(publishedAt);
        const diffDays = now.diff(publishedTime, 'days');

        if (diffDays <=0) {
            return 'hoje';
        }else if (diffDays === 1) {
            return 'há 1 dia';
        }else if (diffDays <= 7) {
            return `há ${diffDays} dias`;
        }else if (diffDays <= 30) {
            const diffWeeks = Math.floor(diffDays / 7);
            if (diffWeeks === 1) {
                return 'há 1 ssemana';
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
                return 'há 1 ano'
            } else {
                return `há ${diffYears} anos`;
            }
        }
    }

    return (
        <Container>
            <CategoryBar openMenu={openMenu}></CategoryBar>
            <ContainerVideos openMenu={openMenu}>
                {videos.map((video) => (
                    <VideoComponent
                        title={video.snippet.title}
                        thumbnail={video.snippet.thumbnails.maxres?.url || video.snippet.thumbnails.high?.url}
                        channelImage={video.snippet.channelTitle.charAt(0).toUpperCase()}
                        channelName={video.snippet.channelTitle}
                        details={`${formatViewCount(Number(video.statistics.viewCount))} - ${getPublishedTime(video.snippet.publishedAt)}`}
                        key={video.id}
                    />
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