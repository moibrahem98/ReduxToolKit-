import React, { useState } from 'react';
import './App.css';
import { CakeView } from './features/cake/CakeView';
import { UserView } from './features/user/UserView';
import { IceCreamView } from './features/icecream/IceCreamView';

function App() {
  return (
    <div className="App">
      <IceCreamView />
      <CakeView />
      <UserView />
    </div>
  );
}

export default App;
