import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/header/header";
import Menu from "./components/menu/menu";
import Home from './pages/home/home';
import Library from './pages/library/library';
import History from './pages/history/history';
import { RoutesContainer } from './components/routesContainer/routesContainer';
import { GlobalMenuContext } from './contexts/menuContext';
import { UserStorage } from './contexts/userContext';
import Login from './pages/login/login';
import SignUp from './pages/signup/sigup';
import VideoUpload from './pages/videoUpload/videoUpload';
import SearchResults from './pages/searchResults/searchResults';

function App() {
  const [openMenu, setOpenMenu] = useState(true);

  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <UserStorage>  
      <BrowserRouter>
        <div className="App">
          <GlobalMenuContext.Provider value={{openMenu, setOpenMenu}}>
            <Header openMenu={openMenu} setOpenMenu={setOpenMenu} openDropdown={openDropdown} setOpenDropdown={setOpenDropdown} />
            <div style={{ width: '100%', display: 'flex' }} onClick={() => setOpenDropdown(false)}>
              <Menu openMenu={openMenu} openDropdown={openDropdown} setOpenDropdown={setOpenDropdown} />
              <RoutesContainer openMenu={openMenu}>
                <Routes>
                  <Route path='/' element={<Home openMenu={openMenu} />} />
                  <Route path='/library' element={<Library />} />
                  <Route path='/history' element={<History />} />
                  <Route path='/login' element={<Login />} />
                  <Route path='/signup' element={<SignUp />} />
                  <Route path='/upload' element={<VideoUpload />} />
                  <Route path='/search-results' element={<SearchResults />} />
                </Routes>
              </RoutesContainer>
            </div>
          </GlobalMenuContext.Provider>
        </div>
      </BrowserRouter>
    </UserStorage>
  );
}

export default App;
