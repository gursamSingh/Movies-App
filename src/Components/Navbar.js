import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
        <div style={{display:'flex',backgroundColor:'whitesmoke',padding:'1rem',alignItems:'center'}}>
            <h3>Movies App</h3>
            <h3 style={{marginLeft:'0.5rem'}}>Favourites</h3>
        </div>
    )
  }
}
