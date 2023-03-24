import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ContactPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
