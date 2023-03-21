import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
        <div style={{display:'flex',backgroundColor:'whitesmoke',padding:'1rem',alignItems:'center'}}>
            
            <Link to="/" style={{textDecoration:'none',color:'black'}}><h3>Movies App</h3></Link>


            <Link to="/favourites" style={{textDecoration:'none',color:'black'}}><h3 style={{marginLeft:'0.5rem'}}>Favourites</h3></Link>
        </div>
    )
  }
}
