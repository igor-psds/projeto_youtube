import { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";
import { 
    Container,
    UploadContainer,
    UploadTitle,
    VideoInputs,
    Fieldsets,
    TextAreaTitle,
    TextAreaDescription,
    ButtonsContainer,
    Button
} from './styles';

function VideoUpload(){

    const navigate = useNavigate();

    const { user } = useContext(UserContext);

    const user_id = user.id;

    return (
        <Container>
            <UploadContainer>
                <UploadTitle>
                    <h2>Enviar Video</h2>
                </UploadTitle>
                <VideoInputs>
                    <Fieldsets>
                        <TextAreaTitle placeholder="Título (obrigatório)" maxLength={50} />
                    </Fieldsets>
                    <Fieldsets>
                        <TextAreaDescription placeholder="Descrição" maxLength={300} />
                    </Fieldsets>
                </VideoInputs>
                <ButtonsContainer>
                    <Button onClick={() => navigate('/')}>Cancelar</Button>
                    <Button>Enviar</Button>
                </ButtonsContainer>
            </UploadContainer>
        </Container>
    )
}

export default VideoUpload;