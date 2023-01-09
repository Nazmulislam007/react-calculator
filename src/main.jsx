import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CalculatorContext from './context/CalculatorContext';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CalculatorContext>
            <App />
        </CalculatorContext>
    </React.StrictMode>
);
