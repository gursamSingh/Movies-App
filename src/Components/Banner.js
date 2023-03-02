import {movies} from "./getMovies"

import React, { Component } from 'react'

export default class Banner extends Component {
  render() {
    // console.log(movies)
    let movie = movies[0]
    // let movie = ""
    return (
        <>
        {
            // here we have used if the movies object is empty show a loading component else show the movie cars (done using terniary operator)
            movie == ''? 
            <div className="d-flex justify-content-center" style={{padding:'1rem'}}>
                <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
                </div>
            </div>:         

            <div className="card banner-card">
                {/* <img className="card-img-top" src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt={movie.title}/> */}

                <img className="card-img-top banner-img" src={`https://i0.wp.com/www.theterminatorfans.com/wp-content/uploads/2021/11/How-Many-Terminator-Movies-Are-There.jpg?resize=1920%2C1080&ssl=1`} alt={movie.title}/>
                <h1 className="card-title banner-title">{movie.title}</h1>
                <p className="card-text banner-text">{movie.overview}</p>
                {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
            </div>
        }
        </>
    )
  }
}
