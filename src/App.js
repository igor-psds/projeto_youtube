import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/header/header";
import Menu from "./components/menu/menu";
import Home from './pages/home/home';
import Library from './pages/library/library';
import History from './pages/history/history';
import { RoutesContainer } from './components/routesContainer/routesContainer';
import { GlobalMenuContext } from './contexts/menuContext';

function App() {
  const [openMenu, setOpenMenu] = useState(true)

  return (
    <BrowserRouter>
      <div className="App">
        <GlobalMenuContext.Provider value={{openMenu, setOpenMenu}}>
          <Header openMenu={openMenu} setOpenMenu={setOpenMenu} />
          <div style={{ width: '100%', display: 'flex' }}>
            <Menu openMenu={openMenu} />
            <RoutesContainer>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/library' element={<Library />} />
                <Route path='/history' element={<History />} />
              </Routes>
            </RoutesContainer>
          </div>
        </GlobalMenuContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
