import React from 'react';
import logo from './logo.svg';
import './App.css';
import { initializeIcons, Stack } from '@fluentui/react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import SearchPage from './components/SearchPage/SearchPage';
import FormPage from './components/FormPage/FormPage';
initializeIcons();

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Stack grow={1}>
          <Routes>            
            {/* <Route path={`/:system/${SALES_LINK_NAME}?:filterParams`} element={<SalesDistribution />} /> */}
            <Route path="/DietForm" element={<FormPage />} />
            <Route path="/" element={<SearchPage />} />
          </Routes>
        </Stack>
      </HashRouter>
    </div>
  );
}

export default App;
