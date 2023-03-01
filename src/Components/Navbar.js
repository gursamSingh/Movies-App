import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
        <div style={{display:'flex',backgroundColor:'whitesmoke',padding:'1rem',alignItems:'center'}}>
            <h1>Movies App</h1>
            <h1 style={{margin:'1rem'}}>Favourites</h1>
        </div>
    )
  }
}
