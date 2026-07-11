import React from 'react'
import { Link } from 'react-router-dom'

const NavigationBar = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container-fluid">
    <Link className="navbar-brand" to="#">
  🎓 Placement-APP
</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <Link class="nav-link active" aria-current="page" to="/">Add Registration</Link>
        <Link class="nav-link" to="/search">Search Registration</Link>
        <Link class="nav-link" to="/delete">Delete Registration</Link>
        <Link class="nav-link" to="/view">View Registration</Link>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default NavigationBar