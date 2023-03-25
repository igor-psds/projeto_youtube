import { useState, useContext } from 'react';
import { UserContext } from '../../contexts/userContext';
import { 
    Container,
    DivLoginContainer,
    LoginContainer,
    LoginTexts,
    Fieldsets,
    Inputs,
    Button,
    SignUpContainer,
    SignUpButton
 } from './styles';

function Login(){
    const { handleLogin } = useContext(UserContext)

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <Container>
            <DivLoginContainer>
                <LoginContainer>
                    <LoginTexts>
                        <h3>Fazer Login</h3>
                        <span>Prosseguir no YouTube</span>
                    </LoginTexts>
                    <Fieldsets>
                        <Inputs placeholder="Email:" type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                        <span>Esqueceu seu e-mail?</span>
                    </Fieldsets>
                    <Fieldsets>
                        <Inputs placeholder="Senha:" type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                        <span>Esqueceu sua senha?</span>
                    </Fieldsets>
                    <Button onClick={() => handleLogin(email, password)} >Login</Button>
                    <SignUpContainer>
                        <span>Não tem uma conta?</span>
                        <SignUpButton>Criar conta</SignUpButton>
                    </SignUpContainer>
                </LoginContainer>
            </DivLoginContainer>
        </Container>
    )
}

export default Login;