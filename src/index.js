import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Header from './components/Header';
import Content from './components/Content';
import ContentTest from './components/ContentTest'
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from './components/Footer';
import newYork from "./img/newYork.webp";
import London from "./img/London.jpg"
import{
  createBrowserRouter,
  RouterProvider,
  Route
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <div><Header />
    <ContentTest />
    <Footer/></div>,
  },
  {
    path: "/Tag1",
    element: <div><h1>This is the router for Travel Tag</h1>
      <a href="/home"><button>Go Back</button></a>
    </div>,
  },
  {
    path: "/home",
    element: <div><Header />
    <ContentTest />
    <Footer/></div>,
  },
  {
    path: "/Tag2",
    element: <div>
      <h1>Welcome to NEW YORK</h1>
      <a href="/home"><button>Go Back</button></a>
      <img src={newYork}></img>
    </div>,
  },
  {
    path: "/Tag3",
    element: <div>
      <h1>Namaste London</h1>
      <a href="/home"><button>Go Back</button></a>
      <img src={London}></img>
    </div>,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);