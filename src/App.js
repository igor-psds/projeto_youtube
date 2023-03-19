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

function App() {
  const [openMenu, setOpenMenu] = useState(true)

  return (
    <UserStorage>  
      <BrowserRouter>
        <div className="App">
          <GlobalMenuContext.Provider value={{openMenu, setOpenMenu}}>
            <Header openMenu={openMenu} setOpenMenu={setOpenMenu} />
            <div style={{ width: '100%', display: 'flex' }}>
              <Menu openMenu={openMenu} />
              <RoutesContainer openMenu={openMenu}>
                <Routes>
                  <Route path='/' element={<Home openMenu={openMenu} />} />
                  <Route path='/library' element={<Library />} />
                  <Route path='/history' element={<History />} />
                  <Route path='/login' element={<Login />} />
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
