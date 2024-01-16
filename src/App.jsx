import React from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Chat from './page/chat/Chat';

import './App.css';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Chat />
    </div>
  );
}

export default App;
