import Footer from './components/layout/Footer'
import heroImage from './assets/pexels-jonathanborba-29289483.jpg'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import './App.css'

function Home() {
  return (
    <main className="home-page">
     <section
  className="hero-section"
  style={{ backgroundImage: `url(${heroImage})` }}
>
  <div className="hero-content">
    <div className="eyebrow">
      MOTORSPORT INTELLIGENCE / 01
    </div>

    <h1 className="hero-title">
      DATA DRIVES
      <br />
      <span>THE RACE.</span>
    </h1>

    <p className="hero-description">
      Explore racing history, uncover performance insights
      and discover the science behind motorsport.
    </p>

    <div className="hero-actions">
      <Link to="/analytics" className="primary-button">
        Explore Analytics <ArrowRight size={18} />
      </Link>

      <Link to="/tech-lab" className="secondary-button">
        Enter Tech Lab
      </Link>
    </div>
  </div>
</section>

      <section className="features-section">
        <div className="section-heading">
          <div>
            <div className="eyebrow">EXPLORE RACELAB</div>
            <h2>Inside the world of racing.</h2>
          </div>
        </div>

        <div className="dashboard-grid">
          <Link to="/drivers" className="stat-card">
            <span>01 / DRIVERS</span>
            <h2>Driver Profiles</h2>
            <p>Explore driver statistics, careers and performance.</p>
          </Link>

          <Link to="/analytics" className="stat-card">
            <span>02 / ANALYTICS</span>
            <h2>Data & Insights</h2>
            <p>Discover trends, compare performance and analyze data.</p>
          </Link>

          <Link to="/tech-lab" className="stat-card">
            <span>03 / ENGINEERING</span>
            <h2>Tech Lab</h2>
            <p>Discover racing technology and car engineering.</p>
          </Link>
        </div>
      </section>
    </main>
  )
}

function Placeholder({ title }) {
  return (
    <main className="main-content">
      <div className="eyebrow">RACELAB / EXPLORE</div>
      <h1 className="hero-title">{title}</h1>
      <p className="hero-description">
        This section is under development.
      </p>
    </main>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/drivers" element={<Placeholder title="Drivers" />} />
          <Route path="/teams" element={<Placeholder title="Teams" />} />
          <Route path="/race-center" element={<Placeholder title="Race Center" />} />
          <Route path="/history" element={<Placeholder title="History" />} />
          <Route path="/analytics" element={<Placeholder title="Analytics Lab" />} />
          <Route path="/prediction-lab" element={<Placeholder title="Prediction Lab" />} />
          <Route path="/circuits" element={<Placeholder title="Circuits" />} />
          <Route path="/guide" element={<Placeholder title="F1 Guide" />} />
          <Route path="/tech-lab" element={<Placeholder title="Tech Lab" />} />
          <Route path="*" element={<Placeholder title="404 — Page Not Found" />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
