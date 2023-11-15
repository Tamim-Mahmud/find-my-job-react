import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';

const App = () => {
    return (
        <div className="max-w-7xl mx-auto">
           <Header></Header>
           <Outlet />
        </div>
    );
};

export default App;