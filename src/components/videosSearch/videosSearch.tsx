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

    const { user } = useContext(UserContext);

    return (
        <Container>
            <ImageBanner src={video.image} />
            <TitleContainer>
                <TextContainer>
                    <Title>{video.title}</Title>
                    <TextCard>{video.views} visualizações - há {video.time}</TextCard>
                </TextContainer>
                <ChannelText>
                    <ChannelImage>
                        {user.nome?.charAt(0)}
                    </ChannelImage>
                    <TextCard>{video.channel}</TextCard>
                </ChannelText>
                <div style={{marginTop: '10px'}}>
                    <TextCard>Low Roar is: Ryan Karazija, Mike Lindsay Andrew Scheps Produced by Low Roar Additional musicians: Emma and Richard ...</TextCard>
                </div>
            </TitleContainer>
        </Container>
    )
}

export default VideosSearch;