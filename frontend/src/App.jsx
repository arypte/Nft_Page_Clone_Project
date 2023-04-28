import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/main';
import Detail from './pages/detail';
import Header from './components/Header';
import { useState } from 'react';
import RealMain from './pages/realMain';
import Idxpage from './pages/idxpage';

function App() {
  const [account, setAccount] = useState('');

  // '' = NULL

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-950 text-white">
        <Header account={account} setAccount={setAccount} />
        <Routes>
          <Route path="/" element={<RealMain account={account} />} />
          <Route path="/collection" element={<Idxpage />} />
          <Route
            path="/collection/:col_num"
            element={<Main account={account} />}
          />
          <Route path="/collection/:col_num/:tokenId" element={<Detail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
