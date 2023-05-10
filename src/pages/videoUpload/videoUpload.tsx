import { useContext, useState } from 'react';
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

    const { user, createVideo } = useContext(UserContext);

    const user_id = user.id;
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    function eviarVideo(){
        alert('Video criado com sucesso');
        createVideo(title, description, user.id);
    }

    return (
        <Container>
            <UploadContainer>
                <UploadTitle>
                    <h2>Enviar Video</h2>
                </UploadTitle>
                <VideoInputs>
                    <Fieldsets>
                        <TextAreaTitle placeholder="Título (obrigatório)" maxLength={50} value={title} onChange={(e) => setTitle(e.target.value)} />
                    </Fieldsets>
                    <Fieldsets>
                        <TextAreaDescription placeholder="Descrição" maxLength={300} value={description} onChange={(e) => setDescription(e.target.value)} />
                    </Fieldsets>
                </VideoInputs>
                <ButtonsContainer>
                    <Button onClick={() => navigate('/')}>Cancelar</Button>
                    <Button onClick={() => eviarVideo()} >Enviar</Button>
                </ButtonsContainer>
            </UploadContainer>
        </Container>
    )
}

export default VideoUpload;