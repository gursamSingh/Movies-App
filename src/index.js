import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import Movies from './Components/Movies';
import Favourites from './Components/Favourites';


// export default function Apps() {
//     return (
//       <BrowserRouter>
//         <Routes>
//             <Route path="/" element={[<Navbar/>,<Banner/>]}>
//             <Route path="favourites" element={<Favourites/>} />
//             </Route>
//         </Routes>
//       </BrowserRouter>
//     );
// }



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
