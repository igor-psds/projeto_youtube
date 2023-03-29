import { useContext } from 'react';
import { ChannelImage, Container, ImageBanner, TextCard, TextContainer, Title, TitleContainer } from "./styles";
import { UserContext } from "../../contexts/userContext";

function VideoComponent({ video }: any){

    const { user } = useContext(UserContext);

    return (
        <Container>
            <ImageBanner src={video.image} />
            <TitleContainer>
                <ChannelImage>
                    {user.nome?.charAt(0)}
                </ChannelImage>
                <TextContainer>
                    <Title>{video.title}</Title>
                    <TextCard>{video.channel}</TextCard>
                    <TextCard>{video.views} visualizações - há {video.time}</TextCard>
                </TextContainer>
            </TitleContainer>
        </Container>
    )
}

export default VideoComponent;