import { ChannelImage, Container, ImageBanner, TextCard, TextContainer, Title, TitleContainer } from "./styles";

function VideoComponent(){

    return (
        <Container>
            <ImageBanner src="https://i.ytimg.com/vi/N73Ue9HXQuY/hq720.jpg?sqp=-oaymwExCNAFEJQDSFryq4qpAyMIARUAAIhCGAHwAQH4AdQGgALgA4oCDAgAEAEYOyBZKGUwDw==&rs=AOn4CLC0iQDZ1nEy3AgsanyJJ5vpcWPnmw" />
            <TitleContainer>
                <ChannelImage>
                    IP
                </ChannelImage>
                <TextContainer>
                    <Title>Low Roar - "Everything To Lose"</Title>
                    <TextCard>LOWROARMUSIC</TextCard>
                    <TextCard>148 mil visualizações - há 1 ano</TextCard>
                </TextContainer>
            </TitleContainer>
        </Container>
    )
}

export default VideoComponent;