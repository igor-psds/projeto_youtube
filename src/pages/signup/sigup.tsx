import { useNavigate } from "react-router-dom";
import { useState, useContext, useRef, useEffect } from 'react';
import { UserContext } from '../../contexts/userContext';
import { 
    Container,
    DivSignUpContainer,
    SignUpContainer,
    InputsContainer,
    SignUpTexts,
    Fieldsets,
    Inputs,
    InvalidMessage,
    FieldsetPassword,
    InputPassword,
    CheckBoxContainer,
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
    const [passwordCompare, setPasswordCompare] = useState('');
    //
    const [validName, setValidName] = useState(true);
    const [validEmail, setValidEmail] = useState(true);
    const [validEmailFormat, setValidEmailFormat] = useState(true);
    const [validPassword, setValidPassword] = useState(true);
    const [samePassword, setSamePassword] = useState(true);

    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const passwordCompareRef = useRef<HTMLInputElement>(null);

    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        if (nameRef.current !== null) {
            nameRef.current.focus();
        }
    }, [])

    function handleShowPassword(){
        setShowPassword(!showPassword);
    }

    function criarConta(){
        if (name.trim() !== '') {
            setValidName(true);
        }
        if (email.trim() !== '') {
            setValidEmail(true)
        }
        if (password.trim() !== '' && passwordCompare.trim() !== '') {
            setValidPassword(true);
        }
        if (name.trim() === '' && email.trim() === '' && password.trim() === '') {
            setValidName(false);
            setValidEmail(false);
            setValidPassword(false);
            if (nameRef.current) {
                nameRef.current.focus();
            }
        } else if (name.trim() === '') {
            setValidName(false);
            if (nameRef.current) {
                nameRef.current.focus();
            }
        } else if (email.trim() === '') {
            setValidEmail(false);
            setValidEmailFormat(true);
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
        } else if (passwordCompare.trim() === '') {
            setValidPassword(false);
            if (passwordCompareRef.current) {
                passwordCompareRef.current.focus();
            }
        } else if (password !== passwordCompare) {
            setValidPassword(false);
            setSamePassword(false);
            if (passwordCompareRef.current) {
                passwordCompareRef.current.focus();
            }
        } else {
            signUp(name, email, password);
        }
    }

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
                            <div>
                                <Inputs
                                    valid={validName}
                                    ref={nameRef}
                                    placeholder="Nome"
                                    type='name'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <InvalidMessage valid={validName}>Digite um nome</InvalidMessage>
                            </div>
                        </Fieldsets>
                        <Fieldsets>
                            <div>
                                <Inputs
                                    valid={validEmail}
                                    ref={emailRef}
                                    placeholder="Seu endereço de e-mail"
                                    type='email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <InvalidMessage valid={validEmail}>
                                    {
                                        validEmailFormat?
                                        'Digite seu email'
                                        :
                                        'Email inválido'
                                    }
                                </InvalidMessage>
                            </div>
                        </Fieldsets>
                        <FieldsetPassword>
                            <div>
                                <InputPassword
                                    valid={validPassword}
                                    ref={passwordRef}
                                    placeholder="Senha"
                                    type={showPassword? 'text' : 'password'}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    onKeyDown={(e) => {
                                        if (e.key === " ") {
                                            e.preventDefault();
                                        }
                                        if (e.key === 'Enter') {
                                            criarConta();
                                        }
                                    }}
                                />
                                <InvalidMessage valid={validPassword}>
                                    {samePassword?
                                        'Digite uma senha'
                                        :
                                        'Verifique se as senhas estão iguais'
                                    }
                                </InvalidMessage>
                                <CheckBoxContainer>
                                    <input type='checkbox' id='show-password' checked={showPassword} onChange={handleShowPassword}/>
                                    <label htmlFor='show-password'>Mostrar senha</label>
                                </CheckBoxContainer>
                            </div>
                            <div>
                                <InputPassword
                                    valid={validPassword}
                                    ref={passwordCompareRef}
                                    placeholder="Comfirme sua senha"
                                    type={showPassword? 'text' : 'password'}
                                    value={passwordCompare}
                                    onChange={(e) => setPasswordCompare(e.target.value)}
                                    onKeyDown={(e) => {
                                        if (e.key === " ") {
                                            e.preventDefault();
                                        }
                                        if (e.key === 'Enter') {
                                            criarConta();
                                        }
                                    }}
                                />
                                <InvalidMessage valid={validPassword}>
                                    {samePassword?
                                        'Digite a mesma senha'
                                        :
                                        'Verifique se as senhas estão iguais'
                                    }
                                </InvalidMessage>
                            </div>
                        </FieldsetPassword>
                        <ButtonsContainer>
                            <LoginButton onClick={() => navigate('/login')}>Faça login em vez disso</LoginButton>
                            <div>
                                <Button onClick={() => criarConta()} > Criar conta</Button>
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