import React from 'react'
import ReactDOM from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css" 
import 'bootstrap-icons/font/bootstrap-icons.css'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA6B8o0AhVwuF2i4t3FQSwHVtrWgKOtPAY",
  authDomain: "proyecto-react-coder-d511d.firebaseapp.com",
  projectId: "proyecto-react-coder-d511d",
  storageBucket: "proyecto-react-coder-d511d.appspot.com",
  messagingSenderId: "910116339056",
  appId: "1:910116339056:web:b0d2d3574c09706550e3b5",
  measurementId: "G-9X5KPXJ2YE"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)
