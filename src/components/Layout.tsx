import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from './AppBar';

const Layout = () => {
  return (
    <div className="bg-[#FBFBFB]" style={{ margin: '0 auto' }}>
      <header>
        <AppBar />
      </header>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
