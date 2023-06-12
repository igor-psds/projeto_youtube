import { useState, useContext, useRef, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { UserContext } from '../../contexts/userContext';
import { 
    Container,
    DivLoginContainer,
    LoginContainer,
    LoginTexts,
    Fieldsets,
    Inputs,
    InvalidMessage,
    ForgotSpan,
    CheckBoxContainer,
    Button,
    SignUpContainer,
    SignUpButton
 } from './styles';

function Login(){
    const { handleLogin } = useContext(UserContext)

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const [validEmail, setValidEmail] = useState(true);
    const [validEmailFormat, setValidEmailFormat] = useState(true);
    const [validPassword, setValidPassword] = useState(true);
    
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const [showPassword, setShowPassword] = useState(false);

    function handleShowPassword(){
        setShowPassword(!showPassword);
    }

    useEffect(() => {
        if (emailRef.current !== null) {
            emailRef.current.focus();
        }
    }, [])

    function login(){
        if (email.trim() !== '') {
            setValidEmail(true);
        }
        if (password.trim() !== '') {
            setValidPassword(true);
        }
        if (email.trim() === '' && password.trim() ==='') {
            setValidEmail(false);
            setValidPassword(false);
            if (emailRef.current) {
                emailRef.current.focus();
            }
        } else if (email.trim() === '') {
            setValidEmail(false);
            setValidEmailFormat(true)
            if (emailRef.current) {
                emailRef.current.focus();
            }
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setValidEmailFormat(false);
            setValidEmail(false);
            if (emailRef.current) {
                emailRef.current.focus();
            }
        } else if (password.trim() === '') {
            setValidPassword(false);
            if (passwordRef.current) {
                passwordRef.current.focus();
            }
        } else {
            handleLogin(email, password);
        }
    }

    return (
        <Container>
            <DivLoginContainer>
                <LoginContainer>
                    <LoginTexts>
                        <h3>Fazer Login</h3>
                        <span>Prosseguir no YouTube</span>
                    </LoginTexts>
                    <Fieldsets>
                        <Inputs
                            placeholder="Email"
                            type='email'
                            value={email}
                            ref={emailRef}
                            valid={validEmail}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <InvalidMessage valid={validEmail}>
                            {validEmailFormat?
                                'Digite seu email'
                                :
                                'Email inválido'
                            }
                        </InvalidMessage>
                        <ForgotSpan>Esqueceu seu e-mail?</ForgotSpan>
                    </Fieldsets>
                    <Fieldsets>
                        <Inputs
                            placeholder="Senha"
                            type={showPassword? 'text' : 'password'}
                            value={password}
                            ref={passwordRef}
                            valid={validPassword}
                            onChange={(e) => setPassword(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === " ") {
                                    e.preventDefault();
                                }
                                if (e.key === 'Enter') {
                                    login()
                                }
                            }}
                        />
                        <InvalidMessage valid={validPassword}>Digite sua senha</InvalidMessage>
                        <CheckBoxContainer>
                            <input type='checkbox' id='show-password' checked={showPassword} onChange={handleShowPassword}/>
                            <label htmlFor='show-password'>Mostrar senha</label>
                        </CheckBoxContainer>
                        <ForgotSpan>Esqueceu sua senha?</ForgotSpan>
                    </Fieldsets>
                    <Button onClick={() => login()} >Login</Button>
                    <SignUpContainer>
                        <span>Não tem uma conta?</span>
                        <SignUpButton onClick={() => navigate('/signup')}>Criar conta</SignUpButton>
                    </SignUpContainer>
                </LoginContainer>
            </DivLoginContainer>
        </Container>
    )
}

export default Login;