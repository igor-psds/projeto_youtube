import { useContext } from 'react';
import { 
    ChannelImage, 
    Container, 
    ImageBanner, 
    TextCard, 
    TextContainer, 
    Title, 
    TitleContainer,
    ChannelText
 } from "./styles";
import { UserContext } from "../../contexts/userContext";

function VideosSearch({ video }: any){

    const { user} = useContext(UserContext);

    return (
        <Container>
            <ImageBanner src={'https://i.ytimg.com/vi/jfKfPfyJRdk/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLD2EFON1LtcckqLkCokLTCzk0l5Jw'} />
            <TitleContainer>
                <TextContainer>
                    <Title>{video.title}</Title>
                    <TextCard>1,1 mil visualizações - há 1 ano</TextCard>
                </TextContainer>
                <ChannelText>
                    <ChannelImage>
                        {user.nome?.charAt(0)}
                    </ChannelImage>
                    <TextCard>{user.nome}</TextCard>
                </ChannelText>
                <div style={{marginTop: '10px'}}>
                    <TextCard>{video.description}</TextCard>
                </div>
            </TitleContainer>
        </Container>
    )
}

export default VideosSearch;