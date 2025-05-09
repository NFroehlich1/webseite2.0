import React from 'react';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import './App.css';
import Layout from '../Layout';
import Home from '../Home';
import Students from '../Students';
import Companies from '../Companies/FinalUnternehmen';
import About from '../About';
import Contact from '../Contact';
import Imprint from '../Imprint/Imprint';
import Privacy from '../Privacy/Privacy';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="students" element={<Students/>}/>
            <Route path="companies" element={<Companies/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="contact" element={<Contact/>}/>
            <Route path="imprint" element={<Imprint/>}/>
            <Route path="privacy" element={<Privacy/>}/>
        </Route>
    )
)

function App() {
    return <RouterProvider router={router}/>;
}

export default App;
