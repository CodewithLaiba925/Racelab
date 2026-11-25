
import { Link } from 'react-router-dom'
import { Activity } from 'lucide-react'

const exploreLinks = [
  ['Drivers', '/drivers'],
  ['Teams', '/teams'],
  ['Race Center', '/race-center'],
  ['Circuits', '/circuits'],
]

const discoverLinks = [
  ['Analytics', '/analytics'],
  ['Prediction Lab', '/prediction-lab'],
  ['F1 Guide', '/guide'],
  ['Tech Lab', '/tech-lab'],
]

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <Link to="/" className="brand">
            <Activity size={25} />
            <span>
              RACE<span className="brand-accent">LAB</span>
            </span>
          </Link>

          <p>
            Explore racing history, uncover performance insights
            and discover the science behind motorsport.
          </p>
        </div>

        <div className="footer-column">
          <h3>EXPLORE</h3>
          {exploreLinks.map(([label, path]) => (
            <Link key={path} to={path}>{label}</Link>
          ))}
        </div>

        <div className="footer-column">
          <h3>DISCOVER</h3>
          {discoverLinks.map(([label, path]) => (
            <Link key={path} to={path}>{label}</Link>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 RaceLab. All rights reserved.</span>
        <span>BUILT FOR RACING ENTHUSIASTS.</span>
      </div>
    </footer>
  )
}

export default Footer
