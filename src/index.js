import React from 'react';
import ReactDOM from 'react-dom/client';
import MultilineTextFields from './components/input';
import reportWebVitals from './reportWebVitals';
import Background from './background.webp';
import NavBar from './components/appbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div style={{ backgroundImage: `url(${Background})` }}>
    <NavBar/>
    <React.StrictMode>
      <MultilineTextFields />
    </React.StrictMode>
  </div>
);

reportWebVitals();
