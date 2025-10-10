import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async' 
import App from './App.jsx'
import Home from './Pages/Home.jsx'
import About from './Pages/Aboutus.jsx'
import Gallery from './Pages/Gallery.jsx'
import Contact from './Pages/Contact.jsx'
import Projects from './Pages/Projects.jsx'
import Services from './Pages/Services.jsx'
import Testimonals from './Pages/Testimonals.jsx'
import BookingForm from './Pages/BookingForm.jsx'

const router = createBrowserRouter([
  { path: '/', element: <App />, children: [
    { index: true, element: <Home/>, handle: { title: "Home" } },
    { path: 'about', element: <About/>, handle: { title: "About Us" } },
    { path: 'projects', element: <Projects/>, handle: { title: "Projects" } },
    { path: 'contact', element: <Contact/>, handle: { title: "Contact Us" } },
    { path: 'services', element: <Services/>, handle: { title: "Services" } },
    { path: 'gallery', element: <Gallery/>, handle: { title: "Gallery" } },
    { path: 'testimonals', element: <Testimonals/>, handle: {title:"Testimonals"}},
    { path: 'booking', element: <BookingForm/>, handle: {title:"Booking Form"}}
  ]}
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
  <RouterProvider router={router}/>
  </HelmetProvider>
  </StrictMode>,
)