import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <section className="cta">
        <p className="cta-text"> 
            Contact me? <br className="sm:block hidden"/> Let's Contact 
        </p>
        <Link to="/contact" className="btn"> Contact </Link>
    </section>
  )
}

export default CTA