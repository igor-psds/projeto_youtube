import { Container, ImageBanner, TextCard, TextContainer, Title, TitleContainer } from "./styles";

function ShortsComponent(){

    return (
        <Container>
            <ImageBanner src="https://i.ytimg.com/vi/LIFqN84Mjsw/hq720_2.jpg?sqp=-oaymwEkCJUDENAFSFryq4qpAxYIARUAAAAAJQAAyEI9AICiQ3gB0AEB&rs=AOn4CLDKzD835_YxpYn6tl6XrRh8CFKKCg" />
            <TitleContainer>
                <TextContainer>
                    <Title>My Dog is Smarter than Husky and...</Title>
                    <TextCard>73 mi de visualizações</TextCard>
                </TextContainer>
            </TitleContainer>
        </Container>
    )
}

export default ShortsComponent;