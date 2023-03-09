import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/header/header";
import Menu from "./components/menu/menu";
import Home from './pages/home/home';
import Library from './pages/library/library';
import History from './pages/history/history';
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
            <div style={{width: '100%', padding: '50px 70px', boxSizing: 'border-box', display: 'flex', justifyContent: 'center'}} >
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/library' element={<Library />} />
                <Route path='/history' element={<History />} />
              </Routes>
            </div>
          </div>
        </GlobalMenuContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
