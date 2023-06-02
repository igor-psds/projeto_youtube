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

interface Props {
    title: string
    thumbnail: string
    channelImage: string
    channelName: string
    details: string
    description: string
}

function VideosSearch(props: Props){

    const { user} = useContext(UserContext);

    return (
        <Container>
            <ImageBanner style={{backgroundImage: `url(${props.thumbnail})`}} />
            <TitleContainer>
                <TextContainer>
                    <Title>{props.title}</Title>
                    <TextCard>{props.details}</TextCard>
                </TextContainer>
                <ChannelText>
                    <ChannelImage>
                        {props.channelImage}
                    </ChannelImage>
                    <TextCard>{props.channelName}</TextCard>
                </ChannelText>
                <div style={{marginTop: '10px'}}>
                    <TextCard>{props.description}</TextCard>
                </div>
            </TitleContainer>
        </Container>
    )
}

export default VideosSearch;