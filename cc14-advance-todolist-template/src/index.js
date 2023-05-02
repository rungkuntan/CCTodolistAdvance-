import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App';
import TodoContextProvider from './contexts/TodoContext'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<TodoContextProvider><App /></TodoContextProvider>);





// root.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>
// );
