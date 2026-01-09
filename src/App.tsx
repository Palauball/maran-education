import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SuccessCases from './components/SuccessCases'
import Teachers from './components/Teachers'
import Map from './components/Map'
import Footer from './components/Footer'
import './App.css'
//hi
function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <SuccessCases />
      <Teachers />
      <Map 
        title="成功案例院校"
        address="Wesleyan University, Middletown, CT 06459, USA"
        embedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2978.5!2d-72.656!3d41.555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e6c8c8c8c8c8c9%3A0x8c8c8c8c8c8c8c8c!2sWesleyan%20University!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
      />
      <Footer />
    </div>
  )
}

export default App
