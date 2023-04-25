import { createContext, useEffect, useState} from 'react';
import api from '../api';

export const UserContext = createContext({} as any);

export const UserStorage = ({ children }: any) => {
    const [login, setLogin] = useState(false);
    const [user, setUser] = useState({});
    const [videos, setVideos] = useState({});
    const [token, setToken] = useState(localStorage.getItem('token') as string);

    const getUser = (token: string) => {
        api.get('/user/get-user', {headers:{Authorization: token}}).then(({ data }) => {
            setUser(data.user);
            setLogin(true);
        }).catch((error) => {
            console.log('Usuário não autorizado', error)
        })
    }

    useEffect(() => {
        getUser(token);
    }, [token]);

    const logOut = () => {
        localStorage.removeItem('token');
        setLogin(false);
        setUser({});
    }

    const handleLogin = (email: string, password: string) => {
        api.post('/user/sign-in', {email, password}).then(({ data }) => {
            setLogin(true);
            localStorage.setItem('token', data.token);
            setToken(data.token);
            getUser(data.token);
        }).catch ((error) => {
            console.log('Log-in not possible', error);
        })
    }

    const signUp = (name: string, email: string, password: string) => {
        api.post('/user/sign-up', {name, email, password})
    }

    const createVideo = (title: any, description: any, user_id: any) => {
        api.post('/videos/create-video', {title, description, user_id}, {headers:{Authorization: token}})
    }

    const searchVideo = (search: any) => {
        api.get('/videos/search?search=' + search).then(({ data }) => {
            setVideos(data.videos);
        })
    }

    return (
        <UserContext.Provider value={{
            login,
            user,
            handleLogin,
            logOut,
            signUp,
            createVideo,
            searchVideo,
            videos
        }}>
            {children}
        </UserContext.Provider>
    )
}