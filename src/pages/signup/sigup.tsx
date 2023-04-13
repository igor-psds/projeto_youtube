import { useNavigate } from "react-router-dom";
import { useState, useContext } from 'react';
import { UserContext } from '../../contexts/userContext';
import { 
    Container,
    DivSignUpContainer,
    SignUpContainer,
    InputsContainer,
    SignUpTexts,
    Fieldsets,
    Inputs,
    ButtonsContainer,
    Button,
    LoginButton,
    ImageContainer
} from './styles';
import Logo from '../../assets/yt-logo_yt_project.png';

function SignUp(){

    const { signUp } = useContext(UserContext);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    return (
        <Container>
            <DivSignUpContainer>
                <SignUpContainer>
                    <InputsContainer>
                        <SignUpTexts>
                            <h3>Criar a sua Conta do YouTube</h3>
                            <span>Prosseguir no YouTube</span>
                        </SignUpTexts>
                        <Fieldsets>
                            <Inputs placeholder="Nome" type='name' value={name} onChange={(e) => setName(e.target.value)} />
                        </Fieldsets>
                        <Fieldsets>
                            <Inputs placeholder="Seu endereço de e-mail" type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                        </Fieldsets>
                        <Fieldsets>
                            <Inputs placeholder="Senha" type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                        </Fieldsets>
                        <ButtonsContainer>
                            <LoginButton onClick={() => navigate('/login')}>Faça login em vez disso</LoginButton>
                            <div onClick={() => alert('Usuário criado com sucesso')} >
                                <Button onClick={() => signUp(name, email, password)} > Criar conta</Button>
                            </div>
                        </ButtonsContainer>
                    </InputsContainer>
                    <ImageContainer>
                        <img style={{ width: '100%', height: 'auto' }} alt='' src={Logo} />
                    </ImageContainer>
                </SignUpContainer>
            </DivSignUpContainer>
        </Container>
    )
}

export default SignUp;