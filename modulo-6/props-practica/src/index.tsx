
import ReactDOM from 'react-dom/client';
import { Contact, Home, AddUser, DetailUser, ListUsers } from "./pages";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import App from './App';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<App />);

 