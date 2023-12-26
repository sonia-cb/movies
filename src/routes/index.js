// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import routesConfig from './routesConfig';

const Routing = () => {
  return (
    <Router>
      <Routes>
        {routesConfig.map((route) => (
          <Route
            key={route.id} // Use a unique identifier from your data
            path={route.path}
            element={<route.component />} // Use 'element' instead of 'component' for React Router v6
          />
        ))}
      </Routes>
    </Router>
  );
};

export default Routing;
